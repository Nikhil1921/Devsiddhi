<?php
require_once '../include/DbHandler.php';
require_once '../include/PassHash.php';
require '.././libs/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();


/*--------------------------Required field Check----------------------------------*/
function verifyRequiredParams($required_fields)
{
    $error = false;
    $error_fields = "";
    $request_params = array();
    $request_params = $_REQUEST;

    // Handling PUT request params
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') 
    {
        $app = \Slim\Slim::getInstance();
        parse_str($app->request()->getBody(), $request_params);
    }

    foreach ($required_fields as $field) 
    {
        if (!isset($request_params[$field]) || strlen(trim($request_params[$field])) <= 0) 
        {
            $error = true;
            $error_fields .= $field . ', ';
        }
    }

    if ($error) 
    {
        // Required field(s) are missing or empty
        // echo error json and stop the app
        $response = array();
        $app = \Slim\Slim::getInstance();
        $response["error"] = true;
        $response["message"] = 'Required field(s) ' . substr($error_fields, 0, -2) . ' is missing or empty';
        echoRespnse(200, $response);
        $app->stop();
    }
}


/*-----------------------------Api key Check------------------------------------*/

function authenticate(\Slim\Route $route)
{
    // Getting request headers
    $headers = apache_request_headers();
    $response = array();
    $app = \Slim\Slim::getInstance();

    // Verifying Authorization Header
    if (isset($headers['Authorization'])) 
    {
        $db = new DbHandler();        
        $key = $headers['Authorization'];        
        
        if (!$key=$db->isValidApiKey($key)) 
        {            
            $response["error"] = true;
            $response["message"] = "Access Denied Invalid Id";
            echoRespnse(200, $response);
            $app->stop();
        } else {
            global $api_key;
            $api_key = $key["id"];
        }
    } else {
        // api key is missing in header
        $response["error"] = true;
        $response["message"] = "Api key is misssing";
        echoRespnse(200, $response);
        $app->stop();
    }
}


/*---------------------------------Login Check------------------------------------*/

$app->post('/login',function () use ($app)
{
    //echo "login"; exit;
    verifyRequiredParams(array('mobile','token'));

    $mobile = $app->request->post('mobile');

    $token = $app->request->post('token');
  
    $db = new DbHandler();      

    if($row = $db->login($mobile,$token)) 
    {        
        $response['mobile_no'] = $row[0]['mobileno'];
        //$response['address_name'] = $row[0]['address_name'];
        $response['error'] = false;
        $response['message'] ="OTP Send Successfully.";
        echoRespnse(200, $response);
    } 
    else 
    {
        $response["error"] = true;
        $response['message'] = "You are not Authorized!";
        echoRespnse(400, $response);
    }
});


/*-----------------------------Api otp Check------------------------------------*/

$app->post('/otp_check',function () use ($app)
{    
    verifyRequiredParams(array('mobile_otp','mobile'));

    $mobile_otp = $app->request->post('mobile_otp');
    $mobile_no  = $app->request->post('mobile');

    $base_url = $app->request->geturl() . "/cardeals/uploads/staff/";

    $db = new DbHandler();    

    if($row = $db->otp_check($mobile_otp,$mobile_no))  
    {  
        //print_r($row); exit();      
        $response['id'] = $row[0]['id'];
        $response['name'] = $row[0]['surname'].' '.$row[0]['name'].' '.$row[0]['lastname'];
        $response['mobileno'] = $row[0]['mobileno'];
        $response['image'] = $base_url.$row[0]['image'];
        $response['email'] = $row[0]['email'];
        $response['address_name'] = $row[0]['address_name'];
    
        $response['error'] = false;
        $response['message'] ="Login Successfully.";
        echoRespnse(200, $response);
    } 
    else 
    {
        $response["error"] = true;
        $response['message'] = "Invalid OTP No!";
        echoRespnse(400, $response);
    }
});

/*-----------------------------Api forgot  password ------------------------------------*/
$app->post('/forgot_password', function () use ($app){

    verifyRequiredParams(array('mobile'));
    $mobile = $app->request->post('mobile');

    $db = new DbHandler();        
    $response = array();    
    
    if ($row = $db->check_mobileno($mobile))
    {
        $response['error'] = false;            
        $response['message'] ="Mobile Number Match";
        echoRespnse(200, $response);   

        $otp = rand(1000, 9999);

        $mysms = "OTP No - $otp";
        $mysmss = urlencode($mysms);
           /* $sms = url_encode($mysms); echo $sms; die;*/

       /* $url="contacts=".$mobile."&senderid=arriundby&msg=".$mysms."";*/
       
        /*$base_URL='http://kutility.in/app/smsapi/index.php?key=35C763328EF117&routeid=415&type=text&'.$url;*/



        $url="mobile=9898717741&pass=830c3008bfb14658807d3a3085fd34a4&senderid=SMSBUZ&to=".$mobile."&msg=".$mysmss."";
        $base_URL='http://trans.saurustechnology.com/smsstatuswithid.aspx?'.$url;

       // echo $base_URL; exit;


        $curl_handle=curl_init();
        curl_setopt($curl_handle,CURLOPT_URL,$base_URL);
        curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
        curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
        $result = curl_exec($curl_handle);
        curl_close($curl_handle);
        $message = $mysms;


    }
    else
    {
        
        $response['error'] = true;
        $response['message'] = "Mobile Number Not Match";
        echoRespnse(200,$response); 
    }
   
});

