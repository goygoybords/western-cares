<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller 
{
	public function __construct() 
	{
		parent::__construct();
		$this->load->model('users_model');
	}

	public function register()
	{
		if($this->input->is_ajax_request()) 
		{
			$this->form_validation->set_rules('firstname', 'Firstname', 'required');
            $this->form_validation->set_rules('lastname', 'Lastname', 'required');
            $this->form_validation->set_rules('contactnumber', 'Password Confirmation', 'required');
            $this->form_validation->set_rules('password', 'Password', 'required|min_length[6]');
            $this->form_validation->set_rules('email', 'Email', 'required|is_unique[users.email]|valid_email',
			        array('is_unique' => 'The email is already registered please enter another email')
			);

			$data['firstname'] = $this->input->post('firstname');
			$data['lastname'] = $this->input->post('lastname');
			$data['contactnumber'] = $this->input->post('contactnumber');
			$data['email'] = $this->input->post('email');
			$data['password'] = $this->users_model->hash($this->input->post('password'));
			$data['role'] = "User";
			$data['status'] = 0;
			if ($this->form_validation->run() == FALSE)
            { 
            	  $data = ['errors' => validation_errors() , 'is_error' => 1];
                  echo json_encode($data);
            }
            else
            {
				$this->db->insert("users", $data);
		    	echo json_encode("success:registered");
	    	}	
		} 
	}

	public function logout() 
	{
		// Check if there is an existing user session
		if($this->session->userdata('is_logged_in')) 
		{
			$this->session->sess_destroy();
		}

		// The user will be redirected to the login page,
		// whether there exists a user session or not
		redirect('', 'refresh');
	}

	/**
	* This is an AJAX call for attempting a user login.
	* URL => http://<site>/[account]/attempt_login
	*/
	public function attempt_login() 
	{
		// Check if this is an AJAX request
		if($this->input->is_ajax_request()) 
		{
			$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
            $this->form_validation->set_rules('password', 'Password', 'required');
			if ($this->form_validation->run() == FALSE)
            { 
            	  $data = ['errors' => validation_errors() , 'is_error' => 1];
                  echo json_encode($data);
            }
            else
            {
				$email = $this->input->post('email');
				$password = $this->input->post('password');
				$result = $this->users_model->login($email, $password);
				
				$value['success'] = 1;
				// Check if user should be logged in successfully
				if($result) 
				{
					// Set the user session
					$this->session->set_userdata('is_logged_in', TRUE);
					$this->session->set_userdata('session_user_id', $result[Users_table::_USER_ID]);
					$this->session->set_userdata('session_user_email', $result[Users_table::_EMAIL]);
					$this->session->set_userdata('session_user_role', $result[Users_table::_ROLE]);
					$this->session->set_userdata('session_user_firstname', $result[Users_table::_FIRST_NAME]);
					$this->session->set_userdata('session_user_lastname', $result[Users_table::_LAST_NAME]);
				} 
				else 
				{
					$value['success'] = 0;
					$value['error_message'] = 'Invalid username or password!';
				}
				echo json_encode($value);
			}
			
		} 
		else 
		{
			// Redirect to the login page if it is not an AJAX request
			redirect('', 'refresh');
		}
	}



                

              
                    
}
