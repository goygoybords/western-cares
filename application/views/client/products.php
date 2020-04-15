<?php $this->load->view('client/include/header'); ?>
        <?php $this->load->view('client/include/products_header'); ?>
        
        <!-- Products Section Start -->
        <div id="products" class="section" data-stellar-background-ratio="0.2">
            <div class="container text-center">
                <div class="row justify-content-md-center">
                <div class=" col-md-10 text-center wow fadeIn text-white">
                    <h1 class="mb-5" data-wow-duration="1000ms" data-wow-delay="0.4s">PRODUCTS</h1>
                    <span class="text-white hero_sub_title">Click or tap the images for more details </span>
                </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-md-6">
                        <div data-target="#product_1" data-toggle="modal" class="aggregate_product wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <img src="<?=base_url();?>resources/images/aggregates.jpg">
                            <span>AGGREGATES</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div data-target="#product_2" data-toggle="modal" class="aggregate_product wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">
                            <img src="<?=base_url();?>resources/images/crushed-rock.jpg">
                            <span>ARMOR ROCKS</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div data-target="#product_3" data-toggle="modal" class="aggregate_product wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="900ms">
                            <img src="<?=base_url();?>resources/images/recycled-concrete.jpg">
                            <span>FILLING MATERIALS</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div data-target="#product_4" data-toggle="modal" class="aggregate_product wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
                            <img src="<?=base_url();?>resources/images/sand.jpg">
                            <span>SAND</span>
                        </div>
                    </div>
                </div>
                    <!-- <a href="#" class="btn btn-common wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">ALL PRODUCTS</a> -->
            </div>
        </div>

        <!-- Products Section End -->

    <div class="modal fade petrostec_modal" id="product_1">
      <div class="modal-dialog modal-lg">
          <div class="modal-content px-0">
              <div class="pm_head bg-light py-3 px-3">
                <div class="d-flex align-items-center">
                  <div class="fw-600 fs-16">PRODUCT INFO </div>
                  <div class="ml-auto"><a href="" data-dismiss="modal" class="modal-enroll-close"><i class="fa fs-18 fa-times"></i></a></div>
                </div>
              </div>
            <div class="modal-body pt-0">
              <br>
              <div class="pm_product_info">
                <div class="row">
                  <div class="col-md-6">
                    <img src="<?=base_url();?>resources/images/aggregates.jpg" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                    <p class="pm_product_info_head parag animate-box fadeInUp animated-fast">
                     <span class="d-block font-md">AGGREGATES</span>
                    </p>
                    <hr>
                    <p class="parag animate-box fadeInUp animated-fast">
                     Formed chiefly by accumulation of organic remains and is extensively used in building
                    </p>
                    <br>
                    <!-- <p class="parag animate-box fadeInUp animated-fast">
                     <small class="d-block">CONTACT INFO</small>
                     <span class="d-block">PHONE: +639 0200 102 1002</span>
                     <span class="d-block">TEL: 1209 010 100</span>
                    </p> -->
                  </div>
                </div>
              </div>
              </div>
            </div>
            
        </div>
    </div>
    <div class="modal fade petrostec_modal" id="product_2">
      <div class="modal-dialog modal-lg">
          <div class="modal-content px-0">
              <div class="pm_head bg-light py-3 px-3">
                <div class="d-flex align-items-center">
                  <div class="fw-600 fs-16">PRODUCT INFO </div>
                  <div class="ml-auto"><a href="" data-dismiss="modal" class="modal-enroll-close"><i class="fa fs-18 fa-times"></i></a></div>
                </div>
              </div>
            <div class="modal-body pt-0">
              <br>
              <div class="pm_product_info">
                <div class="row">
                  <div class="col-md-6">
                    <img src="<?=base_url();?>resources/images/crushed-rock.jpg" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                    <p class="pm_product_info_head parag animate-box fadeInUp animated-fast">
                     <span class="d-block font-md">ARMOR ROCKS</span>
                     
                    </p>
                    <hr>
                    <p class="parag animate-box fadeInUp animated-fast">
                     extensively used in buildings
                    </p>
                    <br>
                  </div>
                </div>
              </div>
              </div>
            </div>
            
        </div>
    </div>
    <div class="modal fade petrostec_modal" id="product_3">
      <div class="modal-dialog modal-lg">
          <div class="modal-content px-0">
              <div class="pm_head bg-light py-3 px-3">
                <div class="d-flex align-items-center">
                  <div class="fw-600 fs-16">PRODUCT INFO </div>
                  <div class="ml-auto"><a href="" data-dismiss="modal" class="modal-enroll-close"><i class="fa fs-18 fa-times"></i></a></div>
                </div>
              </div>
            <div class="modal-body pt-0">
              <br>
              <div class="pm_product_info">
                <div class="row">
                  <div class="col-md-6">
                    <img src="<?=base_url();?>resources/images/recycled-concrete.jpg" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                    <p class="pm_product_info_head parag animate-box fadeInUp animated-fast">
                     <span class="d-block font-md">FILLING MATERIALS</span>
                    </p>
                    <hr>
                    <p class="parag animate-box fadeInUp animated-fast">
                     extensively used in buildings
                    </p>
                    <br>
                  </div>
                </div>
              </div>
              </div>
            </div>
            
        </div>
    </div>
    <div class="modal fade petrostec_modal" id="product_4">
      <div class="modal-dialog modal-lg">
          <div class="modal-content px-0">
              <div class="pm_head bg-light py-3 px-3">
                <div class="d-flex align-items-center">
                  <div class="fw-600 fs-16">PRODUCT INFO </div>
                  <div class="ml-auto"><a href="" data-dismiss="modal" class="modal-enroll-close"><i class="fa fs-18 fa-times"></i></a></div>
                </div>
              </div>
            <div class="modal-body pt-0">
              <br>
              <div class="pm_product_info">
                <div class="row">
                  <div class="col-md-6">
                    <img src="<?=base_url();?>resources/images/sand.jpg" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                    <p class="pm_product_info_head parag animate-box fadeInUp animated-fast">
                     <span class="d-block font-md">SAND</span>
                    </p>
                    <hr>
                    <p class="parag animate-box fadeInUp animated-fast">
                     extensively used in buildings
                    </p>
                    <br>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div>

        <!-- Contact Section Start -->
        <?php $this->load->view('client/include/contact'); ?>
        <!-- Contact Section End -->
        
<?php $this->load->view('client/include/footer'); ?>
