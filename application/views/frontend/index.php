
<main
  class="main-content">
  <div class="slider" data-full-height data-flickity='{"cellAlign": "left", "draggable": false, "wrapAround": true, "cellSelector": ".slider__slide"}' data-waypoint>
    <div class="slider__slide" data-full-height style="background: url('frontend_assets/images/slider/1.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <a href="javascript:;">
        
        <div class="container">
          <div class="slider__content-wrap">
            <h1 class="text-uppercase mb animation_h1" data-aos="fade-right">Welcome to Devsiddhi Group</h1>
            <a class="btn_more"  data-aos="fade-right"href="projects.php" >View More</a>
          </div>
        
      </div>
    </a>
    </div>
</div>
<div class="slider" data-full-height data-flickity='{"cellAlign": "left", "draggable": false, "wrapAround": true, "cellSelector": ".slider__slide", "autoPlay": 2500}' data-waypoint>
    <div class="slider__slide" data-full-height style="background: url('frontend_assets/images/slider/2.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <a href="javascript:;">
        <div class="container">
          <div class="slider__content-wrap">
            <h1 class="text-uppercase mb" data-aos="fade-right">Devsidhdhi Falicia</h1>
            <a class="btn_more" data-aos="fade-right" href="shilp-aperia.php">View More</a>
          </div>
        
      </div></a>
    </div>
    <div class="slider__slide" data-full-height style="background: url('frontend_assets/images/slider/3.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <a href="javascript:;">
        <div class="container">
          <div class="slider__content-wrap">
            <h1 class="text-uppercase mb" data-aos="fade-right">Devsidhdhi Lavish</h1>
            <a class="btn_more" data-aos="fade-right" href="city-center-2.php">View More</a>
          </div>
        
      </div></a>
    </div>
    <div class="slider__slide" data-full-height style="background: url('frontend_assets/images/slider/4.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <a href="javascript:;">
        <div class="container">
          <div class="slider__content-wrap">
            <h1 class="text-uppercase mb" data-aos="fade-right">Devsidhdhi Fabula</h1>
            <a class="btn_more" data-aos="fade-right" href="devsiddhi-fabula.php">View More</a>
          </div>
        
      </div></a>
    </div>

    <div class="slider__slide" data-full-height style="background: url('frontend_assets/images/slider/5.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      <a href="javascript:;">
        <div class="container">
          <div class="slider__content-wrap">
            <h1 class="text-uppercase mb" data-aos="fade-right">Devsidhdhi castel</h1>
            <a class="btn_more" href="devsiddhi-castle.php">View More</a>
          </div>
        
      </div></a>
    </div>
</div>

    <?php if(!empty($category)){?>
                <div class="featured-awards">
                  <div class="container">
                    <h2 class="featured-awards__heading"> Our Project</h2>
                    <div class="grid grid--padding-seventeen">


                      <?php 
                        //echo "<pre>"; print_r($category); 
                        foreach ($category as $key => $value) {
                        $images = base_url().'uploads/category/'.$value['var_img'];
                      ?>
                      <div class="grid__cell grid__cell--one-third award">
                        <figure class="award__image award__image1"> 

                          <a class="award-link" href="<?php echo base_url('category/product/'.base64_encode($value['id'])); ?>">
                            <img width="377" height="266" src="<?php echo $images; ?>" class="attachment-377x266x1 size-377x266x1" alt=""> 
                          </a>
                        </figure>
                        <h4 class="award__name"><a href="<?php echo base_url('category/product/'.base64_encode($value['id'])); ?>"><?php echo $value['var_name'];?></a></h4>
                      </div> 
                    <?php } ?>


                    </div>
                    
                    <hr>
                    
                    
                    
                    
                    
                  </div>
                </div>



                  <?php } else { ?>
                       <p class="text-center">Category Not Available...</p>
                   <?php } ?>
                


                <div class="business-association-page contact-form" style="background:#fff">
                  <div class="container">
                    <div class="grid grid--padding-large">
                      <div class="grid__cell">
                        <div class="form-bg">
                          <h1 class="business-title mt0">Business Association Form - Broker Registration</h1>
                          <p>Request you to kindly fill all the required details.</p>

                             <div class="dzFormMsg" id="dzFormMsg"></div>



                   <form class="o-form" action="javascript:void(0);" method="post" id="business-association-formss">
                            <div class="c-contact-form_wrap js-form-wrap">
                              <fieldset class="o-form_fieldset">

                                <span class="error error_div" id="var_name_error" style="display: none;">Please Enter Your Name !</span>


                                <span class="error error_div" id="var_flat_error" style="display: none;">Please Enter Your Flat type !</span>

                                <span class="error error_div" id="var_budget_error" style="display: none;">Please Enter Your Approx Budget !</span>



                                <span class="error error_div" id="var_city_error" style="display: none;">Please Enter Your City !</span>


                                   <span class="error error_div" id="phoneno_error" style="display: none;">Please Enter Your Phone Number !</span>
                                <span class="error error_div" id="phoneno_error3" style="display: none;">Please Enter Valid Phone Number !</span>

                              <!--   <span class="error error_div" id="var_mobileno_error" style="display: none;">Please Enter Your Phone Number !</span> -->

                               

                               

                                <div class="o-grid_item -half">
                                  <div class="o-input-wrap">
                                    <input class="input_clr" type="text" name="var_name" id="var_name" placeholder="Name *">
                                  </div>
                                </div>


                                <div class="o-grid_item -half">
                                  <div class="o-input-wrap">
                                    <input class="input_clr" type="text" name="var_flat" id="var_flat" placeholder="Flat type *">
                                  </div>
                                </div>
                                <div class="o-grid_item -half">
                                  <div class="o-input-wrap">
                                    <input class="input_clr" type="text" name="var_budget" id="var_budget" placeholder="Approx Budget *">
                                  </div>
                                </div>
                                <div class="o-grid_item -half">
                                  <div class="o-input-wrap">
                                    <input class="input_clr" type="text" name="var_city" id="var_city" placeholder="City *">
                                  </div>
                                </div>

                               <!--  <div class="o-grid_item -half">
                                  <div class="o-input-wrap">
                                    <input class="input_clr" type="tel" name="var_mobileno" id="var_mobileno" placeholder="Phone Number *">
                                  </div>
                                </div> -->

                                  <div class="o-grid_item -half">
                                  <div class="o-input-wrap">
                                    <input class="input_clr" type="tel" name="phoneno" id="b_phoneno" placeholder="Phone Number *">
                                  </div>
                                </div>


                                <div class="o-grid_item -full">
                                  <div class="o-input-wrap">
                                    <textarea class="input_clr message" type="text" id="var_message" name="var_message" placeholder="Message"></textarea>
                                  </div>
                                </div>
                                <div class="o-grid_item -half">
                                  <div class="o-form_button">
                                    <button  ame="submit" onclick="broker()" class="btn btn-default"  value="submit" id="BusinessAssociation" type="submit"> Submit</button>


                                  </div>
                                </div>
                              </fieldset>
                            </div>
                          </form>
 





                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                


                
              </main>

