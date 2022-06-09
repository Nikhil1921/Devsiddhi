<?php
class DbHandler
{   
    private $conn;

    function __construct()
    {
        require_once dirname(__FILE__) . '/DbConnect.php';        
        $db = new DbConnect();
        $this->conn = $db->connect();
        date_default_timezone_set("Asia/Kolkata");
    } 

/*---------------------------------Api key Check-----------------------------------*/
public function isValidApiKey($api_key)
{        
    $sql = "SELECT id FROM tbl_staff WHERE id = '$api_key'";
    $data = mysqli_query($this->conn,$sql);
    
    if(mysqli_num_rows($data)>0)
    {        
        return $key = mysqli_fetch_assoc($data);
    }
    else
    {
        return false;
    }
}

/*---------------------------------Login Check-----------------------------------*/
public function login($mobile,$token)
{       
    $sql = "SELECT tbl_staff.*,tm_address.name as address_name FROM tbl_staff  left join tm_address
        on tm_address.id=tbl_staff.address   where tbl_staff.mobileno='$mobile' AND tbl_staff.status='1'";

    $result = mysqli_query($this->conn,$sql);    
    $row=mysqli_fetch_all($result,MYSQLI_ASSOC);


    //print_r($row); exit;
     
    if(!empty($row))
    {
        $mobile_otp = rand(1000, 9999);
        $mobile=$row[0]['mobileno'];
        $otp='OTP-'.$mobile_otp;
        $id = $row[0]['id'];
        
    
        $sql2 = "UPDATE tbl_staff set mobile_otp = '$mobile_otp',`token`='$token' where  id= '$id'"; 
        $query2 =mysqli_query($this->conn,$sql2); 


        $mysms = "OTP No - $otp";
        $mysmss = urlencode($mysms);
       

        $url="mobile=9898717741&pass=830c3008bfb14658807d3a3085fd34a4&senderid=SMSBUZ&to=".$mobile."&msg=".$mysmss."";
        $base_URL='http://trans.saurustechnology.com/smsstatuswithid.aspx?'.$url;



       /* $url="Userid=IPOMOC&UserPassword=ipo123&PhoneNumber=".$mobile."&Text=".$otp."&GSM=IPOMOC";
        $base_URL='http://ip.shreesms.net/smsserver/SMS10N.aspx?'.$url;*/

        $curl_handle=curl_init();
        curl_setopt($curl_handle,CURLOPT_URL,$base_URL);
        curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
        curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
        $result = curl_exec($curl_handle);        
        curl_close($curl_handle);

        return $row;
    }
    else
    {
        return false;
    }
}
    
/*--------------------------------- otp Login Check-----------------------------------*/    
public function otp_check($mobile_otp,$mobile_no)
{    
   //$sql = "SELECT * from tbl_staff where mobile_otp = '$mobile_otp' AND mobileno = '$mobile_no'";  

   $sql = "SELECT tbl_staff.*,tm_address.name as address_name FROM tbl_staff  left join tm_address
        on tm_address.id=tbl_staff.address   where tbl_staff.mobileno='$mobile_no' AND tbl_staff.mobile_otp = '$mobile_otp' AND tbl_staff.status='1'";

   $result = mysqli_query($this->conn,$sql);        
    if(mysqli_num_rows($result)>0)
    { 
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
        return $row;
    }
    else
    {
        return false;
    }
}


/*--------------------------------- otp mobileno -----------------------------------*/    
public function check_mobileno($mobile)
{

    $sql = "SELECT id,mobileno from tbl_staff where mobileno='$mobile' AND status='1' "; 
    $data = mysqli_query($this->conn,$sql);   

    if(mysqli_num_rows($data)>0)
    {            
        $row=mysqli_fetch_row($data);

        $u_id = $row[0];
        $u_mobile = $row[1];
       
        $otp = substr(number_format(time() * rand(),0,'',''),0,6);
         
        $sql_up = "UPDATE `tbl_staff` SET `mobile_otp`='$otp' WHERE mobileno = '$u_mobile'";

        $up_data = mysqli_query($this->conn,$sql_up);          
        
        $row_array = array('otp' => $otp,
                        'u_id' => $u_id,
            );

        if($up_data)
        {
            return $row_array;
        }
        else
        {
            return false;
        }
             
    }
    else{
        return false;
    }   
}

public function for_otp_check($u_mobile,$u_otp)
{    
   $sql = "SELECT * from tbl_staff where mobileno = '$u_mobile' and mobile_otp='$u_otp'";   
   
   $result = mysqli_query($this->conn,$sql);        
    if(mysqli_num_rows($result)>0)
    { 
        $row=mysqli_fetch_row($result);
        return $row;
    }
    else
    {
        return false;
    }
}

public function reset_password($u_mobile,$password_new)
{
    $password = md5($password_new);
    $sql = "UPDATE tbl_staff set password ='$password' where mobileno='$u_mobile'";
    $query2 =mysqli_query($this->conn,$sql);

    if($query2)
    {
    return true;
    }
    else
    {
        return  false;
    }
} 

public function stock_list()
{
    $sql ="SELECT   tbl_stock.id as stock_id, 
                    tbl_stock.variant,
                    tbl_stock.insurance,
                    tbl_stock.car_name,
                    tbl_stock.make as car_modal,
                    tbl_stock.market_price as car_price,
                    tbl_stock.kms_driven,
                    tbl_stock.mfg_year as car_modal_year,
                    tbl_stock.created_date,
                    tbl_stock.color as color_name,
                    tbl_stock.car_request_month,

                    tbl_stock.registation_date as registation_year,
                    tbl_stock.geniun,
                    tbl_stock.expiry_date as expiry_year,
                    tbl_stock.registation_no,
                    tbl_stock.min_price,
                    tbl_stock.modal_num,
                    tbl_mfg.name as mfg_name,
                    tbl_insurance.insurance_type,



    tbl_fuel.name as fuel_name,tbl_city.name as city_name,tbl_owner.name as owner_name




        FROM tbl_stock
        left join tbl_mfg
        on tbl_mfg.id=tbl_stock.mfg_id

         left join tbl_insurance
        on tbl_insurance.id=tbl_stock.insurance_id

        left join tbl_fuel
        on tbl_fuel.id=tbl_stock.fuel_id
        left join tbl_city
        on tbl_city.id = tbl_stock.city_id 
        left join tbl_owner
        on tbl_owner.id = tbl_stock.owner_id WHERE tbl_stock.status='active' order by tbl_stock.id desc";


    $result = mysqli_query($this->conn,$sql);        

    if($result)
    {   
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);  
          
        return $row;
    }
    else
    {
        return false;
    }  
}

