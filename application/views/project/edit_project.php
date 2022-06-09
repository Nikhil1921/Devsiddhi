    <div class="content">
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Edit Project</h4>
        </div>
        <div class="card-body">
            <form action="<?php echo base_url('admin/project/subCatUpdate'); ?>" enctype="multipart/form-data" method="post" accept-charset="utf-8">
                <input type="hidden" name="image" value="">
                 <input type="hidden" name="project_id" id="project_id" value="<?php echo $data['id']; ?>">
                <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_name" class="col-form-label">Sub Project Name</label>   <input type="text" name="var_name" class="form-control" id="c_name" maxlength="100" value="<?php echo $data['var_name']; ?>" required="" placeholder="Enter Project Name">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <label for="cat_id" class="col-form-label">Select Project Name</label><br>
                            <select class="selectpicker" name="cat_id" data-size="7" data-style="btn btn-primary btn-round" title="Single Select" required="">
                                  <?php foreach ($category_data as $key => $value) { ?>

                                <option value="<?php echo $value['id']; ?>"  <?php if($value['id'] == $data['cat_id']){ echo "selected";} ?>><?php echo $value['var_name']; ?></option>
                                  <?php } ?>

                            </select>
                        </div>

                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_range" class="col-form-label">Project Area Range</label>
                                <input type="text" name="var_range" value="<?php echo $data['var_range']; ?>" class="form-control" id="var_range" required="" placeholder="Enter Area Range">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_floors" class="col-form-label">Project No. of Floors</label>
                                <input type="text" name="var_floors" value="<?php echo $data['var_floors']; ?>" class="form-control" id="var_floors" required="" placeholder="Enter No. of Floors">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_towers" class="col-form-label">Project No. of Towers</label>
                                <input type="text" name="var_towers" value="<?php echo $data['var_towers']; ?>" class="form-control" id="var_towers" required="" placeholder="Enter No. of Towers">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="var_unit" class="col-form-label">Project No. of Units</label>
                                <input type="text" name="var_unit" value="<?php echo $data['var_unit']; ?>" class="form-control" id="var_unit" required="" placeholder="Enter No. of Units">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <label for="var_name" class="col-form-label">Select Multiple Features Name</label><br>
                            <select class="selectpicker features-select" name="features_id[]"  id="features_id" data-size="7" data-style="btn btn-primary btn-round" title="Single Select" required="" multiple>
                                <option class="" value="">Select Multiple Features</option>
                                <?php 
                                                        if($data['features_id'] != ''){
                                                              $featuresdara = explode(',', $data['features_id']);
                                                            }else{
                                                               $featuresdara = '';
                                                            }

                                        foreach ($features as $key => $value) { ?>
                                        <option value="<?php echo $value['id']; ?>" <?php if(in_array($value['id'], $featuresdara)){ echo 'selected'; } ?>><?php echo $value['var_name']; ?></option>
                                <?php } ?>

                            </select>
                        </div>


                         <div class="col-md-3">
                            <label for="var_brochure" class="col-form-label">E-Brochure PDF</label><br>

                                <div class="custom-file" id="customFile" lang="es">
                                        <input type="file" class="custom-file-input-1" name="var_brochure" id="BrochurePDF" aria-describedby="fileHelp">
                                        <label class="custom-file-label" for="BrochurePDF" placeholder="Upload E-Brochure PDF" accept="image/pdf">
                                           <?php echo $data['var_brochure']; ?>
                                        </label>

                                        <input type="hidden" name="var_brochure_hidden" value="<?php echo $data['var_brochure'];?>">

                                </div>
                        </div>

                        <div class="col-md-3">
                            <div class="row">
                                <a href="<?php echo base_url('uploads/project/brochure/'.$data['var_brochure']); ?>" class="btn btn-bd-primary download-icon" download="">
                                    <i class="nc-icon nc-cloud-download-93"></i>
                                    <!--  <img class="ca-image" src="<?php echo base_url('uploads/project/brochure/'.$data['var_brochure']); ?>"  height="100" width="100"> -->
                                </a>
                                
                            </div>
                        </div>

                        <div class="col-md-3">
                            <label for="var_layout" class="col-form-label">Layout & Plans PDF</label><br>

                                <div class="custom-file" id="customFile" lang="es">
                                        <input type="file" class="custom-file-input-2" name="var_layout" id="LayoutPDF" aria-describedby="fileHelp">
                                        <label class="custom-file-label" for="LayoutPDF" placeholder="Upload Layout & Plans PDF" accept="image/pdf">
                                             <?php echo $data['var_layout']; ?>
                                        </label>

                                         <input type="hidden" name="var_layout_hidden" value="<?php echo $data['var_layout'];?>">
                                </div>
                        </div>

                        <div class="col-md-3">
                            <div class="row">
                                <a href="<?php echo base_url('uploads/project/layout/'.$data['var_layout']); ?>" class="btn btn-bd-primary download-icon" download="">
                                    <i class="nc-icon nc-cloud-download-93"></i>
                                  
                                </a>
                                
                            </div>
                        </div>



                        <div class="col-md-3">
                            <label for="var_rera" class="col-form-label">RERA Certificate PDF</label><br>

                                <div class="custom-file" id="customFile" lang="es">
                                        <input type="file" class="custom-file-input-3" name="var_rera" id="CertificatePDF" aria-describedby="fileHelp">
                                        <label class="custom-file-label" for="CertificatePDF" placeholder="Upload Layout & Plans PDF" accept="image/pdf">
                                           <?php echo $data['var_rera']; ?>
                                        </label>

                                        <input type="hidden" name="var_rera_hidden" value="<?php echo $data['var_rera'];?>">
                                </div>
                        </div>

                        <div class="col-md-3">
                            <div class="row">
                                <a href="<?php echo base_url('uploads/project/rera/'.$data['var_rera']); ?>" class="btn btn-bd-primary download-icon" download="">
                                    <i class="nc-icon nc-cloud-download-93"></i>
                                  
                                </a>
                                
                            </div>
                        </div>





                    <div class="col-md-3">
                            <label for="category_image" class="col-form-label">Category Image</label>

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
                                    <input type="file" name="image" id="image" accept="image/jpg, image/jpeg, image/png" 0="">
                                    </span>
                                    <a href="javascript:;" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                                </div>

                               <input type="hidden" name="image_hidden" value="<?php echo $data['var_img'];?>">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="row">
                                 <img class="ca-image" src="<?php echo base_url('uploads/project/'.$data['var_img']); ?>"  height="100" width="100">
                                
                            </div>
                        </div>
                        <div class="col-md-3"></div>

                          <div class="col-md-6">
                                <label for="formFileMultiple" class="form-label">Project Multiple Image </label>
                                <input class="form-control"  name="project_images_multi[]"  type="file" id="formFileMultiple" multiple />
                        </div>

