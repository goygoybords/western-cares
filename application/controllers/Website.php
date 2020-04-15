<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Website extends CI_Controller {

  public function __construct() {
		parent::__construct();
	}

  public function insert_message()
  {
    $data = $this->input->post('data');
    echo json_encode($data);
    // $name = $data['name'];
    // $email = $data['email];
    // $subject = 'Petrostec Website Inquiry';
    // $this->load->library('email');

    // $config['mailtype'] = 'html'; // or html
    // $this->email->initialize($config);
    // $this->email->from($email, $name);
    // $this->email->to('kkarlallan@gmail.com'); //kkarlallan@gmail.com
    // $this->email->subject($subject);
    // $this->email->message($this->contactLayout($data));
    // $this->email->send();
    // $this->email->print_debugger();
    // echo true;
  }

  public function contactLayout($data){
		return '<!DOCTYPE html><html>
				<head>
				    <meta charset="utf-8" />
				    <title>CONTACT US</title>
				    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</head>
				<body>
				<div>
					<p style="Margin-top: 0;color: #565656;font:300 15px "Open Sans", Arial, Helvetica, sans-serif; color:#333332;line-height: 25px;Margin-bottom: 25px">Good Day!</p>
					<br>
					<p style="Margin-top: 0;color: #565656;font:300 15px "Open Sans", Arial, Helvetica, sans-serif; color:#333332;line-height: 25px;Margin-bottom: 25px">'.$data['message'].'</p>
					<br>

					<p style="Margin-top: 0;color: #565656;font:300 15px "Open Sans", Arial, Helvetica, sans-serif; color:#333332;line-height: 25px;Margin-bottom: 25px">
					<h4>More Information: </h4>
					<br/>
					<b>Name:</b> ' .$data['full_name'].
					'<br/> <b>Email:</b> ' .$data['email'].
          '<br/> <b>Contact Number:</b> ' .$data['contact'].'</p>
				</div>
				</body>
				</html>';
	}

  // public function insert_application(){
  //   $data = $this->input->post('data');
  //   $name = $data['firstName'] . ' ' . $data['lastName'];
  //   $subject = 'MMIS Website Application';
  //   $this->load->library('email');
  //
  //   $config['mailtype'] = 'html'; // or html
  //   $this->email->initialize($config);
  //   $this->email->from('info@mmis.edu.ph', $name);
  //   $this->email->to('charlesyu122@gmail.com'); //beezbeehelpdesk@gmail.com
  //   $this->email->subject($subject);
  //   $this->email->message($this->applicationLayout($data));
  //   $this->email->send();
  //   $this->email->print_debugger();
  //   echo true;
  // }

  public function insert_application(){
    $subject = 'MMIS Website Application';
    $file_data = $this->upload_file();
    if(is_array($file_data))
    {
      $message = '
      Application Details:

      First Name: '.$this->input->post("firstName").'
      Last Name: ' .$this->input->post("lastName").'
      Email: ' .$this->input->post("email").'
      Contact Number: ' .$this->input->post("contactNumber").'
      Current Employment Status: ' .$this->input->post("currentEmploymentStatus").'
      Position Applied For: ' .$this->input->post("positionAppliedFor").'
      Proficiency / Specialization or Special Skills: ' .$this->input->post("proficiency").'
      Prior Employment (if there is): ' .$this->input->post("priorEmployment").'
      Reason for Leaving: ' .$this->input->post("reasonForLeaving").'
      How did you learn about the institution: ' .$this->input->post("learnAbout").'
      Message: ' .$this->input->post("writeMessage");

      $config = Array(
         'mailtype'  => 'html',
         'charset'  => 'iso-8859-1',
         'wordwrap'  => TRUE
      );

      $this->load->library('email', $config);
      $this->email->set_newline("\r\n");
      $this->email->from('info@mmis.edu.ph');
      $this->email->to('charlesyu122@gmail.com');
      $this->email->subject($subject);
      $this->email->message($message);
      $this->email->attach($file_data['full_path']);
      if($this->email->send()) {
        redirect('career');
      } else {
        if(delete_files($file_data['file_path'])) {
          var_dump('There is an error in email send');
        }
      }
    } else {
      var_dump('There is an error in attach file');
    }
 }

  function upload_file() {
    $path = 'resources/uploads';

    if(!is_dir($path)) {
      mkdir($path);
      chmod($path, 0777);
    }
    $config['upload_path'] = $path;
    $config['allowed_types'] = 'doc|docx|pdf';
    $config['max_size'] = 0;
    $this->load->library('upload', $config);
    $this->upload->initialize($config);
    if($this->upload->do_upload('resume'))
    {
      return $this->upload->data();
    } else {
      return $this->upload->display_errors();
    }
  }

  // public function applicationLayout($data){
	// 	return '<!DOCTYPE html><html>
	// 			<head>
	// 			    <meta charset="utf-8" />
	// 			    <title>CAREER</title>
	// 			    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	// 			</head>
	// 			<body>
	// 			<div>
	// 				<p style="Margin-top: 0;color: #565656;font:300 15px "Open Sans", Arial, Helvetica, sans-serif; color:#333332;line-height: 25px;Margin-bottom: 25px">
	// 				<h4>Application Details: </h4>
	// 				<br/>
	// 				<b>First Name:</b> ' .$data['firstName'].
  //         '<br/> <b>Last Name:</b> ' .$data['lastName'].
	// 				'<br/> <b>Email:</b> ' .$data['email'].
  //         '<br/> <b>Contact Number:</b> ' .$data['contactNumber'].
  //         '<br/> <b>Current Employment Status:</b> ' .$data['currentEmploymentStatus'].
  //         '<br/> <b>Position Applied For:</b> ' .$data['positionAppliedFor'].
  //         '<br/> <b>Proficiency / Specialization or Special Skills:</b> ' .$data['proficiency'].
  //         '<br/> <b>Prior Employment (if there is):</b> ' .$data['priorEmployment'].
  //         '<br/> <b>Reason for Leaving:</b> ' .$data['reasonForLeaving'].
  //         '<br/> <b>How did you learn about the institution:</b> ' .$data['learnAbout'].
  //         '<br/> <b>Message:</b> ' .$data['writeMessage'].'</p>
	// 			</div>
	// 			</body>
	// 			</html>';
	// }
}
