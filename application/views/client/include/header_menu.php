<!-- Header Section End --> 
    <section class="section_landing">
      <div class="container">
        <div class="section_landing_content ">
          <img src="<?=base_url();?>resources/img/main_bg.jpg" class="img-fluid" alt="">
          <div class="section_landing_content_cta_holder d-flex align-items-center">
            <div class="col text-right">
              <div class="section_landing_content_cta text-center">
                <h1>Western Cares</h1>
                <p>Available for Pickup and Worldwide Delivery</p>
                <div>
                  <button class="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
    <section id="submenu_holder" class="section_submenu scrolling-navbar">
      <div class="container">
        <div class="submenu_holder ">
          <div class="navbar-nav-web ">
            <div class="d-flex">
              <div class="col">
                <div class="submenu">
                  <ul class="navbar-nav mr-auto w-100 ">
                    <?php foreach($categories as $c): ?>
                        <li class="nav-item">
                          <a class="nav-link  page-scroll" href="#section_<?php echo $c['category_id']?>" >
                            <?php echo $c['description']; ?>
                          </a>
                        </li>
                    <?php endforeach; ?>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="navbar-nav-mobile">
            <div class="dropdown">
              <div href="#submenu_more" data-toggle="dropdown" class="d-flex align-items-center pos-relatives">
                <div class="col pl-4"> 
                   <strong>Bento Boxes</strong>
                </div>
                <div>
                  <a href="javascript:void(0)" class="submenu_dropdown">
                    More 
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
                  </a>
                </div>
              </div>
              <div class="w-100 dropdown-menu dropdown-menu-right">
                <?php foreach($categories as $c): ?>
                    <a href="#" class="py-2 dropdown-item"><?php echo $c['description']; ?></a>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>