<!-- <img src="http://localhost/devsiddhi-admin/uploads/project/multi/16546899603.png" alt=""> -->

                       
                       <!--  <div class="row">
                            <div class="col-md-3">
                                <div class="row">
                                <div class="gallery">
                                    <ul>
                                        <?php if(!empty($gallery)): foreach($gallery as $file): ?>
                                        <li>
                                            <img src="<?php echo base_url('uploads/project/multi/'.$file['var_img']); ?>" alt="" >
                                            <p>Uploaded On <?php echo date("j M Y",strtotime($file['created_date'])); ?></p>
                                        </li>
                                        <?php endforeach; else: ?>
                                        <p>No File uploaded.....</p>
                                        <?php endif; ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> -->

                    <div class="col-md-12" style="margin-top: 15px ">
                            <div class="alert alert-success alert-dismissible fade show alert-success-multi-img" style="display: none;">
                            <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                                <i class="nc-icon nc-simple-remove"></i>
                            </button>
                            <span>
                                Your data delete Successfully..                    
                            </span>
                        </div>

                    </div>

                    <section class="pt-4 pb-4">
                        <div class="container">
                            <div class="row">
                                <?php if(!empty($gallery)): foreach($gallery as $file): ?>
                                <div id= "delete_<?php echo $file['id'];?>" class="col-lg-3 project-multi" data-value="<?php echo $file['id'];?>">
                                    <img class="img-project" src="<?php echo base_url('uploads/project/multi/'.$file['var_img']); ?>" alt="">
                                    <i id="img-project" class="fa fa-trash-o delete delete_<?php echo $file['id'];?>  img-project-multi" aria-hidden="true" id="delete_datr" onClick="changeColor('<?php echo $file['id'];?>')" value="<?php echo $file['id'];?>"></i>

                                      <!--   <input type="hidden" value="<?php echo $file['id'];?>"/> -->



                                    <span class="img-project-date"> <?php echo date("j M Y h:i A",strtotime($file['created_date'])); ?></span>

                                </div>
                            <?php endforeach; else: ?>
                                <p>No File uploaded.....</p>
                            <?php endif; ?>
                            </div>
                        </div>
                    </section>

         
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
  <script src="<?php echo base_url();?>assets/js/core/jquery.min.js"></script>
<script type="text/javascript">



    function changeColor(img_id){
        //alert(img_id);
        $.ajax({
          url: '<?= base_url() ?>admin/project/project_image_delete/'+img_id,
          type: 'post',
          data: {img_id: img_id},
          success: function(response){ //alert(response);
            $('#delete_'+img_id).remove();
            $('.alert-success-multi-img').css('display','block');
            setTimeout(mess_hide, 2000);
          }
         });
    }

    function mess_hide(){
        $('.alert-success-multi-img').css('display','none');
    }

    

</script>