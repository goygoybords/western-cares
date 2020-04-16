<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

  <title>Hatchit CMS - Services</title>

  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/font-awesome.min.css" />
  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/normalize.css" />
  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/default-theme.css" />
  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/style-cms.css" />
  <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
</head>

<body>
  <?php $this->load->view('cms/include/header'); ?>
  <?php $this->load->view('cms/include/modals/services/add-services.php'); ?>
  <?php $this->load->view('cms/include/modals/services/edit-services.php'); ?>
  <?php $this->load->view('cms/include/modals/services/remove-services.php'); ?>
  <section id="adminContent" class="col-md-offset-2 col-md-10">
    <h1>Services</h1>
    <div class="panel panel-default">
      <div class="users-control">
        <a class="btn btn-success" href="#" data-toggle="modal" data-target="#addServices">
          <i class="fa fa-plus"></i>
          Add Service
        </a>
        <!-- <form class="pull-right form-inline">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-search"></i>
                  </span>
                  <input type="text" class="form-control" name="txtSearch"
                    placeholder="Search" />
                </div>
              </form> -->
      </div>
      <table id="tblServices" class="table table-condensed table-striped table-hover">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Small Description</th>
            <th>Description</th>
            <th>Service Duration</th>
            <th>Service Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <?php $this->load->view('cms/include/footer'); ?>
  </section>
  </div>
  </div>

  <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/jquery.min.js"></script>
  <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/bootstrap.min.js"></script>
  <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/jquery.cookie.js"></script>
  <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/services.js"></script>
</body>

</html>
