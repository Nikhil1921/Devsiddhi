      <div class="content">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">

            <a href="<?php echo base_url('admin/category');?>" class="text-decoration-none">
              <div class="card card-stats">
                <div class="card-body ">
                  <div class="row">
                    <div class="col-5 col-md-4">
                      <div class="icon-big text-center icon-warning">
                        <i class="fa fa-file-text-o text-danger"></i>
                      </div>
                    </div>
                    <div class="col-7 col-md-8">
                      <div class="numbers">
                        <p class="card-category">Category</p>
                        <p class="card-title"><?php echo $category->category_total; ?><p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer ">
                  <hr>
                  <div class="stats">
                   <!--  <i class="fa fa-refresh"></i> -->
                   <!--  Update Now -->
                  </div>
                </div>
              </div>
            </a>

          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <a href="<?php echo base_url('admin/project');?>" class="text-decoration-none">
            <div class="card card-stats">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5 col-md-4">
                    <div class="icon-big text-center icon-warning">
                      <i class="fa fa-file-text-o text-danger"></i>
                    </div>
                  </div>
                  <div class="col-7 col-md-8">
                    <div class="numbers">
                      <p class="card-category">Project</p>
                      <p class="card-title"><?php echo $project->project_total; ?><p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer ">
                <hr>
                <div class="stats">
              
                </div>
              </div>
            </div>
          </a>
          </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <a href="<?php echo base_url('admin/inquiry');?>" class="text-decoration-none">
            <div class="card card-stats">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5 col-md-4">
                    <div class="icon-big text-center icon-warning">
                      <i class="fa fa-users text-danger"></i>
                    </div>
                  </div>
                  <div class="col-7 col-md-8">
                    <div class="numbers">
                      <p class="card-category">Inquiry</p>
                      <p class="card-title"><?php echo $inquiry->inquiry_total; ?><p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer ">
                <hr>
                <div class="stats">
               <!--    <i class="fa fa-calendar-o"></i>
                  Last day -->
                </div>
              </div>
            </div>
          </a>
          </div>



            <div class="col-lg-3 col-md-6 col-sm-6">
            <a href="<?php echo base_url('admin/broker');?>" class="text-decoration-none">
            <div class="card card-stats">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5 col-md-4">
                    <div class="icon-big text-center icon-warning">
                      <i class="fa fa-users text-danger"></i>
                    </div>
                  </div>
                  <div class="col-7 col-md-8">
                    <div class="numbers">
                      <p class="card-category">Broker</p>
                      <p class="card-title"><?php echo $broker->broker_total; ?><p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer ">
                <hr>
                <div class="stats">
                </div>
              </div>
            </div>
          </a>
          </div>

          
             <div class="col-lg-3 col-md-6 col-sm-6">
              <a href="<?php echo base_url('admin/features');?>" class="text-decoration-none">
            <div class="card card-stats">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5 col-md-4">
                    <div class="icon-big text-center icon-warning">
                      <i class="fa fa-file-text-o text-danger"></i>
                    </div>
                  </div>
                  <div class="col-7 col-md-8">
                    <div class="numbers">
                      <p class="card-category">Features</p>
                      <p class="card-title"><?php echo $features->features_total; ?><p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer ">
                <hr>
                <div class="stats">
               <!--    <i class="fa fa-calendar-o"></i>
                  Last day -->
                </div>
              </div>
            </div>
          </a>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <a href="<?php echo base_url('admin/contact');?>" class="text-decoration-none">
            <div class="card card-stats">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5 col-md-4">
                    <div class="icon-big text-center icon-warning">
                      <i class="nc-icon nc-badge text-danger"></i>
                    </div>
                  </div>
                  <div class="col-7 col-md-8">
                    <div class="numbers">
                      <p class="card-category">Contact</p>
                      <p class="card-title"><?php echo $contact->contact_total; ?><p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer ">
                <hr>
                <div class="stats">
               <!--    <i class="fa fa-calendar-o"></i>
                  Last day -->
                </div>
              </div>
            </div>
          </a>
          </div>




            <!--  <div class="col-lg-3 col-md-6 col-sm-6">
            <a href="<?php echo base_url('admin/document');?>" class="text-decoration-none">
            <div class="card card-stats">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5 col-md-4">
                    <div class="icon-big text-center icon-warning">
                      <i class="nc-icon nc-cloud-download-93"></i>
                    </div>
                  </div>
                  <div class="col-7 col-md-8">
                    <div class="numbers">
                      <p class="card-category">Document</p>
                      <p class="card-title"><?php echo $document->document_total; ?><p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer ">
                <hr>
                <div class="stats">
                </div>
              </div>
            </div>
          </a>
          </div> -->

        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title"> Recent Inquiry</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="text-primary">
                      <tr><th class="text-laft">
                        Sr. No
                      </th>
                      <th class="text-laft">
                        Project Name
                      </th>
                      <th class="text-laft">
                        Name
                      </th>
                      <th class="text-laft">
                        Mobile No
                      </th>
                      <th class="text-laft">
                        Email
                      </th>
                        <th class="text-laft">
                        Message
                      </th>
                    <!--   <th class="text-right">
                        Actions
                      </th> -->
                    </tr></thead>
                    <tbody>
                     <?php $i = 1; 
                     //$inquiry_data = $this->comman->getAllData('tbl_inquiry'); 

                      $query=$this->db->query("SELECT *
                        FROM   tbl_inquiry where var_status=0 ORDER BY id DESC LIMIT 10");
                      $inquiry_data =  $query->result_array();

                      //echo "<pre>";print_r($inquiry_data); exit;

                     foreach ($inquiry_data as $key => $value) { 

                      $pro_row=$this->db->query("SELECT *
                        FROM   tbl_project");
                      $pro_data =  $pro_row->row_array();

                      //print_r($pro_data); exit;
                        
                     ?>
                    <tr>
                      <td class="text-laft"><?php echo $i; ?></td>

                      <td class="text-laft"><?php echo $pro_data['var_name']; ?></td>

                      <td class="text-laft"><?php echo $value['var_name']; ?></td>
                      <td class="text-laft"><?php echo $value['var_mobileno']; ?></td>
                      <td class="text-laft"><?php echo $value['var_email']; ?></td>
                      <td class="text-laft"><?php echo $value['var_message']; ?></td>
                       <?php $i++; } ?>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      
      </div>
     
    </div>