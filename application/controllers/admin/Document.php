<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Document extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
	}

	public function index()
	{
		$data['data'] = $this->comman->getAllData('tbl_document');
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');//exit();
		$this->load->view('document/view_document.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function add_document(){
		$this->load->view('layout/header.php');
		$this->load->view('document/add_document.php');
		$this->load->view('layout/footer.php');
	}

	public function documentInsert(){ //echo "name";exit();

	    $this->form_validation->set_rules('var_name','Project Document Name','required');
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->add_document();
        } else {
        	$upload_image=$_FILES["image"]["name"];
			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/document/icon/";
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
		    
		    $insert = $this->comman->insert_data('tbl_document',$data1);
		    $this->session->set_flashdata('message', 'Your data inserted Successfully..');
		    redirect('admin/document');

		}
	}


	public function edit_data($id){

		$data['data'] = $this->comman->getIDByRecode('tbl_document',$id);
		$this->load->view('layout/header.php');
		$this->load->view('document/edit_document.php',$data);
		$this->load->view('layout/footer.php');

	}

	public function documentUpdate(){

		$id = $this->input->post('document_id');

		$this->form_validation->set_rules('var_name','Project Document Name','required');

        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->edit_data($id);

        } else {

	        $upload_image=$_FILES["image"]["name"];

			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/document/icon/";
				$temp = explode(".", $upload_image);
				$image = round(microtime(true)) . '.' . end($temp);
				move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);

			}else{ 
				$image = $this->input->post('image_hidden');
			}	


			$data = array('var_name' => $this->input->post('var_name'),
					'var_img'              => $image,
			               'update_date' => date("Y-m-d H:i:s"));
			    
			$update = $this->comman->update_data('tbl_document',$id,$data);

			
			if($update == true){
				$this->session->set_flashdata('message', 'Your data updated Successfully..');
				redirect('admin/document');

			}else{
				$this->session->set_flashdata('error', 'Enter Data Properly!');
				$this->edit_data($id);
			}
		}
	}


	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_document',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/document');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/document');
		}
	}
	
}