public function get_images($stock_id){ 

    $sql = "SELECT * from tm_stock_image where stock_id = '$stock_id'";  
   
    $result = mysqli_query($this->conn,$sql);        
    if(mysqli_num_rows($result)>0)
    { 
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
        return $row;
    }
    else
    {
        return false;
    }
}

public function staff_details($staff_id){ 

    $sql ="SELECT tbl_staff.*,tm_address.name as name_address,tm_address.link,tm_address.branch_name

        FROM tbl_staff 
        left join tm_address
        on tm_address.id=tbl_staff.address
         
        WHERE tbl_staff.id='$staff_id'"; 

    //$sql = "SELECT * from tbl_staff where id = '$staff_id'";  
   
    $result = mysqli_query($this->conn,$sql);        
    if(mysqli_num_rows($result)>0)
    { 
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
        return $row;
    }
    else
    {
        return false;
    }
}


public function add_leads($full_name,$email,$mobile,$alternate_mobileno,$badget,$source_id,$status_id,$date,$time,$remarks,$api_key,$car_id,$status,$min_price,$car_name,$fuel_id,$image)
{  
    $details = $this->staff_details($api_key);

    //print_r($details); exit;

    $address = $details[0]['name_address'];
    $link = $details[0]['link'];
    $branch_name = $details[0]['branch_name'];

    $name = $details[0]['name'];
    $mobileno = $details[0]['mobileno'];

    $date_tday = date("Y-m-d H:i:s");
   
   
    $sql1 = "INSERT INTO tbl_leads(name,email,staff_id,status_id,mobileno,alternate_mobileno,badget,source_id,created_date,update_date,car_id,status,min_price,car_name,fuel_id,remarks) VALUES('$full_name','$email','$api_key','$status_id','$mobile','$alternate_mobileno','$badget','$source_id','$date_tday','$date_tday','$car_id','$status','$min_price','$car_name','$fuel_id','$remarks')";
    $result1 = mysqli_query($this->conn,$sql1);  
    $last_id = $this->conn->insert_id;

    /*if($car_id == 4){
        
        $sql_up = "UPDATE `tbl_stock` SET `status`='inactive' WHERE id = '$car_id'";
        $up_data = mysqli_query($this->conn,$sql_up); 
    }*/

    if ($result1) 
    { //echo "werwerwer"; exit;
        //$mysms = "Welcome to your lead created in cardeals";$address
        //$mysms= "Visit our Showroom Address Shree Ram Motors".$address."Contact persons".$name.$mobileno;

        // $status_up = "UPDATE `tbl_staff` SET `notification_status`='1'";
        // $up_status = mysqli_query($this->conn,$status_up); 

        if($status_id == 4 && $status == 'lead'){ 
            //echo "werwer123"; exit;

            $mysms= "Thank You For Choosing Shree Ram Motors for Buy your favorite Car. We are very happy to serve you!";

            $mess = urlencode($mysms);

            $url="Userid=QUKJOY&UserPassword=quk123&PhoneNumber=".$mobileno."&Text=".$mess."&GSM=QUKJOY";
            $base_URL='http://ip.shreesms.net/smsserver/SMS10N.aspx?'.$url;

            $curl_handle=curl_init();
            curl_setopt($curl_handle,CURLOPT_URL,$base_URL);
            curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
            curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
            $result = curl_exec($curl_handle);        
            curl_close($curl_handle);
            $base_URL;

        } else if($status_id == 7 && $status == 'lead' || $status_id == 6 && $status == 'lead') { 
            //echo "else if"; exit;
            $mysms= "Thank You for Visiting Shree Ram Motors Branch Name-".$branch_name." We are happy to Serve you.You can contact ".$name."-".$mobileno." for any further details. www.shreerammotors.in Location - ".$link;

            // echo $mysms; exit;

            $mess = urlencode($mysms);

            $url="Userid=QUKJOY&UserPassword=quk123&PhoneNumber=".$mobile."&Text=".$mess."&GSM=QUKJOY";
            $base_URL='http://ip.shreesms.net/smsserver/SMS10N.aspx?'.$url;

            $curl_handle=curl_init();
            curl_setopt($curl_handle,CURLOPT_URL,$base_URL);
            curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
            curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
            $result = curl_exec($curl_handle);        
            curl_close($curl_handle);
            $base_URL;
               

        } else {  
           // echo "else"; exit;

                $mysms1 = "Thank You for Visit Shree Ram Motors! We found that we have not a Car which you require. We will surely contact you once your require Car will available.Thank You";

                $mess1 = urlencode($mysms1);

                $url1="Userid=QUKJOY&UserPassword=quk123&PhoneNumber=".$mobile."&Text=".$mess1."&GSM=QUKJOY";
                $base_URL1='http://ip.shreesms.net/smsserver/SMS10N.aspx?'.$url1;

                $curl_handle=curl_init();
                curl_setopt($curl_handle,CURLOPT_URL,$base_URL1);
                curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
                curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
                $result = curl_exec($curl_handle);        
                curl_close($curl_handle);
                $base_URL1;

        }

        if(isset($date) && $date != ''){

            $follow_date = date("Y-m-d", strtotime($date));

            $subtr_time = '00:05:00';
            $startTime = new DateTime($time);
            $endTime = new DateTime($subtr_time);
            $duration = $startTime->diff($endTime); //$duration is a DateInterval object
            $time_set = $duration->format("%H:%I:%S");

            $follow_leads = "INSERT INTO tm_leads_follow_up(leads_id,date,time,remarks,created_date,update_date,set_time,images,status) VALUES('$last_id','$follow_date','$time','$remarks','$date_tday','$date_tday','$time_set','$image','true')";
            $result1 = mysqli_query($this->conn,$follow_leads);  

        }
        
       return true;
    }
    else
    {
        return false;
    }
}


