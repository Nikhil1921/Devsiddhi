<?php
class DescripSubCat_modal extends CI_Model
{

	/**************************  get all data ***************/
	public function getAllData()
	{
		$this->db->select('descrip_subcat.id,descrip_subcat.var_status,descrip_subcat.var_name,descrip_cat.var_name as descrip_cat_name,descrip_subcat.created_date');
		$this->db->from('tbl_description_subcat descrip_subcat');
		$this->db->join('tbl_description_cat descrip_cat','descrip_cat.id=descrip_subcat.descrip_cat_id');
		$this->db->where('descrip_subcat.var_status',0);
		$q = $this->db->get();
		$data = $q->result_array();
		
		return $data;
	} 

}

?>