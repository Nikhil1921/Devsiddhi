<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Features extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
	}

	public function index()
	{
		$data['data'] = $this->comman->getAllData('tbl_features');
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');//exit();
		$this->load->view('features/view_features.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function add_features(){
		$this->load->view('layout/header.php');
		$this->load->view('features/add_features.php');
		$this->load->view('layout/footer.php');
	}

	public function featuresInsert(){ //echo "name";exit();

	    $this->form_validation->set_rules('var_name','Features Name','required');
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->add_features();
        } else {
        	$upload_image=$_FILES["image"]["name"];
			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/features/";
				$temp = explode(".", $upload_image);
				$image = round(microtime(true)) . '.' . end($temp);
				move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);
			}else{
				$image = "";
			}

			$data1 = array('var_name'              => $this->input->post('var_name'),
							'var_img'              => $image,
		                  'created_date'               => date("Y-m-d H:i:s"),
		                  'update_date'               => date("Y-m-d H:i:s"));
		    
		    $insert = $this->comman->insert_data('tbl_features',$data1);
		    $this->session->set_flashdata('message', 'Your data inserted Successfully..');
		    redirect('admin/features');

		}
	}


	public function edit_data($id){

		$data['data'] = $this->comman->getIDByRecode('tbl_features',$id);
		$this->load->view('layout/header.php');
		$this->load->view('features/edit_features.php',$data);
		$this->load->view('layout/footer.php');

	}

	public function featuresUpdate(){

		$id = $this->input->post('features_id');

		$this->form_validation->set_rules('var_name','Features Name','required');

        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->edit_data($id);

        } else {

	        $upload_image=$_FILES["image"]["name"];

			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/features/";
				$temp = explode(".", $upload_image);
				$image = round(microtime(true)) . '.' . end($temp);
				move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);

			}else{ 
				$image = $this->input->post('image_hidden');
			}	


			$data = array('var_name' => $this->input->post('var_name'),
					'var_img'              => $image,
			               'update_date' => date("Y-m-d H:i:s"));
			    
			$update = $this->comman->update_data('tbl_features',$id,$data);

			
			if($update == true){
				$this->session->set_flashdata('message', 'Your data updated Successfully..');
				redirect('admin/features');

			}else{
				$this->session->set_flashdata('error', 'Enter Data Properly!');
				$this->edit_data($id);
			}
		}
	}


	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_features',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/features');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/features');
		}
	}
	
}