public function requirement_update($status_id,$remarks,$amount,$date,$time,$image,$id){

    $date_tday = date("Y-m-d H:i:s");

    $sql_up = "UPDATE `tbl_leads` SET `status`='lead','status_id'='$status_id' WHERE id = '$id'";
    $up_data = mysqli_query($this->conn,$sql_up); 

    if($up_data){
          
        $follow_leads = "INSERT INTO tm_leads_follow_up(leads_id,date,time,remarks,created_date,update_date,images) VALUES('$id','$date','$time','$remarks','$date_tday','$date_tday','$image')";
        $result1 = mysqli_query($this->conn,$follow_leads);  

        return true;
    }
    else
    {
        return false;
    }

}


/*-----------------------------leads List------------------------------------*/
public function leads_list($staff_id)
{   

    $sql ="SELECT tbl_leads.id as leads_id,tbl_leads.name as leads_name,tbl_leads.enter_locality as enter_locality,tbl_leads.badget,tbl_leads.created_date,tbl_source.name as source_name,tbl_status.name as status_name,tbl_leads.status_id,tbl_stock.car_name,tbl_leads.mobileno,tbl_leads.status,tbl_stock.color,tbl_leads.email,tbl_leads.remarks

        FROM tbl_leads 
        left join tbl_staff
        on tbl_staff.id=tbl_leads.staff_id

        left join tbl_stock
        on tbl_stock.id=tbl_leads.car_id

        
        left join tbl_source
        on tbl_source.id=tbl_leads.source_id
        left join tbl_status
        on tbl_status.id=tbl_leads.status_id  WHERE tbl_leads.staff_id='$staff_id' AND tbl_leads.status='lead'
        order by tbl_leads.id desc";

        $result = mysqli_query($this->conn,$sql);       
        
        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
            return $row;
        }
        else
        {
            return false;
        } 
    
}

/*-----------------------------leads complete List------------------------------------*/
public function leads_list_complete($staff_id)
{   

    $sql ="SELECT tbl_leads.id as leads_id,tbl_leads.name as leads_name,tbl_leads.enter_locality as enter_locality,tbl_leads.badget,tbl_leads.created_date,tbl_source.name as source_name,tbl_status.name as status_name,tbl_leads.status_id,tbl_stock.car_name, tbl_leads.mobileno,tbl_leads.status,tbl_stock.color,tbl_leads.email,tbl_leads.remarks
        FROM tbl_leads 
        left join tbl_staff
        on tbl_staff.id=tbl_leads.staff_id
        left join tbl_stock
        on tbl_stock.id=tbl_leads.car_id
        left join tbl_source
        on tbl_source.id=tbl_leads.source_id
        left join tbl_status
        on tbl_status.id=tbl_leads.status_id  WHERE tbl_leads.status_id=6 AND tbl_leads.staff_id='$staff_id' AND tbl_leads.status='lead'
        order by tbl_leads.id desc";

        $result = mysqli_query($this->conn,$sql);       
        
        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
            return $row;
        }
        else
        {
            return false;
        } 
    
}

/*-----------------------------leads cancel List------------------------------------*/
public function leads_list_cancel($staff_id)
{   

    $sql ="SELECT tbl_leads.id as leads_id,tbl_leads.name as leads_name,tbl_leads.enter_locality as enter_locality,tbl_leads.badget,tbl_leads.created_date,tbl_source.name as source_name,tbl_status.name as status_name,tbl_leads.status_id, tbl_leads.mobileno,tbl_leads.status,tbl_leads.email,tbl_leads.remarks

  /*  tbl_stock.color, tbl_stock.car_name,*/

        FROM tbl_leads 
        left join tbl_staff
        on tbl_staff.id=tbl_leads.staff_id
        -- left join tbl_fuel
        -- on tbl_fuel.id=tbl_leads.fuel_id
        -- left join tbl_stock
        -- on tbl_stock.id=tbl_leads.car_id
        left join tbl_source
        on tbl_source.id=tbl_leads.source_id
        left join tbl_status
        on tbl_status.id=tbl_leads.status_id  WHERE tbl_leads.status_id=4 AND tbl_leads.staff_id='$staff_id' AND tbl_leads.status='lead'
        order by tbl_leads.id desc"; 

        /*WHERE tbl_leads.status_id=7*/

        $result = mysqli_query($this->conn,$sql);       
        
        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
            return $row;
        }
        else
        {
            return false;
        } 
    
}

