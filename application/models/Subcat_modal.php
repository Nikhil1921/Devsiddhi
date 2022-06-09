<?php
class Subcat_modal extends CI_Model
{

	/**************************  get all data ***************/
	public function getAllData()
	{
		$this->db->select('tsubcat.id,tsubcat.var_status,tsubcat.var_name, tsubcat.var_img,cat.var_name as category_name');
		$this->db->from('tbl_sub_category tsubcat');
		$this->db->join('tbl_category cat','cat.id=tsubcat.cat_id');
		$this->db->where('tsubcat.var_status',0);
		$q = $this->db->get();
		$data = $q->result_array();
		
		return $data;
	} 


	/************************** get id by recode ***************/
    public function dropdown_subcate($tablename,$id,$field_name=null,$field_id=null)
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
		$data = $q->result_array();

		//echo $sql = $this->db->last_query(); exit;
		
		return $data;
	} 

	public function multiImageGet($project_id)
	{
		$this->db->select('*');
		$this->db->from('tbl_project_image');
		$this->db->where('var_status',0);
		$this->db->where('project_id',$project_id);
		$this->db->order_by('id','desc');
		$q = $this->db->get();
		$data = $q->result_array();

		//echo $sql = $this->db->last_query(); exit;
		
		return $data;
	} 


	public function getProjectAllData()
	{
		$this->db->select('pro.id,pro.var_name as project_name, pro.var_img as project_image, pro.created_date,  cat.var_name as category_name,pro.var_unit,pro.var_towers,pro.var_floors,pro.var_range');

		$this->db->from('tbl_project pro');
		$this->db->join('tbl_category cat','cat.id=pro.cat_id');
		//$this->db->join('tbl_sub_category sub_cat','sub_cat.id=pro.sub_cat_id');
		//$this->db->join('tbl_description_cat des_cat','des_cat.id=pro.des_id');
		//$this->db->join('tbl_description_subcat des_sub_cat','des_sub_cat.id=pro.sub_des_id');

		$this->db->where('pro.var_status',0);
		$q = $this->db->get();
		$data = $q->result_array();
		
		return $data;
	} 



}

?>