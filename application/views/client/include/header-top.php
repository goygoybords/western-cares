<!-- Header Section Start -->
    <header id="hero-area" data-stellar-background-ratio="0.5">    
      <!-- Navbar Start -->
      <nav class="navbar navbar-expand-lg fixed-top  ">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <svg width="27px" height="27px" viewBox="0 0 27 20">
                <title>Hamburger</title>
                <g transform="translate(-6 -10)" fill="none" fill-rule="evenodd">
                    <rect width="39" height="39" rx="5"></rect>
                    <path d="M31.31 26.667a1.5 1.5 0 1 1 0 3H7.5a1.5 1.5 0 0 1 0-3h23.81zM7.5 13a1.5 1.5 0 1 1 0-3h23.81a1.5 1.5 0 0 1 0 3H7.5zm23.81 5.334a1.5 1.5 0 1 1 0 3H7.5a1.5 1.5 0 0 1 0-3h23.81z" fill="#0a6343">
                    </path>
                  </g>
                </svg>
            </button>
            <div class="navbar-brand">
              <div class="d-flex justify-content-center align-items-center">
                <div><a href = "<?php echo base_url();?>"><img  height="100px" src="<?=base_url();?>resources/img/logo1.png" alt=""></a></div>
                <div class="pl-0 pl-lg-4">Western Cares</div>
              </div>
              
            </div>
            <div class="mobile-bag">
              <a class="nav-link nav-link-bag" href="#">
                <span class="nav-link-bag-count">1</span>
                <svg width="27px" height="27px" viewBox="0 0 29 36">
                    <title>ShoppingBag</title>
                    <path d="M14.549 1a6.563 6.563 0 0 0-6.557 6.557v.159H3.657a.689.689 0 0 0-.683.62L1 30.61C1 33.06 3.202 35 5.914 35H23.19c2.713 0 4.915-1.94 4.915-4.327L26.124 8.337a.683.683 0 0 0-.683-.621h-4.335v-.159A6.563 6.563 0 0 0 14.549 1zm-5.19 6.557a5.193 5.193 0 0 1 5.19-5.19 5.193 5.193 0 0 1 5.19 5.19v.159H9.36v-.159zm15.454 1.525L26.73 30.7c-.02 1.622-1.601 2.933-3.547 2.933H5.914c-1.946 0-3.527-1.311-3.547-2.933L4.285 9.082h3.707v3.162c0 .38.304.683.683.683a.68.68 0 0 0 .683-.683V9.082H19.74v3.162c0 .38.304.683.684.683a.68.68 0 0 0 .683-.683V9.082h3.707z" fill="#0a6343" stroke="#0a6343" fill-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="<?=base_url();?>">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="<?=base_url();?>store-information">Store Information</a>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link active" id = "login-tab" href="#modal-login" data-toggle="modal"> -->
                  <?php if($this->session->userdata('isLogged') == TRUE): ?>
                    <div class="dropdown">
                        <a class="nav-link active d-flex align-items-center" href="#dropdown_user_menu" data-toggle="dropdown">
                            <div>
                              Hi, <?php echo $this->session->userdata('name'); ?>
                            </div>
                            <div class="pl-3"><i class="lnr lnr-chevron-down"></i></div>
                        </a>
                        <div id="#dropdown_user_menu" class="dropdown-menu ">
                            <a href="<?php echo base_url();?>account-details" class="dropdown-item">Account Details</a>
                            <a href="<?php echo base_url();?>user-detail" class="dropdown-item">Order History</a>
                            <a href="<?php echo site_url('users/logout');?>" class="dropdown-item">Logout</a>
                        </div>
                    </div>
                  <?php else: ?>
                    <a class="nav-link active" id = "login-tab" >Log In / Sign Up</a>
                  <?php endif; ?>
              </li>
              <li class="nav-item">
                  <span>
                      <select class="nav-link form-control" id = "countries">
                        <option>Philippines</option>
                      </select>
                  </span>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-bag" href="#">
                  <span class="nav-link-bag-count">1</span>
                  <svg width="27px" height="27px" viewBox="0 0 29 36">
                    <title>ShoppingBag</title>
                    <path d="M14.549 1a6.563 6.563 0 0 0-6.557 6.557v.159H3.657a.689.689 0 0 0-.683.62L1 30.61C1 33.06 3.202 35 5.914 35H23.19c2.713 0 4.915-1.94 4.915-4.327L26.124 8.337a.683.683 0 0 0-.683-.621h-4.335v-.159A6.563 6.563 0 0 0 14.549 1zm-5.19 6.557a5.193 5.193 0 0 1 5.19-5.19 5.193 5.193 0 0 1 5.19 5.19v.159H9.36v-.159zm15.454 1.525L26.73 30.7c-.02 1.622-1.601 2.933-3.547 2.933H5.914c-1.946 0-3.527-1.311-3.547-2.933L4.285 9.082h3.707v3.162c0 .38.304.683.683.683a.68.68 0 0 0 .683-.683V9.082H19.74v3.162c0 .38.304.683.684.683a.68.68 0 0 0 .683-.683V9.082h3.707z" fill="#0a6343" stroke="#0a6343" fill-rule="evenodd"></path></svg>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>