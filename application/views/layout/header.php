<?php 
if (empty($_SESSION['User'])) {
      redirect('login');
    }
?>
<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url();?>assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="<?php echo base_url();?>assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
     Login - Devsiddhi Admin Panel
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!-- Extra details for Live View on GitHub Pages -->
  <!-- Canonical SEO -->
  <link rel="canonical" href="https://www.creative-tim.com/product/paper-dashboard-2-pro" />
  <!--  Social tags      -->
  <meta name="keywords" content="creative tim, html dashboard, html css dashboard, web dashboard, bootstrap 4 dashboard, bootstrap 4, css3 dashboard, bootstrap 4 admin, paper dashboard bootstrap 4 dashboard, frontend, responsive bootstrap 4 dashboard, paper design, paper dashboard bootstrap 4 dashboard">
  <meta name="description" content="Paper Dashboard PRO is a beautiful Bootstrap 4 admin dashboard with a large number of components, designed to look beautiful, clean and organized. If you are looking for a tool to manage dates about your business, this dashboard is the thing for you.">
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content="Paper Dashboard PRO by Creative Tim">
  <meta itemprop="description" content="Paper Dashboard PRO is a beautiful Bootstrap 4 admin dashboard with a large number of components, designed to look beautiful, clean and organized. If you are looking for a tool to manage dates about your business, this dashboard is the thing for you.">
  <meta itemprop="image" content="../../../../s3.amazonaws.com/creativetim_bucket/products/84/opt_pd2p_thumbnail.jpg">
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="product">
  <meta name="twitter:site" content="@creativetim">
  <meta name="twitter:title" content="Paper Dashboard PRO by Creative Tim">
  <meta name="twitter:description" content="Paper Dashboard PRO is a beautiful Bootstrap 4 admin dashboard with a large number of components, designed to look beautiful, clean and organized. If you are looking for a tool to manage dates about your business, this dashboard is the thing for you.">
  <meta name="twitter:creator" content="@creativetim">
  <meta name="twitter:image" content="../../../../s3.amazonaws.com/creativetim_bucket/products/84/opt_pd2p_thumbnail.jpg">
  <!-- Open Graph data -->
  <meta property="fb:app_id" content="655968634437471">
  <meta property="og:title" content="Paper Dashboard PRO by Creative Tim" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://creativetimofficial.github.io/paper-dashboard-2-pro/examples/dashboard.html" />
  <meta property="og:image" content="../../../../s3.amazonaws.com/creativetim_bucket/products/84/opt_pd2p_thumbnail.jpg" />
  <meta property="og:description" content="Paper Dashboard PRO is a beautiful Bootstrap 4 admin dashboard with a large number of components, designed to look beautiful, clean and organized. If you are looking for a tool to manage dates about your business, this dashboard is the thing for you." />
  <meta property="og:site_name" content="Creative Tim" />
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
  <link href="<?php echo base_url();?>assets/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
  <!-- CSS Files -->
  <link href="<?php echo base_url();?>assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="<?php echo base_url();?>assets/css/paper-dashboard.min1036.css?v=2.1.1" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="<?php echo base_url();?>assets/demo/demo.css" rel="stylesheet" />
  <!-- Extra details for Live View on GitHub Pages -->
  <!-- Google Tag Manager -->

  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        '../../../../www.googletagmanager.com/gtm5445.html?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-NKDMSK6');
  </script>
  <!-- End Google Tag Manager -->
