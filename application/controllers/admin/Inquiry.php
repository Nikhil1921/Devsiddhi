<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inquiry extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
	}

	public function index()
	{
		$data['data'] = $this->comman->getAllData('tbl_inquiry');
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');//exit();
		$this->load->view('inquiry/view_inquiry.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_inquiry',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/inquiry');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/inquiry');
		}
	}
	
}