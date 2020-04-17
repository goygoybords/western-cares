<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users_model extends CI_Model 
{
  /**
  * Public constructor.
  */
  public function __construct() 
  {
  	// Call parent constructor
    parent::__construct();
    // Load the Users_table class
    $this->load->library('users_table');
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
      Users_table::_ROLE,
      Users_table::_USERNAME,
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
          Users_table::_ROLE => $row[Users_table::_ROLE],
          Users_table::_USERNAME => $row[Users_table::_USERNAME]
        );
      }
    }
    return $result;
  }

  public function hash($password) {
    return password_hash($password, PASSWORD_BCRYPT);
  }

  private function verify($password, $hash) {
    return password_verify($password, $hash);
  }

  public function update($id, $user) 
  {
    $this->db->where(Users_table::_USER_ID, $id);
    return $this->db->update(Users_table::_TABLE_NAME, $user);
  }

  public function get($id) 
  {
    $this->db->select("*");
    $this->db->from(Users_table::_TABLE_NAME);
    $this->db->where(Users_table::_USER_ID, $id);
    $this->db->where("removed", FALSE);
    $query = $this->db->get();
    return $query->row();
  }

  public function get_email($email) 
  {
    $this->db->select("email");
    $this->db->from(Users_table::_TABLE_NAME);
    $this->db->where(Users_table::_EMAIL, $email);
    $query = $this->db->get();
    return $query->row();
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
