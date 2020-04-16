<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Hatchit CMS - Booking</title>

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
        href="<?php echo base_url(); ?>resources/css-cms/style-cms.css" />
    <link type="text/css" rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans" />
      <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>resources/css-cms/grid.css" />
      <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>resources/css-cms/bootstrap-table.css" />

  </head>
  <body>
    <?php $this->load->view('cms/include/header'); ?>
    <!-- Add Booking Modal -->
      <?php $this->load->view('cms/include/modals/booking/add_booking'); ?>
      <?php $this->load->view('cms/include/modals/booking/edit_booking'); ?>
      <?php $this->load->view('cms/include/modals/booking/view_booking'); ?>
      <?php $this->load->view('cms/include/modals/booking/remove_booking'); ?>
      <?php $this->load->view('cms/include/modals/booking/post_booking'); ?>

        <section id="adminContent" class="col-md-offset-2 col-md-10">
          <h1>Download Report</h1>
          <div class="panel panel-default">
            <form method="POST" action = "generate_report">
                <div class="form-group">
                  <label for="start_date">Start Date</label>
                  <input type="date" class="form-control" id="start_date" placeholder="Start Date" name="start_date" required="">
                </div>
                <div class="form-group">
                  <label for="end_date">End Date</label>
                  <input type="date" class="form-control" id="end_date" placeholder="End Date" name="end_date" required="">
                </div>
                <button id="btnGenerateReport" type="submit" class="btn btn-success btn-fixed-size-boxes"> Generate </button>
              </form>
          </div>
          <?php $this->load->view('cms/include/footer'); ?>
        </section>
      </div>
    </div>

    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/jquery.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/bootstrap.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/jquery.cookie.js"></script>

    <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/bootstrap-table.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/booking.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/moment.js"></script>
    

    <script type="text/javascript" src="<?php echo base_url(); ?>resources/js/shield-ui.js"></script>

    <!-- JS Signature -->
    <script type="text/javascript"  src="<?php echo base_url()?>/resources/js/signature/jSignature.js"></script>
    <script type="text/javascript"  src="<?php echo base_url()?>/resources/js/signature/plugins/jSignature.UndoButton.js"></script>
    <script type="text/javascript"  src="<?php echo base_url()?>/resources/js/signature/plugins/jSignature.CompressorBase30.js"></script>
    <script type="text/javascript"  src="<?php echo base_url()?>/resources/js/signature/plugins/jSignature.CompressorSVG.js"></script>
    <!-- end JS Signature -->
  </body>
</html>
