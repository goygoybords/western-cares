<?php $this->load->view('client/include/header');?>
    <?php $this->load->view('client/include/header-top');?>

    <?php $this->load->view('client/include/modal-login'); ?>
    <?php $this->load->view('client/include/modal-signup'); ?>
    <?php $this->load->view('client/include/modal-shopping-cart'); ?>
    <?php $this->load->view('client/include/modal-specific-item'); ?>

    <div class="spacer"></div>
    <section class="section page-error">
        <div class="container text-center">
            <div class="page-error-404">
              <!-- <img src="<?php echo base_url()?>resources/img/not-found.svg"> -->
            </div>
            <p></p>
            <h2>Thank you for order with us. Please check your email.</h2>
            <div class="py-5">
              <a href="<?php echo base_url();?>" class ="btn btn-primary ">
                <div class="d-flex align-items-center ">
                  <div class="mr-3">
                    <img style="top:-3px;position: relative;" src="<?php echo base_url()?>resources/img/home-white.svg" height="20px" alt="">
                  </div>
                  <div>Back to Home</div>
                </div>
              </a>
            </div>
        </div>

    </section>

<?php $this->load->view('client/include/footer');?>