<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller { 

	
	public function __construct()
	{
		parent::__construct();
		date_default_timezone_set("Asia/Kolkata");
		$this->load->model('Home_modal','home');
		//$this->load->model('Preoffer_modal','pre');
		$this->load->library('pagination');

		//var $skey 	= "Category2010"; // you can change it
	}


	/*public  function safe_b64encode($string) {
	
        $data = base64_encode($string);
        $data = str_replace(array('+','/','='),array('-','_',''),$data);
        return $data;
    }

	public function safe_b64decode($string) {
        $data = str_replace(array('-','_'),array('+','/'),$string);
        $mod4 = strlen($data) % 4;
        if ($mod4) {
            $data .= substr('====', $mod4);
        }
        return base64_decode($data);
    }*/


	public function index()
	{	
		/*$url = $this->safe_b64encode($id);
		$return_url = $this->safe_b64decode($url);*/

		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$data['category'] = $this->home->getAllData('tbl_category','');

	     /*echo $actual_link; exit;
		$this->session->set_userdata('previous_url_login', $actual_link);*/


		/*$data['banner'] = $this->home->banner_list();

		$data['category'] = $this->home->getAllData('tbl_category');

		$data['offer_slider'] = $this->home->offers_slider_get();

		$data['trending_cat'] = $this->home->trending_sub_category();

		$data['advatege_slider'] = $this->home->advatege_slider_get();*/

		//echo "<pre>";print_r($data['offer_slider']); exit();

		$this->load->view('frontend/include/header.php',$data);
		$this->load->view('frontend/index.php',$data);
		$this->load->view('frontend/include/footer.php');
	}



	/*public function sub_category($id)
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$data['sub_category'] = $this->home->sub_category_get($id);
		//$data['cat_banner_img'] = $this->home->sub_sector_banner_get($id);

		//echo "<pre>";print_r($data['sub_category']); exit();

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/sub-category.php',$data);
		$this->load->view('frontend/include/footer.php');
	}*/

	public function product($cat_id)
	{   
		
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$data['category'] = $this->home->getAllData('tbl_category','');
		$data['product_data'] = $this->home->product_get(base64_decode($cat_id));

		//echo "<pre>";print_r($data); exit();

		$this->load->view('frontend/include/header.php',$data);
		$this->load->view('frontend/sub-category.php',$data);
		$this->load->view('frontend/include/footer.php');
	}

	public function description($pro_id)
	{   
		//echo "<pre>";echo $pro_id; exit();
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);
		$data['category'] = $this->home->getAllData('tbl_category','');
		$data['product_data'] = $this->home->product_description_get(base64_decode($pro_id));


		if(!empty($data)){
	        $data['product_img'] = $this->home->product_multiimg($data['product_data'][0]['id']);
	        $data['features_data'] = $this->home->features_data($data['product_data'][0]['features_id']);

	    }else{
		    $data['product_img'] = $this->home->product_multiimg($data['product_data'][0]['id']);
		    $data['features_data'] = $this->home->features_data($data['product_data'][0]['features_id']);
	    }


		//echo "<pre>";print_r($data); exit();

		$this->load->view('frontend/include/header.php',$data);
		$this->load->view('frontend/project.php',$data);
		$this->load->view('frontend/include/footer.php');
	}



	public function contact(){
			//echo "<pre>";echo "pro_id"; exit();
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);
		$data['category'] = $this->home->getAllData('tbl_category','');
		$this->load->view('frontend/include/header.php',$data);
		$this->load->view('frontend/contact.php');
		$this->load->view('frontend/include/footer.php');

	}

	public function contact_insert(){   //echo "string"; exit;
		
		$data = $this->input->post();

		$data1 = array('var_name'              => $data['name'],
                  'var_email'                      => $data['email'],
                  'var_mobileno'                        => $data['phone'],
                  'var_message'                    => $data['message']
                  //'created_date'               => date("Y-m-d H:i:s")
               );
		    
		$insert = $this->home->insert_data('tbl_contact',$data1);

		if($insert == true){
			echo "1"; die;

		}else{
			echo "0"; die;
		}

	}

	public function inquiry_insert(){  
		
		$data = $this->input->post();

		$data1 = array('var_name'              => $data['name'],
                  'var_email'                      => $data['email'],
                  'var_mobileno'                        => $data['phone'],
                  'var_message'                        => $data['message'],
                  'pro_id'                    => $data['product_id']
                  //'created_date'               => date("Y-m-d H:i:s")
               );
		    
		$insert = $this->home->insert_data('tbl_inquiry',$data1);

		if($insert == true){
			echo "1"; die;

		}else{
			echo "0"; die;
		}

	}

	public function broker_insert(){   //echo "string"; exit;
		
		$data = $this->input->post();

		$data1 = array('var_name'              => $data['var_name'],
                  //'var_email'                      => $data['var_email'],
                  'var_mobileno'                        => $data['var_mobileno'],
                  'var_message'                    => $data['var_message'],
				'var_city'                    => $data['var_city'],
				'var_flat'                    => $data['var_flat'],
				'var_budget'                    => $data['var_budget'],
                  //'created_date'               => date("Y-m-d H:i:s")
               );
		    
		$insert = $this->home->insert_data('tbl_broker',$data1);

		if($insert == true){
			echo "1"; die;

		}else{
			echo "0"; die;
		}

	}

	public function about(){
			//echo "<pre>";echo "pro_id"; exit();
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);
		$data['category'] = $this->home->getAllData('tbl_category','');

		$this->load->view('frontend/include/header.php',$data);
		$this->load->view('frontend/about.php');
		$this->load->view('frontend/include/footer.php');

	}





	/*-----------------------------Code******Code------------------------------------*/
	/*-----------------------------Code******Code------------------------------------*/
	/*-----------------------------Code******Code------------------------------------*/


	public function become_our_partner()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/become-our-partner.php');
		$this->load->view('frontend/include/footer.php');
	}

	public function rewards()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);
		$user_login = $this->session->userdata('logged_in_front');

		if(!empty($user_login) && isset($user_login)){

			$user_id = $user_login[0]['id'];

			$data['rewards'] = $this->home->rewards($user_id);

			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/rewards.php',$data);
			$this->load->view('frontend/include/footer.php');

		} else{
			redirect('home/login', 'refresh');
		}
	}

	public function feedback()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$user_login = $this->session->userdata('logged_in_front');

		if(!empty($user_login) && isset($user_login)){

			$user_id = $user_login[0]['id'];

			$data['data'] = $this->home->getIDByRecode('tbl_registration',$user_id);

			//echo "<pre>"; print_r($user_data); exit;mobileno

			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/feedback.php',$data);
			$this->load->view('frontend/include/footer_new.php');

		} else{
			redirect('home/login', 'refresh');
		}

		
	}

	public function login()    
	{	
		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/login.php');
		$this->load->view('frontend/include/footer.php');
	}

	public function login_insert()
	{
		//$this->session->set_userdata('previous_url_login', $_SERVER['HTTP_REFERER']);

		$data = $this->input->post();

		$terms_con = $data['terms_con'];

		$refercode = $data['referral_code'];

		//echo "<pre>"; echo $refercode; exit;

		$result = $this->home->login($data['number'],$terms_con,$refercode);

		if(isset($result) && !empty($result)){
			echo "1"; die;
		}else{
			echo "0"; die;
		}
	}

	public function otp_check()
	{
		$data = $this->input->post();

		$result = $this->home->otp_check($data['otp'],$data['number']);

		if(isset($result) && !empty($result)){

			$this->session->set_userdata('logged_in_front', $result);
			$message =  "1";

			if(isset($result[0]['news_id']) && $result[0]['news_id'] != ''){
				$news_id = $result[0]['news_id'];
			} else {
				$news_id = "";
			}

		}else{
			$message =  "0";
			$news_id = "";
		}

		$previous_url = $this->session->userdata('previous_url_login');

		$data1 = array('message' => $message, 'news_id' => $news_id, 'previous_url' => $previous_url);

		echo json_encode($data1); die;
	}

	public function category()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$data['category'] = $this->home->getAllData('tbl_category');

		//echo "<pre>";print_r($data['offer_slider']); exit();

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/category.php',$data);
		$this->load->view('frontend/include/footer.php');
	}

	public function notification()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$user_login = $this->session->userdata('logged_in_front');
		$user_id = $user_login[0]['id'];

		$data['notification'] = $this->home->notification_list($user_id);
		//echo "<pre>";   print_r($data);  exit;
		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/notification.php',$data);
		$this->load->view('frontend/include/footer.php');
	}

	

	public function trending_category()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$data['trending_cat'] = $this->home->trending_sub_category();

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/trending-sub-category.php',$data);
		$this->load->view('frontend/include/footer.php');
	}

	public function area_offer($sub_cat_id)
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$data['offer_list'] = $this->home->offer_list($sub_cat_id);

		$data['sub_cat_banner_img'] = $this->home->offer_banner_get($sub_cat_id);

		//echo "<pre>";print_r($data['offer_list']); exit();

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/sub-category-area.php',$data);
		$this->load->view('frontend/include/footer.php');
	}

	public function category_details($id)
	{
		echo $id; exit;
		$data['category'] = $this->home->getAllData('tbl_category');

		//echo "<pre>";print_r($data['offer_slider']); exit();

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/category.php',$data);
		$this->load->view('frontend/include/footer.php');
	}

	public function news_details($id)
	{
		$data['news'] = $this->home->getIDByRecode('tbl_news',$id);

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/news-detail.php',$data);
		$this->load->view('frontend/include/footer.php');
	}

	public function about_us()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/about-1.php');
		$this->load->view('frontend/include/footer.php');
	}

	public function select_news(){

		$user_login = $this->session->userdata('logged_in_front');
		$user_id = $user_login[0]['id'];

		$newsId = $this->input->post('news_id');

		if(isset($newsId) && $newsId != ''){
			$news_id = implode(', ', $newsId); 
		} else{
			$news_id = ""; 
		}
		
		
		$data = array('news_id' => $news_id);

		$update = $this->home->update_data('tbl_registration',$user_id,$data);

		if($update){
			echo "1"; die;
		} else {
			echo "0"; die;
		}

	}

	public function news($rowno=0)
	{
		$user_login = $this->session->userdata('logged_in_front');


		if(!empty($user_login) && isset($user_login)){
			
			$user_id = $user_login[0]['id'];

			$user_data = $this->home->getIDByRecode('tbl_registration',$user_id);

			$news_id = $user_data['news_id'];

			if(isset($news_id) && $news_id != ''){ 

				// Row per page
			    $rowperpage = 2;

			    // Row position
			    if($rowno != 0){
			      $rowno = ($rowno-1) * $rowperpage;
			    }
			    // All records count
			    $allcount = $this->home->getrecordCount('tbl_news',$news_id);

			    // Get records
			    $users_record = $this->home->getData('tbl_news',$rowno,$rowperpage,$news_id);

			   // echo "<pre>"; print_r($users_record); exit;
			 
			    // Pagination Configuration
			    $config['base_url'] = base_url().'home/news';
			    $config['use_page_numbers'] = TRUE;
			    $config['total_rows'] = $allcount;
			    $config['per_page'] = $rowperpage;

			    // Initialize
			    $this->pagination->initialize($config);
			 
			    $data['pagination'] = $this->pagination->create_links();
			    $data['news'] = $users_record;
			    $data['row'] = $rowno;

			} else {

				$data['pagination'] = "";
			    $data['news'] = "";
			    $data['row'] = "";

			}

			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/news.php',$data);
			$this->load->view('frontend/include/footer.php');

		} else{
			redirect('home/login', 'refresh');
		}
	}


	public function subcrib()
	{
		$user_login = $this->session->userdata('logged_in_front');

		if(isset($user_login) && !empty($user_login)){

				$id = $user_login[0]['id'];

				$user_check_profile = $this->home->getIDByRecode('tbl_registration',$id);

				//print_r($user_check_profile['profile_status']); exit;

				if($user_check_profile['profile_status'] == 1){

					$result = $this->home->subcrib($id,$this->input->post('bar_code'));

					if($result == 2){
						$status= "0";
						$status_page= "0";
						$message = "Invalid Barocode !!";  
					}else if($result == 3){
						$status= "0";
						$status_page= "wallet";
			            $message = "Please Add Wallet balance in your account."; 
			        }else if($result == 4){
			        	$status= "0";
			        	$status_page= "0";
			            $message = "Sorry ! This Offer is  Expired."; 
			        } else{
			        	$status= "1";
			        	$status_page= "0";
			        	$offer_name = $result['offer_name'];
			            //$wallet = $result['total_wallet'];
						$message = "Subscribed Successfully For ". $offer_name . "."; 
					}

				} else {
					$status= "0";
					$status_page= "profile";
					$message = "Please Update Your Profile.";  
				}

		} else {

			$status= "0";
			$status_page= "login";
			$message = "Please Login.";  
		}

		
		$data11 = array('status'=>$status,"message"=>$message,"status_page"=>$status_page);

		//print_r($data11); exit;

		echo json_encode($data11); die;

	}

	public function subcrib_dyrect()
	{
		$user_login = $this->session->userdata('logged_in_front');

		if(isset($user_login) && !empty($user_login)){

				$id = $user_login[0]['id'];

				$offer_id = $this->input->post('id');

				$user_check_profile = $this->home->getIDByRecode('tbl_registration',$id);

				//print_r($user_check_profile['profile_status']); exit;

				if($user_check_profile['profile_status'] == 1){

					$result = $this->home->subcrib_dyrect($id,$offer_id);

					if($result == 2){
						$status= "0";
						$status_page= "0";

						$message = "Invalid Barocode !!";  
					}else if($result == 3){
						$status= "0";
						$status_page= "wallet";
			            $message = "Please Add Wallet balance in your account."; 

			        }else if($result == 4){
			        	$status= "0";
			        	

			            $message = "Sorry ! This Offer is  Expired."; 
			        } else{
			        	$status= "1";
			        	$status_page= "0";

			        	$offer_name = $result['offer_name'];
			            //$wallet = $result['total_wallet'];
						$message = "Subscribed Successfully For ". $offer_name . "."; 
					}

				} else {
					$status= "0";
					$status_page= "profile";
					$message = "Please Update Your Profile.";  
				}

		} else {

			$status= "0";
			$status_page= "login";
			$message = "Please Login.";  
		}

		

		$data11 = array('status'=>$status,"message"=>$message,"status_page"=>$status_page);

		//print_r($data11); exit;

		echo json_encode($data11); die;

	}

	public  function multiple_subcrib()
	{
		$user_login = $this->session->userdata('logged_in_front');

		if(isset($user_login) && !empty($user_login)){

				$id = $user_login[0]['id'];

				$offers_id = $this->input->post('id');

				//print_r($offer_id); exit;

				$user_check_profile = $this->home->getIDByRecode('tbl_registration',$id);

				//print_r($user_check_profile['profile_status']); exit;

				if($user_check_profile['profile_status'] == 1){

					$result = $this->home->subcrib_multiple_dyrect($id,$offers_id);

					if($result == 3){
						$status= "0";
						$status_page= "wallet";
			            $message = "Please Add Wallet balance in your account."; 
			        } else {
		        		$message = "Subscribed Successfully."; 
						$status_page= "0";
						$status= "1";
			        }

				} else {
					$status= "0";
					$status_page= "profile";
					$message = "Please Update Your Profile.";  
				}

		} else {

			$status= "0";
			$message = "Please Login.";  
			$status_page= "login";
		}

		

		$data11 = array('status'=>$status,"message"=>$message,"status_page"=>$status_page);

		//print_r($data11); exit;

		echo json_encode($data11); die;
	}

	public function subscribe_banner()
	{
		$user_login = $this->session->userdata('logged_in_front');

		if(isset($user_login) && !empty($user_login)){

				$id = $user_login[0]['id'];

				$user_check_profile = $this->home->getIDByRecode('tbl_registration',$id);

				//print_r($user_check_profile['profile_status']); exit;

				if($user_check_profile['profile_status'] == 1){

					$result = $this->home->special_subcrib($id,$this->input->post('banner_id'));

				
					if($result == 3){
						$status= "0";
						$status_page= "wallet";
			            $message = "Please Add Wallet balance in your account."; 
			        } else if($result == 4){
			        	$status= "0";
			            $message = "Sorry ! This Offer is  Expired."; 
			        } else{
			        	$status= "1";
			        	$status_page= "0";
			        	//$offer_name = $result['offer_name'];
			            //$wallet = $result['total_wallet'];
						$message = "Subscribed Successfully."; 
					}

				} else {
					$status= "0";
					$status_page= "profile";
					$message = "Please Update Your Profile.";  
				}

		} else {

			$status= "0";
			$status_page= "login";
			$message = "Please Login.";  
		}

		

		$data11 = array('status'=>$status,"message"=>$message,"status_page"=>$status_page);

		//print_r($data11); exit;

		echo json_encode($data11); die;
	}

	public function subscribe_banner_multi()
	{
		$user_login = $this->session->userdata('logged_in_front');

		if(isset($user_login) && !empty($user_login)){

				$id = $user_login[0]['id'];

				$user_check_profile = $this->home->getIDByRecode('tbl_registration',$id);

				//print_r($user_check_profile['profile_status']); exit;

				if($user_check_profile['profile_status'] == 1){

					$result = $this->home->special_subcrib_multi($id,$this->input->post('banner_id'));

				
					if($result == 3){
						$status= "0";
						$status_page= "wallet";
			            $message = "Please Add Wallet balance in your account."; 
			        } else{
			        	$status= "1";
			        	$status_page= "0";
			        	//$offer_name = $result['offer_name'];
			            //$wallet = $result['total_wallet'];
						$message = "Subscribed Successfully."; 
					}

				} else {
					$status= "0";
					$status_page= "profile";
					$message = "Please Update Your Profile.";  
				}

		} else {

			$status= "0";
			$status_page= "login";
			$message = "Please Login.";  
		}

		

		$data11 = array('status'=>$status,"message"=>$message,"status_page"=>$status_page);

		//print_r($data11); exit;

		echo json_encode($data11); die;
	}

	public function job()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$user_login = $this->session->userdata('logged_in_front');

		if(!empty($user_login) && isset($user_login)){
			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/job.php');
			$this->load->view('frontend/include/footer.php');

		} else{
			redirect('home/login', 'refresh');
		}

		
	}

	public function profile()
	{
		//echo "profile"; exit;
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$user_login = $this->session->userdata('logged_in_front');

		if(!empty($user_login) && isset($user_login)){
			$user_id = $user_login[0]['id'];

			$data['user'] = $this->home->getIDByRecode('tbl_registration',$user_id);

			$data['total_count'] = $this->home->subcrib_history_count($user_id);

			//echo "<pre>"; print_r($data); exit;

			$data['state'] = $this->home->getAllData('tbl_state');

			if($data['user']['state_id'] == 0){
				$data['city'] = $this->home->getAllData('tbl_city');
			} else{
				$data['city'] = $this->Comman->getIDByRecodeall('tbl_city',$data['user']['state_id'],'state_id');
			}

			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/profile.php',$data);
			$this->load->view('frontend/include/footer_new.php');

		} else{
			redirect('home/login', 'refresh');
		}

		
	}


	public function profile_update()
	{
		//echo "profile"; exit;

		$user_login = $this->session->userdata('logged_in_front');

		$user_id = $user_login[0]['id'];

		$upload_image=$_FILES["image"]["name"];

		//echo "<pre>"; print_r($_FILES["image1"]["name"]); exit();

		if(isset($upload_image) && $upload_image != ''){
			$folder="uploads/users/";
			$temp = explode(".", $upload_image);
			$image = round(microtime(true)) . '.' . end($temp);
			move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);

		}else{ 
			$image = $this->input->post('image_hidden');
		}

		$data = array('name'              => $this->input->post('name'),
	                  'email'                        => $this->input->post('email'),
	                  'mobileno'                    => $this->input->post('phone'),
	                  'city_id'                    => $this->input->post('city'),
	                  'dob'                    => $this->input->post('dob'),
	                  'gender'                    => $this->input->post('gender'),
	                  'pincode'                    => $this->input->post('pincode'),
	                   'state_id'                    => $this->input->post('state'),

	              	  'image' 						=> $image,
	              	  'profile_status'              => '1',
	              	//  'customer_id'                 => $this->RandomString(),
	                  'update_date'               => date("Y-m-d H:i:s")
	                 );
		    
		$update = $this->home->update_data('tbl_registration',$user_id,$data);

		if($update == true){
			$this->session->set_flashdata('message1', 'Your Profile Updated Successfully..');
			redirect('profile', 'refresh');

		}else{
			$this->session->set_flashdata('error', 'Enter Data Properly!');
			redirect('profile', 'refresh');
		}
	}


	
	public function user_history()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$user_login = $this->session->userdata('logged_in_front');

		if(!empty($user_login) && isset($user_login)){

			$user_id = $user_login[0]['id'];

			$data['category'] = $this->home->getAllData('tbl_category');

		/*	$data['subcategory'] = $this->home->getAllData('tbl_subcategory');*/

			if(!empty($data['category']) && isset($data['category'])){
				/*$data['history'] = $this->home->user_history($user_id,$data['category'][0]['id']);*/

				$data['history'] = $this->home->contest_history($user_id);

			} else {
				$data['history'] = array();
			}

			//echo "<pre>"; print_r($data['history']); exit;

			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/history.php',$data);
			$this->load->view('frontend/include/footer.php');
			
		} else{
			redirect('home/login', 'refresh');
		}

	}

	public function special_subscribe()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$user_login = $this->session->userdata('logged_in_front');
