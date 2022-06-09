<div class="content">
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Add Project Document</h4>
        </div>
        <div class="card-body">
            <form action="<?php echo base_url('admin/document/documentInsert'); ?>" enctype="multipart/form-data" method="post" accept-charset="utf-8">
                <input type="hidden" name="image" value="">
                <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="c_name" class="col-form-label">Project Document Name</label>                        <input type="text" name="var_name" value="" class="form-control" id="c_name" maxlength="100" required="" placeholder="Enter Project Document Name">
                            </div>
                        </div>

                        <div class="col-md-3">
                            <label for="features_image" class="col-form-label">Project Document Icon</label>

                            <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                                <div class="fileinput-new thumbnail">
                                    <img src="<?php echo base_url('assets/img/image_placeholder.jpg');?>" alt="">
                                </div>
                                <div class="fileinput-preview fileinput-exists thumbnail">
                                </div>
                                <div>
                                    <span class="btn btn-rose btn-round btn-file">
                                    <span class="fileinput-new">Select image</span>
                                    <span class="fileinput-exists">Change</span>
                                    <input type="file" name="image" value="" id="image" accept="image/jpg, image/jpeg, image/png" 0="" required="">
                                    </span>
                                    <a href="javascript:;" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                                </div>
                            </div>
                        </div>
         
                        <div class="col-12"></div>
                        <div class="col-6 col-md-3">
                            <button type="submit" class="btn btn-outline-primary btn-round btn-block col-12">SAVE</button>
                        </div>
                        <div class="col-6 col-md-3">
                            <a href="<?php echo base_url('admin/document');?>" class="btn btn-outline-danger btn-round btn-block col-12">CANCEL</a>                
                        </div>
                </div>
            </form>    
        </div>
    </div>                
</div>