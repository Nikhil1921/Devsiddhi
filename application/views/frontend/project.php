<?php $pro_img = base_url().'uploads/project/'.$product_data[0]['project_image'];

//echo "<pre>"; print_r($product_data); exit;
?>


<main class="main-content">
  <div class="heading-image-title" data-bg-grab data-full-height="0.75"> 
    <img width="1800" height="927" src="<?php echo $pro_img;?>" alt="" />
    <div class="heading-image-title__wrapper">
      <div class="slider__content slider-con">
        <div class="container">
          <div class="slider__content-wrap">
            <h1 class="text-uppercase"><?php echo $product_data[0]['project_name'];?></h1>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="milestone specialisms">
    <div class="grid">
      <div class="grid__cell grid__cell--full">
        <div class="container">


          <div class="col-milestone">
            <div class="milestone-counter">
              <div class="stats animaper">
                <?php echo $product_data[0]['var_range'];?>
              </div>
              <h4>Area Range</h4>
            </div>
          </div>
          <div class="col-milestone">
            <div class="milestone-counter">
              <div class="stats animaper">
                 <?php echo $product_data[0]['var_floors'];?>
              </div>
              <h4>No. of Floors</h4>
            </div>
          </div>

          <div class="col-milestone">
            <div class="milestone-counter">
              <div class="stats animaper">
                <?php echo $product_data[0]['var_towers'];?>
              </div>
              <h4>No. of Towers</h4>
            </div>
          </div>

          <div class="col-milestone">
            <div class="milestone-counter">
              <div class="stats animaper">
                <?php echo $product_data[0]['var_unit'];?>
              </div>
              <h4>No. of Units</h4>
            </div>
          </div>



          <div class="rera-block mt-2 ">
            <p><strong>RERA Website:</strong> <a href="https://gujrera.gujarat.gov.in/" target="_blank">https://gujrera.gujarat.gov.in</a></p>
            <p><strong>Reg No.:</strong> PR/GJ/GANDHINAGAR/GANDHINAGAR CITY/XXXX/XXX002222/123456</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
<?php if(!empty($features_data)){?>

  <div class="full-width-image large" data-bg-grab> <img width="1800" height="1048" src="<?php echo $pro_img;?>" alt="" /></div>
  <div class="linkbox-grid linkbox-grid--about">
    <div class="linkbox-grid__limit">
      <h2 class="project-title text-uppercase">Features</h2>
      <div class="grid grid--padding-sixteenfive">

        <?php 
          //echo "<pre>"; print_r($product_img);  exit;
          foreach ($features_data as $key => $value) {
            $images = base_url().'uploads/features/'.$value['var_img'];
        ?>


        <div class="grid__cell grid__cell--one-sixth linkbox">
          <figure class="linkbox__image"> <img src="<?php echo $images;?>" alt=""></figure>
          <div class="linkbox__content-wrap">
            <div class="linkbox__link-content">
              <p><?php echo $value['var_name'];;?></p>
            </div>
          </div>
        </div>

         <?php } ?>


      </div>
    </div>
  </div>


    <?php  }  else { ?>
                       <p class="text-center">Features Not Available...</p>
                   <?php }  ?>


