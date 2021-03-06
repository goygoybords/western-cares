<?php $this->load->view('client/include/header');?>
    <?php $this->load->view('client/include/header-top');?>
    <?php $this->load->view('client/include/header_menu');?>

    <?php $this->load->view('client/include/modal-login'); ?>
    <?php $this->load->view('client/include/modal-signup'); ?>
    <?php $this->load->view('client/include/modal-dining-preference'); ?>
    <?php $this->load->view('client/include/modal-shopping-cart'); ?>
    <?php $this->load->view('client/include/modal-specific-item'); ?>


    <!-- Services Section Start -->
    <section id="section_1" class="section">
      <div class="container">
        <h2>Scanner</h2>
        <div class="row">
          <?php foreach($surgical_gear as $s): ?>
            <div class="col-sm-12 col-md-12 col-lg-6 px-10 py-10">
              <a href="#" class = "viewItemModal" data-product-id = "<?php echo $s['product_id']; ?>" class="d-block">
                <div class="section_item d-flex">
                  <div>
                    <div class="section_item_img">
                      <img src="<?php echo base_url().$s['image_path']; ?>" alt="">
                    </div>
                  </div>
                  <div class="col">
                    <div class="section_item_info">
                      <h3><?php echo $s['item_code']; ?></h3>
                      <p><?php echo $s['description']." . ".$s['dimension']; ?></p>
                    </div>
                    <div>
                      <div class=" fw-500">
                        <p class="py-2 m-0">
                          <label id = "current_curreny">Php</label>
                          <label id = "spanSellingPrice"><?php echo $s['selling_price']; ?></label>
                        </p>
                      </div>
                      <button class="btn btn-primary" data-product-id = "<?php echo $s['product_id']; ?>">Add</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          <?php endforeach; ?>
        </div>
      </div>  
    </section>

    <section id="section_2" class="section">
      <div class="container">
        <h2>Scanner</h2>
        <div class="row">
          <?php foreach($scanner as $s): ?>
            <div class="col-sm-12 col-md-12 col-lg-6 px-10 py-10">
              <a href="#" class = "viewItemModal" data-product-id = "<?php echo $s['product_id']; ?>" class="d-block">
                <div class="section_item d-flex">
                  <div>
                    <div class="section_item_img">
                      <img src="<?php echo base_url().$s['image_path']; ?>" alt="">
                    </div>
                  </div>
                  <div class="col">
                    <div class="section_item_info">
                      <h3><?php echo $s['item_code']; ?></h3>
                      <p><?php echo $s['description']." . ".$s['dimension']; ?></p>
                    </div>
                    <div>
                      <div class=" fw-500">
                        <p class="py-2 m-0">
                          <label id = "current_curreny">Php</label>
                          <label id = "spanSellingPrice"><?php echo $s['selling_price']; ?></label>
                        </p>
                      </div>
                      <button class="btn btn-primary" data-product-id = "<?php echo $s['product_id']; ?>">Add</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          <?php endforeach; ?>
        </div>
      </div>  
    </section>

    <section id="section_3" class="section">
      <div class="container">
        <h2>Respatory Mask</h2>
        <div class="row">
          <?php foreach($surgical_mask_items as $s): ?>
            <div class="col-sm-12 col-md-12 col-lg-6 px-10 py-10">
              <a href="#" class = "viewItemModal" data-product-id = "<?php echo $s['product_id']; ?>" class="d-block">
                <div class="section_item d-flex">
                  <div>
                    <div class="section_item_img">
                      <img src="<?php echo base_url().$s['image_path']; ?>" alt="">
                    </div>
                  </div>
                  <div class="col">
                    <div class="section_item_info">
                      <h3><?php echo $s['item_code']; ?></h3>
                      <p><?php echo $s['description']." . ".$s['dimension']; ?></p>
                    </div>
                    <div>
                      <div class=" fw-500">
                        <p class="py-2 m-0">
                          <label id = "current_curreny">Php</label>
                          <label id = "spanSellingPrice"><?php echo $s['selling_price']; ?></label>
                          
                        </p>
                      </div>
                      <button class="btn btn-primary" data-product-id = "<?php echo $s['product_id']; ?>">Add</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          <?php endforeach; ?>
        </div>
      </div>  
    </section>

    <section id="section_4" class="section">
      <div class="container">
        <h2>Protective Shoes</h2>
        <div class="row">
          <?php foreach($shoes as $s): ?>
            <div class="col-sm-12 col-md-12 col-lg-6 px-10 py-10">
              <a href="#" class = "viewItemModal" data-product-id = "<?php echo $s['product_id']; ?>" class="d-block">
                <div class="section_item d-flex">
                  <div>
                    <div class="section_item_img">
                      <img src="<?php echo base_url().$s['image_path']; ?>" alt="">
                    </div>
                  </div>
                  <div class="col">
                    <div class="section_item_info">
                      <h3><?php echo $s['item_code']; ?></h3>
                      <p><?php echo $s['description']." . ".$s['dimension']; ?></p>
                    </div>
                    <div>
                      <div class=" fw-500">
                        <p class="py-2 m-0">
                          <label id = "current_curreny">Php</label>
                          <label id = "spanSellingPrice"><?php echo $s['selling_price']; ?></label>
                        </p>
                      </div>
                      <button class="btn btn-primary" data-product-id = "<?php echo $s['product_id']; ?>">Add</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          <?php endforeach; ?>
        </div>
      </div>  
    </section>

    <section id="section_5" class="section">
      <div class="container">
        <h2>Protective Gloves</h2>
        <div class="row">
          <?php foreach($gloves as $s): ?>
            <div class="col-sm-12 col-md-12 col-lg-6 px-10 py-10">
              <a href="#" class = "viewItemModal" data-product-id = "<?php echo $s['product_id']; ?>" class="d-block">
                <div class="section_item d-flex">
                  <div>
                    <div class="section_item_img">
                      <img src="<?php echo base_url().$s['image_path']; ?>" alt="">
                    </div>
                  </div>
                  <div class="col">
                    <div class="section_item_info">
                      <h3><?php echo $s['item_code']; ?></h3>
                      <p><?php echo $s['description']." . ".$s['dimension']; ?></p>
                    </div>
                    <div>
                      <div class=" fw-500">
                        <p class="py-2 m-0">
                          <label id = "current_curreny">Php</label>
                          <label id = "spanSellingPrice"><?php echo $s['selling_price']; ?></label>
                        </p>
                      </div>
                      <button class="btn btn-primary" data-product-id = "<?php echo $s['product_id']; ?>">Add</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          <?php endforeach; ?>
        </div>
      </div>  
    </section>

    <section id="section_6" class="section">
      <div class="container">
        <h2>PPEs</h2>
        <div class="row">
          <?php foreach($ppe as $s): ?>
            <div class="col-sm-12 col-md-12 col-lg-6 px-10 py-10">
              <a href="#" class = "viewItemModal" data-product-id = "<?php echo $s['product_id']; ?>" class="d-block">
                <div class="section_item d-flex">
                  <div>
                    <div class="section_item_img">
                      <img src="<?php echo base_url().$s['image_path']; ?>" alt="">
                    </div>
                  </div>
                  <div class="col">
                    <div class="section_item_info">
                      <h3><?php echo $s['item_code']; ?></h3>
                      <p><?php echo $s['description']." . ".$s['dimension']; ?></p>
                    </div>
                    <div>
                      <div class=" fw-500">
                        <p class="py-2 m-0">
                          <label id = "current_curreny">Php</label>
                          <label id = "spanSellingPrice"><?php echo $s['selling_price']; ?></label>
                        </p>
                      </div>
                      <button class="btn btn-primary" data-product-id = "<?php echo $s['product_id']; ?>">Add</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          <?php endforeach; ?>
        </div>
      </div>  
    </section>

    <section id="section_7" class="section">
      <div class="container">
        <h2>Machines</h2>
        <div class="row">
          <?php foreach($machines as $s): ?>
            <div class="col-sm-12 col-md-12 col-lg-6 px-10 py-10">
              <a href="#" class = "viewItemModal" data-product-id = "<?php echo $s['product_id']; ?>" class="d-block">
                <div class="section_item d-flex">
                  <div>
                    <div class="section_item_img">
                      <img src="<?php echo base_url().$s['image_path']; ?>" alt="">
                    </div>
                  </div>
                  <div class="col">
                    <div class="section_item_info">
                      <h3><?php echo $s['item_code']; ?></h3>
                      <p><?php echo $s['description']." . ".$s['dimension']; ?></p>
                    </div>
                    <div>
                      <div class=" fw-500">
                        <p class="py-2 m-0">
                          <label id = "current_curreny">Php</label>
                          <label id = "spanSellingPrice"><?php echo $s['selling_price']; ?></label>
                        </p>
                      </div>
                      <button class="btn btn-primary" data-product-id = "<?php echo $s['product_id']; ?>">Add</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          <?php endforeach; ?>
        </div>
      </div>  
    </section>

    <!-- Services Section End -->
    <?php $this->load->view('client/include/footer');?>