    <div class="content">
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Edit Description Sub Category</h4>
        </div>
        <div class="card-body">
            <form action="<?php echo base_url('admin/description_subcat/descripSubCatUpdate'); ?>" enctype="multipart/form-data" method="post" accept-charset="utf-8">
                <input type="hidden" name="image" value="">
                 <input type="hidden" name="descripSubcatId" id="descripSubcatId" value="<?php echo $data['id']; ?>">
                <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="c_name" class="col-form-label">Description Sub Category Name</label>   <input type="text" name="var_name" class="form-control" id="c_name" maxlength="100" value="<?php echo $data['var_name']; ?>" required="" placeholder="Enter Description Sub Category Name">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <label for="var_name" class="col-form-label">Select Description Category Name</label><br>
                            <select class="selectpicker" name="descrip_cat_id" data-size="7" data-style="btn btn-primary btn-round" title="Single Select" required="">
                                  <?php foreach ($description_cat as $key => $value) { ?>

                                <option value="<?php echo $value['id']; ?>"  <?php if($value['id'] == $data['descrip_cat_id']){ echo "selected";} ?>><?php echo $value['var_name']; ?></option>
                                  <?php } ?>


                            </select>
                        </div>
         
                        <div class="col-12"></div>
                        <div class="col-6 col-md-3">
                            <button type="submit" class="btn btn-outline-primary btn-round btn-block col-12">SAVE</button>
                        </div>
                        <div class="col-6 col-md-3">
                            <a href="<?php echo base_url('admin/description_subcat');?>" class="btn btn-outline-danger btn-round btn-block col-12">CANCEL</a>                
                        </div>
                </div>
            </form>    
        </div>
    </div>                
</div>