/*-----------------------------Api password otp check ------------------------------------*/
$app->post('/passwordotp_check', function () use ($app){

    
    verifyRequiredParams(array('mobile','otp'));
    $u_mobile = $app->request->post('mobile');
    $u_otp = $app->request->post('otp');
      
    $db = new DbHandler();        
    $response = array();    
    
    if ($row = $db->for_otp_check($u_mobile,$u_otp))
    {
        //$response['id'] = $id;
        $response['error'] = false;            
        $response['message'] ="Otp Check successfully.";
        echoRespnse(200, $response);   
    }
    else
    {
        
        $response['error'] = true;
        $response['message'] = "Otp Not Match";
        echoRespnse(200,$response); 
    }
   
});

/*-----------------------------Api add new password ------------------------------------*/
$app->post('/reset_password',function () use ($app){
     

    verifyRequiredParams(array('mobile','password'));
  
    $u_mobile = $app->request->post('mobile');      
    $password = $app->request->post('password');    
    //$conformpassword = $app->request->post('conformpassword');
      
    $db = new DbHandler();        
    $response = array();  
    global $u_id;
    
    if ($db->reset_password($u_mobile,$password))
    {
        //var_dump($password,$conformpassword); exit();
        $response['error'] = false;            
        $response['message'] ="Password Change successfully.";
        echoRespnse(200, $response);   

    }
    else
    {
        
        $response['error'] = true;
        $response['message'] = "Password Not Change successfully!";
        echoRespnse(400,$response); 
    }    
 
});

