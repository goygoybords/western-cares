<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Model {
  const _TABLE_NAME = 'products';
  const _PRODUCT_ID = 'product_id';
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


  public function add($product) 
  {
    $this->db->insert(Products::_TABLE_NAME, $product);
    $insert_id = $this->db->insert_id();
    return  $insert_id;
  }

 //  public function update($id, $user) {
 //    $this->db->where(Customers::_ID, $id);
 //    return $this->db->update(Customers::_TABLE_NAME, $user);
 //  }

  public function remove($id) 
  {
    $this->db->set(Products::_REMOVED, 1);
    $this->db->where(Products::_PRODUCT_ID, $id);
    return $this->db->update(Products::_TABLE_NAME);
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
    $query = $this->db->query("SELECT * FROM products WHERE product_id = $id");
    $test = $query->result();
    return $test;
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
