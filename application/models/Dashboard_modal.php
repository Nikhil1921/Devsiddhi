<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Dashboard_modal extends CI_model 
{       
    public function alltotal()
    {            
        $this->db->select('count(id) as category_total');        
        $this->db->from('tbl_category');         
        $this->db->where('var_status','0'); 
        $data['category'] = $this->db->get()->row();


        $this->db->select('count(id) as sub_category_total');        
        $this->db->from('tbl_sub_category');         
        $this->db->where('var_status','0'); 
        $data['sub_category'] = $this->db->get()->row();

        $this->db->select('count(id) as inquiry_total');        
        $this->db->from('tbl_inquiry');         
        $this->db->where('var_status','0'); 
        $data['inquiry'] = $this->db->get()->row();

        $this->db->select('count(id) as features_total');        
        $this->db->from('tbl_features');         
        $this->db->where('var_status','0'); 
        $data['features'] = $this->db->get()->row();

        $this->db->select('count(id) as contact_total');        
        $this->db->from('tbl_contact');         
        $this->db->where('var_status','0'); 
        $data['contact'] = $this->db->get()->row();

        $this->db->select('count(id) as broker_total');        
        $this->db->from('tbl_broker');         
        $this->db->where('var_status','0'); 
        $data['broker'] = $this->db->get()->row();

        $this->db->select('count(id) as project_total');        
        $this->db->from('tbl_project');         
        $this->db->where('var_status','0'); 
        $data['project'] = $this->db->get()->row();

        return $data;
    }

}
?>        