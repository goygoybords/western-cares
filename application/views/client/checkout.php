<?php $this->load->view('client/include/header');?>
    
    <section class="section checkout_section">
        <div class="container">
            <div class="pt-4">
              <a href="<?php echo base_url(); ?>" class="text-white"><i class="lnr lnr-arrow-left mr-2"></i> <u>Continue Shopping</u></a>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="panel pb-4">
                        <div  class="d-flex align-items-center">
                            <div class="col px-5">
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <p class="mb-0">You're placing an order from</p>
                                        <h2 >Western Cares for Pickup <span class="fw-300">on</span> Tomorrow, 15 Apr <span class="fw-300">at</span> 05:30 PM <span class="fw-300">to</span> 06:00 PM</h2>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="panel">
                        <div  class="d-flex align-items-center">
                            <div class="col px-3">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2>Pickup Store Address</h2>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Store Name</p>
                                        <p>Western Cares - 18@Tai Seng</p>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Store Address</p>
                                        <p>18. #01-36 Tai Seng St., 534119, #01-36, Singapore, 534119</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <hr class="mt-4 mb-4">
                        <div >
                            <div class="px-3 pt-3"> 
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 class="pb-4">Contact Details</h2>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group  ">
                                            <input class="form-control form-control-gray" value="" required type="text">
                                            <label>Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input class="form-control form-control-gray" value="" required type="email">
                                            <label>Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div class="d-flex">
                                                <div>
                                                    <div class="dropdown">
                                                        <div data-toggle="dropdown" class="form-dropdown cursor-pointer d-flex align-items-center">
                                                            <div><img width="30" src="img/flag/flag-ph.png" alt=""></div>
                                                            <div class="pl-2"><i class="fa fa-caret-down"></i></div>
                                                        </div>
                                                        <div class="dropdown-menu py-0">
                                                            <a href="#" class="dropdown-item px-3 py-2 d-flex align-items-center">
                                                                <div><img width="30" src="img/flag/flag-ph.png" alt=""></div>
                                                                <div class="pl-2">Philippines</div>
                                                            </a>
                                                            <a href="#" class="dropdown-item px-3 py-2 d-flex align-items-center">
                                                                <div><img width="30" src="img/flag/flag-sg.png" alt=""></div>
                                                                <div class="pl-2">Signapore</div>
                                                            </a>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col px-0 pos-relative">
                                                    <input class="form-control form-control-gray" value="" required type="text">
                                                    <label>Phone Number</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input class="form-control" value="" required type="email">
                                            <label>Organization Name (optional)</label>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-3 mb-3">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="form-check cursor-pointer">
                                            <input type="checkbox" class="form-check-input" id="check_ff">
                                            <span class="checkmark"></span>
                                            <label class="form-check-label" for="check_ff">This is for my friends or family</label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-4 mb-4">
                        <div >
                            <div class="px-3 pt-3"> 
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 class="pb-4">Additional Information</h2>
                                    </div>
                                    <div class="col-md-12">
                                        <label><strong>Customer Remarks</strong></label>
                                        <textarea placeholder="Customer Remarks or Pickup/Delivery Instructions" class="form-control" rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="py-4">
                                            <button class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-4 mb-4">
                        <div >
                            <div class="px-3 pt-3"> 
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 class="pb-4">Payment Details</h2>
                                    </div>
                                    <div class="col-md-12">
                                        <label><strong>Select Payment Method</strong></label>
                                        <label for="pm_cod" class="form-radio cursor-pointer d-flex align-items-center">
                                            <div>
                                                <input id="pm_cod" type="radio" name="payment_medthod">
                                            </div>
                                            <div class="col">
                                                Cash on Delivery
                                            </div>
                                        </label>
                                        <label for="pm_gcash" class="form-radio cursor-pointer d-flex align-items-center">
                                            <div>
                                                <input id="pm_gcash" type="radio" name="payment_medthod">
                                            </div>
                                            <div class="col">
                                                Gcash
                                            </div>
                                        </label>
                                        <label for="pm_wechat" class="form-radio cursor-pointer d-flex align-items-center">
                                            <div>
                                                <input id="pm_wechat" type="radio" name="payment_medthod">
                                            </div>
                                            <div class="col">
                                                Wechat
                                            </div>
                                        </label>
                                        <label for="pm_alipay" class="form-radio cursor-pointer d-flex align-items-center">
                                            <div>
                                                <input id="pm_alipay" type="radio" name="payment_medthod">
                                            </div>
                                            <div class="col">
                                                Alipay
                                            </div>
                                        </label>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <br>

                                            <div class="px-3 py-2">
                                                <label class="form-check cursor-pointer">
                                                    <input type="checkbox" class="form-check-input" id="check_accept">
                                                    <span class="checkmark"></span>
                                                    
                                                    <label class="form-check-label" for="check_accept">
                                                        I accept the  
                                                        <a href="#"><u>Terms & Conditions</u></a> and 
                                                        <a href="#"><u>Privacy Policy</u></a>
                                                    </label>
                                                </label>
                                            </div>
                                        </div>
                                        <!-- <div class="col-md-12">
                                            <div class="px-3 py-2">
                                                <label class="form-check cursor-pointer">
                                                    <input type="checkbox" class="form-check-input" id="check_subscribe">
                                                    <span class="checkmark"></span>
                                                    <label class="form-check-label" for="check_subscribe">Update me on the occational offers</label>
                                                </label>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="py-4">
                                            <button class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-md-4 checkout_order_summary">
                    <div class="panel px-4">
                        <label><strong>Order Summary</strong></label>
                        
                        <div id = "checkout_items"></div>
                        <!-- <hr class="my-3" /> -->
                        <div class="cart_item_subtotal">
                            <div class="d-flex">
                              <div class="pb-2"><strong>Subtotal</strong></div>
                              <div class="ml-auto">
                                <strong>
                                    <label id = "checkout_subtotal_currency">Php</label>
                                    <label id = "checkout_subtotal_price">0.00</label>
                                </strong>
                              </div>
                            </div>
                            <!-- <div class="d-flex">
                              <div class="pb-2">GST (Inclusive)</div>
                              <div class="ml-auto">S$1.88</div>
                            </div> -->
                        </div>
                        <hr class="my-3"/>
                        <div class="cart_item_subtotal p2-4">
                            <div class="d-flex">
                              <div class="pb-2"><strong>Total</strong></div>
                              <div class="ml-auto">
                                <strong>
                                    <label id = "checkout_total_currency">Php</label>
                                    <label id = "checkout_total_price">0.00</label>
                                </strong>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <br/>
    <?php $this->load->view('client/include/footer'); ?>