/*-----------------------------leads Follow up List------------------------------------*/
public function leads_list_follow($staff_id)
{   

    $sql ="SELECT tbl_leads.id as leads_id,tbl_leads.name as leads_name,tbl_leads.enter_locality as enter_locality,tbl_leads.badget,tbl_leads.created_date,tbl_source.name as source_name,tbl_status.name as status_name,tbl_leads.status_id,tbl_stock.car_name, tbl_leads.mobileno,tbl_leads.status,tbl_stock.color,tbl_leads.email,tbl_leads.remarks
        FROM tbl_leads 
        left join tbl_staff
        on tbl_staff.id=tbl_leads.staff_id
        left join tbl_stock
        on tbl_stock.id=tbl_leads.car_id
        left join tbl_source
        on tbl_source.id=tbl_leads.source_id
        left join tbl_status
        on tbl_status.id=tbl_leads.status_id  WHERE tbl_leads.status_id=7 AND tbl_leads.staff_id='$staff_id' AND tbl_leads.status='lead'
        order by tbl_leads.id desc"; 

        $result = mysqli_query($this->conn,$sql);       
        
        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
            return $row;
        }
        else
        {
            return false;
        } 
    
}

/*-----------------------------follow List------------------------------------*/

public function get_follow_up($leads_id){

    $sql = "SELECT  * FROM  tm_leads_follow_up WHERE leads_id='$leads_id' order by id desc";
    $result = mysqli_query($this->conn,$sql);       
    
    if($result)
    {   
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
        return $row;
    }
    else
    {
        return false;
    } 

}


public function follow_up_count($staff_id,$status_id){

    $sql = "SELECT count(id) as canceled_total FROM `tbl_leads` WHERE `staff_id` = '$staff_id' AND `status_id` = '$status_id' AND status='lead'";  

    $result = mysqli_query($this->conn,$sql); 

    // print_r($result); exit;   
    
    if($result)
    {  
        $row=mysqli_fetch_row($result);            
        return $row[0];
    }
    else
    {
        return false;
    } 

}
public function lead_count($staff_id,$status_id){

    $sql = "SELECT count(id) as follow_total FROM `tbl_leads` WHERE `staff_id` = '$staff_id' AND status='lead' AND `status_id` = '$status_id' AND MONTH(created_date) = MONTH(CURRENT_DATE())";

    $result = mysqli_query($this->conn,$sql);    
    
    if($result)
    {  
        $row=mysqli_fetch_row($result);            
        return $row[0];
    }
    else
    {
        return false;
    } 

}

public function lead_count_total($staff_id,$status_id){

    $sql = "SELECT count(id) as follow_total FROM `tbl_leads` WHERE `staff_id` = '$staff_id' AND status='lead' AND `status_id` = '$status_id'";

    $result = mysqli_query($this->conn,$sql);    
    
    if($result)
    {  
        $row=mysqli_fetch_row($result);            
        return $row[0];
    }
    else
    {
        return false;
    } 

}


/*public function token_count($staff_id){

    $sql = "SELECT count(id) as token_total FROM `tbl_staff` WHERE `staff_id` = '$staff_id' AND token != ''";

    $result = mysqli_query($this->conn,$sql);    
    
    if($result)
    {  
        $row=mysqli_fetch_row($result);            
        return $row[0];
    }
    else
    {
        return false;
    } 

}*/

public function all_lead_count_monthly($staff_id){

    $sql = "SELECT count(id) as all_follow_total FROM `tbl_leads` WHERE `staff_id` = '$staff_id' AND status='lead' AND MONTH(created_date) = MONTH(CURRENT_DATE())";

    $result = mysqli_query($this->conn,$sql);    
    
    if($result)
    {  
        $row=mysqli_fetch_row($result);            
        return $row[0];
    }
    else
    {
        return false;
    } 

}

public function all_lead_count($staff_id){

    $sql = "SELECT count(id) as all_follow_total FROM `tbl_leads` WHERE `staff_id` = '$staff_id' AND status='lead'";

    $result = mysqli_query($this->conn,$sql);    
    
    if($result)
    {  
        $row=mysqli_fetch_row($result);            
        return $row[0];
    }
    else
    {
        return false;
    } 

}

public function stock_count(){

    $sql = "SELECT count(id) as stock_count FROM `tbl_stock` WHERE status='active'";

    $result = mysqli_query($this->conn,$sql);    
    
    if($result)
    {  
        $row=mysqli_fetch_row($result);            
        return $row[0];
    }
    else
    {
        return false;
    } 

}

/*-----------------------------source List------------------------------------*/
public function source_list()
{
    $sql = "SELECT  * FROM  tbl_source order by id desc";
    $result = mysqli_query($this->conn,$sql);       
    
    if($result)
    {   
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
        return $row;
    }
    else
    {
        return false;
    } 
    
}

/*-----------------------------news List------------------------------------*/
public function news_list()
{
    $sql = "SELECT  * FROM  tbl_news order by id desc";
    $result = mysqli_query($this->conn,$sql);       
    
    if($result)
    {   
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
        return $row;
    }
    else
    {
        return false;
    } 
    
}

/*-----------------------------fuel List------------------------------------*/
public function fuel_list()
{
    $sql = "SELECT  * FROM  tbl_fuel order by id desc";
    $result = mysqli_query($this->conn,$sql);       
    
    if($result)
    {   
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
        return $row;
    }
    else
    {
        return false;
    } 
    
}

/*-----------------------------mfg List------------------------------------*/
public function mfg_list()
{
    $sql = "SELECT  * FROM  tbl_mfg order by id desc";
    $result = mysqli_query($this->conn,$sql);       
    
    if($result)
    {   
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
        return $row;
    }
    else
    {
        return false;
    } 
    
}

