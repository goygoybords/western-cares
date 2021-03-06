<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller 
{
	public function __construct() 
	{
		parent::__construct();
		$this->load->model('users_model');
		$this->load->model('orders');
	}

	public function register()
	{
		if($this->input->is_ajax_request()) 
		{
			$this->form_validation->set_rules('firstname', 'Firstname', 'required');
            $this->form_validation->set_rules('lastname', 'Lastname', 'required');
            $this->form_validation->set_rules('contactnumber', 'Password Confirmation', 'required');
            $this->form_validation->set_rules('address', 'Address', 'required');
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
			$data['company_name'] = $this->input->post('company_name');
			$data['address'] = $this->input->post('address');
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
        $this->form_validation->set_rules('address', 'Address', 'required');

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
			$data['contactnumber'] = trim($this->input->post('contactnumber'));
			$data['email'] = $this->input->post('email');
			$data['address'] = $this->input->post('address');
			$data['company_name'] = $this->input->post('company_name');
			$data['country_code'] = $this->input->post('country_code');
			$this->users_model->update($id, $data);

			$this->session->set_userdata('name', $data['first_name'] . ' ' .$data['last_name']);
			$this->session->set_userdata('country_code', $this->input->post('country_code') );
			$this->session->set_userdata('email', $this->input->post('email'));
			$this->session->set_userdata('company', $this->input->post('company_name'));
			$this->session->set_userdata('contactnumber', trim($this->input->post('contactnumber')));

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
			 		$this->session->set_userdata('company', $result['company_name']);
			 		$this->session->set_userdata('contactnumber', $result['contactnumber']);
			 		$this->session->set_userdata('address', $result['address']);
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

	public function store_order() 
	{
		if($this->input->is_ajax_request()) 
		{
			$sql = $this->db->query("SELECT transaction_id as id FROM transactions WHERE
			transaction_type = 'Sales' ");
			$count = count($sql->result()) + 1;
			$transactionNumber = "ST-".str_pad($count, 7, "0", STR_PAD_LEFT);

			$salesInfo['transaction_type'] = "Sales";
			$salesInfo['ref_num_1'] = $transactionNumber;
			$salesInfo['transaction_date'] = date('Y-m-d');
			$salesInfo['client_id'] = $this->input->post('user_id');
			$salesInfo["ship_name"] = $this->input->post('ship_name');
			$salesInfo['ship_address'] = $this->input->post('ship_address');
			$salesInfo['ship_email'] = $this->input->post('ship_email');
			$salesInfo['ship_countrycode'] = $this->input->post('ship_countrycode');
			$salesInfo['ship_contact_number'] = $this->input->post('ship_contact_number');
			$salesInfo['total_amount'] = $this->input->post('total_amount');
			$salesInfo['remarks'] = $this->input->post('checkout_remarks');
			$salesInfo['payment_method'] = $this->input->post('payment_method');
			$salesInfo['removed'] = 0;
			$salesInfo['status'] = 'POSTED';
			$salesInfo['reference_number'] = $ref_number = mt_rand(100000,999999); 
			$resultSalesInfo = $this->orders->add($salesInfo);

			if($resultSalesInfo)
			{
				$salesItemsRecord = $this->input->post('order_items');
				if(!empty($salesItemsRecord))
				{
					for ($i = 0; $i < count($salesItemsRecord); $i++) 
					{
						$salesItemsInfo['transaction_id'] = $resultSalesInfo;
						$salesItemsInfo['item_id'] = $salesItemsRecord[$i]['id'];
						$salesItemsInfo['quantity'] = $salesItemsRecord[$i]['qty'];
						$salesItemsInfo['amount'] = $salesItemsRecord[$i]['price'];
						$salesItemsInfo['status'] = "POSTED";
						$salesItemsInfo['removed'] = 0;
						$resultSalesItemsInfo = $this->orders->add_sales_items($salesItemsInfo);
		 			}
	 			}
	 			if($this->session->userdata('name') == null || $this->session->userdata('name') == '')
	 			{
	 				$data['name'] = $this->input->post('ship_name');
	 				$to = $data['email'] = $this->input->post('ship_email');
	 			}
	 			else
	 			{
	 				$data['name'] = $this->session->userdata('name');
	 				$to = $data['email'] = $this->session->userdata('email');
	 			}
	 			$data['ref_number'] = $ref_number; 
	 			$data['sales_items'] = $this->input->post('order_items');
	 			
	 			$this->send_email($to, $data);
	 			echo json_encode("sucess: order-created");
			}
		}
		else 
		{
			// Redirect to the login page if it is not an AJAX request
			redirect('', 'refresh');
		}
	}      
	public function send_email($to, $data)
	{
		// $config['protocol']    = 'smtp';
		// $config['smtp_host']    = 'ssl://smtp.gmail.com';
		// $config['smtp_port']    = '465';
		// $config['smtp_timeout'] = '60';

	 //    $config['smtp_user']    = 'john.flashpark@gmail.com';    //Important
	 //    $config['smtp_pass']    = 'goygoy08';  //Important

	 //    $config['charset']    = 'iso-8859-1'; //iso-8859-1
	 //    $config['newline']    = "\r\n";
	    $config['mailtype'] = 'html'; // or html or text
	    $config['validation'] = TRUE; // bool whether to validate email or not 
	    $config['wordwrap'] = TRUE;

		$this->load->library('email' ,$config);
		$this->email->from('sales@saversmedical.com', 'Savers Medical');
		$this->email->to($to);
	
		$this->email->subject('Your Order is being processed');
		$this->email->message($this->contactLayout($data));
		$this->email->set_mailtype('html');

		$result = $this->email->send();
	} 

	public function contactLayout($data)
	{
		return '<!DOCTYPE html><html>
				<head>
				    <meta charset="utf-8" />
				    <title>THANK YOU</title>
				    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</head>
				<body>
				<div>
					<p style="Margin-top: 0;color: #565656;font:300 15px "Open Sans", Arial, Helvetica, sans-serif; color:#333332;line-height: 25px;Margin-bottom: 25px">Dear '.$data['name'].'!</p>
					<br>
					<p style="Margin-top: 0;color: #565656;font:300 15px "Open Sans", Arial, Helvetica, sans-serif; color:#333332;line-height: 25px;Margin-bottom: 25px">'."Thank you for purchasing our products.
					<br> here is your reference number ".$data['ref_number'].'</p>

					<p style="Margin-top: 0;color: #565656;font:300 15px "Open Sans", Arial, Helvetica, sans-serif; color:#333332;line-height: 25px;Margin-bottom: 25px">
					<p>Regards,</p>
					<p>Savers Medical Team</p>
				</div>
				</body>
				</html>';
	}       
}
