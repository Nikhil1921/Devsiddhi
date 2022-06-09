<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sub_category extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
		$this->load->model('Subcat_modal','sub_cat');
	}

	public function index()
	{
		$data['data'] = $this->sub_cat->getAllData('tbl_sub_category');
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');
		$this->load->view('sub_category/view_sub_category.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function add_sub_category(){
	
		$data['category_data'] = $this->comman->getAllData('tbl_category');

		//print_r($data); exit; 
		$this->load->view('layout/header.php');
		$this->load->view('sub_category/add_sub_category.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function sub_category_insert_data(){ //echo "name";exit();

	    $this->form_validation->set_rules('var_name','Sub Category Name','required');
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->add_category();
        } else {
        	$upload_image=$_FILES["image"]["name"];
			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/sub_category/";
				$temp = explode(".", $upload_image);
				$image = round(microtime(true)) . '.' . end($temp);
				move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);
			}else{
				$image = "";
			}

			$data1 = array('var_name'              => $this->input->post('var_name'),
				           'cat_id'              => $this->input->post('cat_id'),
							'var_img'              => $image,
		                  'created_date'               => date("Y-m-d H:i:s"),
		                  'update_date'               => date("Y-m-d H:i:s"));
		    
		    $insert = $this->comman->insert_data('tbl_sub_category',$data1);
		    $this->session->set_flashdata('message', 'Your data inserted Successfully..');
		    redirect('admin/sub_category');

		}
	}


	public function edit_data($id){

		$data['data'] = $this->comman->getIDByRecode('tbl_sub_category',$id);
		$data['category_data'] = $this->comman->getAllData('tbl_category');
		$this->load->view('layout/header.php');
		$this->load->view('sub_category/edit_sub_category.php',$data);
		$this->load->view('layout/footer.php');

	}

	public function subCatUpdate(){

		$id = $this->input->post('sub_category_id');

		$this->form_validation->set_rules('var_name','Sub Category Name','required');

        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->edit_data($id);

        } else {

	        $upload_image=$_FILES["image"]["name"];

			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/sub_category/";
				$temp = explode(".", $upload_image);
				$image = round(microtime(true)) . '.' . end($temp);
				move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);

			}else{ 
				$image = $this->input->post('image_hidden');
			}	


			$data = array('var_name' => $this->input->post('var_name'),
					       'var_img'              => $image,
				           'cat_id'              => $this->input->post('cat_id'),
			               'update_date' => date("Y-m-d H:i:s"));
			    
			$update = $this->comman->update_data('tbl_sub_category',$id,$data);

			
			if($update == true){
				$this->session->set_flashdata('message', 'Your data updated Successfully..');
				redirect('admin/sub_category');

			}else{
				$this->session->set_flashdata('error', 'Enter Data Properly!');
				$this->edit_data($id);
			}
		}
	}


	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_sub_category',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/sub_category');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/sub_category');
		}
	}
	
}