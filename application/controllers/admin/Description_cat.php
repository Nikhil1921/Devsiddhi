<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Description_cat extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
	}

	public function index()
	{
		$data['data'] = $this->comman->getAllData('tbl_description_cat');
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');//exit();
		$this->load->view('description_cat/view_description_cat.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function add_description_cat(){
		$this->load->view('layout/header.php');
		$this->load->view('description_cat/add_description_cat.php');
		$this->load->view('layout/footer.php');
	}

	public function descriptionCatInsert(){ //echo "name";exit();

	    $this->form_validation->set_rules('var_name','Description Category Name','required');
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->add_description_cat();
        } else {

			$data1 = array('var_name'              => $this->input->post('var_name'),
		                  'created_date'               => date("Y-m-d H:i:s"),
		                  'update_date'               => date("Y-m-d H:i:s"));
		    
		    $insert = $this->comman->insert_data('tbl_description_cat',$data1);
		    $this->session->set_flashdata('message', 'Your data inserted Successfully..');
		    redirect('admin/description_cat');

		}
	}


	public function edit_data($id){

		$data['data'] = $this->comman->getIDByRecode('tbl_description_cat',$id);
		$this->load->view('layout/header.php');
		$this->load->view('description_cat/edit_description_cat.php',$data);
		$this->load->view('layout/footer.php');

	}

	public function descriptionCatUpdate(){

		$id = $this->input->post('descriptionCatId');

		$this->form_validation->set_rules('var_name','Description Category Name','required');

        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->edit_data($id);

        } else {


			$data = array('var_name' => $this->input->post('var_name'),
			               'update_date' => date("Y-m-d H:i:s"));
			    
			$update = $this->comman->update_data('tbl_description_cat',$id,$data);

			
			if($update == true){
				$this->session->set_flashdata('message', 'Your data updated Successfully..');
				redirect('admin/description_cat');

			}else{
				$this->session->set_flashdata('error', 'Enter Data Properly!');
				$this->edit_data($id);
			}
		}
	}


	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_description_cat',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/description_cat');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/description_cat');
		}
	}
	
}