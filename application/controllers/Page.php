<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page extends CI_Controller {
	public function __construct() {
		parent::__construct();
	}

	public function _remap($method) 
	{
		switch($method) 
		{
			case "store-information":
				$this->load->view('client/store-information' );
				// $this->load->view('client/store-information' , $data);
				break;
			case "checkout":
				$this->load->view('client/checkout' );
				// $this->load->view('client/store-information' , $data);
				break;
			case "home":
			default:
				$data['isProductPage'] = 0;
				$data['categories'] = $this->get_all_categories();
				$this->load->view('client/home', $data);
		}
  	}

  	public function page_missing()
  	{
  		echo "404 page missing";
  	}

  	protected function get_all_categories()
  	{
  		$this->db->select('*');
	    $this->db->from('product_categories');
	    $query = $this->db->get();
	    return $query->result_array();
  	}
}
