<div id="modal-item-info" class="modal fade">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div style="box-shadow:none !important;" class="modal-head d-flex align-items-center justify-content-center">
            <a href="#" data-dismiss="modal">
              <svg width="18px" height="18px" viewBox="0 0 26 27" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Close</title>
                <defs>
                  <rect width="39" height="39" rx="5"></rect>
                </defs>
                <g transform="translate(-6 -6)" fill="none" fill-rule="evenodd">
                  <g transform="rotate(135 17.586 18.914)">
                    <rect fill="#212121" y="15.448" width="34" height="4" rx="2"></rect>
                    <rect fill="#212121" transform="rotate(90 17 17.448)" y="15.448" width="34" height="4" rx="2"></rect>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div class="modal-body px-4">
            <div class="row">
              <div class="col-md-5" id = "specific_image">
                  <!-- <img style="width: 100%;" src="<?php echo base_url()?>resources/img/sample.jpg" alt=""> -->
              </div>
              <div class="col-md-7">
                <div style="min-height: 400px;">
                  <div class="section_item_info">
                    <h2 id = "specific_item_code">specific_item_code</h2>
                    <p id = "specific_description">
                     
                    </p>
                  </div>
                  <div>
                    <div class=" fw-500">
                      <p class="py-2 m-0">
                        <label id = "specific_moadl_currency" >Php </label>
                        <label id = "specific_moadl_selling_price"></label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" px-4 py-3 modal-bottom">
            <div class=" d-flex align-items-center">
              <div class="cart_item py-1">
                <button class="btn qty_counter">
                  <svg width="18px" height="18px" viewBox="0 0 29 4">
                    <title>Minus</title>
                    <g transform="translate(-5 -18)" fill="none" fill-rule="evenodd">
                      <rect width="39" height="39" rx="5"></rect>
                      <rect fill="currentColor" x="5" y="18" width="29" height="4" rx="2"></rect>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="cart_item py-1">
                <input type="text" id = "qty_value" value="1" placeholder="1">
              </div>
              <div class="cart_item py-1">
                <button class="btn qty_counter">
                  <svg width="18px" height="18px" viewBox="0 0 29 29">
                    <title>Plus</title>
                    <g transform="translate(-5 -5)" fill="none" fill-rule="evenodd">
                      <rect width="39" height="39" rx="5"></rect>
                      <g stroke="currentColor" stroke-linecap="round" stroke-width="4">
                        <path d="M7 19.5h25M19.5 7v25"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="col pr-0">
                <button class="btn btn-primary btn-block add_cart">
                  Add <label id = "specific_button_price"></label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>