public function leads_count_tody($staff_id){

    $date_date = date('Y-m-d');

    $sql = "SELECT count(id) as leads_count FROM `tbl_leads` WHERE date(created_date)='$date_date' AND status='lead' AND staff_id='$staff_id'";
 
    $result = mysqli_query($this->conn,$sql);    
    
    if($result)
    {  
        $row=mysqli_fetch_row($result);            
        return $row[0];
    }
    else
    {
        return false;
    } 

}

public function leads_check($leads_id){

    $sql = "SELECT * from tbl_leads where id = '$leads_id'";    
    $result = mysqli_query($this->conn,$sql);        
    if(mysqli_num_rows($result)>0)
    { 
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
        return $row;
    }
    else
    {
        return false;
    }
}


public function update_leads($leads_id,$status_id,$remarks,$amount,$image,$date,$time,$api_key)
{

   /* $details = $this->staff_details($api_key);

    $address = $details[0]['name_address'];
    $link = $details[0]['link'];
    $branch_name = $details[0]['branch_name'];
    $name = $details[0]['name'];
    $mobileno = $details[0]['mobileno'];
    $date_tday = date("Y-m-d H:i:s");*/

    $sql = "SELECT  * FROM  tbl_leads where id=$leads_id";
    $result = mysqli_query($this->conn,$sql);   
    $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
    $car_id = $row[0]['car_id'];
    $mobileno = $row[0]['mobileno'];

    //print_r($row); exit;
    if($status_id == 4){ 
        
        // $sql_up = "UPDATE `tbl_stock` SET `status`='inactive' WHERE id = '$car_id'";
        // $up_data = mysqli_query($this->conn,$sql_up); 


        $mysms= "Thank You For Choosing Shree Ram Motors for Buy your favorite Car. We are very happy to serve you!";

        $mess = urlencode($mysms);

        $url="Userid=QUKJOY&UserPassword=quk123&PhoneNumber=".$mobileno."&Text=".$mess."&GSM=QUKJOY";
        $base_URL='http://ip.shreesms.net/smsserver/SMS10N.aspx?'.$url;

        $curl_handle=curl_init();
        curl_setopt($curl_handle,CURLOPT_URL,$base_URL);
        curl_setopt($curl_handle,CURLOPT_CONNECTTIMEOUT,2);
        curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
        $result = curl_exec($curl_handle);        
        curl_close($curl_handle);
        $base_URL;

    }

    $follow_date = date("Y-m-d H:i:s");

    $sql_up = "UPDATE `tbl_leads` SET `status_id`='$status_id',`status`='lead',update_date='$follow_date',remarks='$remarks' WHERE id = '$leads_id'";
    $up_data = mysqli_query($this->conn,$sql_up); 



    $sqlup = "UPDATE `tm_leads_follow_up` SET `status`='false' WHERE leads_id = '$leads_id'";
    $updata = mysqli_query($this->conn,$sqlup); 


    $follow_date = date("Y-m-d", strtotime($date));

    if(isset($image) && $image != ''){
        $follow_leads = "INSERT INTO tm_leads_follow_up(leads_id,remarks,amount,created_date,update_date,images,date,time,status) VALUES('$leads_id','$remarks','$amount','$follow_date','$follow_date','$image','$date','$time','true')"; 

        $result1 = mysqli_query($this->conn,$follow_leads);  

    }else{

        $subtr_time = '00:05:00';
        $startTime = new DateTime($time);
        $endTime = new DateTime($subtr_time);
        $duration = $startTime->diff($endTime); 
        $time_set = $duration->format("%H:%I:%S");

        $follow_leads = "INSERT INTO tm_leads_follow_up(leads_id,remarks,amount,created_date,update_date,date,time,set_time,status) VALUES('$leads_id','$remarks','$amount','$follow_date','$follow_date','$date','$time','$time_set','true')"; 

        $result1 = mysqli_query($this->conn,$follow_leads);  
    }

    if($result1){
        return true;
    }else{
        return false;
    }
             
}






public function car_list(){ 

   /* $date_date = date('Y-m-d');

    $sql = "SELECT id,car_name as name,status,created_date FROM `tbl_stock` WHERE date(created_date)='$date_date' AND status='active'";
 
    $result = mysqli_query($this->conn,$sql);  

    $row=mysqli_fetch_all($result,MYSQLI_ASSOC);          */  


    $date_date = date('Y-m-d');

    $get_sql = "SELECT id,stock_notification_id FROM `tbl_staff` WHERE status=1 ";

    $result = mysqli_query($this->conn,$get_sql);  

    $get_row=mysqli_fetch_all($result,MYSQLI_ASSOC);   

    $notification_id = $get_row[0]['stock_notification_id'];

    if(isset($notification_id) && $notification_id != ''){ 

        $sql = "SELECT id,car_name as name,status,created_date,table_name FROM `tbl_stock` WHERE date(created_date)='$date_date' AND status='active' AND
        id NOT IN (".$notification_id.") order by id desc ";
     
        $result = mysqli_query($this->conn,$sql);  

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);   

    }else{

        $sql = "SELECT id,car_name as name,status,created_date,table_name FROM `tbl_stock` WHERE date(created_date)='$date_date' AND status='active' order by id desc ";
     
        $result = mysqli_query($this->conn,$sql);  

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);  


    }

    return $row;

}


/*-----------------------------mfg List------------------------------------*/
/*public function requirement_list()
{
    $sql = "SELECT  * FROM  tbl_leads where status='requirement' order by id desc";
    $result = mysqli_query($this->conn,$sql);       
    
    if($result)
    {   
        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
        return $row;
    }
    else
    {
        return false;
    } 
    
}*/



/*--------------------------------------------------------------------*/
/*--------------------------------- Client App API   -----------------*/
/*---------------------------------------------------------------------*/


