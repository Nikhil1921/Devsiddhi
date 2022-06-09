    <div class="content">
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Edit Description Category</h4>
        </div>
        <div class="card-body">
            <form action="<?php echo base_url('admin/description_cat/descriptionCatUpdate'); ?>" enctype="multipart/form-data" method="post" accept-charset="utf-8">
                <input type="hidden" name="image" value="">
                 <input type="hidden" name="descriptionCatId" id="descriptionCatId" value="<?php echo $data['id']; ?>">
                <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="c_name" class="col-form-label">Description Category Name</label>   <input type="text" name="var_name" class="form-control" id="c_name" maxlength="100" value="<?php echo $data['var_name']; ?>" required="" placeholder="Enter Description Category Name">
                            </div>
                        </div>
         
                        <div class="col-12"></div>
                        <div class="col-6 col-md-3">
                            <button type="submit" class="btn btn-outline-primary btn-round btn-block col-12">SAVE</button>
                        </div>
                        <div class="col-6 col-md-3">
                            <a href="<?php echo base_url('admin/description_cat');?>" class="btn btn-outline-danger btn-round btn-block col-12">CANCEL</a>                
                        </div>
                </div>
            </form>    
        </div>
    </div>                
</div>