/*
		if(!empty($user_login) && isset($user_login)){

			$user_id = $user_login[0]['id'];*/

			$data['offer_list'] = $this->home->banner_list();

			//echo "<pre>"; print_r($data['offer_list']); exit;

			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/special_subscribe.php',$data);
			$this->load->view('frontend/include/footer.php');
			
	/*	} else{
			redirect('home/login', 'refresh');
		}*/

	}

	public function history_data(){

		$category = $_POST['id'];

		//print_r($category); exit;

		$user_login = $this->session->userdata('logged_in_front');

		$user_id = $user_login[0]['id'];
		//$type = '';
		if($category == 'special_subscribe'){ 
			$history = $this->home->user_history_special_subscribe($user_id);
			//$subcrib = $history[0]['id'];
			//$type = 'special';
			//echo "<pre>"; print_r($history); exit;
		} else if($category == 'mega_contest'){
			$history = $this->home->contest_history($user_id);
			//$subcrib = "mega_contest";
			//$type = '';
		} else { 
			$history = $this->home->user_history($user_id,$category);
			//$subcrib = $history[0]['voucher_code'];
			//$type = 'normal';

			//echo "<pre>"; print_r($history); exit;
		}


		$html = "";

		if(isset($history) && !empty($history)){ 

			foreach ($history as $key => $value) {

				$type = '';

				if($category == 'special_subscribe'){ 
					$subcrib = $value['id'];
					$type = 'special';
				} else if($category == 'mega_contest'){
					$subcrib = "mega_contest";
					$type = '';
				} else { 
					$subcrib = $value['id'];
					$type = 'normal';
				}

				
				
	            $subcrip_prize = $value['subcrip_prize'];
	           
	            $date = date('d/m/Y', strtotime($value['created_date']));

				$html .= ' <div class="tab-div">
                        <div class="d-flex history-top-div justify-content-between align-items-center">
                            <div class="tab-div-left">
                                <div class="d-flex align-items-center">
                                    <img src="frontend_assets/site_logo.png">
                                    <div class="tab-div-left-content d-flex flex-column">
                                        <span class="">'.$value['name'].'</span>
                                        <span><i class="fa fa-inr" aria-hidden="true"></i> '.$subcrip_prize.'</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-div-right">
                                <span>'.$date.'</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between history-bottom-div">';

                        	//if($category != 'special_subscribe'){ 
                            $html .= '<span class="history-code">Alloted Code : '.$value['ref_code'].'</span> 

                            ';
                        	// }$type = 'special';

                        	if($type == "special"){

                        		$html .= '<input type="submit" value="Resubscribe" class="sub-btn" onclick="subscribe_banner('.$subcrib.')">';

                        	} else if($type == "normal"){
                        		$html .= '<input type="submit" value="Resubscribe" class="sub-btn" onclick="subscribe('.$subcrib.')">';
                        	}

                            $html .= '
                        </div>
                    </div>';

            }

		 } else { 
			$html .= '<p class="text-center" style="margin-top:50px;">Guluck code data not available.</p>';
		} 

		echo $html; die;

	}

	public function wallet()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$user_login = $this->session->userdata('logged_in_front');

		if(!empty($user_login) && isset($user_login)){

			$user_id = $user_login[0]['id'];

			$wallet_data = $this->home->wallet($user_id);

	        $data['wallet'] = $wallet_data[0]['money'];
	        $data['coin'] = $wallet_data[0]['coin'];

			//echo "<pre>"; print_r($wallet); exit;

			$data['wallet_transaction_all'] = $this->home->wallet_transaction($user_id);

			$data['add_wallet'] = $this->home->wallet_trans($user_id);

			/*--------------------user wallet withdrawal list --------------------*/
			$data['withdrawal'] = $this->home->wallet_withdra($user_id);
			

			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/wallet.php',$data);
			$this->load->view('frontend/include/footer.php');
	
			
		} else{
			redirect('home/login', 'refresh');
		}

	}

	public function withdrawal()
	{
		$user_login = $this->session->userdata('logged_in_front');

		//echo "<pre>"; print_r($user_login); exit;
		$user_id = $user_login[0]['id'];

		$user_data = $this->home->getIDByRecode('tbl_registration',$user_id);

		$money = $user_data['money'];

		//echo "<pre>"; print_r($money); exit;

		$data = $this->input->post();

		if($money >= $data['amount']){

			if($data['amount'] <= 100){  //echo "if"; exit;

			    $insert_date = array('user_id' => $user_login[0]['id'],
							  'money'              => $data['amount'],
							  'account_no'              => $data['account_no'],
							  'ifsc_code'              => $data['ifsc_code'],
							  'pan_no'              => $data['pan_no'],
							  'mobile_no'              => $data['mobile_no'],
							  'transaction_type'              => "withdraw",
			                  'created_date'               => date("Y-m-d H:i:s"),
			                  'update_date'               => date("Y-m-d H:i:s"));


			    $insert = $this->home->insert_data("tbl_transaction",$insert_date);

			    if($insert){
				  $status = '1';
				  $message = "Your send message Successfully..";
			    }else{
			    	$status = '0';
			    	$message = "Enter Data Properly!";
			    }

			} else { //echo "if else"; exit;

				$status = '0';
			    $message = "Please withdrawal only maximum 100 rupees.";
			}

		} else { //echo "else"; exit;
			$status = '0';
		    $message = "Your wallet balace not amount.";
		}

		$data11 = array('status'=>$status,"message"=>$message);

		echo json_encode($data11); die;


	}

	public function logout()
	{
		$user_login = $this->session->userdata('logged_in_front');

		if (isset($user_login) && !empty($user_login)) {
			$this->session->unset_userdata('logged_in_front');
			redirect(base_url());	
		} 
	}



	public function how_to_play(){
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$this->load->view('frontend/include/header.php');
		$this->load->view('frontend/how_to_play.php');
		$this->load->view('frontend/include/footer.php');

	}


	public function feedback_insert(){ 

		$user_login = $this->session->userdata('logged_in_front');

		if(isset($user_login) && $user_login != ''){
			$user_id = $user_login[0]['id'];
		} else {
			$user_id = "0";
		}
		
		$data = $this->input->post();

		$data1 = array('feedback_type'              => $data['query'],
                  'mobileno'                        => $data['phone'],
                  'user_id'                        => $user_id,
                  'message'                    => $data['message'],
                  'created_date'               => date("Y-m-d H:i:s")
               );

		$insert = $this->home->insert_data('tbl_feedback',$data1);

		if($insert == true){
			$this->session->set_flashdata('message1', 'Your Message Send Successfully..');
			redirect('help-desk', 'refresh');

		}else{
			$this->session->set_flashdata('error', 'Enter Data Properly!');
			redirect('help-desk', 'refresh');
		}
	}

	public function insert_job(){  

		$user_login = $this->session->userdata('logged_in_front');
		$user_id = $user_login[0]['id'];
		
		$data = $this->input->post();

		$upload_image=$_FILES["image"]["name"];

		//echo "<pre>"; print_r($_FILES["image1"]["name"]); exit();

		$folder="uploads/job_resume/";
		$temp = explode(".", $upload_image);
		$image = round(microtime(true)) . '.' . end($temp);
		move_uploaded_file($_FILES["image"]["tmp_name"], "$folder".$image);

		$data1 = array('name'              => $data['name'],
                  'email'                      => $data['email'],
                  'mobile'                        => $data['phone'],
                  'post'                    => $data['post'],
                  'qualification'                    => $data['qualification'],
                  'experience'                    => $data['experience'],
                  'resume'               => $image,
                  'created_date'               => date("Y-m-d H:i:s"),
                  'user_id'                      => $user_id
               );
		    
		$insert = $this->home->insert_data('tbl_job',$data1);

		if($insert == true){
			$this->session->set_flashdata('message1', 'Your data inserted Successfully..');
			redirect('job', 'refresh');

		}else{
			$this->session->set_flashdata('error', 'Enter Data Properly!');
			redirect('job', 'refresh');
		}

	}

	public  function add_money()
	{
		//print_r($_SERVER['HTTP_REFERER']); exit;

		$this->session->set_userdata('previous_url', $_SERVER['HTTP_REFERER']);

		$store_data = $this->input->post();

		$this->session->set_userdata('add_money_data', $store_data);

		$ch = curl_init();

		/*curl_setopt($ch, CURLOPT_URL, 'https://www.instamojo.com/api/1.1/payment-requests/');
		curl_setopt($ch, CURLOPT_HEADER, FALSE);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
		curl_setopt($ch, CURLOPT_HTTPHEADER,
		            array("X-Api-Key:0036eb4b7b85bb89f67a83bc9d0ecd13",
		                  "X-Auth-Token:a1e88f036a79c2c3128c5f6f5c03c360"));*/
		// ****************test*******************//
		curl_setopt($ch, CURLOPT_URL, 'https://test.instamojo.com/api/1.1/payment-requests/');
		curl_setopt($ch, CURLOPT_HEADER, FALSE);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
		curl_setopt($ch, CURLOPT_HTTPHEADER,
		            array("X-Api-Key:cae7ba04588e437d9e745be6892e55d2",
		                  "X-Auth-Token:3f14f3bc03c7be9ff54ac6ea1ba4a2fc"));

		$user_login = $this->session->userdata('logged_in_front');

		$user_id = $user_login[0]['id'];

		$user_data = $this->Comman->getIDByRecode('tbl_registration',$user_id);

      	$payload = Array(
		    'purpose' => 'Add Money',
			'amount' => $store_data['amount'],
			'phone' => $user_data['mobileno'],
			'buyer_name' => $user_data['name'],
			'redirect_url' => base_url().'home/transaction',
			'send_email' => true,
			'webhook' => '',
			'send_sms' => true,
			'email' =>  $user_data['email'],
			'allow_repeated_payments' => false
		);

		//print_r($payload); exit;
		
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
		$response = curl_exec($ch);
		curl_close($ch); 
		$inarray = json_decode($response , true);
		$this->session->set_userdata(['payment_request_id' => $inarray['payment_request']['id']]);
		$value = $inarray['payment_request']['longurl'];
		//echo $value; exit;
		return redirect($value);

	}

	public function transaction()
	{
		if ($_GET['payment_request_id'] == $_SESSION['payment_request_id'] ) {

			$payment_request_id = $_SESSION['payment_request_id'];

			//print_r($payment_request_id); exit;
			$Payment_ID = 'MOJO'.rand(10000, 99999);

			$date_date = date('Y-m-d h:i:s');

			$store_data = $this->session->userdata('add_money_data');

			$user_login = $this->session->userdata('logged_in_front');

			$user_id = $user_login[0]['id'];

			$wallet_data = $this->home->wallet($user_id);

	        $wallet = $wallet_data[0]['money'];

        	$balace = $store_data['amount'] + $wallet;

        	//print_r($balace); exit;


        	$data = array("user_id" =>$user_id,
        					"money" =>$store_data['amount'],
        					"status" => "online",
        					"trans_id" => $Payment_ID,
        					"transaction_type" => "Add",
        					"created_date" => $date_date,
        					"update_date" => $date_date
        					);

        	$this->home->insert_data('tbl_transaction',$data);

			$data_update = array('money' => $balace);
		    
			$this->home->update_data('tbl_registration',$user_id,$data_update);

			$this->session->set_flashdata('message1', 'Add Money Successfully..');

			$previous_url = $this->session->userdata('previous_url');

			if(isset($previous_url) && $previous_url != ''){
				header("Location: $previous_url"); 
			} else {
				redirect('wallet', 'refresh');
			}
			
			
		}else{
			$this->session->set_flashdata('error', 'Enter Data Properly!');
			redirect('wallet', 'refresh');
		}
	}

	public function getcity($id){


		$data = $this->Comman->getIDByRecodeall('tbl_city',$id,'state_id');


	    if(!empty($data)){
	    	
	        echo '<option value="">Select City</option>';

	        	foreach ($data as $key => $row) {

	            	echo '<option value="'.$row['id'].'">'.$row['name'].'</option>';

	            }
	       
	    }else{
	        echo '<option value="">City not available</option>';
	    }

	}

	public function getsubcategory($id){


		$data = $this->Comman->getIDByRecodeall('tbl_subcategory',$id,'category_id');


	    if(!empty($data)){
	    	
	        echo '<option value="">Select sub category</option>';

	        	foreach ($data as $key => $row) {

	            	echo '<option value="'.$row['id'].'">'.$row['name'].'</option>';

	            }
	       
	    }else{
	        echo '<option value="">Sub category not available</option>';
	    }

	}

	public function contest()
	{
		$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
		$this->session->set_userdata('previous_url_login', $actual_link);

		$user_login = $this->session->userdata('logged_in_front');

		if(!empty($user_login) && isset($user_login)){

			$user_id = $user_login[0]['id'];
			$data['history'] = $this->home->contest_history($user_id);

			$this->load->view('frontend/include/header.php');
			$this->load->view('frontend/contest.php',$data);
			$this->load->view('frontend/include/footer.php');

		} else{
			redirect('home/login', 'refresh');
		}

	}

	public function search_contest()
	{
		$user_login = $this->session->userdata('logged_in_front');

		$user_id = $user_login[0]['id'];

		$category = $_POST['category'];

		$history = $this->home->contest_history($user_id,$category);

		$html = "";

		if(isset($history) && !empty($history)){ 

			foreach ($history as $key => $value) {
				
				if($value['pre_off'] == 1){
	                $subcrip_prize = $value['pre_subcrip_prize'];
	            }else {
	                $subcrip_prize = $value['subcrip_prize'];
	            }
	            $date = date('d/m/Y', strtotime($value['created_date']));

				$html .= ' <div class="tab-div">
                        <div class="d-flex history-top-div justify-content-between align-items-center">
                            <div class="tab-div-left">
                                <div class="d-flex align-items-center">
                                    <img src="frontend_assets/img/icon-2.png">
                                    <div class="tab-div-left-content d-flex flex-column">
                                        <span class="">'.$value['name'].'</span>
                                        <span><i class="fa fa-inr" aria-hidden="true"></i> '.$subcrip_prize.'</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-div-right">
                                <span>'.$date.'</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between history-bottom-div">
                            <span class="history-code">Subscribe Code : '.$value['ref_code'].'</span>
                            <span class="history-status">Winning Status : '.$value['status'].'</span>
                        </div>
                    </div>';

            }

		 } else { 
			$html .= '<p class="text-center" style="margin-top:50px;">History data not available.</p>';
		} 

		echo $html; die;

	}

	public function live_location()
	{
		$city_name = $this->input->post('city_name');
		$this->session->set_userdata('city_name', $city_name);
	}

	public function advertisement_insert(){  
		
		$data = $this->input->post();

		if(isset($user_login) && $user_login != ''){
			$user_id = $user_login[0]['id'];
		} else {
			$user_id = "0";
		}

		$data1 = array('name'              => $data['name'],
                  'email'                      => $data['email'],
                  'user_id'                      => $user_id,
                  'mobileno'                        => $data['phone'],
                  'message'                    => $data['message'],
					'company_name'                        => $data['company_name'],
					'state'                        => $data['state'],
					'city'                        => $data['city'],

                  'created_date'               => date("Y-m-d H:i:s")
               );
		    
		$insert = $this->home->insert_data('tbl_advertisement',$data1);

		if($insert == true){
			echo "1"; die;

		}else{
			echo "0"; die;
		}

	}

}