<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Logs extends CI_Model {
  const _TABLE_NAME = 'logs';
  const _ID = 'id';
  const _USER_ID = 'user_id';
  const _DATE = 'date';
  const _MESSAGE = 'message';

  public function __construct() {
    $this->load->database();
  }

  public function log($id, $message) {
    $log = array(
      Logs::_USER_ID => $id,
      Logs::_MESSAGE => $message
    );

    return $this->db->insert(Logs::_TABLE_NAME, $log);
  }

  public function get_all() {
    $this->db->select(Users::_USERNAME . ', ' . Logs::_TABLE_NAME . '.' . Logs::_ID . ', ' . Logs::_DATE . ', ' . Logs::_MESSAGE);
    $this->db->from(Logs::_TABLE_NAME);
    $this->db->join(Users::_TABLE_NAME, Logs::_TABLE_NAME . '.' . Logs::_USER_ID .
      ' = ' . Users::_TABLE_NAME . '.' . Users::_ID);
    $this->db->order_by(Logs::_DATE, 'DESC');
    $query = $this->db->get();
    return $query->result_array();
  }
}
