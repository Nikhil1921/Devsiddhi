<?php
class Home_modal extends CI_Model
{

    /**************************  get all data ***************/
    public function getAllData($tablename,$limit=null)
    {
        $this->db->select('*');
        $this->db->from($tablename);
        $this->db->where('var_status','0');
        $this->db->order_by("id", "desc");
        if(isset($limit) && $limit != null){
            $this->db->limit(10);
        }
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



    /*-----------------------------sub category List---------------------------------*/
    public function sub_category_get($category_id)
    {

        $sql = "SELECT  tbl_sub_category.*,tbl_category.var_name as cate_name FROM  tbl_sub_category 

        left join tbl_category
        on tbl_category.id=tbl_sub_category.cat_id

        where tbl_sub_category.cat_id='$category_id' AND tbl_sub_category.var_status=0  order by id asc";

        $query=$this->db->query($sql);

        return $query->result_array();
        
    }

    public function product_get($cat_id)
    {
        $this->db->select('pro.id,pro.var_name as project_name, pro.var_img as project_image, pro.created_date, cat.var_name as category_name');

        $this->db->from('tbl_project pro');
        $this->db->join('tbl_category cat','cat.id=pro.cat_id');
        //$this->db->join('tbl_sub_category sub_cat','sub_cat.id=pro.sub_cat_id');
        //$this->db->join('tbl_description_cat des_cat','des_cat.id=pro.des_id');
        //$this->db->join('tbl_description_subcat des_sub_cat','des_sub_cat.id=pro.sub_des_id');

        $this->db->where('pro.cat_id',$cat_id);
        //$this->db->where('pro.var_status',0);
        $q = $this->db->get();
        $data = $q->result_array();
        
        return $data;
    } 

    public function product_description_get($pro_id)
    {
        $this->db->select('pro.id,pro.var_name as project_name, pro.var_img as project_image, pro.created_date,  cat.var_name as category_name,pro.features_id,pro.var_brochure,pro.var_layout,pro.var_rera,pro.var_unit,pro.var_towers,pro.var_floors,pro.var_range');

        $this->db->from('tbl_project pro');
        $this->db->join('tbl_category cat','cat.id=pro.cat_id');
        //$this->db->join('tbl_sub_category sub_cat','sub_cat.id=pro.sub_cat_id');
        //$this->db->join('tbl_description_cat des_cat','des_cat.id=pro.des_id');
        //$this->db->join('tbl_description_subcat des_sub_cat','des_sub_cat.id=pro.sub_des_id');

        $this->db->where('pro.id',$pro_id);
        //$this->db->where('pro.var_status',0);
        $q = $this->db->get();
        $data = $q->result_array();
        
        return $data;
    } 

    /*-----------------------------category image List----------------------------------*/
    public function product_multiimg($pro_id)
    { 
        $sql = "SELECT  * FROM  tbl_project_image where project_id='$pro_id' AND var_status=0  order by id desc";
        
        $query=$this->db->query($sql);

        return $query->result_array();
        
    }


    public function features_data($ids){

        $sql = $this->db->query("SELECT * FROM tbl_features Where id IN (".$ids.")");  
        $data = $sql->result_array();
        //echo $this->db->last_query(); exit;
        return $data;

    }

}

?>