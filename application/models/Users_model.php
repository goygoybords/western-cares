<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users_model extends CI_Model {
  /**
  * Public constructor.
  */
  public function __construct() {
  	// Call parent constructor
    parent::__construct();
    // Load the Users_table class
    $this->load->library('users_table');
  }

  public function check_username($username) {
    $result = FALSE;
    $this->db->select(implode(', ', array(
      Users_table::_USER_ID,
      Users_table::_EMAIL
    )));
    $this->db->from(Users_table::_TABLE_NAME);
    $this->db->where(Users_table::_EMAIL, $username);
    $query = $this->db->get();

    if($query->num_rows() > 0) {
      $result = TRUE;
    }

    return $result;
  }

  public function login($email, $password) 
  {
    $result = FALSE;
    $this->db->select(implode(', ', array(
      Users_table::_USER_ID,
      Users_table::_EMAIL,
      Users_table::_FIRST_NAME,
      Users_table::_LAST_NAME,
      Users_table::_PASSWORD,
      Users_table::_ROLE
    )));
    $this->db->from(Users_table::_TABLE_NAME);
    $this->db->where(Users_table::_EMAIL, $email);
    $this->db->where(Users_table::_STATUS, FALSE);
    $this->db->limit(1);
    $query = $this->db->get();

    if($query->num_rows() === 1) 
    {
      $row = $query->row_array();
      if($this->verify($password, $row[Users_table::_PASSWORD])) 
      {
        $result = array(
          Users_table::_USER_ID => $row[Users_table::_USER_ID],
          Users_table::_EMAIL => $row[Users_table::_EMAIL],
          Users_table::_FIRST_NAME => $row[Users_table::_FIRST_NAME],
          Users_table::_LAST_NAME => $row[Users_table::_LAST_NAME],
          Users_table::_ROLE => $row[Users_table::_ROLE]
        );
      }
    }
    return $result;
  }

  public function get_all() {
    $this->db->select('*');
    $this->db->from(Users_table::_TABLE_NAME);
    //$this->db->where(Users_Table::_STATUS . '=' . 0);
    $query = $this->db->get();
    return $query->result_array();

  }

  public function add($user) {
    $this->db->insert(Users_table::_TABLE_NAME, $user);
    return $this->db->insert_id();
  }

  public function update_user($id, $userInfo) {
    $this->db->where(Users_table::_USER_ID, $id);
    return $this->db->update(Users_table::_TABLE_NAME, $userInfo);
  }

  public function remove($id) {
    $this->db->set(Users_table::_STATUS, TRUE);
    $this->db->where(Users_table::_USER_ID, $id);
    return $this->db->update(Users_table::_TABLE_NAME);
  }

  public function get($id) {
    $this->db->select('*');
    $this->db->from(Users_table::_TABLE_NAME);
    $this->db->where(Users_table::_USER_ID, $id);
    $query = $this->db->get();
    return $query->row_array();
  }

  public function hash($password) {
    return password_hash($password, PASSWORD_BCRYPT);
  }

  private function verify($password, $hash) {
    return password_verify($password, $hash);
  }

  private function toDTO($data, $total, $limit, $rows, $offset) {
    $result =[
            'total' => $total,
            'count' => $rows,
            'limit' => $limit,
            'offset' => $offset,
            'rows' => $data
      ];
      return $result;
  }

}
