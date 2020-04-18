<?php $this->load->view('client/include/header');?>
    <?php $this->load->view('client/include/header-top');?>

    <?php $this->load->view('client/include/modal-login'); ?>
    <?php $this->load->view('client/include/modal-signup'); ?>
    <?php $this->load->view('client/include/modal-dining-preference'); ?>
    <?php $this->load->view('client/include/modal-shopping-cart'); ?>
    <?php $this->load->view('client/include/modal-specific-item'); ?>
    <?php $this->load->view('client/include/modal-change-password'); ?>

    <div class="spacer"></div>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="panel panel-navbar px-0 py-3">
                        <ul class="navbar">
                            <li class="nav-item active">
                                <a href="<?=base_url();?>account-details" class="px-4">Account Details</a>
                            </li>
                            <li class="nav-item">
                                <a href="<?=base_url();?>user-detail" class="px-4">Order History</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8">
                    <h2>Account</h2>
                    <form id = "editUserForm" data-user-id = "<?php echo $user_detail->id; ?>" method="POST">
                        <div class="panel py-4 px-4">
                            <div id = "error_mesage" style="color:red;"></div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input class="form-control " value="<?php echo $user_detail->email;?>" id = "editEmail" required name = "editEmail" type="email">
                                        <label>Email</label>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input class="form-control " value="<?php echo $user_detail->first_name;?>" id = "editFirstName" name = "editFirstName" required type="text">
                                        <label>First Name</label> 
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input class="form-control " value="<?php echo $user_detail->last_name;?>" id = "editLastName" name = "editLastName" required type="text">
                                        <label>Last Name</label>
                                    </div>
                                </div>
                                <div class="col-md-12">
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
                                               <input type="text" class="form-control" name = "editContactNumber" value="<?php echo $user_detail->contactnumber;?>" id = "editContactNumber">
                                                <label>Phone Number</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-md-12">
                                    <div class="form-group">
                                        <input class="form-control" value="" required type="email">
                                        <label>Organization Name (optional)</label>
                                    </div>
                                </div> -->
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label class="form-check cursor-pointer">
                                        <input type="checkbox" class="form-check-input" id="check_ff">
                                        <span class="checkmark"></span>
                                        <label class="form-check-label" for="check_ff">Update me on occational offers</label>
                                    </label>
                                    <div class="py-2">
                                        <div class="py-2 px-3 d-flex rounded text-primary bg-primary-contrast">
                                            <div><i class="lnr lnr-star mr-3"></i></div>
                                            <div><strong>By subscribing, you will hear from us when we have great deals.</strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-sm-5 text-center">
                                    <div class="py-4">
                                        <button class="btn btn-block btn-primary" id = "btnUpdate">Update</button>
                                    </div>
                                    <a href="#modal-password" data-toggle = "modal" class="text-dark"><u>Change Password</u></a>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

   

    <?php $this->load->view('client/include/footer'); ?>