<!-- Contact Section Start -->
<section id="contact_footer" class="section" data-stellar-background-ratio="0.2">      
    <div class="container">
        <div class="row justify-content-md-center">
            <div class=" col-md-10 text-center">
                <img src="<?=base_url();?>resources/images/full-logo.png" class="img-fluid wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">
            </div>
        </div>
        <div class="alert alert-form alert-success text-xs-center" id = "response-message">
            Thank you for sending us a message! We will get to you as soon as possible.
        </div>
        <div class="row ">
            <div class=" col-md-5 text-center">
                <div class="mt-5 pt-4 section-header mb-0">           
                    <p class="section-subtitle wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.4s">
                        <span class="text-white hero_sub_title">CONTACT INFO </span>
                    </p>
                </div>
                <h5 class="">
                    <table class="table">
                        <tr class="wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.5s">
                            <td class="border-0"><i class="fa fa-map-marker mr-4"></i></td>
                            <td class='location border-0 text-left'> 7 Transcentral Highway, Gaas, Balamban Cebu</td>
                        </tr>
                        <tr class="wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.6s">
                            <td class="border-0"><i class="fa fa-phone mr-4"></i></td>
                            <td class='border-0 text-left'>+63917 810 4920 <br> +63925 527 0517 </td>
                        </tr>
                        <tr class="wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.7s">
                            <td class="border-0"><i class="fa fa-envelope mr-4"></i></td>
                            <td class='border-0 text-left'> admin@petrostec.com.ph</td>
                        </tr>
                    </table>
                </h5>
            </div> 
        <div class="col-md-7">
            <div class="mt-5 pt-4 section-header mb-0">           
                <p class="section-subtitle wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.4s">
                    <span class="text-white hero_sub_title">EMAIL US </span>
                </p>
            </div>
            <div class="contact-form mx-0 mx-md-5 px-0 px-md-4">
                    <div class="contact-block">
                        <form id="contactForm" action="<?=base_url();?>website/insert_message">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name">
                                        <div class="help-block with-errors"></div>
                                    </div>                                 
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="email" placeholder="Your Email" id="email" class="form-control" name="name" required data-error="Please enter your email">
                                        <div class="help-block with-errors"></div>
                                    </div> 
                                </div>
                            <div class="col-md-12">
                                <div class="form-group"> 
                                    <textarea class="form-control" id="message" name="message" placeholder="Your Message" rows="8" data-error="Write your message" required></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="submit-button text-center">
                                    <button class="btn btn-common" id="submit" type="submit">Send Message</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div> 
                                    <div class="clearfix"></div> 
                                </div>
                            </div>
                        </div>            
                    </form>
                </div>
            </div>  
        </div>
        </div>
    </div>   
    <div class="contect_footer_bg"><img src="<?=base_url();?>resources/images/footer-bg.png"></div>
    <div class="footer_copyright"> 
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 text-left">&copy; PETROSTEC DEVELOPEMENT CORPORATION 2019</div>
            <div class="col-md-6 text-right">
                <a href="" class="ml-4  text-white"><i class="fa fa-2x fa-facebook"></i></a>
                <a href="" class="ml-4  text-white"><i class="fa fa-2x fa-instagram"></i></a>
            </div>
        </div>
    </div>
    </div>       
</section>