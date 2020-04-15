<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages_model extends CI_Model {
  public function __construct() {
    parent::__construct();
  }

  public function get_all_pages() {
    $query = $this->db->get(Pages_table::_TABLE_NAME);
    return $query->result_array();
  }
}