/*---------------------------------Api key Check-----------------------------------*/

public function client_isValidApiKey($api_key)
{        
    $sql = "SELECT id FROM tbl_client WHERE id = '$api_key'";
    $data = mysqli_query($this->conn,$sql);
    
    if(mysqli_num_rows($data)>0)
    {        
        return $key = mysqli_fetch_assoc($data);
    }
    else
    {
        return false;
    }
}


/*--------------------------------- Client Login Check-----------------*/

public function client_login($token)
{       

    $date = date("Y-m-d H:i:s");

    $sql = "SELECT * FROM tbl_client where token='$token'";
    $result = mysqli_query($this->conn,$sql);    
    $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
     
    if(empty($row))
    {
        $inset_data = "INSERT INTO tbl_client(token,created_date,update_date) VALUES('$token','$date','$date')"; 
        $result_data = mysqli_query($this->conn,$inset_data);

        $last_id = mysqli_insert_id($this->conn);

        return $last_id;
    }else{
        return $row[0]['id'];

    }

}


public function add_inquiry($name,$mobile,$email)
{  

    $date = date("Y-m-d H:i:s");

    $sql1 = "INSERT INTO tbl_inquiry(name,email,mobileno,created_date) VALUES('$name','$email','$mobile','$date')";
    $result1 = mysqli_query($this->conn,$sql1);  
    
    if ($result1) 
    {
       return true;
    }
    else
    {
        return false;
    }
}