/*-----------------------------Api stock list ------------------------------------*/
$app->get('/stock_list',function () use ($app){
           
    
    $db = new DbHandler();
    $response = array();
    
    $base_url = $app->request->geturl() . "/cardeals/uploads/stock/400/";

    if($row=$db->stock_list())
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        { 
            
            $tmp = array();
            $tmp["stock_id"] = $value["stock_id"];   
            $tmp["car_name"] = $value["car_name"];  
            $tmp["mfg_name"] = $value["mfg_name"]; 
            $tmp["car_modal"] = $value["car_modal"];  
            $tmp["car_price"] = $value["car_price"]; 
            $tmp["kms_driven"] = $value["kms_driven"];
            $car_modal_year = date('d/m/Y',strtotime($value["car_modal_year"])); 
            $tmp["car_modal_year"] = $car_modal_year;
            $tmp["car_request_month"] = $value["car_request_month"];    
            $tmp["fuel_name"] = $value["fuel_name"]; 
            //$tmp["city_name"] = $value["city_name"]; 
            $created_date = date('d/m/Y',strtotime($value["created_date"])); 
            $tmp["created_date"] = $created_date;
            $tmp["owner_name"] = $value["owner_name"]; 
            $tmp["color_name"] = $value["color_name"];     


            $tmp["registation_year"] = $value["registation_year"]; 
            $tmp["geniun"] = $value["geniun"];     

            $expiry_year = date('d/m/Y',strtotime($value["expiry_year"])); 


            $tmp["expiry_year"] = $expiry_year;
            $tmp["registation_no"] = $value["registation_no"];    
            $tmp["min_price"] = $value["min_price"];      
            $tmp["modal_num"] = $value["modal_num"]; 

            $tmp["insurance_type"] = $value["insurance_type"]; 
            $tmp["variant"] = $value["variant"]; 
            $tmp["insurance"] = $value["insurance"]; 

            



            $tmp["images"] =  array(); 
            $tmp2 = array();
            $row1=$db->get_images($value['stock_id']);

            if($row1 == '' && empty($row1)){

                $tmp2["car_image"] = ""; 

                $tmp["image"] = ""; 

            }else{

                $row_ima=$db->get_images_first($value['stock_id']);

                //print_r($row_ima); exit;

                $tmp["image"] =  $base_url.$row_ima[2];        

                foreach ($row1 as $key => $val)  
                {
                    $tmp2["car_image"] = $base_url.$val['images'];            
                    array_push($tmp["images"],$tmp2);          
                }
            }   

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Stock list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Stock list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});


/*-----------------------------Api stock list image ------------------------------------*/

$app->post('/stock_list_image','authenticate',function () use ($app)
{// echo("werwer"); exit;
    verifyRequiredParams(array('id'));

    $id = $app->request->post('id');

    $db = new DbHandler();
    $response = array();
    
    $base_url = $app->request->geturl() . "/cardeals/uploads/stock/400/";

    if($row=$db->get_images($id))
    {

        //print_r($row); exit;
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {
            $tmp = array();
            $tmp["images"] =  $base_url.$value['images'];     
            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Stock image list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Stock list image Not successfully!";
        echoRespnse(400,$response); 
    }

});

/*----------------------------- add leads ------------------------------------*/

$app->post('/add_leads','authenticate',function () use ($app)
{
    verifyRequiredParams(array('full_name','mobile','badget','source_id','status_id','status'));

    
    $full_name = $app->request->post('full_name');
    $car_id = $app->request->post('stock_id');
    $email = $app->request->post('email');
    $mobile = $app->request->post('mobile');
    $alternate_mobileno = $app->request->post('alternate_mobileno');
   // $enter_locality = $app->request->post('enter_locality');
    $badget = $app->request->post('badget');
    $source_id = $app->request->post('source_id');
    $status_id = $app->request->post('status_id');
    $date = $app->request->post('date');
    $time = $app->request->post('time');
    $remarks = $app->request->post('remarks');
    $status = $app->request->post('status');
    $min_price = $app->request->post('min_price');

    $car_name = $app->request->post('car_name');
    $fuel_id = $app->request->post('fuel_id');

    $image = $app->request->post('image');

    //$color = $app->request->post('color');
    /*min_price*/

    $db = new DbHandler();
    $response = array();
    global $api_key;

    if(isset($_FILES['image'])){ 
        $image = image_data($_FILES['image']);
        //echo  $image; exit();
    }


    if($db->add_leads($full_name,$email,$mobile,$alternate_mobileno,$badget,$source_id,$status_id,$date,$time,$remarks,$api_key,$car_id,$status,$min_price,$car_name,$fuel_id,$image))    
    {
        $response['error'] = false;
        $response['message'] = "Add leads successfully.";
        echoRespnse(200,$response);
    } 
    else
    {
        $response['error'] = true;
        $response['message'] = "leads Not Add!";
        echoRespnse(400,$response); 
    }  
});


/*-----------------------------source list ------------------------------------*/
$app->get('/source_list',function () use ($app){
    $db = new DbHandler();
    $response = array();
    
    if($row=$db->source_list())
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {
            $tmp = array();
            $tmp["id"] = $value["id"];  
            $tmp["name"] = $value["name"];     

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Source list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Source list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});

/*-----------------------------requirement list ------------------------------------*/
$app->get('/requirement_list','authenticate',function () use ($app){
    $db = new DbHandler();
    $response = array();

    global $api_key;

    //echo "werwerwr"; exit;
    
    if($row=$db->requirement_list($api_key))
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {

           // print_r($value); exit;
            $tmp = array();
            $tmp["id"] = $value["id"];  
            $tmp["name"] = $value["name"]; 
            $tmp["mobileno"] = $value["mobileno"]; 
            $tmp["badget"] = $value["badget"];    
            $tmp["source_name"] = $value["source_name"];     
            $tmp["car_name"] = $value["car_name"];
            $tmp["fuel_name"] = $value["fuel_name"];
            $tmp["requirement_status"] = $value["requirement_status"];

            $created_date = date('d/m/Y',strtotime($value["created_date"])); 

            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;  

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Requirement list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Requirement list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});



/*-----------------------------lead all list ------------------------------------*/

$app->get('/leads_list','authenticate',function () use ($app){
           
    $db = new DbHandler();
    $response = array();
    global $api_key;
    if($row=$db->leads_list($api_key))
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        { 
            $tmp = array();
            $tmp["id"] = $value["leads_id"];
            $tmp["name"] = $value["leads_name"];
            $tmp["car_name"] = $value["car_name"];
            $tmp["enter_locality"] = $value["enter_locality"];
            $tmp["color"] = $value["color"];
            $tmp["badget"] = $value["badget"];
            $tmp["source_name"] = $value["source_name"];
            $tmp["status_name"] = $value["status_name"];
            $created_date = date('d/m/Y',strtotime($value["created_date"])); 

            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;  

            //$tmp["fuel_name"] = $value["fuel_name"];
            $tmp["mobileno"] = $value["mobileno"];

            $tmp["remarks"] = $value["remarks"];
            $tmp["email"] = $value["email"];
/*
            $tmp["leads_follow_up"] =  array(); 
            $tmp2 = array();
            $row1=$db->get_follow_up($value['leads_id']);

            if($row1 == '' && empty($row1)){

                $tmp2["follow"] = ""; 

            }else{

                foreach ($row1 as $key => $val)  
                {
                    $date = date('d/m/Y',strtotime($val["date"]));
                    $time = date('H:i a',strtotime($val["time"])); 

                    $tmp2["follow_up_date"] = $date; 
                    $tmp2["time"] = $time;  
                    $tmp2["remarks"] = $val['remarks'];         
                    array_push($tmp["leads_follow_up"],$tmp2);          
                }
            } */             
           
            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Leads list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Leads list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});


/*-----------------------------lead Follow up list ------------------------------------*/

$app->get('/leads_list_follow','authenticate',function () use ($app){
           
    $db = new DbHandler();
    $response = array();
    global $api_key;
    if($row=$db->leads_list_follow($api_key))
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {   //print_r($row); exit;
            $tmp = array();
            $tmp["id"] = $value["leads_id"];
            $tmp["name"] = $value["leads_name"];
            $tmp["car_name"] = $value["car_name"];
            $tmp["status_name"] = $value["status_name"];
            $tmp["enter_locality"] = $value["enter_locality"];
            $tmp["badget"] = $value["badget"];
            $tmp["source_name"] = $value["source_name"];
            $tmp["color"] = $value["color"];
            //$tmp["fuel_name"] = $value["fuel_name"];
            $tmp["mobileno"] = $value["mobileno"];

            $tmp["email"] = $value["email"];
            $tmp["remarks"] = $value["remarks"];

            $created_date = date('d/m/Y',strtotime($value["created_date"])); 

            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;  


/*
            $tmp["leads_follow_up"] =  array(); 
            $tmp2 = array();
            $row1=$db->get_follow_up($value['leads_id']);

            if($row1 == '' && empty($row1)){

                $tmp2["follow"] = ""; 

            }else{

                foreach ($row1 as $key => $val)  
                {
                    $date = date('d/m/Y',strtotime($val["date"]));
                    $time = date('H:i a',strtotime($val["time"])); 

                    $tmp2["follow_up_date"] = $date; 
                    $tmp2["time"] = $time;  
                    $tmp2["remarks"] = $val['remarks'];         
                    array_push($tmp["leads_follow_up"],$tmp2);          
                }
            }     */         

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Leads follow up list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Leads follow up list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});

/*-----------------------------lead complete list ------------------------------------*/

$app->get('/leads_list_complete','authenticate',function () use ($app){
           
    $db = new DbHandler();
    $response = array();
    global $api_key;

    $base_url = $app->request->geturl() . "/cardeals/uploads/delivered/";

   // echo $api_key; exit;
    if($row=$db->leads_list_complete($api_key))
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {  // print_r($row); exit;
            $tmp = array();
            $tmp["id"] = $value["leads_id"];
            $tmp["name"] = $value["leads_name"];
            $tmp["car_name"] = $value["car_name"];
            $tmp["enter_locality"] = $value["enter_locality"];
            $tmp["badget"] = $value["badget"];
             $tmp["color"] = $value["color"];
            $tmp["source_name"] = $value["source_name"];
           // $tmp["fuel_name"] = $value["fuel_name"];
            $tmp["status_name"] = $value["status_name"];
            $tmp["mobileno"] = $value["mobileno"];

            $tmp["email"] = $value["email"];
            $tmp["remarks"] = $value["remarks"];

            $created_date = date('d/m/Y',strtotime($value["created_date"])); 

            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;  



            $row1=$db->get_follow_data($value['leads_id']);

            if(isset($row1) &&  $row1 != ''){

                $tmp['image'] = $base_url.$row1;
            }else{
                $tmp['image'] = "";
            }

            /*$tmp["leads_follow_up"] =  array(); 
            $tmp2 = array();
            $row1=$db->get_follow_up($value['leads_id']);

            if($row1 == '' && empty($row1)){

                $tmp2["follow"] = ""; 

            }else{

                foreach ($row1 as $key => $val)  
                {
                    $date = date('d/m/Y',strtotime($val["date"]));
                    $time = date('H:i a',strtotime($val["time"])); 

                    $tmp2["follow_up_date"] = $date; 
                    $tmp2["time"] = $time;  
                    $tmp2["remarks"] = $val['remarks'];         
                    array_push($tmp["leads_follow_up"],$tmp2);          
                }
            } */             


            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Leads complete list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Leads complete list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});

/*-----------------------------lead cancel list ------------------------------------*/

$app->get('/leads_list_cancel','authenticate',function () use ($app){
           
    $db = new DbHandler();
    $response = array();
    global $api_key;

    $base_url = $app->request->geturl() . "/cardeals/uploads/delivered/";

    if($row=$db->leads_list_cancel($api_key))
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {   //print_r($row); exit;
            $tmp = array();
            $tmp["id"] = $value["leads_id"];
            $tmp["name"] = $value["leads_name"];
           // $tmp["car_name"] = $value["car_name"];
            $tmp["enter_locality"] = $value["enter_locality"];
            $tmp["badget"] = $value["badget"];
            $tmp["source_name"] = $value["source_name"];
            $tmp["status_name"] = $value["status_name"];
            //$tmp["color"] = $value["color"];
            //$tmp["fuel_name"] = $value["fuel_name"];
            $tmp["mobileno"] = $value["mobileno"];
            $created_date = date('d/m/Y',strtotime($value["created_date"])); 

            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;  
            $tmp["email"] = $value["email"];
            $tmp["remarks"] = $value["remarks"];

            $row1=$db->get_follow_data($value['leads_id']);

           // print_r($row1); exit;

            if($row1){ 

                $tmp['image'] = $base_url.$row1;
            }else{ 
                $tmp['image'] = "";
            }


           /* $tmp["leads_follow_up"] =  array(); 
            $tmp2 = array();
            $row1=$db->get_follow_up($value['leads_id']);

            if($row1 == '' && empty($row1)){

                $tmp2["follow"] = ""; 

            }else{

                foreach ($row1 as $key => $val)  
                {
                    $date = date('d/m/Y',strtotime($val["date"]));
                    $time = date('H:i a',strtotime($val["time"])); 

                    $tmp2["follow_up_date"] = $date; 
                    $tmp2["time"] = $time;  
                    $tmp2["remarks"] = $val['remarks'];         
                    array_push($tmp["leads_follow_up"],$tmp2);          
                }
            }        */

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Leads cancel list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Leads cancel list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});

/*-----------------------------follow up count  count------------------------------------*/
$app->get('/user_lead_count','authenticate',function () use ($app){
   
    $db = new DbHandler();
    $response = array();
    global $api_key;

    $tmp = array();
    $tmp['total_lead_all'] = $db->all_lead_count($api_key);

    $tmp['count_canceled_lead'] = $db->follow_up_count($api_key,'10');

    $tmp['count_canceled'] = $db->follow_up_count($api_key,'4');
    $tmp['count_completed'] = $db->follow_up_count($api_key,'6');
    $tmp['count_follow'] = $db->follow_up_count($api_key,'7'); 

    $response['lead_count'] = $tmp;
    $response['error'] = false;
    $response['message'] = "dashboard count successfully.";
    echoRespnse(200,$response);
      
});

/*-----------------------------follow up count  count------------------------------------*/
$app->get('/dashboard_count','authenticate',function () use ($app){
   
    $db = new DbHandler();
    $response = array();
    global $api_key;

    $tmp = array();
    $tmp['total_lead_all'] = $db->all_lead_count($api_key);
    $tmp['total_lead'] = $db->all_lead_count_monthly($api_key);
    $tmp['follow_up'] = $db->lead_count($api_key,'7');
    $tmp['count_stock'] = $db->stock_count(); 
    $tmp['today_leads'] = $db->leads_count_tody($api_key);
    $tmp['delivered'] = $db->lead_count_total($api_key,'4');
    $tmp['token_total'] = $db->lead_count_total($api_key,'6');

    $response['dashboard_count'] = $tmp;
    $response['error'] = false;
    $response['message'] = "dashboard count successfully.";
    echoRespnse(200,$response);
      
});



/*-----------------------------fuel list ------------------------------------*/
$app->get('/fuel_list',function () use ($app){
    $db = new DbHandler();
    $response = array();
    
    if($row=$db->fuel_list())
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {
            $tmp = array();
            $tmp["id"] = $value["id"];  
            $tmp["name"] = $value["name"];     

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Fuel list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Fuel list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});


/*-----------------------------Api user add leads ------------------------------------*/

$app->post('/update_leads','authenticate',function () use ($app)
{
    verifyRequiredParams(array('status_id','leads_id'));
   
    $leads_id = $app->request->post('leads_id');
    $status_id = $app->request->post('status_id');
    $date = $app->request->post('date');
    $time = $app->request->post('time');
    $remarks = $app->request->post('remarks');
    $amount = $app->request->post('amount');
    $image = $app->request->post('image');

    //$status = $app->request->post('status');

    $db = new DbHandler();
    $response = array();
    global $api_key;

    if($db->leads_check($leads_id)) 
    { 
        if(isset($_FILES['image'])){ 
            $image = image_data($_FILES['image']);
            //echo  $image; exit();
        }

        if($db->update_leads($leads_id,$status_id,$remarks,$amount,$image,$date,$time,$api_key))    
        { 
            $response['error'] = false;
            $response['message'] = "Update leads successfully.";
            echoRespnse(200,$response);
        } 
        else
        { 
            $response['error'] = true;
            $response['message'] = "leads Not Update!";
            echoRespnse(400,$response); 
        }  

    }
     else { 

        $response['error'] = true;
        $response['message'] = "Staff not available";
        echoRespnse(400,$response); 
    }
   
});

function image_data($file = array())
{   

    $app = \Slim\Slim::getInstance();
    
    $dir = dirname(dirname(dirname(__FILE__))) . "/uploads/delivered/";
    $errors = array();
    
    $path_parts = pathinfo($_FILES["image"]["name"]);
    $file_name = $path_parts['filename'].'_'.time().'.'.$path_parts['extension'];
    
    $file_size = $file['size'];
    $file_tmp = $file['tmp_name'];
    $file_type = $file['type'];
    
    $explode = explode('.', $file_name);
    $file_ext = strtolower(end($explode));
    $response = array();
    
    if (empty($errors) == true) 
    {
        move_uploaded_file($file_tmp, $dir . $file_name);
        return $file_name;
    }
}




/*-----------------------------delete notification ------------------------------------*/

$app->post('/delete_notification','authenticate',function () use ($app)
{
    verifyRequiredParams(array('id','table'));
   
    $id = $app->request->post('id');
    $table = $app->request->post('table');

    $db = new DbHandler();
    $response = array();
    global $api_key;

    if($db->delete_notification($id,$table,$api_key))    
    { 
        $response['error'] = false;
        $response['message'] = "Notification deleted succesfully";
        echoRespnse(200,$response);
    } 
    else
    { 
        $response['error'] = true;
        $response['message'] = "Notification failed to delete!";
        echoRespnse(400,$response); 
    }  
   
});


/*-----------------------------lead cancel ------------------------------------*/

$app->post('/lead_cancel','authenticate',function () use ($app)
{
    verifyRequiredParams(array('id','reasons'));
   
    $id = $app->request->post('id');
    $reasons = $app->request->post('reasons');

    $db = new DbHandler();
    $response = array();
    global $api_key;

    if($db->lead_cancel($id,$reasons))    
    { 
        $response['error'] = false;
        $response['message'] = "Lead cancel succesfully";
        echoRespnse(200,$response);
    } 
    else
    { 
        $response['error'] = true;
        $response['message'] = "Lead failed to cancel!";
        echoRespnse(400,$response); 
    }  
   
});

/*-----------------------------MFG list ------------------------------------*/
$app->get('/mfg_list',function () use ($app){
    $db = new DbHandler();
    $response = array();
    
    if($row=$db->mfg_list())
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {
            $tmp = array();
            $tmp["id"] = $value["id"];  
            $tmp["name"] = $value["name"];     

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "MFG list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "MFG list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});

/*-----------------------------Requirement list ------------------------------------*/
/*$app->get('/requirement_list',function () use ($app){
    $db = new DbHandler();
    $response = array();
    
    if($row=$db->requirement_list())
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {
            $tmp = array();
            $tmp["id"] = $value["id"];  
            $tmp["car_name"] = $value["car_name"];     

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Requirement list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Requirement list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});
*/

/*--------------------------------- Client Login Check-----------------*/

$app->post('/client_login',function () use ($app)
{
    verifyRequiredParams(array('token'));

    $token = $app->request->post('token');
  
    $db = new DbHandler();      

    if($row = $db->client_login($token)) 
    { 
        $response['client_id'] = $row;
        $response['error'] = false;
        $response['message'] ="Token Add Successfully.";
        echoRespnse(200, $response);
    }
});


/*-----------------------------user inquiry add ------------------------------------*/

$app->post('/add_inquiry',function () use ($app)
{
    verifyRequiredParams(array('name','mobile','email'));

    //$fuel_id = $app->request->post('fuel_id');
    $name = $app->request->post('name');
    $mobile = $app->request->post('mobile');
    $email = $app->request->post('email');


    $db = new DbHandler();
    $response = array();
    global $api_key;

    if($db->add_inquiry($name,$mobile,$email))    
    {
        $response['error'] = false;
        $response['message'] = "Add inquiry successfully.";
        echoRespnse(200,$response);
    } 
    else
    {
        $response['error'] = true;
        $response['message'] = "Inquiry not add!";
        echoRespnse(400,$response); 
    }  
});



/*-----------------------------Api key Check------------------------------------*/

function client_authenticate(\Slim\Route $route)
{
    // Getting request headers
    $headers = apache_request_headers();
    $response = array();
    $app = \Slim\Slim::getInstance();

    // Verifying Authorization Header
    if (isset($headers['Authorization'])) 
    {
        $db = new DbHandler();        
        $key = $headers['Authorization'];        
        
        if (!$key=$db->client_isValidApiKey($key)) 
        {            
            $response["error"] = true;
            $response["message"] = "Access Denied Invalid Id";
            echoRespnse(200, $response);
            $app->stop();
        } else {
            global $api_key;
            $api_key = $key["id"];
        }
    } else {
        // api key is missing in header
        $response["error"] = true;
        $response["message"] = "Api key is misssing";
        echoRespnse(200, $response);
        $app->stop();
    }
}

/*-----------------------------user notification list ------------------------------------*/

$app->get('/client_notification_list','client_authenticate',function () use ($app){

   // echo "erwerwer"; exit;
           
    $db = new DbHandler();
    $response = array();
    global $api_key;

  //  echo $api_key; exit();


    if($row=$db->client_notification_list($api_key))
    { 

        //print_r($row); exit;
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {   

            $tmp = array();
            $tmp["id"] = $value["id"];
            $tmp["car_name"] = $value["car_name"];
            $created_date = date('d/m/Y',strtotime($value["created_date"])); 
            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;     

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Client notification list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Client notification list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});


/*-----------------------------user delete notification  ------------------------------------*/

$app->delete('/delete_client_notification/:id','client_authenticate',function($id) use($app) {

    $db = new DbHandler();
    global $api_key;
    $response = array();

    if ($db->client_delete_notification($id,$api_key)) { 
        $response["error"] = false;
        $response["message"] = "Client notification deleted succesfully";
        echoRespnse(200, $response);
    } else {
        $response["error"] = true;
        $response["message"] = "Client notification failed to delete!";
        echoRespnse(400, $response);
    }
});



/*-----------------------------News list ------------------------------------*/
$app->get('/news_list','authenticate',function () use ($app){
    $db = new DbHandler();
    $response = array(); 
    global $api_key;

    if($row=$db->news_list())
    {

        $response["row"] = array();

        $status = $db->news_status($api_key);

        foreach ($row as $key => $value)  
        {
            //print_r($value);  exit;
            $tmp = array();
            $tmp["id"] = $value["id"];  
            $tmp["name"] = $value["name"];     
            $created_date = date('d/m/Y',strtotime($value["created_date"])); 
            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;  

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['status'] = $status;
        $response['message'] = "News list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "News list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});

/*-----------------------------news read ------------------------------------*/
$app->post('/news_read','authenticate',function () use ($app){
      
    $db = new DbHandler();        
    $response = array();  
    global $api_key;


    if($db->news_read($api_key))    
    {
        $response['error'] = false;
        $response['message'] = "News read successfully.";
        echoRespnse(200,$response);
    } 
    else
    {
        $response['error'] = true;
        $response['message'] = "News read Not successfully!";
        echoRespnse(400,$response); 
    }  
 
});

//************** no delete***********************************//
function echoRespnse($status_code, $response)
{
    $app = \Slim\Slim::getInstance();
    // Http response code
    $app->status($status_code);

    // setting response content type to json
    $app->contentType('application/json');


    echo json_encode($response);
}


/*-----------------------------lead notification list ------------------------------------*/
$app->get('/notification_list','authenticate',function () use ($app){
           
    $db = new DbHandler();
    $response = array();
    global $api_key;
    if($row=$db->notification_list($api_key))
    { 

        //print_r($row); exit;
        $response["row"] = array();
        $status = $db->notifica_status($api_key);
        foreach ($row as $key => $value)  
        {   

            $tmp = array();
            $tmp["id"] = $value["id"];
            $tmp["name"] = $value["name"];
            $tmp["status"] = $value["status"];
            $tmp["table_name"] = $value["table_name"];

            $created_date = date('d/m/Y',strtotime($value["created_date"])); 

            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;     

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['notifica_status'] = $status;
        $response['message'] = "Notification list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Notification list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});


/*--------------------------- exit -------------------------------------------*/


/*-----------------------------news read ------------------------------------*/
$app->post('/notification_read','authenticate',function () use ($app){
      
    $db = new DbHandler();        
    $response = array();  
    global $api_key;


    if($db->notification_read($api_key))    
    {
        $response['error'] = false;
        $response['message'] = "Notification read successfully.";
        echoRespnse(200,$response);
    } 
    else
    {
        $response['error'] = true;
        $response['message'] = "Notification read Not successfully!";
        echoRespnse(400,$response); 
    }  
 
});



/*-----------------------------lead cancel list ------------------------------------*/

$app->get('/leads_cancel_list','authenticate',function () use ($app){
           
    $db = new DbHandler();
    $response = array();
    global $api_key;
    if($row=$db->leads_cancel($api_key))
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {   //print_r($row); exit;
            $tmp = array();
            $tmp["id"] = $value["leads_id"];
            $tmp["name"] = $value["leads_name"];
            $tmp["car_name"] = $value["car_name"];
            $tmp["enter_locality"] = $value["enter_locality"];
            $tmp["badget"] = $value["badget"];
            $tmp["source_name"] = $value["source_name"];
            $tmp["status_name"] = $value["status_name"];
            $tmp["color"] = $value["color"];
            //$tmp["fuel_name"] = $value["fuel_name"];
            $tmp["mobileno"] = $value["mobileno"];
            $created_date = date('d/m/Y',strtotime($value["created_date"])); 

            $created_time = date('H:i a',strtotime($value["created_date"])); 

            $tmp["created_date"] = $created_date;
            $tmp["created_time"] = $created_time;  
            $tmp["email"] = $value["email"];
            $tmp["remarks"] = $value["remarks"];


            //$tmp["leads_follow_up"] =  array(); 
            //$tmp2 = array();
            
            // $row1=$db->get_follow_up($value['leads_id']);

            // if($row1 == '' && empty($row1)){

            //     $tmp2["follow"] = ""; 

            // }else{

            //     foreach ($row1 as $key => $val)  
            //     {
            //         $date = date('d/m/Y',strtotime($val["date"]));
            //         $time = date('H:i a',strtotime($val["time"])); 

            //         $tmp2["follow_up_date"] = $date; 
            //         $tmp2["time"] = $time;  
            //         $tmp2["remarks"] = $val['remarks'];         
            //         array_push($tmp["leads_follow_up"],$tmp2);          
            //     }
            // }        

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Leads cancel list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Leads cancel list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});


/*-----------------------------lead cancel ------------------------------------*/

$app->post('/leads_follow_up','authenticate',function () use ($app)
{
    verifyRequiredParams(array('id'));
   
    $id = $app->request->post('id');

    $db = new DbHandler();
    $response = array();
    global $api_key;

    if($row=$db->get_follow_up($id))
    {
        $response["row"] = array();

        foreach ($row as $key => $value)  
        {   
            $tmp = array();

            $date = date('d/m/Y',strtotime($value["date"]));
        
            $tmp["follow_up_date"] = $date; 
          
            $tmp["remarks"] = $value['remarks'];       

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Leads follow up list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Leads follow up list Not successfully!";
        echoRespnse(400,$response); 
    }
   
});


/*----------------------------- add leads ------------------------------------*/

$app->post('/requirement_update','authenticate',function () use ($app)
{
    verifyRequiredParams(array('id','status_id'));

    $id = $app->request->post('id');
    $status_id = $app->request->post('status_id');
    $remarks = $app->request->post('remarks');
    $amount = $app->request->post('amount');
    $date = $app->request->post('date');
    $time = $app->request->post('time');
    $image = $app->request->post('image');



    $db = new DbHandler();
    $response = array();
    global $api_key;

    if(isset($_FILES['image'])){ 
        $image = image_data($_FILES['image']);
        //echo  $image; exit();
    }


    if($db->requirement_update($status_id,$remarks,$amount,$date,$time,$image,$id))    
    {
        $response['error'] = false;
        $response['message'] = "Requirement Update successfully.";
        echoRespnse(200,$response);
    } 
    else
    {
        $response['error'] = true;
        $response['message'] = "Requirement Not Update!";
        echoRespnse(400,$response); 
    }  
});



/*-----------------------------lead Follow up list ------------------------------------*/

$app->get('/today_leads','authenticate',function () use ($app){
           
    $db = new DbHandler();
    $response = array();
    global $api_key;
    if($row=$db->leads_list_today($api_key))
    { 
        //print_r($row); exit;
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {
             
            $tmp2 = array();
            if ($row1=$db->follow_today($value['leads_id'])) 
            {
                //print_r($row1); exit;
                foreach ($row1 as $key => $val)  
                {
                    
                    $tmp2["id"] = $value["leads_id"];
                    $tmp2["staff_mobileno"] = $value["staff_mobileno"];
                    $tmp2["name"] = $value["leads_name"];
                    $tmp2["badget"] = $value["badget"];
                    $tmp2["enter_locality"] = $value["enter_locality"];
                    $tmp2["source_name"] = $value["source_name"];
                    $tmp2["status_name"] = $value["status_name"];
                    $tmp2["car_name"] = $value["car_name"];
                    $tmp2["color"] = $value["color"];
                    $tmp2["email"] = $value["email"];
                    //$tmp2["remarks"] = $value["remarks"];
                    $created_date = date('d/m/Y',strtotime($value["created_date"])); 
                    $created_time = date('H:i a',strtotime($value["created_date"])); 
                    $tmp2["created_date"] = $created_date;
                    $tmp2["created_time"] = $created_time;  

                    $date = date('d/m/Y',strtotime($val["date"]));
                    $time = date('H:i a',strtotime($val["time"])); 
                    
                    $tmp2["date"] = $date; 
                    $tmp2["time"] = $time;  
                    $tmp2["remarks"] = $val['remarks']; 
                    $tmp2["amount"] = $val['amount'];          
                    array_push($response["row"],$tmp2);          
                }
             }
        }

        $response['error'] = false;
        $response['message'] = "Leads follow up list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Leads follow up list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});



/*-----------------------------lead Follow up list ------------------------------------*/

$app->get('/popus_requirement','authenticate',function () use ($app){
           
    $db = new DbHandler();
    $response = array();
    global $api_key;
    $base_url = $app->request->geturl() . "/cardeals/uploads/stock/400/";      

    if($row=$db->popus_requirement($api_key))
    { 

        $response["row"] = array();
        foreach ($row as $key => $value)  
        {   
            //print_r($value); exit;
            $tmp = array();

            $image_data =  $db->get_images_first($value["StockId"]);

            if(isset($image_data) && !empty($image_data)){
                $image = $base_url.$image_data[2];
            }else{
                $image = "";
            }   

            $tmp["stock_id"] = $value["stock_id"];   
            $tmp["mobileno"] = $value["mobileno"];
            $tmp["car_name"] = $value["car_name"];  
            $tmp["mfg_name"] = $value["mfg_name"]; 
            //$tmp["car_modal"] = $value["car_modal"];  
            $tmp["car_price"] = $value["car_price"]; 
            $tmp["kms_driven"] = $value["kms_driven"];
            //$car_modal_year = date('d/m/Y',strtotime($value["car_modal_year"])); 
            //$tmp["car_modal_year"] = $car_modal_year;
            //$tmp["car_request_month"] = $value["car_request_month"];    
            $tmp["fuel_name"] = $value["fuel_name"]; 
            //$tmp["city_name"] = $value["city_name"]; 
            $created_date = date('d/m/Y',strtotime($value["created_date"])); 
            $tmp["created_date"] = $created_date;
            $tmp["owner_name"] = $value["owner_name"]; 
            $tmp["color_name"] = $value["color_name"];     


            $tmp["registation_year"] = $value["registation_year"]; 
            $tmp["geniun"] = $value["geniun"];     

            $expiry_year = date('d/m/Y',strtotime($value["expiry_year"])); 


            $tmp["expiry_year"] = $expiry_year;
            $tmp["registation_no"] = $value["registation_no"];    
            $tmp["min_price"] = $value["min_price"];      
            $tmp["modal_num"] = $value["modal_num"]; 
            $tmp["image"] = $image;  


            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Requirement car list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Requirement car list Not successfully!";
        echoRespnse(400,$response); 
    }
      
});

/*-----------------------------news read ------------------------------------*/
$app->get('/popus_requirement_read','authenticate',function () use ($app){
      
    $db = new DbHandler();        
    $response = array();  
    global $api_key;


    if($db->popus_requirement_delete($api_key))    
    {
        $response['error'] = false;
        $response['message'] = "Popus requirement read successfully.";
        echoRespnse(200,$response);
    } 
    else
    {
        $response['error'] = true;
        $response['message'] = "Popus requirement read Not successfully!";
        echoRespnse(400,$response); 
    }  
 
});

/*-----------------------------banner list ------------------------------------*/
$app->get('/client_banner_list',function () use ($app){
    $db = new DbHandler();
    $response = array();

    $banner_url = $app->request->geturl() . "/cardeals/uploads/banner/";      
    
    if($row=$db->banner_get())
    {
        $response["row"] = array();
        foreach ($row as $key => $value)  
        {
            $tmp = array();
            $tmp["id"] = $value["id"];  
            $tmp["image"] = $banner_url.$value["image"];        

            array_push($response["row"],$tmp);
        }

        $response['error'] = false;
        $response['message'] = "Banner list successfully.";
        echoRespnse(200,$response);
    }
    else
    {
        $response['error'] = true;
        $response['message'] = "Banner list Not successfully!";
        echoRespnse(200,$response); 
    }
      
});



$app->run();
?>