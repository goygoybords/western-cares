<!-- View Modal -->
  <div class="modal modal-fullscreen fade" id="viewBooking" tabindex="-1" role="dialog"aria-labelledby="myModalLabel" data-backdrop="static"
   data-keyboard="false">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header modal-info">
          <button type="button" class="close" data-dismiss="modal" style="color: #ffffff;">&times;</button>
          <h4 class="modal-title">View Booking Transaction</h4>
        </div>
        <div class="divCal">
          <div class="col-md-1 pull-right" style="width:auto;padding-top: 7px; padding-right: 20px;">
            <span style="color: #b6b6b6;"> TOTAL AMOUNT </span><br>
            <span style="font-size: 27px;"> PHP<span id="viewTransAmount">0.00</span></span>
          </div>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <p>
                <label for="viewBookingDate">Booking Date:&nbsp;&nbsp;</label>
                <span id="viewBookingDate" class="infoValue"></span>
              </p>
              <p>
                <label for="viewClient">Customer:&nbsp;&nbsp;</label>
                <span id="viewClient" class="infoValue"></span>
              <p>
            </div>
            <div class="col-md-12">
              <p>
                <label for="viewRemarks">Remarks:&nbsp;&nbsp;</label>
                <span id="viewRemarks" class="infoValue"></span>
              <p>
              <br>
              <label>Service Transaction Items</label>
              <table id="tblViewServiceItems" class="table table-condensed table-striped table-hover">
                <thead>
                  <tr>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <br><br>
              <br><br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>