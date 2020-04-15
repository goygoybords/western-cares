<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page_object {
  public $page_id;
  public $page;
  public $title;
  public $data = array();

  public function setPage($page_id, $page) {
    $this->page_id = $page_id;
    $this->page = $page;
  }

  public function setPageTitle($title) {
    $this->title = $title;
  }

  public function setData($data) {
    $this->data = $data;
  }

  public function add($key, $data) {
    $this->data[$key] = $data;
  }
}
