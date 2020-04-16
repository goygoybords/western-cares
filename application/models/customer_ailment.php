<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Customer_Ailment extends CI_Model {
  const _TABLE_NAME = 'customer_ailment';
  const _ID = 'id';
  const _CUSTOMER_ID = 'customer_id';
  const _AILMENT = 'ailment';
  const _STATUS = 'status';

  public function __construct() {
    $this->load->database();
  }

  public function add($ailment) 
  {
    $result = $this->db->insert(Customer_Ailment::_TABLE_NAME, $ailment);
    //$insert_id = $this->db->insert_id();
    return $result;
  }
  public function remove_customer_ailment($customer_id) 
  {
    $this->db->where(Customer_Ailment::_CUSTOMER_ID, $customer_id);
    return $this->db->delete(Customer_Ailment::_TABLE_NAME);
  }
  public function get_ailment_byCustomerId($id) 
  {
    $this->db->select("*");
    $this->db->from(Customer_Ailment::_TABLE_NAME);
    $this->db->where(Customer_Ailment::_CUSTOMER_ID, $id);
    $query = $this->db->get();
    return $query->result_array();
  }
}
