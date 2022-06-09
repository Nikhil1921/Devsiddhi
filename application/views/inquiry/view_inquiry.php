  <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                    <div class="col-6">
                        <h4 class="card-title">Inquiry List</h4>
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
                      <th>Name</th>
                      <th>Mobile No</th>
                      <th>Email</th>
                    <!--   <th>City</th>
                      <th>Flat Type</th>
                      <th>Approx Budget</th> -->
                      <th>Message</th>
                      <th>Created Date</th>
                      <th class="disabled-sorting text-right">Actions</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    <?php $i = 1; foreach ($data as $key => $value) { 
                        
                     ?>
                    <tr>
                      <td><?php echo $i; ?></td>
                      <td><?php echo $value['var_name']; ?></td>
                      <td><?php echo $value['var_mobileno']; ?></td>
                      <td><?php echo $value['var_email']; ?></td>
                     <!--  <td><?php echo $value['var_flat']; ?></td>
                      <td><?php echo $value['var_budget']; ?></td> -->
                      <td><?php echo $value['var_message']; ?></td>
                      <td><?php echo date('d/m/Y H:i A',strtotime($value['created_date'])); ?></td>
                      <td class="text-right">
                         <a onclick="return confirm('Are you sure?')" href="<?php echo base_url('admin/contact/delete_data/'.$value['id']); ?>"><button class="btn btn-outline-primary btn-round">
                          <i class="fa fa-times"></i>
                         Delete
                        </button></a>
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