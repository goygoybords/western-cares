<div class="modal fade" id="editServices" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h3 class="modal-title">Edit Service</h3>
            </div>
            <div class="modal-body">
                <?php echo form_open('edit_service', array('id' => 'editServiceForm')); ?>
                    <input type="hidden" id="serviceID" name="serviceID" />
                    <div class="form-group">
                        <label for="txtName">Name</label>
                        <input type="text" name="txtName" id="txtName" placeholder="Service Name" class="form-control" />
                    </div>
                     <div class="form-group">
                        <label for="txtSmallDescription">Small Description</label>
                        <input type="text" name="txtSmallDescription" id="txtSmallDescription" placeholder="Service Small Description" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="txtDescription">Description</label>
                        <input type="text" name="txtDescription" id="txtDescription" placeholder="Service Description" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="txtDuration">Duration</label>
                        <input type="text" name="txtDuration" id="txtDuration" placeholder="Service Duration" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="txtPrice">Price</label>
                        <input type="text" name="txtPrice" id="txtPrice" placeholder="Price" class="form-control" />
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">
                    Close
                </button>
                <button id="btnEdit" type="button" class="btn btn-warning">
                    Edit
                </button>
            </div>
        </div>
    </div>
</div>