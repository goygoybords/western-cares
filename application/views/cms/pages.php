<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Hatchit CMS - Pages</title>

    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-cms/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-cms/font-awesome.min.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-cms/normalize.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-cms/default-theme.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-cms/style-cms.css" />
    <link type="text/css" rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans" />
  </head>
  <body>
    <?php $this->load->view('cms/include/header'); ?>
        <section id="adminContent" class="col-md-offset-2 col-md-10">
          <h1>Pages</h1>
          <div class="panel panel-default">
            <div class="row">
              <div class="col-md-3">
                <div class="page-item">
                  <div class="page-item-content">
                    <a href="pages/home">
                      <i class="fa fa-home fa-5x pageIcon"></i><h3>Home</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="page-item">
                  <div class="page-item-content">
                    <a href="pages/profile">
                      <i class="fa fa-users fa-5x pageIcon"></i><h3>Profile</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="page-item">
                  <div class="page-item-content">
                    <a href="pages/services">
                      <i class="fa fa-suitcase fa-5x pageIcon"></i><h3>Services</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="page-item">
                  <div class="page-item-content">
                    <a href="pages/contact">
                      <i class="fa fa-phone fa-5x pageIcon"></i><h3>Contact</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <?php $this->load->view('cms/include/footer'); ?>
        </section>
      </div>
    </div>

    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/jquery.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/bootstrap.min.js"></script>
  </body>
</html>
