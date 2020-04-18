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
            $this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[8]|max_length[25]|regex_match["^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"]',
				array('regex_match' => 'Password must contain at least eight characters, at least one letter and one number')
			);
            $this->form_validation->set_rules('email', 'Email', 'required|is_unique[users.email]|valid_email',
			        array('is_unique' => 'The email is already registered please enter another email')
			);

			$data['first_name'] = $this->input->post('firstname');
			$data['last_name'] = $this->input->post('lastname');
			$data['contactnumber'] = $this->input->post('contactnumber');
			$data['email'] = $this->input->post('email');
			$data['password'] = $this->users_model->hash($this->input->post('password'));
			$data['country_code'] = trim($this->input->post('country_code'));
			$data['role'] = "Moderator";
			$data['removed'] = 0;

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

	public function edit($id)
	{
		$original = $this->users_model->get($id);
		$email = $this->input->post('email');
		$get_email  = $this->users_model->get_email($email);

		if($original->email == $get_email->email)
		{
			$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		}
		else
		{
			$this->form_validation->set_rules('email', 'Email', 'required|is_unique[users.email]|valid_email',
		        array('is_unique' => 'The email is already registered please enter another email')
			);
		}

		$this->form_validation->set_rules('firstname', 'Firstname', 'required');
        $this->form_validation->set_rules('lastname', 'Lastname', 'required');
        $this->form_validation->set_rules('contactnumber', 'Password Confirmation', 'required');
        
		$value['success'] = 1;
		$value['message'] = "success:updated";

		if ($this->form_validation->run() == FALSE)
        { 
        	  $data = ['errors' => validation_errors() , 'is_error' => 1];
              echo json_encode($data);
        }
        else
        {
        	$data['first_name'] = $this->input->post('firstname');
			$data['last_name'] = $this->input->post('lastname');
			$data['contactnumber'] = $this->input->post('contactnumber');
			$data['email'] = $this->input->post('email');
			$this->users_model->update($id, $data);
			$this->session->set_userdata('name', $data['first_name'] . ' ' .$data['last_name']);
	    	echo json_encode($value);
    	}
	}


	public function change_password($id)
	{
		$this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[8]|max_length[25]|regex_match["^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"]',
			array('regex_match' => 'Password must contain at least eight characters, at least one letter and one number')
		);
		$this->form_validation->set_rules('passconf', 'Password Confirmation', 'trim|required|matches[password]');
       
		$value['success'] = 1;
		$value['message'] = "success:updated";

		if ($this->form_validation->run() == FALSE)
        { 
        	  $data = ['errors' => validation_errors() , 'is_error' => 1];
              echo json_encode($data);
        }
        else
        {
        	$data['password'] = $this->users_model->hash( $this->input->post('password') );
			$this->users_model->update($id, $data);
	    	echo json_encode($value);
    	}
	}

	public function logout() 
	{
		// Check if there is an existing user session
		if($this->session->userdata('isLogged')) 
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
					$this->session->set_userdata('isLogged', TRUE);
					$this->session->set_userdata('userID', $result['id']);
					$this->session->set_userdata('username', $result['username']);
					$this->session->set_userdata('country_code', $result['country_code']);
					$this->session->set_userdata('name', $result['first_name'] . ' ' .$result['last_name']);
			 		$this->session->set_userdata('email', $result['email']);
			 		$this->session->set_userdata('role', $result['role']);
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
