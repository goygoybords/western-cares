<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cms extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->model('users');
		$this->load->model('customers');
		$this->load->model('products');
		$this->load->model('customer_ailment');
		$this->load->model('logs');
		$this->load->model('pages');
		$this->load->model('page_sections');
		$this->load->model('quotations');

	
		//$this->load->library('jSignature_Tools_Base30');
		
		$this->load->helper(array('form', 'url'));
	}

	public function index()	{
		$data = array();
		$data['username'] = $this->session->userdata('username');

		if(!$this->session->userdata('isLogged')) {
			redirect('cms/login', 'refresh');
		}

		redirect('cms/orders', 'refresh');
	}

	public function pages($page = '') {
		$data = array();

		if(!$this->session->userdata('isLogged')) {
			redirect('cms/login', 'refresh');
		}

		$data['username'] = $this->session->userdata('username');
		$page_id = 1;

		switch($page) {
			case "home":
				$page_id = 1;
				break;
			case "profile":
				$page_id = 2;
				break;
			case "services":
				$page_id = 3;
				break;
			case "contact":
				$page_id = 4;
				break;
			default:
			 	if(!isset($page) && empty($page)) {
					redirect('cms/login', 'refresh');
				}
		}

		if(isset($page) && !empty($page)) {
			$data['page_data'] = $this->pages->get_page_data($page_id);
			$page_sections = $this->page_sections->get_page_content($page_id);

			foreach($page_sections as $page_section) {
				$data['page_sections'][$page_section['section_id']] = $page_section['content'];
			}

			$this->load->view('cms/template/' . $page . '-edit', $data);
		} else {
			$this->load->view('cms/pages', $data);
		}
	}

	public function report()
	{
		$data = array();

		if(!$this->session->userdata('isLogged'))
		{
			redirect('cms/login', 'refresh');
		}

		$data['username'] = $this->session->userdata('username');
		$this->load->view('cms/report', $data);

	}

	public function generate_report()
	{
		$this->load->library('excel');

		$this->excel->setActiveSheetIndex(0);
		$this->excel->getActiveSheet()->setTitle('DR');

		$this->excel->getActiveSheet()->getColumnDimension('A')->setWidth(20);
		$this->excel->getActiveSheet()->getColumnDimension('B')->setWidth(15);
		$this->excel->getActiveSheet()->getColumnDimension('C')->setWidth(15);
		$this->excel->getActiveSheet()->getColumnDimension('D')->setWidth(15);
		$this->excel->getActiveSheet()->getColumnDimension('E')->setWidth(20);
		$this->excel->getActiveSheet()->getColumnDimension('F')->setWidth(15);
		$this->excel->getActiveSheet()->getColumnDimension('G')->setWidth(15);
		$this->excel->getActiveSheet()->getColumnDimension('H')->setWidth(15);

		// Report Title
		$this->excel->getActiveSheet()->setCellValue('A2', 'Winked');
		$this->excel->getActiveSheet()->getStyle('A2')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('A2')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->mergeCells('A2:H2');
		$this->excel->getActiveSheet()->getStyle('A2')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$this->excel->getActiveSheet()->setCellValue('A3', 'La Beau Monde Salon, River Gate Bldg,');
		$this->excel->getActiveSheet()->getStyle('A3')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('A3')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->mergeCells('A3:H3');
		$this->excel->getActiveSheet()->getStyle('A3')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$this->excel->getActiveSheet()->setCellValue('A4', 'General Maxilom Ave, Cebu City, 6000 Cebu, Philippines');
		$this->excel->getActiveSheet()->getStyle('A4')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('A4')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->mergeCells('A4:H4');
		$this->excel->getActiveSheet()->getStyle('A4')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$this->excel->getActiveSheet()->setCellValue('A5', 'Sales Report');
		$this->excel->getActiveSheet()->getStyle('A5')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('A5')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->getStyle('A5')->getFont()->setItalic(true);
		$this->excel->getActiveSheet()->getStyle('A5')->getFont()->getColor()->setRGB('FF0000');
		$this->excel->getActiveSheet()->mergeCells('A5:H5');
		$this->excel->getActiveSheet()->getStyle('A45')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$this->excel->getActiveSheet()->setCellValue('A5', 'From '. $_POST['start_date']." to ".$_POST['end_date']);
		$this->excel->getActiveSheet()->getStyle('A5')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('A5')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->getStyle('A5')->getFont()->setItalic(true);
		//$this->excel->getActiveSheet()->getStyle('A4')->getFont()->getColor()->setRGB('FF0000');
		$this->excel->getActiveSheet()->mergeCells('A5:H5');
		$this->excel->getActiveSheet()->getStyle('A5')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		// Header for table
		$this->excel->getActiveSheet()->setCellValue('A7', 'BOOKING DATE');
		$this->excel->getActiveSheet()->getStyle('A7')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('A7')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->getStyle('A7')->getFont()->setItalic(true);
		$this->excel->getActiveSheet()->getStyle('A7')->getAlignment()->setWrapText(true);
		$this->excel->getActiveSheet()->getStyle('A7')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$this->excel->getActiveSheet()->setCellValue('B7', 'CUSTOMER');
		$this->excel->getActiveSheet()->getStyle('B7')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('B7')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->getStyle('B7')->getFont()->setItalic(true);
		$this->excel->getActiveSheet()->getStyle('B7')->getAlignment()->setWrapText(true);
		$this->excel->getActiveSheet()->mergeCells('B7:D7');
		$this->excel->getActiveSheet()->getStyle('B7')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$this->excel->getActiveSheet()->setCellValue('E7', 'REMARKS');
		$this->excel->getActiveSheet()->getStyle('E7')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('E7')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->getStyle('E7')->getFont()->setItalic(true);
		$this->excel->getActiveSheet()->getStyle('E7')->getAlignment()->setWrapText(true);
		$this->excel->getActiveSheet()->mergeCells('E7:F7');
		$this->excel->getActiveSheet()->getStyle('E7')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$this->excel->getActiveSheet()->setCellValue('G7', 'TOTAL (PHP)');
		$this->excel->getActiveSheet()->getStyle('G7')->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('G7')->getFont()->setBold(true);
		$this->excel->getActiveSheet()->getStyle('G7')->getFont()->setItalic(true);
		$this->excel->getActiveSheet()->getStyle('G7')->getAlignment()->setWrapText(true);
		$this->excel->getActiveSheet()->mergeCells('G7:H7');
		$this->excel->getActiveSheet()->getStyle('G7')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		// Get Transaction Items
		$report = $this->booking_model->get_booking_by_date($_POST['start_date'], $_POST['end_date']);

		$j = 8;
		$totalAmount = 0;
		foreach ($report as $row)
		{
			$this->excel->getActiveSheet()->setCellValue('A'.$j, $row['date'] );
			$this->excel->getActiveSheet()->getStyle('A'.$j)->getFont()->setSize(18);
			$this->excel->getActiveSheet()->getStyle('A'.$j)->getAlignment()->setWrapText(true);
			$this->excel->getActiveSheet()->getStyle('A'.$j)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

			$this->excel->getActiveSheet()->setCellValue('B'.$j, $row['client'] );
			$this->excel->getActiveSheet()->getStyle('B'.$j)->getFont()->setSize(18);
			$this->excel->getActiveSheet()->getStyle('B'.$j)->getAlignment()->setWrapText(true);
			$this->excel->getActiveSheet()->mergeCells('B'.$j.':D'.$j);
			$this->excel->getActiveSheet()->getStyle('B'.$j)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

			$this->excel->getActiveSheet()->setCellValue('E'.$j, $row['remarks'] );
			$this->excel->getActiveSheet()->getStyle('E'.$j)->getFont()->setSize(18);
			$this->excel->getActiveSheet()->getStyle('E'.$j)->getAlignment()->setWrapText(true);
			$this->excel->getActiveSheet()->mergeCells('E'.$j.':F'.$j);
			$this->excel->getActiveSheet()->getStyle('E'.$j)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

			$this->excel->getActiveSheet()->setCellValue('G'.$j, $row['total'] );
			$this->excel->getActiveSheet()->getStyle('G'.$j)->getFont()->setSize(18);
			$this->excel->getActiveSheet()->getStyle('G'.$j)->getAlignment()->setWrapText(true);
			$this->excel->getActiveSheet()->mergeCells('G'.$j.':H'.$j);
			$this->excel->getActiveSheet()->getStyle('G'.$j)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
			$this->excel->getActiveSheet()->getStyle('G'.$j)->getNumberFormat()->setFormatCode(PHPExcel_Style_NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED1);
				$totalAmount = $totalAmount + $row['total'];
			$j++;
		}

		// Show Total Amount
		$this->excel->getActiveSheet()->setCellValue('E'.++$j, 'Grand Total' );
		$this->excel->getActiveSheet()->getRowDimension($j)->setRowHeight(23);
		$this->excel->getActiveSheet()->getStyle('E'.$j)->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('E'.$j)->getAlignment()->setWrapText(true);
		$this->excel->getActiveSheet()->getStyle('E'.$j)->getFont()->setBold(true);
		$this->excel->getActiveSheet()->mergeCells('E'.$j.':F'.$j);
		$this->excel->getActiveSheet()->getStyle('E'.$j)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

		$this->excel->getActiveSheet()->setCellValue('G'.$j, $totalAmount );
		$this->excel->getActiveSheet()->getStyle('G'.$j)->getFont()->setSize(18);
		$this->excel->getActiveSheet()->getStyle('G'.$j)->getAlignment()->setWrapText(true);
		$this->excel->getActiveSheet()->mergeCells('G'.$j.':H'.$j);
		$this->excel->getActiveSheet()->getStyle('G'.$j)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
		$this->excel->getActiveSheet()->getStyle('G'.$j)->getNumberFormat()->setFormatCode(PHPExcel_Style_NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED1);

		//Save and Download File
		$filename='DR-'.'test'.'.xls';
		header('Content-Type: application/vnd.ms-excel');
		header('Content-Disposition: attachment;filename="'.'Report From '.$_POST['start_date'].' - '.$_POST['end_date'].'"');
		header('Cache-Control: max-age=0');
		$objWriter = PHPExcel_IOFactory::createWriter($this->excel, 'Excel5');
		$objWriter->save('php://output');
	}

	public function users() {
		$data = array();

		if(!$this->session->userdata('isLogged')) {
			redirect('cms/login', 'refresh');
		}

		$data['username'] = $this->session->userdata('username');
		$this->load->view('cms/users', $data);
	}

	public function customers()
	{
		$data = array();

		if(!$this->session->userdata('isLogged')) 
		{
			redirect('cms/login', 'refresh');
		}

		$data['username'] = $this->session->userdata('username');
		$this->load->view('cms/customers', $data);
	}

	public function products()
	{
		$data = array();

		if(!$this->session->userdata('isLogged')) 
		{
			redirect('cms/login', 'refresh');
		}

		$data['categories'] = $this->products->get_all_categories();
		$data['uom'] = $this->products->get_all_uom();
		$data['username'] = $this->session->userdata('username');
		$this->load->view('cms/products', $data);
	}

	public function orders()
	{
		$data = array();

		if(!$this->session->userdata('isLogged')) 
		{
			redirect('cms/login', 'refresh');
		}

		$data['username'] = $this->session->userdata('username');
		$this->load->view('cms/orders', $data);
	}

	public function quotations()
	{
		$data = array();

		if(!$this->session->userdata('isLogged')) 
		{
			redirect('cms/login', 'refresh');
		}

		$data['products'] = $this->products->get_all();
		$data['username'] = $this->session->userdata('username');
		$this->load->view('cms/quotations', $data);
	}

	public function add_quotation()
	{

		$target_dir = "resources/uploads/";
		$uploadOk = 1;
		$countfiles = count($_FILES['txtAttachment']['name']);
		$quoted_items = json_decode($_POST['quoted_items'], true);

		if ($countfiles == 0)
        { 
        	 $data['error'] = 1;
			 $data['errors'] = "Please upload a file.";
             echo json_encode($data);
        }
        else
        {
        	$qutoation['user_id'] = $this->session->userdata('userID');
			$qutoation['status'] = 1;
			$quote_id = $this->quotations->add($qutoation);

			foreach ($quoted_items as $s ) 
			{
				$product_id = $this->products->get_by_name($s['ailment']);
				$quotation_detail['quotation_id'] = $quote_id;
				$quotation_detail['product_id'] = $product_id->product_id;
				$quotation_detail['quoted_cost'] = $s['cost'];
				$quotation_detail['status'] = 1;
				$this->quotations->add_quotation_detail($quotation_detail);
			}

		    for($i=0; $i < $countfiles; $i++)
		    {
		    	$target_file = $target_dir . basename($_FILES["txtAttachment"]["name"][$i]);
		    	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		    	
	       		if (file_exists($target_file)) 
				{
					$data['error'] = 1;
					$data['errors'] = "Sorry, file already exists.";
					$uploadOk = 0;
					echo json_encode($data);
				}

				if($uploadOk == 1)
				{
					if (move_uploaded_file($_FILES["txtAttachment"]["tmp_name"][$i], $target_file)) 
					{
						$attachment['quotation_id'] = $quote_id;
						$attachment['image_path'] = $target_file;
						$this->quotations->add_attachment($attachment);
					} 
				}		 
		      }
		      echo "okay";
        }

		
		// $salesItemsRecord = $this->input->post('salesItems');
		// 		if(!empty($salesItemsRecord))
		// 		{
		// 			for ($i = 0; $i < count($salesItemsRecord); $i++) 
		// 			{
		// 				$salesItemsInfo[Transaction_Items_table::_TRANSACTION_ID] = $resultSalesInfo;
		// 				$salesItemsInfo[Transaction_Items_table::_LOADED_ITEM] = $salesItemsRecord[$i]['item_name'];
		// 				$salesItemsInfo[Transaction_Items_table::_QUANTITY] = $salesItemsRecord[$i]['quantity'];
		// 				$salesItemsInfo[Transaction_Items_table::_LOADED_UOM] = $salesItemsRecord[$i]['uom'];
		// 				$resultSalesItemsInfo = $this->sales_model->add_sales_items($salesItemsInfo);
		//  			}
	 // 			}
	}

	public function services() {
		$data = array();

		if(!$this->session->userdata('isLogged')) {
			redirect('cms/login', 'refresh');
		}

		$data['username'] = $this->session->userdata('username');
		$this->load->view('cms/services', $data);
	}

	public function logs() {
		$data = array();
		$data['username'] = $this->session->userdata('username');

		if(!$this->session->userdata('isLogged')) {
			redirect('cms/login', 'refresh');
		}

		$this->load->view('cms/logs', $data);
	}

	public function login()
	{
		$data = array();

		if($this->session->userdata('isLogged')) 
		{
			redirect('cms', 'refresh');
		}

		$this->form_validation->set_rules('txtUsername', 'Username', 'trim|required');
		$this->form_validation->set_rules('txtPassword', 'Password', 'required');

		if($this->form_validation->run() === TRUE) {
			$username = $this->input->post('txtUsername');
			$password = $this->input->post('txtPassword');
			$rememberMe = $this->input->post('chkRemember');
			$result = $this->users->login($username, $password);

			if($result) 
			{
				$this->session->set_userdata('isLogged', TRUE);
				$this->session->set_userdata('userID', $result['id']);
				$this->session->set_userdata('username', $result['username']);
				$this->session->set_userdata('name', $result['first_name'] . ' ' .$result['last_name']);
			 	$this->session->set_userdata('email', $result['email']);
			 	$this->session->set_userdata('role', $result['role']);

				if($rememberMe) 
				{
			 		$this->session->set_userdata('rememberMe', TRUE);
				}

				$this->logs->log($this->session->userdata('userID'), $this->session->userdata('name') .' has successfully logged in.');
				if($result['role'] == 'Administrator')
					redirect('cms/orders', 'refresh');
				else
					redirect('cms/quotations', 'refresh');
			} else {
				$data['error_message'] = 'Invalid username and password!';
			}
		}

		$this->load->view('cms/login', $data);
	}

	public function logout() {
		if($this->session->userdata('isLogged')) {
			$this->logs->log($this->session->userdata('userID'),
				$this->session->userdata('name') .
				' has successfully logged out.');
			$this->session->sess_destroy();
		}

		redirect('cms/login', 'refresh');
	}

	public function all_logs() {
		if($this->input->is_ajax_request()) {
			echo json_encode($this->logs->get_all());
		} else {
			redirect('cms', 'refresh');
		}
	}

	/* Helper Methods for Users START */
	public function all_users() {
		if($this->input->is_ajax_request()) {
			echo json_encode($this->users->get_all());
		} else {
			redirect('cms/users', 'refresh');
		}
	}

	public function add_user() {
		if($this->input->is_ajax_request()) 
		{
			$user = array(
				Users::_USERNAME => $this->input->post('user')[Users::_USERNAME],
				Users::_PASSWORD => $this->input->post('user')[Users::_PASSWORD],
				Users::_FIRST_NAME => $this->input->post('user')[Users::_FIRST_NAME],
				Users::_LAST_NAME => $this->input->post('user')[Users::_LAST_NAME],
				Users::_EMAIL => $this->input->post('user')[Users::_EMAIL],
				Users::_ROLE => $this->input->post('user')[Users::_ROLE],
				Users::_CONTACT_NUMBER => $this->input->post('user')['contact_number'],

			);
			$result = $this->users->add($user);

			if($result) {
				$this->logs->log($this->session->userdata('userID'),
					$this->session->userdata('name') .
					' has added a new user [' .
					$this->input->post('user')[Users::_USERNAME] . '].');
			}

			echo json_encode($result);
		} else {
			redirect('cms/users', 'refresh');
		}
	}

	public function edit_user() 
	{
		if($this->input->is_ajax_request()) 
		{
			$id = $this->input->post('id');
			$user = array(
				Users::_USERNAME => $this->input->post('user')[Users::_USERNAME],
				Users::_FIRST_NAME => $this->input->post('user')[Users::_FIRST_NAME],
				Users::_LAST_NAME => $this->input->post('user')[Users::_LAST_NAME],
				Users::_EMAIL => $this->input->post('user')[Users::_EMAIL],
				Users::_CONTACT_NUMBER => $this->input->post('user')['contactnumber']
			);
			$result = $this->users->update($id, $user);

			if($result) {
				$this->logs->log($this->session->userdata('userID'),
					$this->session->userdata('name') .
					' has updated a user [' .
					$this->input->post('user')[Users::_USERNAME] . '].');
			}

			echo json_encode($result);
		} else {
			redirect('cms/users', 'refresh');
		}
	}

	public function remove_user() {
		if($this->input->is_ajax_request()) {
			$id = $this->input->post('id');
			echo json_encode($this->users->remove($id));
		} else {
			redirect('cms/users', 'refresh');
		}
	}

	public function get_user() 
	{
		if($this->input->is_ajax_request()) 
		{
			$id = $this->input->post('id');
			echo json_encode($this->users->get($id));
		} else {
			redirect('cms/users', 'refresh');
		}
	}
	/* Helper Methods for Users END */

	/* Helper Methods for Customers START */
	public function all_customers() {
		if($this->input->is_ajax_request()) {
			echo json_encode($this->customers->get_all());
		} else {
			redirect('cms/customers', 'refresh');
		}
	}

	public function add_customer()
	{
		if($this->input->is_ajax_request())
		{
			if($this->input->post('customer')[Customers::_SIGNATURE_IMAGE] != "")
			{
				$tempDraw = $this->input->post('customer')[Customers::_SIGNATURE_IMAGE] ? "data:".$this->input->post('customer')[Customers::_SIGNATURE_IMAGE][0].",".$this->input->post('customer')[Customers::_SIGNATURE_IMAGE][1] : "";
			}
			else
			{
				$tempDraw = "";
			}

			$check_user = $this->customers->checkUser($this->input->post('customer')[Customers::_EMAIL]);
			$count = count($check_user);
			if($count != 1)
			{
				$customer = array(
					Customers::_FIRST_NAME => $this->input->post('customer')[Customers::_FIRST_NAME],
					Customers::_LAST_NAME => $this->input->post('customer')[Customers::_LAST_NAME],
					Customers::_BIRTHDATE => date('Y-m-d' , strtotime($this->input->post('customer')[Customers::_BIRTHDATE])),
					Customers::_ADDRESS => $this->input->post('customer')[Customers::_ADDRESS],
					Customers::_PASSWORD => "",
					Customers::_REMOVED => 0,
					Customers::_SIGNATURE_IMAGE => $tempDraw,
					Customers::_EMAIL => $this->input->post('customer')[Customers::_EMAIL],

					Customers::_LASH_LENGTH => $this->input->post('customer')[Customers::_LASH_LENGTH],
					Customers::_LASH_THICKNESS => $this->input->post('customer')[Customers::_LASH_THICKNESS],
					Customers::_LASH_COLOR => $this->input->post('customer')[Customers::_LASH_COLOR],
					Customers::_TINT_APPLIED => $this->input->post('customer')[Customers::_TINT_APPLIED],
				Customers::_TINT_DATE_APPLIED => date('Y-m-d' , strtotime($this->input->post('customer')[Customers::_TINT_DATE_APPLIED])),
					Customers::_AILMENT_MORE_DETAILS => $this->input->post('customer')[Customers::_AILMENT_MORE_DETAILS],
			 	);

				if($this->input->post('customer')[Customers::_SIGNATURE_IMAGE] != "")
				{
			 		$this->base30_to_jpeg($tempDraw, $this->input->post('customer')[Customers::_FIRST_NAME] . '-' . $this->input->post('customer')[Customers::_LAST_NAME] . '-file', 'signatures',  400, 900);
				}

			 	$result = $this->customers->add($customer);
				if($result)
				{
					if(isset($this->input->post('customer')['ailment']))
					{
						$remove_existing = $this->customer_ailment->remove_customer_ailment($result);
						$ailment = $this->input->post('customer')['ailment'];
						for ($i=0; $i < count($ailment) ; $i++)
						{
							$ailment_array = array(
								Customer_Ailment::_CUSTOMER_ID => $result,
								Customer_Ailment::_AILMENT => $ailment[$i]['ailment'],
								Customer_Ailment::_STATUS => 1,
							);
							$result_ailment = $this->customer_ailment->add($ailment_array);
							echo json_encode("sud sa ailment");
						}
					}
					else
					{
						echo json_encode("success");
					}
					$this->logs->log($this->session->userdata('userID'),
					$this->session->userdata('name') .' has added a new user [' . $this->input->post('customer')[Customers::_FIRST_NAME] . '].');
				}
			}
			else
			{
				echo json_encode("user_exists");
			}
		}
		else
		{
			redirect('cms/customers', 'refresh');
		}
	}

	public function edit_customer()
	{
		if($this->input->is_ajax_request())
		{
			if($this->input->post('customer')[Customers::_SIGNATURE_IMAGE] != "")
			{
				$tempDraw = $this->input->post('customer')[Customers::_SIGNATURE_IMAGE] ? "data:".$this->input->post('customer')[Customers::_SIGNATURE_IMAGE][0].",".$this->input->post('customer')[Customers::_SIGNATURE_IMAGE][1] : "";
			}
			else
			{
				$tempDraw = "";
			}

			$id = $this->input->post('id');
			$customer = array(
				Customers::_FIRST_NAME => $this->input->post('customer')[Customers::_FIRST_NAME],
				Customers::_LAST_NAME => $this->input->post('customer')[Customers::_LAST_NAME],
				Customers::_BIRTHDATE => date('Y-m-d' , strtotime($this->input->post('customer')[Customers::_BIRTHDATE])),
				Customers::_ADDRESS => $this->input->post('customer')[Customers::_ADDRESS],
				Customers::_EMAIL => $this->input->post('customer')[Customers::_EMAIL],
				Customers::_SIGNATURE_IMAGE => $tempDraw,
				Customers::_LASH_LENGTH => $this->input->post('customer')[Customers::_LASH_LENGTH],
				Customers::_LASH_THICKNESS => $this->input->post('customer')[Customers::_LASH_THICKNESS],
				Customers::_LASH_COLOR => $this->input->post('customer')[Customers::_LASH_COLOR],
				Customers::_TINT_APPLIED => $this->input->post('customer')[Customers::_TINT_APPLIED],
			Customers::_TINT_DATE_APPLIED => date('Y-m-d' , strtotime($this->input->post('customer')[Customers::_TINT_DATE_APPLIED])),
				Customers::_AILMENT_MORE_DETAILS => $this->input->post('customer')[Customers::_AILMENT_MORE_DETAILS],
			);
			$result = $this->customers->update($id, $customer);
			if($result)
			{
				if($this->input->post('customer')[Customers::_SIGNATURE_IMAGE] != "")
				{
			 		$this->base30_to_jpeg($tempDraw, $this->input->post('customer')[Customers::_FIRST_NAME] . '-' . $this->input->post('customer')[Customers::_LAST_NAME] . '-file', 'signatures',  400, 900);
				}

				if(isset($this->input->post('customer')['ailment']))
				{
					$remove_existing = $this->customer_ailment->remove_customer_ailment($id);
					$ailment = $this->input->post('customer')['ailment'];
					for ($i=0; $i < count($ailment) ; $i++)
					{
						$ailment_array = array(
								Customer_Ailment::_CUSTOMER_ID => $id,
								Customer_Ailment::_AILMENT => $ailment[$i]['ailment'],
								Customer_Ailment::_STATUS => 1,
							);
						$result_ailment = $this->customer_ailment->add($ailment_array);
						echo json_encode("success");
					}
				}
				else
				{
					echo json_encode("success");
				}
			}
		}
		else
		{
			redirect('cms/customers', 'refresh');
		}
	}
	public function get_ailment_items()
	{
		if($this->input->is_ajax_request())
		{
			$customer_id = $this->input->post('id');
			echo json_encode($this->customer_ailment->get_ailment_byCustomerId($customer_id));
		}
		else
		{
			redirect('cms/customers', 'refresh');
		}
	}

	public function remove_customer() 
	{
		if($this->input->is_ajax_request())
		{
			$id = $this->input->post('id');
			echo json_encode($this->customers->remove($id));
		}
		else
		{
			redirect('cms/customers', 'refresh');
		}
	}

	public function get_customer() {
		if($this->input->is_ajax_request()) {
			$id = $this->input->post('id');
			echo json_encode($this->customers->get($id));
		} else {
			redirect('cms/customers', 'refresh');
		}
	}
	/* Helper Methods for Customers END */


	/* Helper Methods for Products START */
	public function all_products() 
	{
		if($this->input->is_ajax_request()) 
		{
			echo json_encode($this->products->get_all());
		} else {
			redirect('cms/products', 'refresh');
		}
	}

	public function add_product()
	{
		$target_dir = "resources/img/";
		$target_file = $target_dir . basename($_FILES["txtProductImage"]["name"]);
		$uploadOk = 1;
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		// Check if image file is a actual image or fake image

		$this->form_validation->set_rules('txtItemCode', 'Item Code', 'required');
        $this->form_validation->set_rules('txtDescription', 'Description', 'required');
        $this->form_validation->set_rules('txtDimension', 'Dimension', 'required');
        $this->form_validation->set_rules('txtBrand', 'Brand', 'required');
        $this->form_validation->set_rules('txtCost', 'Cost', 'required|numeric');
        $this->form_validation->set_rules('txtPrice', 'Price', 'required|numeric');
        if (empty($_FILES['txtProductImage']['name']))
		{
		    $this->form_validation->set_rules('txtProductImage', 'File Upload', 'required');
		}
		
		if ($this->form_validation->run() == FALSE)
        { 
        	  $data = ['errors' => validation_errors() , 'error' => 1];
              echo json_encode($data);
        }
        else
        {
        	if (file_exists($target_file)) 
			{
				$value['error'] = 1;
				$value['errors'] = "Sorry, file already exists.";
				echo json_encode($value);
				$uploadOk = 0;
			}
			// 	// Check file size
			// if ($_FILES["txtProductImage"]["size"] > 500000) 
			// {
			//     echo json_encode("Sorry, your file is too large.");
			//     $uploadOk = 0;
			// }
			// Allow certain file formats
			if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) 
			{
				$value['error'] = 1;
				$value['errors'] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
			    echo json_encode($value);
			    $uploadOk = 0;
			}

			if($uploadOk == 1)
			{
				if (move_uploaded_file($_FILES["txtProductImage"]["tmp_name"], $target_file)) 
				{
					$data['item_code'] = $this->input->post('txtItemCode');
		        	$data['description'] = $this->input->post('txtDescription');
		        	$data['dimension'] = $this->input->post('txtDimension') ;
		        	$data['brand'] = $this->input->post('txtBrand');
		        	$data['category_id'] = $this->input->post('selCategory');
		        	$data['unit_id'] = $this->input->post('selUom');
		        	$data['cost'] = $this->input->post('txtCost');
		        	$data['selling_price'] = $this->input->post('txtPrice');
		        	$data['current_quantity'] = 0;
		        	$data['removed'] = 0;
		        	$data['image_path'] = $target_file;
		        	$result = $this->products->add($data);
		        	if($result)
		        		echo json_encode("success: created");
				} 
			}
        }
	}

	public function edit_product()
	{
		$target_dir = "resources/img/";
		$target_file = $target_dir . basename($_FILES["txtProductImage"]["name"]);
		$uploadOk = 1;
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		// Check if image file is a actual image or fake image
		$id = $this->input->post('txtIDEdit');

		$this->form_validation->set_rules('txtItemCode', 'Item Code', 'required');
        $this->form_validation->set_rules('txtDescription', 'Description', 'required');
        $this->form_validation->set_rules('txtDimension', 'Dimension', 'required');
        $this->form_validation->set_rules('txtBrand', 'Brand', 'required');
        $this->form_validation->set_rules('txtCost', 'Cost', 'required|numeric');
        $this->form_validation->set_rules('txtPrice', 'Price', 'required|numeric');
        
		if ($this->form_validation->run() == FALSE)
        { 
        	  $data = ['errors' => validation_errors() , 'error' => 1];
              echo json_encode($data);
        }
        else
        {
        	$data['item_code'] = $this->input->post('txtItemCode');
        	$data['description'] = $this->input->post('txtDescription');
        	$data['dimension'] = $this->input->post('txtDimension') ;
        	$data['brand'] = $this->input->post('txtBrand');
        	$data['category_id'] = $this->input->post('selCategory');
        	$data['unit_id'] = $this->input->post('selUom');
        	$data['cost'] = $this->input->post('txtCost');
        	$data['selling_price'] = $this->input->post('txtPrice');
        	

        	if(!empty($_FILES['txtProductImage']['name']))
        	{
        		$result = $this->products->get($id);
        		if (file_exists($result->image_path)) 
				{
					unlink($result->image_path);
				}
        	}
        	
			// if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) 
			// {
			// 	$value['error'] = 1;
			// 	$value['errors'] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
			//     echo json_encode($value);
			//     $uploadOk = 0;
			//     exit;
			// }

			if($uploadOk == 1)
			{
				if (move_uploaded_file($_FILES["txtProductImage"]["tmp_name"], $target_file)) 
				{
					$data['image_path'] = $target_file;
				} 
			}
        	$result = $this->products->update($id,$data);
        	echo json_encode("success:updated");
        }
	}

	public function get_product() 
	{
		if($this->input->is_ajax_request()) 
		{
			$id = $this->input->post('id');
			echo json_encode($this->products->get($id));
		} else {
			redirect('cms/customers', 'refresh');
		}
	}

	public function remove_product() 
	{
		if($this->input->is_ajax_request())
		{
			$id = $this->input->post('id');
			echo json_encode($this->products->remove($id));
		}
		else
		{
			redirect('cms/customers', 'refresh');
		}
	}

	public function save($page_id) {
		$page = array(
			1 => "Home",
			2 => "Profile",
			3 => "Services",
			4 => "Contact",
		);

		if($this->input->is_ajax_request()) {
			if ($page_id == 1) {
				$data[Pages::_TITLE] = "Home";
			} else {
				$data[Pages::_TITLE] = $this->input->post('title');
			}
			$data[Pages::_ID] = $page_id;
			$sections = $this->input->post('data');
			$result = $this->pages->update($data);

			if($result && !empty($sections)) {
				$this->logs->log($this->session->userdata('userID'), $this->session->userdata('name') . ' has updated page "' . $page[$page_id] . '" page.');
				$this->page_sections->update($page_id, $sections);
			}

			echo json_encode($result);
		} else {
			redirect('cms', 'refresh');
		}
	}

	// Converting Base30 to Base64 and generating PNG Image
	public function base30_to_jpeg($base30_string, $output_file, $location, $height, $width)
	{
		$data = str_replace('image/jsignature;base30,', '', $base30_string);
		$split = "";
		list($type, $split) = explode(";", $base30_string);
		list($encType, $split) = explode(",", $split);
		$converter = new jSignature_Tools_Base30();
		$raw = $converter->Base64ToNative($split);
		$im = imagecreatetruecolor($width, $height);
		imagesavealpha($im, true);
		$trans_colour = imagecolorallocatealpha($im, 255, 255, 255, 127);
		imagefill($im, 0, 0, $trans_colour);
		imagesetthickness($im, 5);
		$black = imagecolorallocate($im, 0, 0, 0);
		for ($i = 0; $i < count($raw); $i++)
		{
			for ($j = 0; $j < count($raw[$i]['x']); $j++)
			{
				if ( ! isset($raw[$i]['x'][$j]) or ! isset($raw[$i]['x'][$j+1])) break;
				imageline($im, $raw[$i]['x'][$j], $raw[$i]['y'][$j], $raw[$i]['x'][$j+1], $raw[$i]['y'][$j+1], $black);
			}
		}
		ob_start();
		imagepng($im);
		$out = ob_get_contents();
		ob_end_clean();
		$filename = $_SERVER['DOCUMENT_ROOT'].'/winked-website-new/resources/images/'.$location.'/'.$output_file.'.png';
		imagepng($im, $filename);
		$output = 'resources/images/'.$location.'/'.$output_file.'.png';
		imagedestroy($im);
		return $output;
	}
}
