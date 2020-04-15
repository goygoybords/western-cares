<?php $this->load->view('client/include/header');?>
  <?php $this->load->view('client/include/header-top');?>

    <?php $this->load->view('client/include/modal-login'); ?>
    <?php $this->load->view('client/include/modal-signup'); ?>
    <?php $this->load->view('client/include/modal-dining-preference'); ?>
    <?php $this->load->view('client/include/modal-shopping-cart'); ?>

    <!-- Header Section End --> 
    <div class="spacer"></div>
    <section class="section">
        <div class="container">
            <h2>Store Information</h2>
            <div class="panel">
                <div data-target="#collapse_store_1" aria-expanded="true" data-toggle="collapse" class="d-flex align-items-center">
                    <div class="col px-3">
                        <h2>Western Cares - Philippines</h2>
                        <p>Paseo John #888 Maria Luisa Estate Cebu City, Philippines 6000</p>
                        <p>Phone: (032) 414-####</p>
                    </div>
                    <div class="px-3">
                        <button class="btn btn-circle btn-default btn-icon btn-collapse">
                            <svg direction="down" width="12px" height="12px" class="sc-1mf0nfy-0 eXyZFy" viewBox="0 0 13 22" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <title>Arrow down</title>
                              <g fill="none" fill-rule="evenodd" transform="translate(-19 -14)">
                                <g transform="translate(14 14)">
                                  <rect width="22" height="22" rx="x"></rect>
                                  <path d="M6.78753043,22 C6.32280464,22 5.85927045,21.8200677 5.50893869,21.4613947 C4.81899963,20.7547732 4.83210728,19.6227488 5.53872881,18.9340014 L13.6249577,11.0408125 L5.63524878,3.05110359 C4.93696848,2.35282329 4.93696848,1.22079892 5.63524878,0.523710223 C6.33352908,-0.174570074 7.46436185,-0.174570074 8.16264215,0.523710223 L17.4321344,9.79201083 C17.7693585,10.1292349 17.957632,10.5880027 17.9552488,11.0670278 C17.951674,11.5448612 17.758634,12.0012458 17.4166435,12.3348951 L8.03633206,21.4911848 C7.68838351,21.8307921 7.23795697,22 6.78753043,22" fill="currentColor">
                                  </path>
                                </g>
                              </g>
                            </svg>
                        </button>  
                    </div>
                </div>
                <div id="collapse_store_1" class="collapse show">
                    <div class="px-3 pt-3">
                        <hr class="mt-0 mb-4">
                        <div class="row">
                            <div class="col-md-6">
                                <h2 class="pb-4">Pickup</h2>
                                <h5>Opening Hours</h5>
                                <p>Mon - Sun <br>11:30 AM - 8:00 PM</p>
                            </div>
                            <div class="col-md-6">
                                <h2 class="pb-4">Delivery</h2>
                                <h5>Opening Hours</h5>
                                <p>Mon - Sun <br>11:30 AM - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <?php $this->load->view('client/include/footer');?>