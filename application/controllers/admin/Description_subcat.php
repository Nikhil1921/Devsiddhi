<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Description_subcat extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
		$this->load->model('DescripSubCat_modal','dessub_cat');
	}

	public function index()
	{
		$data['data'] = $this->dessub_cat->getAllData('tbl_description_subcat');
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');
		$this->load->view('description_subcat/view_description_subcat.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function add_description_subcat(){
	
		$data['description_cat'] = $this->comman->getAllData('tbl_description_cat');

		//print_r($data); exit; 
		$this->load->view('layout/header.php');
		$this->load->view('description_subcat/add_description_subcat.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function descripSubcatInsert(){ //echo "name";exit();

	    $this->form_validation->set_rules('var_name','Description Sub Category Name','required');
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->add_category();
        } else {

			$data1 = array('var_name'              => $this->input->post('var_name'),
				           'descrip_cat_id'              => $this->input->post('descrip_cat_id'),
		                  'created_date'               => date("Y-m-d H:i:s"),
		                  'update_date'               => date("Y-m-d H:i:s"));
		    
		    $insert = $this->comman->insert_data('tbl_description_subcat',$data1);
		    $this->session->set_flashdata('message', 'Your data inserted Successfully..');
		    redirect('admin/description_subcat');

		}
	}


	public function edit_data($id){

		$data['data'] = $this->comman->getIDByRecode('tbl_description_subcat',$id);
		$data['description_cat'] = $this->comman->getAllData('tbl_description_cat');
		$this->load->view('layout/header.php');
		$this->load->view('description_subcat/edit_description_subcat.php',$data);
		$this->load->view('layout/footer.php');

	}

	public function descripSubCatUpdate(){

		$id = $this->input->post('descripSubcatId');

		$this->form_validation->set_rules('var_name','Description Sub Category Name','required');

        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->edit_data($id);

        } else {

			$data = array('var_name' => $this->input->post('var_name'),
				           'descrip_cat_id'              => $this->input->post('descrip_cat_id'),
			               'update_date' => date("Y-m-d H:i:s"));
			    
			$update = $this->comman->update_data('tbl_description_subcat',$id,$data);

			
			if($update == true){
				$this->session->set_flashdata('message', 'Your data updated Successfully..');
				redirect('admin/description_subcat');

			}else{
				$this->session->set_flashdata('error', 'Enter Data Properly!');
				$this->edit_data($id);
			}
		}
	}


	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_description_subcat',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/description_subcat');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/description_subcat');
		}
	}
	
}