<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Hatchit CMS - Services Edit</title>

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

    <!-- Pop ups START -->
    <div class="modal fade" id="addService" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3 class="modal-title"> Add New Service</h3>
          </div>
          <?php echo form_open_multipart('cms/add_service', array('id' => 'addServiceForm', 'method' => 'post')); ?>
          <div class="modal-body">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" placeholder="Title" class="form-control" />
              </div>
              <div class="form-group">
                <label for="description">Description</label><span style="font-size: 10px; padding-left: 5px; color: red;">(Please follow existing format. Append '+' to every sub-service and separate with new lines)</span>
                <textarea name="description" id="description" placeholder="Description" class="form-control"></textarea>
              </div>
              <div class="form-group">
                <label for="userfile">Image</label>
                <input type="file" name="userfile" id="userfile" size="20" />
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal"> Close </button>
            <input id="btnCreate" type="submit" name="submit" form="addServiceForm" class="btn btn-success" value="Create" />
          </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="editService" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3 class="modal-title">Edit Service</h3>
          </div>
          <?php echo form_open_multipart('cms/edit_service', array('id' => 'editServiceForm')); ?>
          <div class="modal-body">
              <div class="form-group">
                <input type="hidden" name="id" id="txtID" class="form-control" />
              </div>
              <div class="form-group">
                <label for="editTitle">Title</label>
                <input type="text" name="title" id="editTitle" placeholder="Title" class="form-control" />
              </div>
              <div class="form-group">
                <label for="editDescription">Description</label><span style="font-size: 10px; padding-left: 5px; color: red;">(Please follow existing format. Append '+' to every sub-service and separate with new lines)</span>
                <textarea name="description" id="editDescription" placeholder="Description" class="form-control"></textarea>
              </div>
              <div class="form-group">
                <label for="editImageLocation">Image</label>
                <div class="form-inline">
                  <input type="text" name="image_url" id="editImageLocation" placeholder="Image Location" class="form-control" style="width:80%;" readonly="true"/>
                </div>
              </div>
              <div class="form-group">
                <label for="editImage">Choose new Image File</label>
                <div class="form-inline">
                   <input type="file" accept="image/*" name="userfile" id="userfile" size="20" />
                </div>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal"> Close </button>
            <input id="btnEdit" type="submit" class="btn btn-warning" value="Edit" />
          </div>
          </form>
          </div>
        </div>
      </div>
      <div class="modal fade" id="removeService" tabindex="-1" role="dialog"aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3 class="modal-title">Remove Service</h3>
            </div>
            <div class="modal-body">
              <p id="serviceToRemove">Are you sure you want to remove selected service?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default"
                data-dismiss="modal">
                Close
              </button>
              <button id="btnRemove" type="button"
                class="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Pop ups END -->

        <section id="adminContent" class="col-md-offset-2 col-md-10">
          <h1>Services Page Edit</h1>
          <div class="panel panel-default">
            <?php echo form_open(base_url() . 'cms/save/3', array('class' => 'form-horizontal', 'id' => 'formEdit')); ?>
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
              <div class="col-md-offset-2 col-md-10">
                  <button id="btnSave" class="btn btn-success">Save</button>
                  <a href="<?php echo base_url(); ?>cms/pages" class="btn btn-default">Cancel</a>
              </div>
            </div>
            </form>
            <h1>Services</h1>
            <a class="btn btn-success" href="#" data-toggle="modal" data-target="#addService">
              <i class="fa fa-plus"></i> Add Service
            </a>
            <hr />
            <table id="tblServices" class="table table-condensed table-hover table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Image</th>
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

    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/jquery.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/ajaxfileupload.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js/services.js"></script>
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
