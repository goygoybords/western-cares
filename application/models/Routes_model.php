<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Routes_model extends CI_Model {
  public function __construct() {
    parent::__construct();
  }

  public function get_page_details($slug) {
    $this->db->from(Routes_table::_TABLE_NAME);
    $this->db->join(Pages_table::_TABLE_NAME,
      implode('=',
        array(
          implode('.', array(Routes_table::_TABLE_NAME, Routes_table::_PAGE_ID)),
          implode('.', array(Pages_table::_TABLE_NAME, Pages_table::_ID))
          )
        )
      );
    $this->db->where(Routes_table::_SLUG, $slug);
    $query = $this->db->get();
    return $query->row_array();
  }
}
