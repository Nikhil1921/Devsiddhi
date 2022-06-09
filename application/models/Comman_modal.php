<?php
class Comman_modal extends CI_Model
{

	/**************************  get all data ***************/
	public function getAllData($tablename)
	{
		$this->db->select('*');
		$this->db->from($tablename);
		$this->db->where('var_status',0);
		$this->db->order_by("id", "desc");
		$q = $this->db->get();
		$data = $q->result_array();
		
		return $data;
	} 

	/**************************  add data ***************/
    public function insert_data($tablename,$data){
        $this->db->insert($tablename, $data); 
        $insertId = $this->db->insert_id();
        return $insertId;
    }

    /**************************  update data ***************/
	public function update_data($tablename,$id,$data){

		$this->db->where('id',$id);
        if ($this->db->update($tablename, $data)) 
        {
            return 'true';
        } 
        else 
        {
            return 'false';
        }
	}

 	/**************************  delete data ***************/
	public function delete_data($tablename,$id){

		$data = array('var_status' => 1);

		$this->db->where('id',$id);
        
        if ($this->db->update($tablename, $data)) 
        {
            return 'true';
        } 
        else 
        {
            return 'false';
        }
	}

	/************************** get id by recode ***************/
    public function getIDByRecode($tablename,$id,$field_name=null,$field_id=null)
	{
		$this->db->select('*');
		$this->db->from($tablename);

		if(isset($field_id) && $field_id != null){
			$this->db->where($field_name,$field_id);
		}else{
			$this->db->where('id',$id);
		}
		$this->db->where('var_status',0);
		$this->db->order_by('id','desc');
		$q = $this->db->get();
		$data = $q->row_array();

		//echo $sql = $this->db->last_query(); exit;
		
		return $data;
	} 

}

?>