<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

  <title>Administration Login Page</title>

  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/font-awesome.min.css" />
  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/normalize.css" />
  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/default-theme.css" />
  <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>resources/css-cms/style-cms.css" />
  <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
</head>

<body>

  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="log-in">
          <div id="loginPanel" class="panel panel-default">
            <img id="companyLogo" src="<?php echo base_url(); ?>resources/img/logo2.png" height = "250px" width = "250px">
            <!-- <div class="panel-heading head-custom">
              <h2 class="panel-title head text-center">LOGIN ACCOUNT</h2>
            </div> -->
            <div class="panel-body">
              <?php echo form_open(); ?>
              <?php if(validation_errors()) { ?>
              <div class="alert alert-danger" role="alert">
                <?php echo validation_errors(); ?>
              </div>
              <?php } ?>
              <?php if(isset($error_message)) { ?>
              <div class="alert alert-danger" role="alert">
                <?php echo $error_message; ?>
              </div>
              <?php } ?>
              <div class="form-group">
                <input id="txtUsername" type="text" class="form-control" placeholder="Username" name="txtUsername"
                  value="<?php echo set_value('txtUsername'); ?>" />
              </div>
              <div class="form-group">
                <input id="txtPassword" type="password" class="form-control" placeholder="Password" name="txtPassword" />
              </div>
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input id="chkRemember" type="checkbox" name="chkRemember" /> Remember me
                  </label>
                </div>
              </div>
              <div class="form-group">
                <button id="btnLogin" class="btn btn-primary" style="width: 100%;">Login</button>
              </div>
              </form>
            </div>
            <!-- <div class="panel-footer" style="text-align: right;">
              Powered by <img id="hatchitLogo" src="<?php echo base_url(); ?>resources/images/hatchit-img.png">CMS
              &copy; 2016
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/jquery.min.js"></script>
  <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/bootstrap.min.js"></script>
  <script type="text/javascript" src="<?php echo base_url(); ?>resources/js-cms/jquery.cookie.js"></script>
</body>

</html>