<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page extends CI_Controller {
	public function __construct() {
		parent::__construct();
	}

	public function _remap($method) {
		switch($method) {
			case "about":
				$this->load->view('client/about');
				break;
			case "curriculum":
				$this->load->view('client/curriculum');
				break;
			case "admission":
				$this->load->view('client/admission');
				break;
			case "career":
				$this->load->view('client/career');
				break;
			case "calendar":
				$this->load->view('client/calendar');
				break;
			case "contact":
				$this->load->view('client/contact');
				break;
			case "home":
			default:
				$this->load->view('client/home');
		}
  }
}
