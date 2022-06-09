<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Broker extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
	}

	public function index()
	{
		$data['data'] = $this->comman->getAllData('tbl_broker');
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');//exit();
		$this->load->view('broker/view_broker.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_broker',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/broker');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/broker');
		}
	}
	
}