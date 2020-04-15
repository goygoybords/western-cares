<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Model {
  const _TABLE_NAME = 'pages';
  const _ID = 'id';
  const _TITLE = 'title';
  const _DATE = 'date';

  public function __construct() {
    $this->load->database();
  }

  public function get_page_data($pageID) {
    $this->db->select(Pages::_ID . ', ' . Pages::_TITLE . ', ' . Pages::_DATE);
    $this->db->from(Pages::_TABLE_NAME);
    $this->db->where(Pages::_ID, $pageID);
    $query = $this->db->get();
    return $query->row_array();
  }

  public function update($data) {
    $this->db->where(Pages::_ID, $data[Pages::_ID]);
    return $this->db->update(Pages::_TABLE_NAME, $data);
  }
}
