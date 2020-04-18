<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Model {
  const _TABLE_NAME = 'users';
  const _ID = 'id';
  const _USERNAME = 'username';
  const _PASSWORD = 'password';
  const _FIRST_NAME = 'first_name';
  const _LAST_NAME = 'last_name';
  const _EMAIL = 'email';
  const _ROLE = 'role';
  const _REMOVED = 'removed';
  const _CONTACT_NUMBER = 'contactnumber';

  public function __construct() {
    $this->load->database();
  }

	public function login($username, $password) 
  {
    $result = FALSE;
    $this->db->select(implode(', ', array(
      Users::_ID,
      Users::_USERNAME,
      Users::_EMAIL,
      Users::_FIRST_NAME,
      Users::_LAST_NAME,
      Users::_PASSWORD,
      Users::_ROLE
    )));
    $this->db->from(Users::_TABLE_NAME);
    $this->db->where(Users::_USERNAME, $username);
    $this->db->where_in('role', array('Administrator'));
    $this->db->where(Users::_REMOVED, FALSE);
    $this->db->limit(1);
    $query = $this->db->get();

    if($query->num_rows() === 1) 
    {
      $row = $query->row_array();
      if($this->verify($password, $row[Users::_PASSWORD])) 
      {
        $result = array(
          Users::_ID => $row[Users::_ID],
          Users::_USERNAME => $row[Users::_USERNAME],
          Users::_EMAIL => $row[Users::_EMAIL],
          Users::_FIRST_NAME => $row[Users::_FIRST_NAME],
          Users::_LAST_NAME => $row[Users::_LAST_NAME],
          Users::_ROLE => $row[Users::_ROLE]
        );
      }
    }
    return $result;
  }

  public function hash($password) 
  {
    return password_hash($password, PASSWORD_BCRYPT);
  }

  private function verify($password, $hash) 
  {
    return password_verify($password, $hash);
  }

  public function add($user) 
  {
    $user[Users::_PASSWORD] = $this->hash(($user[Users::_PASSWORD]));
    $this->db->insert(Users::_TABLE_NAME, $user);
    $insert_id = $this->db->insert_id();
    return  $insert_id;
  }

  public function update($id, $user) {
    $this->db->where(Users::_ID, $id);
    return $this->db->update(Users::_TABLE_NAME, $user);
  }

  public function remove($id) {
    $this->db->set(Users::_REMOVED, 1);
    $this->db->where(Users::_ID, $id);
    return $this->db->update(Users::_TABLE_NAME);
  }

  public function get_all() {
    $this->db->select(Users::_ID . ', ' . Users::_USERNAME . ', ' .
      Users::_FIRST_NAME . ', ' . Users::_LAST_NAME . ', ' .
      Users::_EMAIL . ', ' . Users::_ROLE);
    $this->db->from(Users::_TABLE_NAME);
    $this->db->where(Users::_REMOVED, FALSE);
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get($id) 
  {
    $this->db->select("*");
    $this->db->from(Users::_TABLE_NAME);
    $this->db->where(Users::_ID, $id);
    $this->db->where(Users::_REMOVED, FALSE);
    $query = $this->db->get();
    return $query->row();
  }
}
