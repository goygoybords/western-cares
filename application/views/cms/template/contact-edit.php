<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Hatchit CMS - Contact Us Edit</title>

    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css/bootstrap.min.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css/font-awesome.min.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css/normalize.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css/default-theme.css" />
    <link type="text/css" rel="stylesheet"
      href="<?php echo base_url(); ?>resources/css/style-cms.css" />
    <link type="text/css" rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans" />
  </head>
  <body>
    <?php $this->load->view('cms/include/header'); ?>
        <section id="adminContent" class="col-md-offset-2 col-md-10">
          <h1>Contact Us Page Edit</h1>
          <div class="panel panel-default">
            <?php echo form_open(base_url() . 'cms/save/4', array('class' => 'form-horizontal', 'id' => 'formEdit')); ?>
            <div class="form-group">
              <label for="txtTitle" class="col-md-2 control-label">
                Page Title
              </label>
              <div class="col-md-10">
                <input type="text" name="txtTitle" id="txtTitle"
                  class="form-control" placeholder="Page Title"
                  value="<?php echo $page_data['title']; ?>" />
              </div>
            </div>
            <div class="form-group">
              <label for="txtContactInfo1" class="col-md-2 control-label">
                USA Contact Info
              </label>
              <div class="col-md-10">
                  <textarea id="txtContactInfo1" class="form-control" name="txtContactInfo1">
                    <?php echo $page_sections['txtContactInfo1']; ?>
                  </textarea>
              </div>
            </div>
            <div class="form-group">
              <label for="txtContactInfo2" class="col-md-2 control-label">
                PH Contact Info
              </label>
              <div class="col-md-10">
                  <textarea id="txtContactInfo2" class="form-control" name="txtContactInfo2">
                    <?php echo $page_sections['txtContactInfo2']; ?>
                  </textarea>
              </div>
            </div>
            <div class="form-group">
              <label for="txtContactInfo3" class="col-md-2 control-label">
                AUS Contact Info
              </label>
              <div class="col-md-10">
                  <textarea id="txtContactInfo3" class="form-control" name="txtContactInfo3">
                    <?php echo $page_sections['txtContactInfo3']; ?>
                  </textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-offset-2 col-md-10">
                  <button id="btnSave" class="btn btn-success">Save</button>
                  <a href="<?php echo base_url(); ?>cms/pages" class="btn btn-default">Cancel</a>
              </div>
            </div>
            </form>
          </div>
          <?php $this->load->view('cms/include/footer'); ?>
        </section>
      </div>
    </div>

    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/jquery.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/bootstrap.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/jquery.cookie.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/tinymce/tinymce.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/edit.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/bootstrap-notify.min.js"></script>
  </body>
</html>
