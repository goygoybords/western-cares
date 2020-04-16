<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Customers extends CI_Model {
  const _TABLE_NAME = 'customers';
  const _ID = 'id';
  const _PASSWORD = 'password';
  const _FIRST_NAME = 'first_name';
  const _LAST_NAME = 'last_name';
  const _EMAIL = 'email';
  const _BIRTHDATE = 'birthdate';
  const _ADDRESS = 'address';
  const _LASH_LENGTH = 'lash_length';
  const _LASH_THICKNESS = 'lash_thickness';
  const _LASH_COLOR = 'lash_color';
  const _TINT_APPLIED = 'tint_applied';
  const _TINT_DATE_APPLIED = 'tint_date_applied';
  const _AILMENT_MORE_DETAILS = 'ailment_more_details';
  const _SIGNATURE_IMAGE = 'signature_image';
  const _REMOVED = 'removed';

  public function __construct() {
    $this->load->database();
  }

	public function login($email, $password)
  {
    $this->db->select("*");
    $this->db->from(Customers::_TABLE_NAME);
    $this->db->where(Customers::_EMAIL, $email);
    $this->db->where(Customers::_PASSWORD, $password);
    $this->db->where(Customers::_REMOVED, 0);
    $this->db->limit(1);
    $query = $this->db->get();

    if($query->num_rows() === 1)
    {
      $result = $query->row_array();
    }

    return $result;
	}

  public function add($user) {
    $user[Customers::_PASSWORD] = md5($user[Customers::_PASSWORD]);
    $this->db->insert(Customers::_TABLE_NAME, $user);
    $insert_id = $this->db->insert_id();
    return  $insert_id;
  }

  public function update($id, $user) {
    $this->db->where(Customers::_ID, $id);
    return $this->db->update(Customers::_TABLE_NAME, $user);
  }

  public function remove($id) {
    $this->db->set(Customers::_REMOVED, 1);
    $this->db->where(Customers::_ID, $id);
    return $this->db->update(Customers::_TABLE_NAME);
  }

  public function get_all() {
    $this->db->select("*");
    $this->db->from(Customers::_TABLE_NAME);
    $this->db->where(Customers::_REMOVED, FALSE);
    $query = $this->db->get();
    return $query->result_array();
  }

  public function checkUser($email)
  {
    $this->db->select(Customers::_ID);
    $this->db->from(Customers::_TABLE_NAME);
    $this->db->where(Customers::_EMAIL, $email);
    $query = $this->db->get();
    return $query->row_array();
  }

  public function get($id) {

    $query = $this->db->query("SELECT * FROM customers
        WHERE id = $id");
    $test = $query->result();

    if($test[0]->signature_image != '') {
      $test[0]->signature_image   = $this->base30_to_jpeg($test[0]->signature_image,
      $test[0]->first_name . '-' . $test[0]->last_name . '-file' , 'processedsignatures' , 700, 400);
    }
    return $test[0];
  }


  public function base30_to_jpeg($base30_string, $output_file, $location, $height, $width) {

		$data = str_replace('image/jsignature;base30,', '', $base30_string);
		$split = "";
		list($type, $split) = explode(";", $base30_string);
		list($encType, $split) = explode(",", $split);
		$converter = new jSignature_Tools_Base30();
		$raw = $converter->Base64ToNative($split);
		$im = imagecreatetruecolor($width, $height);
		imagesavealpha($im, true);
		$trans_colour = imagecolorallocatealpha($im, 255, 255, 255, 127);
		imagefill($im, 0, 0, $trans_colour);
		imagesetthickness($im, 5);
		$black = imagecolorallocate($im, 0, 0, 0);
		for ($i = 0; $i < count($raw); $i++)
		{
			for ($j = 0; $j < count($raw[$i]['x']); $j++)
			{
				if ( ! isset($raw[$i]['x'][$j]) or ! isset($raw[$i]['x'][$j+1])) break;
				imageline($im, $raw[$i]['x'][$j], $raw[$i]['y'][$j], $raw[$i]['x'][$j+1], $raw[$i]['y'][$j+1], $black);
			}
		}
		ob_start();
		imagepng($im);
		$out = ob_get_contents();
		ob_end_clean();
    $filename = $_SERVER['DOCUMENT_ROOT'].'/winked-website-new/resources/images/processedsignatures/'.$output_file.'.png'; // Make folder path is writeable
    imagepng($im, $filename);
		$output = base_url().'resources/images/'.$location.'/'.$output_file.'.png';
		imagedestroy($im);
		return $output;

	}
}
