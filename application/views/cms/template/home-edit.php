<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Hatchit CMS - Home Edit</title>

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
          <h1>Home Page Edit</h1>
          <div class="panel panel-default">
            <?php echo form_open(base_url() . 'cms/save/1', array('class' => 'form-horizontal', 'id' => 'formEdit')); ?>
              <div class="form-group">
                <label for="txtHome1" class="col-md-2 control-label">
                  Home Text 1
                </label>
                <div class="col-md-10">
                  <textarea id="txtHome1" class="form-control" name="txtHome1">
                    <?php echo $page_sections['txtHome1']; ?>
                  </textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="txtHome2" class="col-md-2 control-label">
                  Home Text 2
                </label>
                <div class="col-md-10">
                  <textarea id="txtHome2" class="form-control" name="txtHome2">
                    <?php echo $page_sections['txtHome2']; ?>
                  </textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="txtHome3" class="col-md-2 control-label">
                  Who We Are 1
                </label>
                <div class="col-md-10">
                  <textarea id="txtHome3" class="form-control" name="txtHome3">
                    <?php echo $page_sections['txtHome3']; ?>
                  </textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="txtHome3" class="col-md-2 control-label">
                  Who We Are 2
                </label>
                <div class="col-md-10">
                  <textarea id="txtHome4" class="form-control" name="txtHome4">
                    <?php echo $page_sections['txtHome4']; ?>
                  </textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="txtHomeVision" class="col-md-2 control-label">
                  Vision
                </label>
                <div class="col-md-10">
                  <textarea id="txtHomeVision" class="form-control" name="txtHomeVision">
                    <?php echo $page_sections['txtHomeVision']; ?>
                  </textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="txtHomeMission" class="col-md-2 control-label">
                  Mission
                </label>
                <div class="col-md-10">
                  <textarea id="txtHomeMission" class="form-control" name="txtHomeMission">
                    <?php echo $page_sections['txtHomeMission']; ?>
                  </textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-offset-2 col-md-10">
                    <input type="submit" id="btnSave" class="btn btn-success" value="Save" form="homeContentForm"/>
                    <a href="<?php echo base_url(); ?>cms/pages" class="btn btn-default">Cancel</a>
                </div>
              </div>
            </form>

          </div>
          <?php $this->load->view('cms/include/footer'); ?>
        </section>

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
