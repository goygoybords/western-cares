<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page extends CI_Controller 
{
	public function __construct() 
	{
		parent::__construct();
		$this->load->model('products_model');
		$this->load->model('users');
	}

	public function _remap($method) 
	{
		switch($method) 
		{
			case "store-information":
				$this->load->view('client/store-information' );
				break;
			case "thank-you":
				$this->load->view('client/thank-you');
				break;
			case "user-detail":
				if($this->session->userdata('isLogged') == TRUE)
				{
					$id  = $this->session->userdata('userID');
					$data['user_detail'] = $this->users->get($id);
					$this->load->view('client/user-detail', $data);
				}
				else
				{
					redirect('', 'refresh');
				}
				break;
			case "account-details":
				if($this->session->userdata('isLogged') == TRUE)
				{
					$data['id'] = $id  = $this->session->userdata('userID');
					$data['user_detail'] = $this->users->get($id);
					$this->load->view('client/account-details', $data);
				}
				else
				{
					redirect('', 'refresh');
				}
				break;
			case "checkout":
				$this->load->view('client/checkout' );
				break;
			case "home":
			default:
				$data['surgical_gear'] = $this->products_model->get_all_items_by_category(1);
				$data['scanner'] = $this->products_model->get_all_items_by_category(2);
				$data['surgical_mask_items'] = $this->products_model->get_all_items_by_category(3);
				$data['shoes'] = $this->products_model->get_all_items_by_category(4);
				$data['gloves'] = $this->products_model->get_all_items_by_category(5);
				$data['ppe'] = $this->products_model->get_all_items_by_category(6);
				$data['machines'] = $this->products_model->get_all_items_by_category(7);
				$data['categories'] = $this->products_model->get_all_categories();
				$this->load->view('client/home', $data);
		}
  	}

  	public function page_missing()
  	{
  		$this->load->view('client/error_404');
  	}
}
