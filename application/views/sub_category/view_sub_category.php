  <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                    <div class="col-6">
                        <h4 class="card-title">Sub Category List</h4>
                    </div>
                    <div class="col-6">
                        <a href="<?php echo base_url('admin/sub_category/add_sub_category'); ?>" class="btn btn-outline-primary btn-round text-center float-right"><span class="fa fa-plus"></span> Add New</a> 
                    </div>
                </div>
              </div>
              <div class="card-body">

                <?php 
                    if($this->session->flashdata('message')) {
                ?> 
                <div class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span>
                        <?php   echo $this->session->flashdata('message'); ?>
                    </span>
                </div>
                <?php } ?>
                <div class="toolbar">
                  <!--        Here you can write extra buttons/actions for the toolbar              -->
                </div>
                <table id="datatable" class="table table-striped table-bordered" cellspacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Category Name</th>
                      <th>Sub Category Name</th>
                      <th>Sub Category Image</th>
                      <th class="disabled-sorting text-right">Actions</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    <?php $i = 1; foreach ($data as $key => $value) { 
                        $images = base_url().'uploads/sub_category/'.$value['var_img'];
                     ?>
                    <tr>
                      <td><?php echo $i; ?></td>
                      <td><?php echo $value['category_name']; ?></td>
                      <td><?php echo $value['var_name']; ?></td>
                      <td><img src="<?php echo $images; ?>" alt="" width="80px" height="50px"></td>
                     
                      <td class="text-right">
                        <a href="<?php echo base_url('admin/sub_category/edit_data/');echo $value['id']; ?>"><button class="btn btn-outline-primary btn-round ">
                          <i class="fa fa-edit"></i>
                          Edit
                        </button></a>

                         <a onclick="return confirm('Are you sure?')" href="<?php echo base_url('admin/sub_category/delete_data/'.$value['id']); ?>"><button class="btn btn-outline-primary btn-round">
                          <i class="fa fa-times"></i>
                         Delete
                        </button></a>


                       <!--  <a href="#" class="btn btn-warning btn-link btn-icon btn-sm edit"><i class="fa fa-edit"></i></a>
                        <a href="#" class="btn btn-danger btn-link btn-icon btn-sm remove"><i class="fa fa-times"></i></a> -->
                        <?php $i++; } ?>
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div><!-- end content-->
            </div><!--  end card  -->
          </div> <!-- end col-md-12 -->
        </div> <!-- end row -->
      </div>