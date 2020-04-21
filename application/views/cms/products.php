<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
      content="width=device-width,
        initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Western Cares CMS - Products</title>

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
      <div class="modal modal-fullscreen fade" id="addProduct" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static"
         data-keyboard="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-add">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color: black;">&times;</span></button>
                <h4 class="modal-title">Create New Product</h4>
              </div>
              <form method="POST" id = "addProductForm" enctype="multipart/form-data">
              <div class="modal-body" style="padding: 25px;">
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtItemCode">Item Code</label>
                          <input type="text" name="txtItemCode" id="txtItemCode"
                            placeholder="Item Code" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                          <label for="txtDescription">Description</label>
                          <input type="text" name="txtDescription" id="txtDescription"
                            placeholder="Description" class="form-control" />
                        </div>
                    </div>
                  </div>
                </div>
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtBrand">Brand</label>
                          <input type="text" name="txtBrand" id="txtBrand"
                            placeholder="Brand" class="form-control" />
                        </div> 
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtDimension">Dimension</label>
                          <input type="text" name="txtDimension" id="txtDimension"
                            placeholder="Dimension" class="form-control" />
                        </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                          <label for="txtBirthdate">Unit of Measure</label>
                          <select name="selUom" id = "selUom" class="form-control">
                              <?php foreach($uom as $c): ?>
                                <option value="<?php echo $c['id']; ?>"><?php echo $c['description']; ?></option>
                              <?php endforeach; ?>
                            </select>
                          </select>
                        </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                          <label for="txtCategory">Category</label>
                          <select name="selCategory" class="form-control">
                            <?php foreach($categories as $c): ?>
                              <option value="<?php echo $c['category_id']; ?>"><?php echo $c['description']; ?></option>
                            <?php endforeach; ?>
                          </select>
                        </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                          <label for="txtProductImage">File Upload</label>
                          <input type="file" id="txtProductImage" name="txtProductImage" accept="image/*" />
                        </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtPrice">Cost</label>
                          <input type="text" placeholder="Cost" class = "form-control" name="txtCost" id = "txtCost" required="">
                        </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtPrice">Selling Price</label>
                          <input type="text"  placeholder="Selling Price" class = "form-control" id="txtPrice" name="txtPrice" />
                        </div>
                  </div>
                </div>
                <!-- <div class="row">
                  <div class="col-md-12">
                    <h4>Customer's Signature</h4>
                    <hr />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 pull-left">
                    <div id="signatureparent">
                        <div id="signature"></div>
                      </div>
                  </div>
                </div> -->
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
        <div class="modal modal-fullscreen fade" id="editProduct" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static"
         data-keyboard="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-update">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color: black;">&times;</span></button>
                <h4 class="modal-title">Edit Customer Information</h4>
              </div>
              <?php echo form_open('edit_product', array('id' => 'editProductForm')); ?>
              <div class="modal-body" style="padding: 25px;">
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtItemCode">Item Code</label>
                          <input type="text" name="txtItemCode" id="txtItemCode"
                            placeholder="Item Code" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                          <label for="txtDescription">Description</label>
                          <input type="text" name="txtDescription" id="txtDescription"
                            placeholder="Description" class="form-control" />
                        </div>
                    </div>
                  </div>
                </div>
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtBrand">Brand</label>
                          <input type="text" name="txtBrand" id="txtBrand"
                            placeholder="Brand" class="form-control" />
                        </div> 
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtDimension">Dimension</label>
                          <input type="text" name="txtDimension" id="txtDimension"
                            placeholder="Dimension" class="form-control" />
                        </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                          <label for="txtBirthdate">Unit of Measure</label>
                          <select name="selUom" id = "selUom" class="form-control">
                              <?php foreach($uom as $c): ?>
                                <option value="<?php echo $c['id']; ?>"><?php echo $c['description']; ?></option>
                              <?php endforeach; ?>
                            </select>
                          </select>
                        </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                          <label for="txtCategory">Category</label>
                          <select name="selCategory" id = "selCategory" class="form-control">
                            <?php foreach($categories as $c): ?>
                              <option value="<?php echo $c['category_id']; ?>"><?php echo $c['description']; ?></option>
                            <?php endforeach; ?>
                          </select>
                        </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                          <label for="txtProductImage">File Upload</label>
                          <input type="file" id="txtProductImage" name="txtProductImage" accept="image/*" />
                        </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtPrice">Cost</label>
                          <input type="text" placeholder="Cost" class = "form-control" name="txtCost" id = "txtCost" required="">
                        </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtPrice">Selling Price</label>
                          <input type="hidden" name="txtIDEdit" id = "txtIDEdit">
                          <input type="text" placeholder="Selling Price" class = "form-control" id="txtPrice" name="txtPrice" />
                        </div>
                  </div>
                </div>
                <div class="row">
                  <div id = "viewImage">
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
        <div class="modal modal-fullscreen fade" id="viewProduct" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static"
         data-keyboard="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-info">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color: black;">&times;</span></button>
                <h4 class="modal-title">View Customer Information</h4>
              </div>
              
              <div class="modal-body" style="padding: 25px;">
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtItemCode">Item Code</label>
                          <input type="text" name="txtItemCode" id="txtItemCode"
                            placeholder="Item Code" class="form-control" disabled/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                          <label for="txtLastName">Description</label>
                          <input type="text" name="txtDescription" id="txtDescription"
                            placeholder="Last Name" class="form-control" disabled/>
                        </div>
                    </div>
                  </div>
                </div>
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group"> 
                          <label for="txtBrand">Brand</label>
                          <input type="text" name="txtBrand" id="txtBrand"
                            placeholder="Address" class="form-control" disabled="" />
                        </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                          <label for="txtDimension">Dimension</label>
                          <input type="email" name="txtDimension" id="txtDimension"
                            placeholder="Email" class="form-control" disabled />
                        </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtBirthdate">Cost</label>
                      <input type="text" name="txtCost" id="txtCost" 
                        placeholder="txtBirthdate" class="form-control"  disabled/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtBirthdate">Selling Price</label>
                      <input type="text" name="txtSellingPrice" id="txtSellingPrice"
                        placeholder="txtBirthdate" class="form-control" disabled />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtBirthdate">Unit</label>
                      <input type="text" name="txtUnit" id="txtUnit" 
                        placeholder="txtBirthdate" class="form-control" disabled />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtBirthdate">Category</label>
                      <input type="text" name="txtCategory" id="txtCategory"
                        placeholder="txtBirthdate" class="form-control" disabled="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div id = "viewImage">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 pull-left">
                    <img id="test" style="width: auto; padding: 40px; padding-bottom: 30px; max-height: 320px; margin: 0 auto;"/>
                  </div>
                </div>

                <br>
                <br><br><br>
              </div> <!-- modal-body CLOSE -->
            </div> <!-- modal-content CLOSE -->
          </div> <!-- modal-dialog-wide CLOSE -->
        </div> <!-- modal CLOSE -->
        <!-- end of view -->
        <div class="modal fade" id="removeProduct" tabindex="-1" role="dialog"aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-remove">
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h3 class="modal-title">Remove Product</h3>
              </div>
              <div class="modal-body">
                <p id="productToRemove">Are you sure you want to remove selected product?</p>
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
          <h1>Product</h1>
          <div class="panel panel-default">
            <div class="users-control">
              <a class="btn btn-success" href="#"
                data-toggle="modal" data-target="#addProduct">
                <i class="fa fa-user-plus"></i>
                Add Product
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
            <table id="tblProducts" class="table table-condensed table-striped table-hover"
            data-toolbar="#toolbar" data-search="true" data-minimum-count-columns="2" data-pagination="true"
            data-id-field="product_id" data-page-list="[5, 10, 25, 50, 100, ALL]" data-show-footer="false">
              <thead>
                <tr>
                  <th data-field="product_id">ID</th>
                  <th data-field="item_code">Item Code</th>
                  <th data-field="description">Description</th>
                  <th data-field="dimension">Dimension</th>
                  <th data-field="brand">Brand</th>
                  <th data-field="cost">Cost</th>
                  <th data-field="selling_price">Price</th>
                  <th data-field="uom">Unit</th>
                  <th data-field="category">Category</th>
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
      src="<?php echo base_url(); ?>resources/js-cms/products.js"></script>
      <script type="text/javascript"
    src="<?php echo base_url(); ?>resources/js/shield-ui.js"></script>

    <!-- JS Signature -->
    <script type="text/javascript"  src="<?php echo base_url()?>/resources/js/signature/jSignature.js"></script>
    <script type="text/javascript"  src="<?php echo base_url()?>/resources/js/signature/plugins/jSignature.UndoButton.js"></script>
    <script type="text/javascript"  src="<?php echo base_url()?>/resources/js/signature/plugins/jSignature.CompressorBase30.js"></script>
    <script type="text/javascript"  src="<?php echo base_url()?>/resources/js/signature/plugins/jSignature.CompressorSVG.js"></script>
    <!-- end JS Signature -->
  </body>
</html>