</head>

  <div class="wrapper ">
    <div class="sidebar" data-color="default" data-active-color="danger">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color=" default | primary | info | success | warning | danger |"
    -->
      <div class="logo">
        <a href="https://www.creative-tim.com/" class="simple-text logo-mini">
          <div class="logo-image-small">
            <img src="<?php echo base_url();?>assets/img/logo-small.png">
          </div>
          <!-- <p>CT</p> -->
        </a>
        <a href="" class="simple-text logo-normal">
          Devsiddhi
          <!-- <div class="logo-image-big">
            <img src="../assets/img/logo-big.png">
          </div> -->
        </a>
      </div>
      <div class="sidebar-wrapper">
        <div class="user">
          <div class="photo">
            <img src="<?php echo base_url();?>assets/img/faces/ayo-ogunseinde-2.jpg" />
          </div>
          <div class="info">
            <a data-toggle="collapse" href="#collapseExample" class="collapsed">
              <span>
                <?php echo $_SESSION['User'];?>
                <!-- <b class="caret"></b> -->
              </span>
            </a>
            <div class="clearfix"></div>
         <!--    <div class="collapse" id="collapseExample">
              <ul class="nav">
                <li>
                  <a href="#">
                    <span class="sidebar-mini-icon">MP</span>
                    <span class="sidebar-normal">My Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="sidebar-mini-icon">EP</span>
                    <span class="sidebar-normal">Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="sidebar-mini-icon">S</span>
                    <span class="sidebar-normal">Settings</span>
                  </a>
                </li>
              </ul>
            </div> -->
          </div>
        </div>
        <ul class="nav">
          <li class="active">
            <a href="<?php echo base_url('admin/dashboard');?>">
              <i class="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </a>
          </li>


             <li>
                <a href="<?php echo base_url('admin/features'); ?>"><i class="nc-icon nc-paper"></i> Features</a>
            </li>

          <li>
            <a data-toggle="collapse" href="#pagesExamples">
              <i class="nc-icon nc-bullet-list-67"></i>
              <p>
                Category <b class="caret"></b>
              </p>
            </a>
            <div class="collapse" id="pagesExamples">
              <ul class="nav">
                <li>
                  <a class="app-menu__item <?php if($this->uri->segment(2)=='category'){echo 'active';}?>" href="<?php echo base_url('admin/category'); ?>">
                    <span class="sidebar-mini-icon">C</span>
                    <span class="sidebar-normal"> Category </span>
                  </a>
                </li>

                <li>
                  <a class="app-menu__item <?php if($this->uri->segment(2)=='project'){echo 'active';}?>" href="<?php echo base_url('admin/project'); ?>">
                    <span class="sidebar-mini-icon">P</span>
                    <span class="sidebar-normal">Project </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

         <!--    <li>
                <a data-toggle="collapse" href="#componentsExamples">
                <i class="nc-icon nc-bullet-list-67"></i>
                <p>
                Description Cate.. <b class="caret"></b>
                </p>
                </a>
                <div class="collapse" id="componentsExamples">
                <ul class="nav">
                <li>
                  <a class="app-menu__item <?php if($this->uri->segment(2)=='description_cat'){echo 'active';}?>" href="<?php echo base_url('admin/description_cat'); ?>">
                    <span class="sidebar-mini-icon">C</span>
                    <span class="sidebar-normal"> Description Category </span>
                  </a>
                </li>

                <li>
                  <a class="app-menu__item <?php if($this->uri->segment(2)=='description_subcat'){echo 'active';}?>" href="<?php echo base_url('admin/description_subcat'); ?>">
                    <span class="sidebar-mini-icon">C</span>
                    <span class="sidebar-normal">Description Sub Category </span>
                  </a>
                </li>
                </ul>
                </div>
            </li> -->

          <!--   <li>
                <a href="<?php echo base_url('admin/project'); ?>"><i class="nc-icon nc-share-66"></i> Project</a>
            </li> -->

         

            <li>
                <a href="<?php echo base_url('admin/inquiry'); ?>"><i class="fa fa-users text-danger"></i> Inquiry</a>
            </li>

               <li>
                <a href="<?php echo base_url('admin/broker'); ?>"><i class="fa fa-users text-danger"></i> Broker</a>
            </li>

            <li>
                <a href="<?php echo base_url('admin/contact'); ?>"><i class="nc-icon nc-badge"></i> Contact</a>
            </li>

        </ul>
      </div>
    </div>



<div class="main-panel ps">
                <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <div class="navbar-minimize">
                                <button id="minimizeSidebar" class="btn btn-icon btn-round">
                                <i class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"></i>
                                <i class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"></i>
                                </button>
                            </div>
                            <div class="navbar-toggle">
                                <button type="button" class="navbar-toggler">
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navigation">
                            <ul class="navbar-nav">
                                 <li class="nav-item btn-rotate dropdown">
                                  <a class="nav-link dropdown-toggle" href="http://example.com/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <!-- <i class="nc-icon nc-bell-55"></i> -->
                                    <p>
                                      <span class="d-lg-none d-md-block">Some Actions</span>
                                    </p>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="<?php echo base_url(); ?>login/logOut">

                                    <i class="fa fa-sign-out"></i>Logout</a>

                                   <!--   <a href="<?php echo base_url(); ?>login/logOut">
                                <i class="feather icon-log-out"></i> Logout
                                </a> -->


                                    <!-- <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a> -->
                                  </div>
                              </li>
                            <!--    <li class="nav-item">
                <a class="nav-link btn-rotate" href="javascript:;">
                  <i class="nc-icon nc-settings-gear-65"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li> -->
                              </ul>
                        </div>
                    </div>
                </nav>
              
            

<!-- 

             <td><a href="<?php echo $images; ?>" target="_blank" document><i class="nc-icon nc-cloud-download-93"> Open PDF </i></a></td> -->