public function client_notification_list($api_key){ //echo "123werwerwer";exit;


    $get_sql = "SELECT id,stock_id FROM `tbl_client` WHERE id ='$api_key'";

    $result = mysqli_query($this->conn,$get_sql);  

    $get_row=mysqli_fetch_all($result,MYSQLI_ASSOC);   

    $stock_id = $get_row[0]['stock_id'];

    if(isset($stock_id) && $stock_id != ''){ 

        $sql = "SELECT id,car_name,status,created_date FROM `tbl_stock` WHERE status='active' AND 
        id NOT IN (".$stock_id.") order by id desc ";
     
        $result = mysqli_query($this->conn,$sql);  

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);   

    }else{

        $sql = "SELECT id,car_name,status,created_date FROM `tbl_stock` WHERE status='active' order by id desc ";
     
        $result = mysqli_query($this->conn,$sql);  

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);  


    }
    
    if($row)
    {  

        return $row;
    }
    else
    {
        return false;
    } 

}

    public function client_delete_notification($id,$client_id){

        
        $sql = "SELECT id,stock_id FROM `tbl_client` WHERE id ='$client_id' AND stock_id = '' ";
 
        $result = mysqli_query($this->conn,$sql);  

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);   


        if($row){

            $update_data = "UPDATE `tbl_client` SET `stock_id`='$id'  WHERE id = '$client_id'";
            $update = mysqli_query($this->conn,$update_data); 

            return true;

        }else{

            $sql_com = "SELECT id,stock_id FROM `tbl_client` WHERE id ='$client_id'";
 
            $result_com = mysqli_query($this->conn,$sql_com);  

            $row1=mysqli_fetch_all($result_com,MYSQLI_ASSOC);  

            $stock_id = $row1[0]['stock_id'];
            $stock_comma = $stock_id.','.$id;

            $update = "UPDATE `tbl_client` SET `stock_id`='$stock_comma'  WHERE id = '$client_id'";
            $update_reu = mysqli_query($this->conn,$update); 

            return true;
        }

        /*$update_data = "UPDATE `tbl_stock` SET `client_id`='$client_id'  WHERE id = '$id'";
        $update = mysqli_query($this->conn,$update_data); 

        if($update)
        {  
            return true;
        }
        else
        {
            return false;
        } */

    }


    

    public function lead_cancel($id,$reasons){

        $update_data = "UPDATE `tbl_leads` SET `status_id`='10',`remarks`='$reasons'  WHERE id = '$id'";
        
        $update = mysqli_query($this->conn,$update_data); 

        return true;
    }


    public function delete_notification($id,$table,$api_key){

        
        if($table == 'tbl_leads'){
       
            $sql = "SELECT id FROM `tbl_staff` WHERE id ='$api_key' AND lead_notification_id = '' ";
     
            $result = mysqli_query($this->conn,$sql);  

            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);   


            if($row){

                $update_data = "UPDATE `tbl_staff` SET `lead_notification_id`='$id'  WHERE id = '$api_key'";
                $update = mysqli_query($this->conn,$update_data); 

                return true;

            }else{

                $sql_com = "SELECT id,lead_notification_id FROM `tbl_staff` WHERE id ='$api_key'";
     
                $result_com = mysqli_query($this->conn,$sql_com);  

                $row1=mysqli_fetch_all($result_com,MYSQLI_ASSOC);  

                $lead_notification_id = $row1[0]['lead_notification_id'];
                $lead_notification_comma = $lead_notification_id.','.$id;

                $update = "UPDATE `tbl_staff` SET `lead_notification_id`='$lead_notification_comma'  WHERE id = '$api_key'";
                $update_reu = mysqli_query($this->conn,$update); 

                 return true;
            }


        } else {

            
            $sql = "SELECT id FROM `tbl_staff` WHERE id ='$api_key' AND stock_notification_id = '' ";
     
            $result = mysqli_query($this->conn,$sql);  

            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);   


            if($row){

                $update_data = "UPDATE `tbl_staff` SET `stock_notification_id`='$id'  WHERE id = '$api_key'";
                $update = mysqli_query($this->conn,$update_data); 

                return true;

            }else{

                $sql_com = "SELECT id,stock_notification_id FROM `tbl_staff` WHERE id ='$api_key'";
     
                $result_com = mysqli_query($this->conn,$sql_com);  

                $row1=mysqli_fetch_all($result_com,MYSQLI_ASSOC);  

                $lead_notification_id = $row1[0]['stock_notification_id'];
                $lead_notification_comma = $lead_notification_id.','.$id;

                $update = "UPDATE `tbl_staff` SET `stock_notification_id`='$lead_notification_comma'  WHERE id = '$api_key'";
                $update_reu = mysqli_query($this->conn,$update); 

                return true;
            }
        }

      

    }

    /*-----------------------------source List------------------------------------*/
    public function requirement_list($api_key)
    {
        $sql ="SELECT tbl_leads.*,tbl_fuel.name as fuel_name,tbl_status.name as status_name,tbl_source.name as source_name
        FROM tbl_leads 

        left join tbl_source
        on tbl_source.id=tbl_leads.source_id
        left join tbl_fuel
        on tbl_fuel.id=tbl_leads.fuel_id
        left join tbl_status
        on tbl_status.id=tbl_leads.status_id  WHERE tbl_leads.status='requirement' AND tbl_leads.status_id !=9 AND tbl_leads.status_active='active' AND staff_id='$api_key'
        order by tbl_leads.id desc"; 



        $result = mysqli_query($this->conn,$sql);       
        
        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
            return $row;
        }
        else
        {
            return false;
        } 
        
    }

    /*-----------------------------news status update------------------------------------*/
    public function news_read($api_key)
    {    
        $sql2 = "UPDATE tbl_staff set new_status = '2' where  id= '$api_key'"; 
        $query2 =mysqli_query($this->conn,$sql2); 
        return true;

    }

    /*-----------------------------staff new status get ------------------------------------*/
    public function news_status($api_key)
    {
        $sql = "SELECT  * FROM  tbl_staff where id= '$api_key'";
        $result = mysqli_query($this->conn,$sql);       

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC); 

       // print_r($row); exit;

        return $row[0]['new_status'];
        
    }

     /*-----------------------------notification list ------------------------------------*/
    public function notification_list($api_key){  

       /* $date_date = date('Y-m-d');

        $get_sql = "SELECT id,lead_notification_id FROM `tbl_staff` WHERE id ='$api_key' AND status=1 ";

        $result = mysqli_query($this->conn,$get_sql);  

        $get_row=mysqli_fetch_all($result,MYSQLI_ASSOC);   

        $notification_id = $get_row[0]['lead_notification_id'];

        if(isset($notification_id) && $notification_id != ''){ 

            $sql = "SELECT id,name,status,created_date,table_name FROM `tbl_leads` WHERE date(created_date)='$date_date' AND status='lead' AND staff_id ='$api_key' AND
            id NOT IN (".$notification_id.") order by id desc ";
         
            $result = mysqli_query($this->conn,$sql);  

            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);   

        }else{

            $sql = "SELECT id,name,status,created_date,table_name FROM `tbl_leads` WHERE date(created_date)='$date_date' AND staff_id ='$api_key' AND status='lead' order by id desc ";
         
            $result = mysqli_query($this->conn,$sql);  

            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);  


        }*/


        $date_date = date('Y-m-d');

        $get_sql = "SELECT id,stock_notification_id FROM `tbl_staff` WHERE id ='$api_key' AND status=1";

        $result = mysqli_query($this->conn,$get_sql);  

        $get_row=mysqli_fetch_all($result,MYSQLI_ASSOC);   

        $notification_id = $get_row[0]['stock_notification_id'];

        //echo $notification_id; exit;

        if(isset($notification_id) && $notification_id != ''){ 

            $sql = "SELECT id,car_name as name,status,created_date,table_name FROM `tbl_stock` WHERE date(created_date)='$date_date' AND status='active' AND
            id NOT IN (".$notification_id.") order by id desc ";
         
            $result = mysqli_query($this->conn,$sql);  

            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);   

        }else{

            $sql = "SELECT id,car_name as name,status,created_date,table_name FROM `tbl_stock` WHERE date(created_date)='$date_date' AND status='active' order by id desc ";
         
            $result = mysqli_query($this->conn,$sql);  

            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);  


        }

        //print_r($row); exit;

        // return $row;

        if(!empty($row) && isset($row))
        {  
           // $result_data = array_merge($row,$car_data);

            return $row;
        }
        else
        {
            return false;
        } 


        //print_r($row); exit;

      /*  $date_date = date('Y-m-d');

        $sql = "SELECT id,name,status,created_date FROM `tbl_leads` WHERE date(created_date)='$date_date' AND status='lead' AND staff_id='$staff_id'";
     
        $result = mysqli_query($this->conn,$sql);  

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            

        $car_data = $this->car_list();
        
        if(!empty($row) || !empty($car_data))
        {  
            $result_data = array_merge($row,$car_data);

            return $result_data;
        }
        else
        {
            return false;
        }*/ 

    }


    /*-----------------------------notification status get ---------------------------*/
    public function notifica_status($api_key)
    {
        $sql = "SELECT  * FROM  tbl_staff where id= '$api_key'";
        $result = mysqli_query($this->conn,$sql);       

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC); 

       // print_r($row); exit;

        return $row[0]['notification_status'];
        
    }

    /*-----------------------------news status update------------------------------------*/
    public function notification_read($api_key)
    {    
        $sql2 = "UPDATE tbl_staff set notification_status = '2' where  id= '$api_key'"; 
        $query2 =mysqli_query($this->conn,$sql2); 
        return true;

    }


    /*-----------------------------leads cancel List------------------------------------*/
    public function leads_cancel($staff_id)
    {   

        $sql ="SELECT tbl_leads.id as leads_id,tbl_leads.name as leads_name,tbl_leads.enter_locality as enter_locality,tbl_leads.badget,tbl_leads.created_date,tbl_source.name as source_name,tbl_status.name as status_name,tbl_leads.status_id,tbl_stock.car_name, tbl_leads.mobileno,tbl_leads.status,tbl_stock.color,tbl_leads.email,tbl_leads.remarks
            FROM tbl_leads 
            left join tbl_staff
            on tbl_staff.id=tbl_leads.staff_id
            left join tbl_fuel
            on tbl_fuel.id=tbl_leads.fuel_id
            left join tbl_stock
            on tbl_stock.id=tbl_leads.car_id
            left join tbl_source
            on tbl_source.id=tbl_leads.source_id
            left join tbl_status
            on tbl_status.id=tbl_leads.status_id  WHERE tbl_leads.status_id=10 AND tbl_leads.staff_id='$staff_id' AND tbl_leads.status='lead'
            order by tbl_leads.id desc"; 

            /*WHERE tbl_leads.status_id=7*/

            $result = mysqli_query($this->conn,$sql);       
            
            if($result)
            {   
                $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
                return $row;
            }
            else
            {
                return false;
            } 
        
    }


    public function get_follow_data($id){
        $query="SELECT images
                  FROM   tm_leads_follow_up where leads_id='$id' ORDER BY id DESC LIMIT 1";

        $result = mysqli_query($this->conn,$query);       

        $row=mysqli_fetch_all($result,MYSQLI_ASSOC); 

        return $row[0]['images'];
           

    }

