
<main class="main-content">
  <div class="slider" data-full-height data-flickity='{"cellAlign": "left", "draggable": false, "wrapAround": true, "cellSelector": ".slider__slide", "autoPlay": 4500}' data-waypoint>
    <div class="slider__slide" data-full-height style="background: url('../../frontend_assets/images/on-going/Felicia/7.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <a href="city-center-2.php">
        
        <div class="container">
          <div class="slider__content-wrap">
            <h1 class="text-uppercase">    <?php if(!empty($product_data)){?> <?php echo $product_data[0]['project_name'];?> <?php }?></h1>
          </div>
        
      </div>
    </a>
    </div>
    <div class="slider__slide" data-full-height style="background: url('../../frontend_assets/images/on-going/Lavish/9.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <a href="city-center-2.php">
        <div class="container">
          <div class="slider__content-wrap">
            <h1 class="text-uppercase">    <?php if(!empty($product_data)){?><?php echo $product_data[0]['project_name'];?> <?php } ?></h1>
          </div>
        
      </div></a>
    </div>
         </div>



              <?php if(!empty($product_data)){?>
                <div class="featured-awards">
                  <div class="container">
                    <h2 class="featured-awards__heading"> <?php echo $product_data[0]['project_name'];?></h2>
                    <div class="grid grid--padding-seventeen">

                       <?php 
                       // echo "<pre>"; print_r($product_data);  exit;
                        foreach ($product_data as $key => $value) {
                        $images = base_url().'uploads/project/'.$value['project_image'];
                      ?>
                      <div class="grid__cell grid__cell--one-third award">
                        <figure class="award__image award__image1">
                         <a class="award-link" href="<?php echo base_url('category/product/description/'.base64_encode($value['id'])); ?>">
                          <img width="377" height="266" src="<?php echo $images; ?>" class="attachment-377x266x1 size-377x266x1" alt=""> 
                        </a>
                      </figure>
                        <h4 class="award__name"><a href="<?php echo base_url('category/product/description/'.base64_encode($value['id'])); ?>"><?php echo $value['project_name'];?></a></h4>
                      </div>
                      <?php } ?>

                     <!--  <div class="grid__cell grid__cell--one-third award">
                        <figure class="award__image award__image1"><a class="award-link" href="city-center-2.php"> <img width="377" height="266" src="<?php echo base_url();?>frontend_assets/images/on-going/Lavish/2.jpg"></a> </figure>
                        <h4 class="award__name"> <a href="city-center-2.php">Lavish</a></h4>
                      </div> -->

                    </div>
                    
                    <hr>
                    
                    
                    
                    
                    
                  </div>
                </div>

                  <?php } else { ?>
                       <p class="text-center">Product Category Not Available...</p>
                   <?php } ?>
                
                
                
              </main>

<script type='text/javascript' src='../../frontend_assets/js/theme.js'></script>
                                                      