<?php if(!empty($product_img)){?>

  <div class="image-gallery">
    <div class="grid grid--padding-twelvefive">

        <?php 
          //echo "<pre>"; print_r($product_img);  exit;
          foreach ($product_img as $key => $value) {
          $images = base_url().'uploads/project/multi/'.$value['var_img'];
        ?>

       <div class="grid__cell grid__cell--one-third grid__cell--image-gallery">
       <div class="image-gallery__image-container" data-bg-grab> 
          <img width="1192" height="716" src="<?php echo $images;?>" alt="" /> 
          <a class="image-gallery__image-link mfp-image" href="<?php echo $images;?>" data-mfp="<?php echo $images;?>">
          </a>
        </div>
      </div>
      <?php } ?>

    </div>
  </div>

   <?php  }  else { ?>
                       <p class="text-center">Product Images Not Available...</p>
                   <?php }  ?>


  <div class="linkbox-grid know-more-sec">
    <div class="container linkbox-grid__limit">
      <div class="grid grid--padding-sixteenfive">
        <div class="grid__cell grid__cell--one-third know-more-box">
          <div class="feature-box">


         <!--    <a href="https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">Download</a> -->

              <?php 
                $brochure_pdf = base_url().'uploads/project/brochure/'.$product_data[0]['var_brochure'];
                $layout_pdf = base_url().'uploads/project/layout/'.$product_data[0]['var_layout'];
                $rera_pdf = base_url().'uploads/project/rera/'.$product_data[0]['var_rera'];


                // echo "<pre>"; print_r($product_data); exit;
              ?>





            <a href="<?php echo $brochure_pdf;?>" class="btn btn-bd-primary" download>

            <div class="feature-box-content">
              <figure class="know-more__image"> 
                <img src="<?php echo base_url();?>frontend_assets/images/icons/download.png" alt=""></figure>
              <div class="linkbox__content-wrap">
                <div class="linkbox__link-content">
                  <p>E-Brochure</p>
                </div>
              </div>
            </div></a>


          </div>
        </div>


        <div class="grid__cell grid__cell--one-third know-more-box">
          <div class="feature-box" id="lightgallery">
          <a href="<?php echo $layout_pdf;?>" class="btn btn-bd-primary" download>
            <div class="feature-box-content" data-src="<?php echo base_url();?>frontend_assets/images/Project-Page/shilp-aperia/layout-plan/ground_floor_plan.jpg" data-sub-html="Ground Floor Plan" >
              <figure class="know-more__image"> <img src="<?php echo base_url();?>frontend_assets/images/icons/layout-plans.png" alt=""></figure>
              <div class="linkbox__content-wrap">
                <div class="linkbox__link-content">
                  <p>Layout & Plans</p>
                </div>
              </div>
            </div>
           
          </a>
          </div>
        </div>





        <div class="grid__cell grid__cell--one-third know-more-box">
          <div class="feature-box">
          <a href="<?php echo $rera_pdf;?>" class="btn btn-bd-primary" download>
            <div class="feature-box-content">
              <figure class="know-more__image"> <img src="<?php echo base_url();?>frontend_assets/images/icons/rera_certificate.png" alt=""></figure>
              <div class="linkbox__content-wrap">
                <div class="linkbox__link-content">
                  <p>RERA Certificate</p>
                </div>
              </div>
            </div></a>
          </div>
        </div>



      </div>
    </div>
  </div>
  <div class="milestone specialisms">
  <div class="grid">
    <div class="grid__cell grid__cell--full">
      <div class="container">
        <div class="col-milestone">
          <div class="milestone-counter">
            <div class="stats animaper">
              <div class="num" data-content="4" data-num="50">4</div>
            </div>
            <h4>Project Completed</h4>
          </div>
        </div>
        <div class="col-milestone">
          <div class="milestone-counter">
            <div class="stats animaper">
              <div class="num" data-content="900" data-num="4300">900</div>
            </div>
            <h4>Satisfy Customer</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="contact-form">
    <div class="container">
      <div class="grid grid--padding-large">
        <div class="grid__cell grid__cell--one-half contact-form__cell">
          <h1 class="contact-form__heading"> Felicia</h1>
          <div class="contact-form__content">
            <p>E/801 & 802, Divyajivan Heights, <br>
              Nr. Swaminarayan Dham,<br>
              Dholeshwar Mahadev Road,<br>Koba, Gandhinagar - 382 007</p>

            <div class="phone-no"> <a class="footer-content_phone" href="tel: +919104252746"> +91 9104252746</a></div>

            <a class="contact-map__maps-link" href="https://www.google.co.in/maps/dir//5JJR%2BX5R+Divyajivan+Heights,+Near+Swaminarayan+Dham+Koba-Gandhinagar+Highway,+Dholeshwar+Mahadev+Rd,+Kudasan,+Gujarat+382007/@23.1814274,72.6392998,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395c2a6b1fb05eb9:0x98717f6a00e9180c!2m2!1d72.6403941!2d23.1824876" target="_blank"> <svg
role="presentation" class="contact-map__map-icon">
            <title>Map Pin</title>
            <use xlink:href="#map-pin"/>
            </svg> <span class="contact-map__map-label"> Google Maps </span></a> </div>
        </div>


        <div class="grid__cell grid__cell--one-half contact-form__cell contact-form__right-side">
          <h2 class="contact-form__heading"> Inquiry </h2>
          <div class="contact-form__content">
            <p>Request you to kindly fill all the required details.</p>


                 <div class="form-block">
                <span class="error error_div" id="name_error">Please Enter Your Name !</span>
                <span class="error error_div" id="name_error2">Please Enter Valid Name !</span>
                <span class="error error_div" id="email_error">Please Enter Your Email ID !</span>
                <span class="error error_div" id="email_error2">Please Enter Valid Email ID !</span>
                <span class="error error_div" id="mobile_error">Please Enter Your Mobile No. !</span>
                <span class="error error_div" id="mobile_error2">Please Enter Valid Mobile No. !</span>


                  <div class="dzFormMsg" id="dzFormMsg"></div>



              <form class="form-inline contact_box" action="javascript:void(0);" method="post" id="contact-formss">


                <input type="text" name="name" id="c_name" class="form-control input_box" placeholder="Name*">

                 <input type="hidden" value="<?php echo $product_data[0]['id'];?>"  name="product_id" id="product_id" class="form-control input_box">

                <input type="text" name="email" id="c_email" class="form-control input_box" placeholder="Email ID*">

                <input type="text" name="phone" id="c_mobile_no" class="form-control input_box" placeholder="Mobile No*">

                <textarea class="form-control input_box" id="c_message" name="message" placeholder="Message"></textarea>
                
                <button ame="submit" onclick="inquiry()"  type="submit" value="Submit" class="btn btn-default" id="conBtns">Send Message</button>


              </form>
            </div>



          </div>
        </div>



      </div>
    </div>
  </div>
</main>


