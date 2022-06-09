<!doctype html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>frontend_assets/css/edit.css" media="all" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>frontend_assets/css/style.css" media="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <title>Devsiddhi</title>
    <link rel="canonical" href="index.php" />
    <link href="https://fonts.googleapis.com/css?family=Jura:400,500,700" rel="stylesheet">
    <script type='text/javascript' src='<?php echo base_url();?>frontend_assets/js/jquery.js'></script>
    <!--<script type='text/javascript' src='js/snazzymap.js'></script>-->
    <link rel="icon" href="<?php echo base_url();?>frontend_assets/favicon.png" sizes="36x36" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  </head>
  <style type="text/css">
  #popup_cret_wrap{width:100%;height:100%;display:none;z-index:99999;position:fixed;background:rgba(13,13,13,.95)}#popup_cret_center{width:100%;height:100%;display:flex;align-items:center;justify-content:center}#popup_cret_content{min-width:10%;max-width:80%;min-height:10%;overflow:hidden;position:relative;background:url(frontend_assets/images/popup_loading.php) center center no-repeat}.popup_cret_close{right:10px;opacity:1;z-index:99999;cursor:pointer;position:absolute;width:45px;padding:0;top:10px}#popup_cret_content img:nth-child(2){width:100%}#popup_cret_img{max-width:650px}
  </style>
  <body>
    <!-- <div id="popup_cret_wrap">
      <div id="popup_cret_center">
          <div id="popup_cret_content">
            <img src="images/popup_close.png" class="popup_cret_close" />
              <img src="images/Arron-Spectra-PopUp.gif" id="popup_cret_img" />
          </div>
      </div>
    </div> -->
    <header id="top">
      <div class="main-header">
        <div class="grid">
          <div class="grid__cell grid__cell--two-eighths"> <a class="main-header__logo-link" href="<?php echo base_url();?>">
            <div class="main-header__logo-wrap"> <img src="<?php echo base_url();?>frontend_assets/images/3.png" role="presentation" title="Aaron Infrastructure" class="main-header__logo"/></div>
            <div class="main-header__logo-wrap--scrolled" style="display: none;"> <img src="<?php echo base_url();?>frontend_assets/images/3.png" role="presentation" title="Aaron Infrastructure" class="main-header__logo"/></div>
          </a></div>
          <div class="grid__cell grid__cell--four-eighths text-align-middle">
            <nav role="navigation" class="main-header__small-nav" id="main-menu">
              <ul class="small-menu">
                <li><a href="<?php echo base_url();?>">Home</a></li>
                <li><a href="<?php echo base_url('about');?>">About Us</a></li>

                   <?php  if(!empty($category)){?>
                <li class="menu-item-has-children"><a href="javascript:void(0);">Our Projects</a>
                <ul class="small-menu__submenu">

                  <?php 
                        //echo "<pre>"; print_r($category);  exit;
                        foreach ($category as $key => $value) {
                        
                      ?>
                  <li class="small-menu__item"><a href="<?php echo base_url('category/product/'.base64_encode($value['id'])); ?>"><?php echo $value['var_name'];?></a></li>

                   <?php } ?>
                  
                </ul>
              </li>
               <?php } ?>


              <li><a href="<?php echo base_url('contact');?>">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="grid__cell grid__cell--two-eighths text-align-right"><a class="main-header__menu-link menu-link" data-link="#main-menu"> <svg role="presentation" class="main-header__menu-icon">
          <title>Menu Icon</title>
          <use xlink:href="#menu-icon"/>
        </svg> </a>
        <div class="main-menu" id="main-menu">
          <nav role="navigation" class="main-menu__nav"> <a class="main-menu__logo-link" href="index.php"> <img src="<?php echo base_url();?>frontend_assets/images/3.png" role="presentation" title="Aaron Infrastructure" class="main-menu__logo"/> </a>
          <ul id="menu-small-navigation-1" class="menu">
            <li><a href="<?php echo base_url();?>">Home</a></li>
            <li><a href="<?php echo base_url('about');?>">About Us</a></li>

            <!--  <?php  if(!empty($category)){?>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="javascript:void(0);">Our Projects</a>
            <ul class="small-menu__submenu">

                     <?php 
                      
                        foreach ($category as $key => $value) {
                        
                      ?>
                  <li class="small-menu__item"><a href="<?php echo base_url('category/product/'.base64_encode($value['id'])); ?>"><?php echo $value['var_name'];?></a></li>

                   <?php } ?>
                  
            </ul>
          </li>

        <?php } ?> -->
          <li><a href="<?php echo base_url('contact');?>">Contact</a></li>
        </ul>
        <a class="main-menu__link" href="tel:+919104252746"> +91 9104252746</a> <a class="main-menu__link main-menu__link--email" href="mailto:nishthabuildcon@gmail.com"> nishthabuildcon@gmail.com </a> </nav>
        <a class="main-header__close-link" data-link="#main-menu"> <svg role="presentation" class="main-header__close-icon">
          <title>Close Icon</title>
          <use xlink:href="#close"/>
        </svg> </a></div>
      </div>
    </div>
  </div>
</header>