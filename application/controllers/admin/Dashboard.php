<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Dashboard_modal','dashboard');
        $this->load->model('Comman_modal','comman');
	}
	public function index()
	{  
        $data = $this->dashboard->alltotal();
		//echo "<pre>";print_r($data); exit;
		$this->load->view('layout/header.php');
        $this->load->view('dashboard.php',$data);
		$this->load->view('layout/footer.php');
	}

}