<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products_model extends CI_Model {
  /**
  * Public constructor.
  */
  public function __construct() {
  	// Call parent constructor
    parent::__construct();
    $this->load->library('Products_table');
  }

  public function get_all() 
  {
    $this->db->select('p.*, po.');
    $this->db->from(Products_table::_TABLE_NAME);
    $this->db->where(Products_table::_STATUS . '=' . 0);
    $this->db->where('item_code = "Consumable" ');
    $this->db->order_by(Products_table::_ITEM_NAME, 'ASC');
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get_all_categories()
    {
      $this->db->select('*');
      $this->db->from('product_categories');
      $query = $this->db->get();
      return $query->result_array();
    }

  public function get_all_items() 
  {
    $this->db->select('p.*, po.code');
    $this->db->from('products p');
    $this->db->join('product_uom po','p.unit = po.id');
    $this->db->where('p.status', 0);
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get_all_items_by_category($category_id) 
  {
    $this->db->select('*');
    $this->db->from('products');
    $this->db->where('category_id', $category_id);
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get_all_uom() 
  {
    $this->db->select('*');
    $this->db->from('product_uom');
    $this->db->where('status', 1);
    $this->db->order_by("description", 'ASC');
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get_all_property() 
  {
    $this->db->select('*');
    $this->db->from(Products_table::_TABLE_NAME);
    $this->db->where(Products_table::_STATUS . '=' . 0);
    $this->db->where('type = "Property" ');
    $query = $this->db->get();
    return $query->result_array();
  }

  public function add($productInfo) {
    $this->db->insert(Products_table::_TABLE_NAME, $productInfo);
    return $this->db->insert_id();
  }

  public function add_uom($productInfo) 
  {
    $this->db->insert("product_uom", $productInfo);
    return $this->db->insert_id();
  }
  
  public function update($id, $productInfo) 
  {
    $this->db->where(Products_table::_PRODUCT_ID, $id);
    return $this->db->update(Products_table::_TABLE_NAME, $productInfo);
  }

  public function update_uom($id, $productInfo) 
  {
    $this->db->where("id", $id);
    return $this->db->update("product_uom", $productInfo);
  }

  public function remove($id) {
    $this->db->set(Products_table::_STATUS, TRUE);
    $this->db->where(Products_table::_PRODUCT_ID, $id);
    return $this->db->update(Products_table::_TABLE_NAME);
  }

  public function remove_uom($id)
  {
    $this->db->set("status", 0);
    $this->db->where("id", $id);
    return $this->db->update("product_uom");
  }

  public function get($id) 
  {
    $this->db->select(implode(', ', array(
      Products_table::_PRODUCT_ID,
      Products_table::_ITEM_NAME,
      Products_table::_MIN_VALUE,
      Products_table::_UNIT,
      Products_table::_STATUS
    )));
    $this->db->from(Products_table::_TABLE_NAME);
    $this->db->where(Products_table::_PRODUCT_ID , $id);
    $query = $this->db->get();
    return $query->row_array();
  }

  public function get_2($id) 
  {
    $this->db->select("*");
    $this->db->from(Products_table::_TABLE_NAME);
    $this->db->where(Products_table::_PRODUCT_ID , $id);
    $query = $this->db->get();
    return $query->row_array();
  }

  public function get_uom($id) 
  {
    $this->db->select("*");
    $this->db->from("product_uom");
    $this->db->where("id" , $id);
    $query = $this->db->get();
    return $query->row_array();
  }
}
