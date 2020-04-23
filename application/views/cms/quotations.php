<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Hatchit CMS - Customers</title>

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

    <!-- Add Customer Modal -->
      <div class="modal modal-fullscreen fade" id="addQuotation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static"
         data-keyboard="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-add">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color: black;">&times;</span></button>
                <h4 class="modal-title">Create New Quotation</h4>
              </div>
              <?php echo form_open('add_quotation', array('id' => 'addQuotationForm')); ?>
              <div class="modal-body" style="padding: 25px;">
                <div class = "row">
                  <div class="col-md-12">
                   <div class="form-group">
                          <label for="txtBirthdate">Attachments</label>
                          <input type='file' name="txtAttachment[]" id="txtAttachment" class="form-control txtAttachment"  multiple accept = "application/msword, application/vnd.ms-excel, application/pdf, image/*">
                      </div>
                  </div>
                </div>
                <br>
                  <h4 style="padding-bottom:8px"> Product Information </h4>
                  <hr />
                <br>
                <div id="tank">
                  <div class = "row">
                    <div class="col-md-4">
                      <span><h5> * Please select the item </h5> </span>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="selAilments">Ailments</label>
                        <select id="selProducts" name="selProducts" class="form-control">
                            <?php foreach ($products as $p): ?>
                                <option value="<?php echo $p['item_code'];?>"><?php echo $p['item_code']; ?></option>
                            <?php endforeach; ?>
                        </select>
                      </div>
                    </div>
                    <br>
                    <div class="col-md-4">
                      <button id="btnAddRowSave" type="button" class="btn btn-primary pull-left">
                        <i class="fa fa-plus"></i> Add Entry
                      </button>
                    </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="panel-body text-center">
                        <div id="gridsave"></div>
                    </div>
                  </div>
                </div>
                <br>
                <button id="btnCreate" type="button" class="btn btn-success pull-right">
                  <i class="fa fa-check-circle"></i> Create </button>
                </form>
                <br><br><br>
              </div> <!-- modal-body CLOSE -->
            </div> <!-- modal-content CLOSE -->
          </div> <!-- modal-dialog-wide CLOSE -->
        </div> <!-- modal CLOSE -->
        <!-- end of add Modal -->

        <!-- edit Modal-->
        <div class="modal modal-fullscreen fade" id="editCustomer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static"
         data-keyboard="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-update">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color: black;">&times;</span></button>
                <h4 class="modal-title">Edit Customer Information</h4>
              </div>
              <?php echo form_open('edit_customer', array('id' => 'editCustomerForm')); ?>
              <div class="modal-body" style="padding: 25px;">
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtFirstName">First Name</label>
                          <input type="text" name="txtFirstName" id="txtFirstName"
                            placeholder="First Name" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                          <label for="txtLastName">Last Name</label>
                          <input type="text" name="txtLastName" id="txtLastName"
                            placeholder="Last Name" class="form-control" />
                        </div>
                    </div>
                  </div>
                </div>
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtAddress">Address</label>
                          <input type="text" name="txtAddress" id="txtAddress"
                            placeholder="Address" class="form-control" />
                        </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtEmail">Email</label>
                          <input type="email" name="txtEmail" id="txtEmail"
                            placeholder="Email" class="form-control" />
                        </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                        <label for="txtBirthdate">Attachments</label>
                        <input type='file' name="txtAttachment[]" id="txtAttachment" class="form-control txtAttachment"  multiple accept = "application/msword, application/vnd.ms-excel, application/pdf, image/*"> 
                    </div>
                  </div>
                </div>
                <br>
                  <h4 style="padding-bottom:8px"> Medical Information</h4>
                  <hr />
                <div id="tank">
                  <div class = "row">
                    <div class="col-md-4">
                      <span><h5> * Please select the ailment and press the add entry button to fill up the table </h5> </span>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="selAilments">Ailments</label>
                        <select id="ailment_edit" name="ailment_edit" class="form-control">
                          <option value="allergy">Allergy</option>
                          <option value="allergy_to_latex">Allergy to latex</option>
                          <option value="conjunctivitis">Conjunctivitis</option>
                          <option value="cataract">Cataract</option>
                          <option value="dry_eye_syndrome">Dry Eye Syndrome</option>
                          <option value="trichotillomanie">Trichotillomanie</option>
                          <option value="diabetic">Diabetic</option>
                          <option value="glaucoma">Glaucoma</option>
                          <option value="sensitive_eyes">Sensitive Eyes</option>
                          <option value="retinopathy">Retinopathy</option>
                          <option value="Alopecia">Alopecia</option>
                          <option value="eczema">Eczema</option>
                          <option value="contact_lens">Contact Lens</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <br>
                      <button id="btnAddRowSaveEdit" type="button" class="btn btn-primary pull-left">
                        <i class="fa fa-plus"></i> Add Entry
                      </button>
                    </div>
                  </div>
                  <br>

                  <div class="row">
                    <div class="panel-body text-center">
                        <div id="gridsaveEdit"></div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <h4>Customer's Signature</h4>
                    <hr />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 pull-left">
                    <div id = "fromAjax">
                      <div id="signatureparentedit">
                        <div id="signatureedit"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <br>
                <button id="btnEdit" type="button" class="btn btn-success pull-right">
                  <i class="fa fa-check-circle"></i> Edit </button>
                </form>
                <br><br><br>
              </div> <!-- modal-body CLOSE -->
            </div> <!-- modal-content CLOSE -->
          </div> <!-- modal-dialog-wide CLOSE -->
        </div> <!-- modal CLOSE -->
        <!-- end of Edit -->

        <!-- edit Modal-->
        <div class="modal modal-fullscreen fade" id="viewQuotation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static"
         data-keyboard="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-info">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color: black;">&times;</span></button>
                <h4 class="modal-title">View Customer Information</h4>
              </div>
              <?php echo form_open('view_customer', array('id' => 'viewCustomerForm')); ?>
              <div class="modal-body" style="padding: 25px;">
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtCompanyName">Company Name</label>
                          <input type="text" name="txtCompanyName" id="txtCompanyName"
                            placeholder="Company Name" class="form-control" disabled="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                          <label for="txtAddress">Address</label>
                          <input type="text" name="txtAddress" id="txtAddress"
                            placeholder="Address" class="form-control" disabled="" />
                        </div>
                    </div>
                  </div>
                </div>
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtEmail">Email</label>
                          <input type="email" name="txtEmail" id="txtEmail"
                            placeholder="Email" class="form-control" disabled="" />
                        </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtAddress">Attachments</label>
                          <ul id = "display_attachment">
                            <li id = "display_attachment"></li>
                          </ul>
                    </div> 
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 pull-left">
                    <img id="test" style="width: auto; padding: 40px; padding-bottom: 30px; max-height: 320px; margin: 0 auto;"/>
                  </div>
                </div>
                <div id="tank">
                  <div class = "row">
                    <div class="col-md-4">
                      <span><h5> * Quoted Items </h5> </span>
                    </div>
                    <br>
                  </div>
                  <br>
                  <div class="row">
                    <div class="panel-body text-center">
                        <div id="gridsaveView"></div>
                    </div>
                  </div>
                </div>
                <br>
                </form>
                <br><br><br>
              </div> <!-- modal-body CLOSE -->
            </div> <!-- modal-content CLOSE -->
          </div> <!-- modal-dialog-wide CLOSE -->
        </div> <!-- modal CLOSE -->
        <!-- end of view -->
        <div class="modal fade" id="removeQuotation" tabindex="-1" role="dialog"aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-remove">
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h3 class="modal-title">Remove Quotation</h3>
              </div>
              <div class="modal-body">
                <p id="customerToRemove">Are you sure you want to remove selected quotation?</p>
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
          <?php if($this->session->userdata('role') == "Administrator"): ?>
            <h1> Quotations</h1>
          <?php else: ?>
            <h1>My Quotations</h1>
          <?php endif; ?>
          <div class="panel panel-default">
            <div class="users-control">
              <a class="btn btn-success" href="#"
                data-toggle="modal" data-target="#addQuotation">
                <i class="fa fa-user-plus"></i>
                Add Quotation
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
            <input type="hidden" name="base_url" id="base_url" value="<?php echo base_url(); ?>">
            <table id="tblQuotations" class="table table-condensed table-striped table-hover"
            data-toolbar="#toolbar" data-search="true" data-minimum-count-columns="2" data-pagination="true"
       data-id-field="quotation_id" data-page-list="[5, 10, 25, 50, 100, ALL]" data-show-footer="false">
              <thead>
                <tr>
                  <th data-field="quotation_id">#</th>
                  <th data-field="supplier">Company Name</th>
                  <th data-field="address">Address</th>
                  <th data-field="email">Email</th>
                  <th data-field="status">Status</th>
                  <th data-field="action" data-formatter="actionFormatter" data-events="operateEvents">Actions</th>
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
      src="<?php echo base_url(); ?>resources/js-cms/bootstrap-table.js"></script>
    <script type="text/javascript"
      src="<?php echo base_url(); ?>resources/js-cms/quotations.js"></script>
      <script type="text/javascript"
    src="<?php echo base_url(); ?>resources/js/shield-ui.js"></script>

  </body>
</html>
