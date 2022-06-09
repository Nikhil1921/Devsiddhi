<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
	}

	public function index()
	{
		$data['data'] = $this->comman->getAllData('tbl_contact');
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');//exit();
		$this->load->view('contact/view_contact.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_contact',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/contact');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/contact');
		}
	}
	
}