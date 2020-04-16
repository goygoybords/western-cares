<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Control Panel - Dashboard</title>

    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-back/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-back/font-awesome.min.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-back/normalize.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css-back/default-theme.css" />
    <link type="text/css" rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans" />
  </head>
  <body>
    <?php $this->load->view('dashboard/include/header'); ?>
        <section id="adminContent" class="col-md-offset-2 col-md-10">
          <div class="alert alert-info alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Hurray!!!</strong> Thank you for using
              <strong>Hatch CMS</strong>. You may check the latest updates
              <a href="#">here</a>.
          </div>
          <h1>
            Dashboard
            <small>Manage website contents</small>
          </h1>
          <div class="panel panel-default">
            <div class="row">
              <div class="col-md-6">
                <h4>Welcome to Hatch CMS!</h4>
                <h5>Get started with your website by checking out the following
                  links:</h5>
                <ul>
                  <li>
                    <a href="#">Edit pages</a>
                  </li>
                  <li>
                    <a href="#">Upload media (i.e. images, files, videos and
                      etc.)</a>
                  </li>
                  <li>
                    <a href="#">Manage users</a>
                  </li>
                  <li>
                    <a href="#">Configure preferences</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <h4>Need help?</h4>
                <h5>You may choose to visit the help page or contact the
                  developers.</h5>
                <a class="btn btn-primary" href="#">
                  <i class="fa fa-question-circle"></i>
                  Help Page
                </a>
                <a class="btn btn-warning" href="#">
                  <i class="fa fa-phone-square"></i>
                  Contact Developers
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h1>Messages</h1>
              <div class="panel panel-default">
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua?</p>
                  <footer>John Doe (johndoe@mail.com) @ January 19,
                    2016</footer>
                </blockquote>
                <h5>Quick reply:</h5>
                <form>
                  <div class="form-group">
                    <textarea rows="5" class="form-control"></textarea>
                  </div>
                  <button class="btn btn-primary">
                    <i class="fa fa-reply"></i>
                    Reply
                  </button>
                  <a class="btn btn-default">
                    <i class="fa fa-angle-double-right"></i>
                    Next
                  </a>
                </form>
              </div>
            </div>
            <div class="col-md-6">
              <h1>Activity Logs</h1>
              <div class="panel panel-default">
                <table id="tblLogs"
                  class="table table-condensed table-hover table-bordered
                  table-striped">
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <?php $this->load->view('dashboard/include/footer'); ?>
        </section>
      </div>
    </div>

    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-back/jquery.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-back/bootstrap.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-back/jquery.cookie.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-back/logs.js"></script>
  </body>
</html>