public function leads_list_today($staff_id)
{
   // $date_date = date('Y-m-d');

    $sql ="SELECT tbl_leads.id as leads_id,tbl_leads.name as leads_name,tbl_leads.enter_locality as enter_locality,tbl_leads.badget,tbl_leads.created_date,tbl_source.name as source_name,tbl_status.name as status_name,tbl_leads.status_id,tbl_stock.car_name,tbl_leads.created_date,tbl_leads.status,tbl_stock.color,tbl_leads.mobileno,tbl_leads.email,tbl_leads.remarks,tbl_leads.mobileno as staff_mobileno
        FROM tbl_leads 
        left join tbl_staff
        on tbl_staff.id=tbl_leads.staff_id
        left join tbl_stock
        on tbl_stock.id=tbl_leads.car_id
        left join tbl_source
        on tbl_source.id=tbl_leads.source_id
        left join tbl_status
        on tbl_status.id=tbl_leads.status_id

         WHERE tbl_leads.staff_id='$staff_id' AND tbl_leads.status_id = '7' AND tbl_leads.status='lead'
        order by tbl_leads.id desc";

        $result = mysqli_query($this->conn,$sql);       
        
        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
            return $row;
        }
        else
        {
            return false;
        } 

}

public function follow_today($id)
{
    $date_date = date('Y-m-d');

    $sql ="SELECT * FROM tm_leads_follow_up WHERE leads_id='$id' AND date <='$date_date' AND status = 'true' order by id desc limit 1";

        $result = mysqli_query($this->conn,$sql);       
        
        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
            return $row;
        }
        else
        {
            return false;
        } 

}

    public function popus_requirement($api_key){
         $sql ="SELECT   tm_stock_requirement.id as stock_id,  
                        tm_stock_requirement.StockId,
                    tm_stock_requirement.car_name,
                    tm_stock_requirement.market_price as car_price,
                    tm_stock_requirement.kms_driven,
                    tm_stock_requirement.created_date,
                    tm_stock_requirement.color as color_name,
                    tm_stock_requirement.registation_date as registation_year,
                    tm_stock_requirement.geniun,
                    tm_stock_requirement.expiry_date as expiry_year,
                    tm_stock_requirement.registation_no,
                    tm_stock_requirement.min_price,
                    tm_stock_requirement.modal_num,
                    tbl_mfg.name as mfg_name,
                    tm_stock_requirement.mobileno as mobileno,



            tbl_fuel.name as fuel_name,tbl_owner.name as owner_name


        FROM tm_stock_requirement
        left join tbl_mfg
        on tbl_mfg.id=tm_stock_requirement.mfg_id
        left join tbl_fuel
        on tbl_fuel.id=tm_stock_requirement.fuel_id
        left join tbl_owner
        on tbl_owner.id = tm_stock_requirement.owner_id WHERE tm_stock_requirement.staff_id='$api_key' order by tm_stock_requirement.id  desc";


        $result = mysqli_query($this->conn,$sql);        

        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);  
              
            return $row;
        }
        else
        {
            return false;
        } 

    }


    public function get_images_first($stock_id){ 

        $sql = "SELECT * from tm_stock_image where stock_id = '$stock_id' limit 1";  
       
        $result = mysqli_query($this->conn,$sql);        
        if(mysqli_num_rows($result)>0)
        { 
            $row=mysqli_fetch_row($result);
            return $row;
        }
        else
        {
            return false;
        }
    }

    /*-----------------------------popus requirement delete------------------------------------*/
    public function popus_requirement_delete($api_key)
    {    
        $update = "DELETE  FROM `tm_stock_requirement` WHERE staff_id = '$api_key'";
        $update_reu = mysqli_query($this->conn,$update); 

        return true;
    }

    /*-----------------------------banner List------------------------------------*/
    public function banner_get()
    { 
        $sql = "SELECT  * FROM  tbl_advantage order by id desc";
        $result = mysqli_query($this->conn,$sql);       
        

        //print_r($result); exit;
        if($result)
        {   
            $row=mysqli_fetch_all($result,MYSQLI_ASSOC);            
            return $row;
        }
        else
        {
            return false;
        } 
        
    }

}