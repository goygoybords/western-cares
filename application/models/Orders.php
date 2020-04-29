<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Orders extends CI_Model 
{
  const _TABLE_NAME = 'transactions';
  const _TRANSACTION_ID = 'transaction_id';
  const _REF_NUM_1 = 'ref_num_1';
  const _REF_NUM_2 = 'ref_num_2';
  const _TRANSACTION_DATE = 'transaction_date';
  const _CLIENT_ID = 'client_id';
  const _TOTAL_AMOUNT = 'total_amount';
  const _VAT_AMOUNT = 'vat_amount';
  const _TRANSACTED_AMOUNT = 'transacted_amount';
  const _REMARKS = 'remarks';
  const _PAYMENT_METHOD = 'payment_method';
  const _PAYMENT_REFERENCE_NUMBER = 'payment_reference_number';
  const _STATUS = "status" ;
  const _REMOVED = "removed" ;

  public function __construct() {
    $this->load->database();
  }

  public function add($productInfo) 
  {
    $this->db->insert(Orders::_TABLE_NAME, $productInfo);
    return $this->db->insert_id();
  }

  public function add_attachment($productInfo) 
  {
    $this->db->insert('attachments', $productInfo);
    return $this->db->insert_id();
  }

  public function add_quotation_detail($productInfo) 
  {
    $this->db->insert('quotation_detail', $productInfo);
    return $this->db->insert_id();
  }

  public function get_quotations_by_supplier($id) 
  {
    $this->db->select("q.*, u.company_name as supplier, u.email, u.address");
    $this->db->from("quotations q");
    $this->db->join('users u','u.id = q.user_id');
    $this->db->where("q.user_id", $id);
    $this->db->where_in("q.status", array('UNPOSTED', 'POSTED', 'APPROVED'));
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get_quotations_by_supplier_admin() 
  {
    $this->db->select("q.*, u.company_name as supplier, u.email, u.address");
    $this->db->from("quotations q ");
    $this->db->join('users u','u.id = q.user_id');
    $this->db->where_in("q.status", array('UNPOSTED', 'POSTED', 'APPROVED'));
    $query = $this->db->get();
    return $query->result_array();
  }

  public function update($id, $user) 
  {
    $this->db->where(Products::_PRODUCT_ID, $id);
    return $this->db->update(Products::_TABLE_NAME, $user);
  }

  public function remove($id) 
  {
    $this->db->set('status', 0);
    $this->db->where('quotation_id', $id);
    return $this->db->update('quotations');
  }

  public function get_all_orders() 
  {
    $this->db->select("t.*, CONCAT(u.first_name,' ',u.last_name,' / ', u.company_name) as customer_name");
    $this->db->from("transactions t");
    $this->db->join('users u','u.id = t.client_id');
    $this->db->where("t.removed", FALSE);
    $query = $this->db->get();
    return $query->result_array();
  }

 //  public function checkUser($email)
 //  {
 //    $this->db->select(Customers::_ID);
 //    $this->db->from(Customers::_TABLE_NAME);
 //    $this->db->where(Customers::_EMAIL, $email);
 //    $query = $this->db->get();
 //    return $query->row_array();
 //  }

  // public function get($id) 
  // {
  //   $this->db->select("q.*, u.*,");
  //   $this->db->from("quotations q");
  //   $this->db->join('users u','q.user_id = u.id');
  //   $this->db->where("q.quotation_id", $id);
  //   $query = $this->db->get();
  //   $test = $query->row();
  //   return $test;
  // }

  // public function get_detail($id) 
  // {
  //   $this->db->select("q.quoted_cost, p.item_code");
  //   $this->db->from("quotation_detail q");
  //   $this->db->join('products p','p.product_id = q.quotation_id');
  //   $this->db->where("q.quotation_id", $id);
  //   $query = $this->db->get();
  //   return $query->result_array();
  // }

  // public function get_attachments($id)
  // {
  //   $this->db->select("a.image_path, a.filename");
  //   $this->db->from("attachments a");
  //   $this->db->join('quotations q','q.quotation_id = a.quotation_id');
  //   $this->db->where("q.quotation_id", $id);
  //   $query = $this->db->get();
  //   return $query->result_array();
  // }

  // public function get_all_categories() 
  // {
  //   $this->db->select("*");
  //   $this->db->from("product_categories");
  //   $query = $this->db->get();
  //   return $query->result_array();
  // }

  // public function get_all_uom() 
  // {
  //   $this->db->select("*");
  //   $this->db->from("product_uom");
  //   $query = $this->db->get();
  //   return $query->result_array();
  // }




 //  public function base30_to_jpeg($base30_string, $output_file, $location, $height, $width) {

	// 	$data = str_replace('image/jsignature;base30,', '', $base30_string);
	// 	$split = "";
	// 	list($type, $split) = explode(";", $base30_string);
	// 	list($encType, $split) = explode(",", $split);
	// 	$converter = new jSignature_Tools_Base30();
	// 	$raw = $converter->Base64ToNative($split);
	// 	$im = imagecreatetruecolor($width, $height);
	// 	imagesavealpha($im, true);
	// 	$trans_colour = imagecolorallocatealpha($im, 255, 255, 255, 127);
	// 	imagefill($im, 0, 0, $trans_colour);
	// 	imagesetthickness($im, 5);
	// 	$black = imagecolorallocate($im, 0, 0, 0);
	// 	for ($i = 0; $i < count($raw); $i++)
	// 	{
	// 		for ($j = 0; $j < count($raw[$i]['x']); $j++)
	// 		{
	// 			if ( ! isset($raw[$i]['x'][$j]) or ! isset($raw[$i]['x'][$j+1])) break;
	// 			imageline($im, $raw[$i]['x'][$j], $raw[$i]['y'][$j], $raw[$i]['x'][$j+1], $raw[$i]['y'][$j+1], $black);
	// 		}
	// 	}
	// 	ob_start();
	// 	imagepng($im);
	// 	$out = ob_get_contents();
	// 	ob_end_clean();
 //    $filename = $_SERVER['DOCUMENT_ROOT'].'/winked-website-new/resources/images/processedsignatures/'.$output_file.'.png'; // Make folder path is writeable
 //    imagepng($im, $filename);
	// 	$output = base_url().'resources/images/'.$location.'/'.$output_file.'.png';
	// 	imagedestroy($im);
	// 	return $output;

	// }
}
