<?php include_once('include/header.php') ?>
<main class="main-content">
   <div class="heading-image-banner" data-bg-grab> <img width="1800" height="726" src="images/Career-Banner.jpg" alt="" /></div>

  <div class="contact-form">
    <div class="container">
      <div class="grid grid--padding-large">
        <div class="grid__cell grid__cell--one-half contact-form__cell">
          <h1 class="contact-form__heading"> Contact</h1>
          <div class="contact-form__content">
            <p>301, Asian Square, Opp. Shilp Aaron, <br>
         Sindhu Bhavan Road, Bodakdev, Ahmedabad-380054, <br>
         Gujarat India.</p>
            <div class="phone-no">
             <a href="tel: +91 99989 58958">+91 99989 58958</a><br>
       <a href="tel: +91 79 48984551">+91 79 48984551</a><br>
       </div>
            <a class="contact-map__maps-link" href="https://www.google.com/maps/dir//23.0401092,72.5088192/@23.040109,72.508819,15z?hl=en-US" target="_blank"> <svg
role="presentation" class="contact-map__map-icon">
            <title>Map Pin</title>
            <use xlink:href="#map-pin"/>
            </svg> <span class="contact-map__map-label"> Google Maps </span></a> </div>
        </div>
        <div class="grid__cell grid__cell--one-half contact-form__cell contact-form__right-side">
          <h2 class="contact-form__heading"> Download Brochure</h2>
          <div class="contact-form__content">
            <p>Request you to kindly fill all the required details.</p>
            <div class="form-block">
              <form class="form-inline contact_box" action="http://aaroninfra.com/mail.php" name="contact_form"  method="post" id="in_conForm">
                <input type="text" name="name" id="d_name" class="form-control input_box" placeholder="Name*">
                <input type="text" name="email" id="d_email" class="form-control input_box" placeholder="Email*">
                <input type="text" name="phone" id="d_mobile_no" class="form-control input_box" placeholder="Phone*">
                <input type="hidden" name='down_bro'>
                <input type="hidden" name='projectname'>

                <textarea class="form-control input_box" id="message" name="message" placeholder="Message"></textarea>
                <button type="submit" id="submit1" class="btn btn-default">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<?php include_once('include/footer.php') ?>