<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Project extends CI_Controller {

	
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Comman_modal','comman');
		$this->load->model('Subcat_modal','sub_cat');
		$this->load->library('upload');
	}

	public function index()
	{
		$data['data'] = $this->sub_cat->getProjectAllData();
		//echo "<pre>";print_r($data); exit();
		$this->load->view('layout/header.php');
		$this->load->view('project/view_project.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function add_project(){
	
		$data['category_data'] = $this->comman->getAllData('tbl_category');
		//$data['sub_category_data'] = $this->comman->getAllData('tbl_sub_category');
		//$data['description_cat'] = $this->comman->getAllData('tbl_description_cat');
		//$data['description_subcat'] = $this->comman->getAllData('tbl_description_subcat');
		$data['features'] = $this->comman->getAllData('tbl_features');

		//print_r($data); exit; 
		$this->load->view('layout/header.php');
		$this->load->view('project/add_project.php',$data);
		$this->load->view('layout/footer.php');
	}

	public function append_subcategory($pro_cat_id){

		$return_data = $this->sub_cat->dropdown_subcate('tbl_sub_category',$pro_cat_id,'cat_id',$pro_cat_id);

		if(!empty($return_data)){
	        echo '<option value="">Select Sub Category Name</option>';
	        	foreach ($return_data as $key => $row) {
	            	echo '<option value="'.$row['id'].'">'.$row['var_name'].'</option>';
	            }
	       
	    }else{
	        echo '<option value="">Sub Category Not Available...</option>';
	    }
	}

	public function append_descrip_subcategory($descripCategoryID){

		$return_data = $this->sub_cat->dropdown_subcate('tbl_description_subcat',$descripCategoryID,'descrip_cat_id',$descripCategoryID);

		if(!empty($return_data)){
	        echo '<option value="">Select Description Sub Category Name</option>';
	        	foreach ($return_data as $key => $row) {
	            	echo '<option value="'.$row['id'].'">'.$row['var_name'].'</option>';
	            }
	       
	    }else{
	        echo '<option value="">Description Sub Category Not Available...</option>';
	    }
	}

	

	public function projectInsert(){ 

	    $this->form_validation->set_rules('var_name','Project Name','required');
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');/*multi*/

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->add_category();
        } else {

        	$features_id = $this->input->post('features_id');

			if(isset($features_id) && $features_id != ''){
				$features_ids = implode(",", $features_id);
			} else {
				$features_ids = "";
			}


        	$upload_image=$_FILES["image"]["name"];
			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/project/";
				$temp = explode(".", $upload_image);
				$image = round(microtime(true)) . '.' . end($temp);
				move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);
			}else{
				$image = "";
			}
				
			$config['upload_path']          = './uploads/project/brochure/';
		    $config['allowed_types']        = '*';
			
			$this->upload->initialize($config);
		    $this->load->library('upload', $config);
		    $upload = $this->upload->do_upload('var_brochure');
	       	$images = $this->upload->data();

	        if(isset($_FILES['var_brochure']['name'])){
	        	$brochure_image = $_FILES['var_brochure']['name'];
	        }else{
	        	$brochure_image = "";
	        }       



	        $config['upload_path']          = './uploads/project/layout/';
		    $config['allowed_types']        = '*';
			
			$this->upload->initialize($config);
		    $this->load->library('upload', $config);
		    $upload_1 = $this->upload->do_upload('var_layout');
	       	$images_1 = $this->upload->data();

	        if(isset($_FILES['var_layout']['name'])){
	        	$layout_image = $_FILES['var_layout']['name'];
	        }else{
	        	$layout_image = "";
	        }    


	        $config['upload_path']          = './uploads/project/rera/';
		    $config['allowed_types']        = '*';
			
			$this->upload->initialize($config);
		    $this->load->library('upload', $config);
		    $upload_2 = $this->upload->do_upload('var_rera');
	       	$images_2 = $this->upload->data();

	        if(isset($_FILES['var_rera']['name'])){
	        	$rera_image = $_FILES['var_rera']['name'];
	        }else{
	        	$rera_image = "";
	        }            
			

			$data1 = array('var_name'              => $this->input->post('var_name'),
				           'cat_id'              => $this->input->post('cat_id'),

				           'var_range'              => $this->input->post('var_range'),
				           'var_floors'              => $this->input->post('var_floors'),
				           'var_towers'              => $this->input->post('var_towers'),
				           'var_unit'              => $this->input->post('var_unit'),

				          // 'sub_cat_id'              => $this->input->post('pro_sub_cat_id'),
				          /* 'des_id'              => $this->input->post('descrip_cat_id'),
				           'sub_des_id'              => $this->input->post('descrip_sub_cat_id'),*/
				            'features_id'              => $features_ids,
				           'var_brochure'              => $brochure_image,
				           'var_layout'              => $layout_image,
				           'var_rera'              => $rera_image,
							'var_img'              => $image,
		                  'created_date'               => date("Y-m-d H:i:s"),
		                  'update_date'               => date("Y-m-d H:i:s"));
		    
		    $insert = $this->comman->insert_data('tbl_project',$data1);


		      if($insert){


		    	$filesCount = count($_FILES['project_images_multi']['name']);
	        
			        for($i = 0; $i < $filesCount; $i++){
			            $_FILES['file']['name']     = $_FILES['project_images_multi']['name'][$i];
			            $_FILES['file']['type']     = $_FILES['project_images_multi']['type'][$i];
			            $_FILES['file']['tmp_name'] = $_FILES['project_images_multi']['tmp_name'][$i];
			            $_FILES['file']['error']     = $_FILES['project_images_multi']['error'][$i];
			            $_FILES['file']['size']     = $_FILES['project_images_multi']['size'][$i];

			           
			            $uploadPath = './uploads/project/multi/';
			            $config['upload_path'] = $uploadPath;
			            $config['allowed_types'] = 'jpg|jpeg|png|gif';
			           	$new_name = round(microtime(true));
						$config['file_name'] = $new_name;
			            $this->load->library('upload', $config);
			            $this->upload->initialize($config);
			            
			         
			            if($this->upload->do_upload('file')){ 
			               
			                $fileData1 = $this->upload->data();
			           
			                $image11 = $fileData1['file_name'];

			                $project_img_data = array(
							  'project_id'              => $insert,
							  'var_img'              => $image11,
			                  'created_date'               => date("Y-m-d H:i:s"),
			                  'update_date'               => date("Y-m-d H:i:s"));

			                // print_r($project_img_data); exit;
			    			$this->comman->insert_data('tbl_project_image',$project_img_data);
			                
			            }
			        }	

			   }else{
					$this->session->set_flashdata('error', 'Enter Data Properly!');
					$this->add_project();
				}


		    $this->session->set_flashdata('message', 'Your data inserted Successfully..');
		    redirect('admin/project');

		}
	}


	public function edit_data($id){

		$data['data'] = $this->comman->getIDByRecode('tbl_project',$id);
		$data['category_data'] = $this->comman->getAllData('tbl_category');
		$data['features'] = $this->comman->getAllData('tbl_features');
		$project_id = $data['data']['id']; 

		$data['gallery'] = $this->sub_cat->multiImageGet($project_id);

		//echo "<pre>"; print_r($data); exit;

		$this->load->view('layout/header.php');
		$this->load->view('project/edit_project.php',$data);
		$this->load->view('layout/footer.php');

	}

	public function subCatUpdate(){

		$id = $this->input->post('project_id');

		$this->form_validation->set_rules('var_name','Sub Category Name','required');

        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        if ($this->form_validation->run() == false) 
        {
            $this->session->set_flashdata('error', 'Enter Data Properly!');
            $this->edit_data($id);

        } else {

	        /*$upload_image=$_FILES["image"]["name"];

			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/project/";
				$temp = explode(".", $upload_image);
				$image = round(microtime(true)) . '.' . end($temp);
				move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);

			}else{ 
				$image = $this->input->post('image_hidden');
			}	*/


			$features_id = $this->input->post('features_id');

			if(isset($features_id) && $features_id != ''){
				$features_ids = implode(",", $features_id);
			} else {
				$features_ids = "";
			}


        	$upload_image=$_FILES["image"]["name"];
			if(isset($upload_image) && $upload_image != ''){
				$folder="./uploads/project/";
				$temp = explode(".", $upload_image);
				$image = round(microtime(true)) . '.' . end($temp);
				move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);
			}else{
				$image = $this->input->post('image_hidden');
			}



			$upload_image1=$_FILES["var_brochure"]["name"];
			if(isset($upload_image1) && $upload_image1 != ''){
				$folder1="./uploads/project/brochure/";
				$temp1 = explode(".", $upload_image1);
				$brochure_image = round(microtime(true)) . '.' . end($temp1);
				move_uploaded_file($_FILES["var_brochure"]["tmp_name"], "$folder1".$brochure_image);
			}else{
				$brochure_image = $this->input->post('var_brochure_hidden');
			}


				
			/*$config['upload_path']          = './uploads/project/brochure/';
		    $config['allowed_types']        = '*';
			
			$this->upload->initialize($config);
		    $this->load->library('upload', $config);
		    $upload = $this->upload->do_upload('var_brochure');
	       	$images = $this->upload->data();

	        if(isset($_FILES['var_brochure']['name'])){ echo "if"; exit;
	        	$brochure_image = $_FILES['var_brochure']['name'];
	        }else{echo "else if"; exit;
	        	$brochure_image = $this->input->post('var_brochure_hidden');
	        }       */



	      /*  $config['upload_path']          = './uploads/project/layout/';
		    $config['allowed_types']        = '*';
			
			$this->upload->initialize($config);
		    $this->load->library('upload', $config);
		    $upload_1 = $this->upload->do_upload('var_layout');
	       	$images_1 = $this->upload->data();

	        if(isset($_FILES['var_layout']['name'])){
	        	$layout_image = $_FILES['var_layout']['name'];
	        }else{
	        	$layout_image = $this->input->post('var_layout_hidden');
	        }  */



	         $upload_image2=$_FILES["var_layout"]["name"];
			if(isset($upload_image2) && $upload_image2 != ''){
				$folder2="./uploads/project/layout/";
				$temp2 = explode(".", $upload_image2);
				$layout_image = round(microtime(true)) . '.' . end($temp2);
				move_uploaded_file($_FILES["var_layout"]["tmp_name"], "$folder2".$layout_image);
			}else{
				$layout_image = $this->input->post('var_layout_hidden');
			}


	        /*$config['upload_path']          = './uploads/project/rera/';
		    $config['allowed_types']        = '*';
			
			$this->upload->initialize($config);
		    $this->load->library('upload', $config);
		    $upload_2 = $this->upload->do_upload('var_rera');
	       	$images_2 = $this->upload->data();

	        if(isset($_FILES['var_rera']['name'])){
	        	$rera_image = $_FILES['var_rera']['name'];
	        }else{
	        	$rera_image = $this->input->post('var_rera_hidden');
	        }     */       


	         $upload_image3=$_FILES["var_rera"]["name"];
			if(isset($upload_image3) && $upload_image3 != ''){
				$folder3="./uploads/project/rera/";
				$temp3 = explode(".", $upload_image3);
				$rera_image = round(microtime(true)) . '.' . end($temp3);
				move_uploaded_file($_FILES["var_rera"]["tmp_name"], "$folder3".$rera_image);
			}else{
				$rera_image = $this->input->post('var_rera_hidden');
			}

			$data = array('var_name'              => $this->input->post('var_name'),
				           'cat_id'              => $this->input->post('cat_id'),

				           'var_range'              => $this->input->post('var_range'),
				           'var_floors'              => $this->input->post('var_floors'),
				           'var_towers'              => $this->input->post('var_towers'),
				           'var_unit'              => $this->input->post('var_unit'),
				            'features_id'              => $features_ids,
				           'var_brochure'              => $brochure_image,
				           'var_layout'              => $layout_image,
				           'var_rera'              => $rera_image,
							'var_img'              => $image,
		                  'created_date'               => date("Y-m-d H:i:s"),
		                  'update_date'               => date("Y-m-d H:i:s"));


			    
			$update = $this->comman->update_data('tbl_project',$id,$data);

			
			if($update == true){



		    	$filesCount = count($_FILES['project_images_multi']['name']);
	        
			        for($i = 0; $i < $filesCount; $i++){
			            $_FILES['file']['name']     = $_FILES['project_images_multi']['name'][$i];
			            $_FILES['file']['type']     = $_FILES['project_images_multi']['type'][$i];
			            $_FILES['file']['tmp_name'] = $_FILES['project_images_multi']['tmp_name'][$i];
			            $_FILES['file']['error']     = $_FILES['project_images_multi']['error'][$i];
			            $_FILES['file']['size']     = $_FILES['project_images_multi']['size'][$i];

			           
			            $uploadPath = './uploads/project/multi/';
			            $config['upload_path'] = $uploadPath;
			            $config['allowed_types'] = 'jpg|jpeg|png|gif';
			           	$new_name = round(microtime(true));
						$config['file_name'] = $new_name;
			            $this->load->library('upload', $config);
			            $this->upload->initialize($config);
			            
			         
			            if($this->upload->do_upload('file')){ 
			               
			                $fileData1 = $this->upload->data();
			           
			                $image11 = $fileData1['file_name'];

			                $project_img_data = array(
							  'project_id'              => $id,
							  'var_img'              => $image11,
			                  'created_date'               => date("Y-m-d H:i:s"),
			                  'update_date'               => date("Y-m-d H:i:s"));

			                // print_r($project_img_data); exit;
			    			$this->comman->insert_data('tbl_project_image',$project_img_data);
			                
			            }
			        }	

				$this->session->set_flashdata('message', 'Your data updated Successfully..');
				redirect('admin/project');

			}else{
				$this->session->set_flashdata('error', 'Enter Data Properly!');
				$this->edit_data($id);
			}
		}
	}


	public function delete_data($id){
	
		$delete = $this->comman->delete_data('tbl_project',$id);

		if($delete == true){
			$this->session->set_flashdata('message', 'Your data deleted Successfully..');
			redirect('admin/project');

		}else{
			$this->session->set_flashdata('error', 'Please try again?');
			redirect('admin/project');
		}
	}

	public function project_image_delete($id){
	
		$delete = $this->comman->delete_data('tbl_project_image',$id);

		if($delete == true){
			echo "Your data deleted Successfully..";
		}else{
			echo "Please try again?";
		}
	}
	
}