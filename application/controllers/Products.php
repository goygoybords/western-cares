<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller 
{
	public function __construct() 
	{
		parent::__construct();
		$this->load->model('products_model');
	}

	public function get_product($id)
	{
		$result = $this->products_model->get($id);
		echo json_encode($result);
	}
             
}
