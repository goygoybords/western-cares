<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page_sections extends CI_Model {
  const _TABLE_NAME = 'page_sections';
  const _ID = 'id';
  const _PAGE_ID = 'page_id';
  const _SECTION_ID = 'section_id';
  const _CONTENT = 'content';

  public function __construct() {
    $this->load->database();
  }

  public function get_page_content($pageID) {
    $this->db->select(Page_sections::_ID . ', ' . Page_sections::_SECTION_ID . ', ' . Page_sections::_CONTENT);
    $this->db->from(Page_sections::_TABLE_NAME);
    $this->db->where(Page_sections::_PAGE_ID, $pageID);
    $query = $this->db->get();
    return $query->result_array();
  }

  public function update($id, $data) {
    foreach ($data as $key => $value) {
      $section[Page_sections::_CONTENT] = $value;
      $this->db->where(Page_sections::_SECTION_ID, $key);
      $this->db->where(Page_sections::_PAGE_ID, $id);
      $this->db->update(Page_sections::_TABLE_NAME, $section);
    }
  }
}
