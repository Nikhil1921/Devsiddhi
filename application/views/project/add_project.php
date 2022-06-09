<div class="content">
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Add Project</h4>
        </div>
        <div class="card-body">
            <form action="<?php echo base_url('admin/project/projectInsert'); ?>" enctype="multipart/form-data" method="post" accept-charset="utf-8">
              <!--   <input type="hidden" name="image" value=""> -->
                <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_name" class="col-form-label">Project Name</label>
                                <input type="text" name="var_name" value="" class="form-control" id="var_name" required="" placeholder="Enter Project Name">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <label for="var_name" class="col-form-label">Select Category Name</label><br>
                            <select class="category-select" name="cat_id"  id="pro_cat_id" data-size="7" data-style="btn btn-primary btn-round" title="Single Select" required="">
                                <option class="" value="">Select Category</option>
                                  <?php foreach ($category_data as $key => $value) { ?>

                                <option value="<?php echo $value['id']; ?>"><?php echo $value['var_name']; ?></option>
                                  <?php } ?>

                            </select>
                        </div>

                       <!--  <div class="col-md-6">
                            <label for="var_name" class="col-form-label">Select Sub Category Name</label><br>
                            <select class="sub-category-select" name="pro_sub_cat_id"  id="pro_sub_cat_id" data-size="7" data-style="btn btn-primary btn-round" title="Single Select" required="">
                                <option class="" value="">Select Sub Category</option>
                                <?php foreach ($sub_category_data as $key => $value) { ?>
                                        <option value="<?php echo $value['id']; ?>"><?php echo $value['var_name']; ?></option>
                                <?php } ?>

                            </select>
                        </div>
 -->
                       <!--  <div class="col-md-6">
                            <label for="var_name" class="col-form-label">Select Description Category Name</label><br>
                            <select class="descrip-category-select category-select" name="descrip_cat_id"  id="descrip-category-select" data-size="7" data-style="btn btn-primary btn-round" title="Single Select" required="">
                                <option class="" value="">Select Description Category</option>
                                <?php foreach ($description_cat as $key => $value) { ?>
                                        <option value="<?php echo $value['id']; ?>"><?php echo $value['var_name']; ?></option>
                                <?php } ?>

                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="var_name" class="col-form-label">Select Description Sub Category Name</label><br>
                            <select class="descrip-sub-category-select category-select" name="descrip_sub_cat_id"  id="descrip-sub-category-select" data-size="7" data-style="btn btn-primary btn-round" title="Single Select" required="">
                                <option class="" value="">Select Description Sub Category</option>
                                <?php foreach ($description_subcat as $key => $value) { ?>
                                        <option value="<?php echo $value['id']; ?>"><?php echo $value['var_name']; ?></option>
                                <?php } ?>

                            </select>
                        </div> -->


                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_range" class="col-form-label">Project Area Range</label>
                                <input type="text" name="var_range" value="" class="form-control" id="var_range" required="" placeholder="Enter Area Range">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_floors" class="col-form-label">Project No. of Floors</label>
                                <input type="text" name="var_floors" value="" class="form-control" id="var_floors" required="" placeholder="Enter No. of Floors">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_towers" class="col-form-label">Project No. of Towers</label>
                                <input type="text" name="var_towers" value="" class="form-control" id="var_towers" required="" placeholder="Enter No. of Towers">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_unit" class="col-form-label">Project No. of Units</label>
                                <input type="text" name="var_unit" value="" class="form-control" id="var_unit" required="" placeholder="Enter No. of Units">
                            </div>
                        </div>


                        <div class="col-md-6">
                            <label for="var_name" class="col-form-label">Select Multiple Features Name</label><br>
                            <select class="selectpicker features-select" name="features_id[]"  id="features_id" data-size="7" data-style="btn btn-primary btn-round" title="Single Select" required="" multiple>
                                <option class="" value="">Select Multiple Features</option>
                                <?php foreach ($features as $key => $value) { ?>
                                        <option value="<?php echo $value['id']; ?>"><?php echo $value['var_name']; ?></option>
                                <?php } ?>

                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="var_name" class="col-form-label">E-Brochure PDF</label><br>

                                <div class="custom-file" id="customFile" lang="es">
                                        <input type="file" class="custom-file-input-1" name="var_brochure" id="BrochurePDF" aria-describedby="fileHelp">
                                        <label class="custom-file-label" for="BrochurePDF" placeholder="Upload E-Brochure PDF" accept="image/pdf">
                                           Select file...
                                        </label>
                                </div>
                        </div>

                        <div class="col-md-6">
                            <label for="var_name" class="col-form-label">Layout & Plans PDF</label><br>

                                <div class="custom-file" id="customFile" lang="es">
                                        <input type="file" class="custom-file-input-2" name="var_layout" id="LayoutPDF" aria-describedby="fileHelp">
                                        <label class="custom-file-label" for="LayoutPDF" placeholder="Upload Layout & Plans PDF" accept="image/pdf">
                                           Select file...
                                        </label>
                                </div>
                        </div>

                        <div class="col-md-6">
                            <label for="var_name" class="col-form-label">RERA Certificate PDF</label><br>

                                <div class="custom-file" id="customFile" lang="es">
                                        <input type="file" class="custom-file-input-3" name="var_rera" id="CertificatePDF" aria-describedby="fileHelp">
                                        <label class="custom-file-label" for="CertificatePDF" placeholder="Upload Layout & Plans PDF" accept="image/pdf">
                                           Select file...
                                        </label>
                                </div>
                        </div>


                        <div class="col-md-6">
                                <label for="formFileMultiple" class="form-label">Project Multiple Image </label>
                                <input class="form-control"  name="project_images_multi[]"  type="file" id="formFileMultiple" multiple />
                        </div>

                      <!--   <div class="col-md-6">
                            <label for="var_name" class="col-form-label">E-Brochure PDF</label><br>

                                <div class="custom-file" id="customFile" lang="es">
                                        <input type="file" class="custom-file-input-1" name="var_brochure" id="BrochurePDF" aria-describedby="fileHelp">
                                        <label class="custom-file-label" for="BrochurePDF" placeholder="Upload E-Brochure PDF" accept="image/pdf">
                                           Select file...
                                        </label>
                                </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                                <label class="control-label">Multiple Images</label>
                                <input type="file"  name="images[]" id="files" class="form-control" multiple>
                            </div>
                        </div> -->

                        <div class="col-md-3">
                            <label for="project_image" class="col-form-label">Project Image</label>

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
                            <a href="<?php echo base_url('admin/project');?>" class="btn btn-outline-danger btn-round btn-block col-12">CANCEL</a>                
                        </div>
                </div>
            </form>    
        </div>
    </div>                
</div>