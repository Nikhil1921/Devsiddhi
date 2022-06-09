<?php
class Login_modal extends CI_Model
{
	
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	public function checkAdmin($data)
	{
		$mobileno = $data['mobileno'];
		$admin_password = $data['password'];

		$password=md5($admin_password);

		$q = $this->db->select('id,mobileno,password,username')->where(['mobileno' => $mobileno, 'password' => $password])->get('admin');

		//echo $sql = $this->db->last_query(); exit;

		if ( $q->num_rows()){	
			$data =  $q->row();
			return $data;
		}else{
			return FALSE;
		}
	} 
}

?>