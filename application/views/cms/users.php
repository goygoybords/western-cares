<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Hatchit CMS - Users</title>

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
        <div class="modal fade" id="addUsers" tabindex="-1" role="dialog"
          aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h3 class="modal-title">Add New User</h3>
              </div>
              <div class="modal-body">
                <?php echo form_open('add_user', array('id' => 'addUserForm')); ?>
                  <div class="form-group">
                    <label for="txtFirstName">First Name</label>
                    <input type="text" name="txtFirstName" id="txtFirstName"
                      placeholder="First Name" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="txtLastName">Last Name</label>
                    <input type="text" name="txtLastName" id="txtLastName"
                      placeholder="Last Name" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="txtUsername">Username</label>
                    <input type="text" name="txtUsername" id="txtUsername"
                      placeholder="Username" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="txtPassword">Password</label>
                    <input type="password" name="txtPassword" id="txtPassword"
                      placeholder="Password" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="txtEmail">Email</label>
                    <input type="email" name="txtEmail" id="txtEmail"
                      placeholder="Email" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="selRole">Role</label>
                    <select name="selRole" class="form-control" id="selRole" disabled>
                      <option value="Administrator">Administrator</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default"
                  data-dismiss="modal">
                  Close
                </button>
                <button id="btnCreate" type="button"
                  class="btn btn-success">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="editUsers" tabindex="-1" role="dialog"
          aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h3 class="modal-title">Edit User</h3>
              </div>
              <div class="modal-body">
                <?php echo form_open('_user', array('id' => 'addUserForm')); ?>
                  <div class="form-group">
                    <label for="txtFirstName">First Name</label>
                    <input type="text" name="txtFirstName" id="txtFirstName"
                      placeholder="First Name" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="txtLastName">Last Name</label>
                    <input type="text" name="txtLastName" id="txtLastName"
                      placeholder="Last Name" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="txtUsername">Username</label>
                    <input type="text" name="txtUsername" id="txtUsername"
                      placeholder="Username" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="txtEmail">Email</label>
                    <input type="email" name="txtEmail" id="txtEmail"
                      placeholder="Email" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="selRole">Role</label>
                    <select name="selRole" class="form-control" id="selRole" disabled>
                      <option value="Administrator">Administrator</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default"
                  data-dismiss="modal">
                  Close
                </button>
                <button id="btnEdit" type="button"
                  class="btn btn-warning">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="removeUser" tabindex="-1" role="dialog"aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h3 class="modal-title">Remove User</h3>
              </div>
              <div class="modal-body">
                <p id="userToRemove">Are you sure you want to remove selected user?</p>
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
        <section id="adminContent" class="col-md-offset-2 col-md-10">
          <h1>Users</h1>
          <div class="panel panel-default">
            <div class="users-control">
              <a class="btn btn-success" href="#"
                data-toggle="modal" data-target="#addUsers">
                <i class="fa fa-user-plus"></i>
                Add User
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
            <table id="tblUsers"
              class="table table-condensed table-striped table-hover">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
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
      src="<?php echo base_url(); ?>resources/js-cms/jquery.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/bootstrap.min.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/jquery.cookie.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/users.js"></script>
  </body>
</html>
