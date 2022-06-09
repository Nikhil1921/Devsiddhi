<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller { 

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Login_modal');
		
	}

	public function index()
	{

		if (!empty($_SESSION['User'])) {
      		redirect('admin/dashboard');
    	}
		$this->load->view('login.php');
	}

	public function check_login(){ 
		$data = $this->input->post();
		$return_data = $this->Login_modal->checkAdmin($data);
		//print_r($return_data);  exit;
		if ($return_data->mobileno != '') {//print_r($id);  exit;
			$this->session->set_userdata('User', $return_data->username);
			redirect('admin/dashboard');
		}else{ 
			$this->session->set_flashdata('msg',"Invalid Mobile No & Password.");
			redirect('login');
		}
	}

	public function logOut()
	{
		if (!empty($_SESSION['User'])) {
			session_destroy();
			redirect('login');
		}else{
			redirect('admin/dashboard');
		}
	}

}
