<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Quotations extends CI_Model 
{
  const _TABLE_NAME = 'quotations';
  const _PRODUCT_ID = 'quotation_id';
  const _ITEM_CODE = 'item_code';
  const _DESCRIPTION = 'description';
  const _DIMENSION = 'dimension';
  const _BRAND = 'brand';
  const _CATEGORY_ID = 'category_id';
  const _UNIT_ID = 'unit_id';
  const _COST = 'cost';
  const _SELLING_PRICE = 'selling_price';
  const _CURRENT_QUANTITY = 'current_quantity';
  const _IMAGE_PATH = 'image_path';
  const _REMOVED = "removed" ;

  public function __construct() {
    $this->load->database();
  }

  public function add($productInfo) 
  {
    $this->db->insert(Quotations::_TABLE_NAME, $productInfo);
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
    $this->db->set('status', "REMOVED");
    $this->db->where('quotation_id', $id);
    return $this->db->update('quotations');
  }

  public function post($id) 
  {
    $this->db->set('status', "APPROVED");
    $this->db->where('quotation_id', $id);
    return $this->db->update('quotations');
  }

  public function get_all() 
  {
    $this->db->select("p.*, u.description as uom, pc.description as category");
    $this->db->from("products p");
    $this->db->join('product_uom u','p.unit_id = u.id');
    $this->db->join('product_categories pc','p.category_id = pc.category_id');
    $this->db->where("p.removed", FALSE);
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

  public function get($id) 
  {
    $this->db->select("q.*, u.*,");
    $this->db->from("quotations q");
    $this->db->join('users u','q.user_id = u.id');
    $this->db->where("q.quotation_id", $id);
    $query = $this->db->get();
    $test = $query->row();
    return $test;
  }

  public function get_detail($id) 
  {
    $this->db->select("q.quoted_cost, p.item_code");
    $this->db->from("quotation_detail q");
    $this->db->join('products p','p.product_id = q.quotation_id');
    $this->db->where("q.quotation_id", $id);
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get_attachments($id)
  {
    $this->db->select("a.image_path, a.filename");
    $this->db->from("attachments a");
    $this->db->join('quotations q','q.quotation_id = a.quotation_id');
    $this->db->where("q.quotation_id", $id);
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get_all_categories() 
  {
    $this->db->select("*");
    $this->db->from("product_categories");
    $query = $this->db->get();
    return $query->result_array();
  }

  public function get_all_uom() 
  {
    $this->db->select("*");
    $this->db->from("product_uom");
    $query = $this->db->get();
    return $query->result_array();
  }




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
