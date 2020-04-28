<!-- shopping cart items -->
    <div class="cart_container ">
      <div class="cart_content">
        <div class="cart_head d-flex align-items-center">
          <div class="col">
            Your Cart
            <p>You've added <span class="shopping-cart-count">0</span> items</p>
          </div>
          <a href="#" class="cart_close_btn"><i class="lnr lnr-cross"></i></a>
        </div>
        <div class="cart_item_holder">
          <div class="cart_item_holder_info d-flex align-items-center">
            <div>Item(s) Added</div>
            <div class="ml-auto"><a  class="cart_clear_btn" href="#">Clear Items</a></div>
          </div>
          
          <!-- items returned from localStorage -->
          <div id="cItems"></div>

  
          <hr>
          <div class="cart_item_subtotal pt-3">
            <div class="d-flex">
              <div class="pb-2"><strong>Subtotal</strong></div>
              <div class="ml-auto">
                <strong>
                  <label id = "shop-cart-sub-currency">Php</label>
                  <label id = "shop-cart-sub-price">0.00</label>
              </strong>
              </div>
            </div>
           <!--  <div class="d-flex">
              <div class="pb-2">GST (Inclusive)</div>
              <div class="ml-auto">S$9.49</div>
            </div> -->
          </div>
        </div>
        <div class="cart_footer text-center d-flex align-items-center">
          <div class="col px-0">
            <div class="d-flex">
              <div class="pb-2">Total</div>
              <div class="ml-auto">
                <label id = "shop-cart-tot-currecny">Php</label>
                <label id = "shop-cart-tot-price">0.00</label>
              </div>
            </div>
            <a href = "<?=base_url();?>checkout" class="btn btn-block btn-primary">Proceed to checkout</a>
          </div>
        </div>
      </div>
    </div>