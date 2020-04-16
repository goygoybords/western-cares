    <div class="modal modal-fullscreen fade" id="editBooking" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static"
         data-keyboard="false">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-add">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color: black;">&times;</span></button>
                <h4 class="modal-title">Edit Booking</h4>
              </div>
              <?php echo form_open('edit_booking', array('id' => 'editBookingForm')); ?>
              <div class="modal-body" style="padding: 25px;">
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtCustomerEdit">Customer</label>
                     <input class="form-control" type="text" id="txtCustomerEdit" required="required">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                        <label for="txtDate">Date</label>
                        <input class="form-control" type="date" id="pickedDate" required="required">
                      </div>
                    </div>
                  </div>
                </div>
                <h4> Customer's Current Booking Schedule </h4>
                <div class = "row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="txtServiceAvailed">Service Availed</label>
                     <input class="form-control" type="text" id="txtServiceAvailed" required="required">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                        <label for="txtTimeSlotChosen">Time Slot</label>
                        <input class="form-control" type="text" id="txtTimeSlotChosen" required="required">
                      </div>
                    </div>
                  </div>
                </div>

                <br>
                <h4> LASHES SERVICES </h4>
                <hr />

                <div class = "row">
                  <div class="col-md-2">
                    <div class="form-group">
                          <label for="lashSlotCMS">TIME:</label>
                          <select class="form-control" id="lashSlotCMS"></select>
                        </div>
                  </div>
                </div>
                    <div class="form-group">
                         <?php foreach($services_nobrow as $s): ?>
                          <div class = "row" style="padding-bottom:20px">
                            <div class="col-md-4">
                              <p><?php echo $s->name; ?> (Php <?php echo number_format($s->price)."  ,". $s->duration; ?>  )</p>
                            </div>
                            <div class="col-md-4">
                              <input type="number" id="<?php echo str_replace(' ', '', strtolower($s->name)) ;?>" placeholder="0" min="0" max="1" class="form-control form-control-sm mb-0 lashglow">
                            </div>
                            <input type ="hidden" id = "service_price<?php echo $s->id;?>" value = "<?php echo $s->price; ?>">
                            <input type ="hidden" id = "service_id<?php echo $s->id;?>" value = "<?php echo $s->id; ?>">
                            <div class="col-md-4">
                              <div class="text-right">
                                <div style="width:150px;" id = "price">TOTAL: PHP <span id="ServiceAmount<?php echo $s->id;?>">0.00</span></div>
                              </div>
                            </div>
                         </div>
                       <?php endforeach; ?>
                        </div>

                <h4> BROWS SERVICES </h4>
                <hr />

                <div class = "row">
                  <div class="col-md-2">
                      <div class="form-group">
                         <label for="txtAddress">TIME:</label>
                         <select class="form-control" id="browsSlotCMS"></select>
                      </div>
                  </div>
                </div>
                    <div class="form-group">
                         <?php foreach($service_onlybrow as $so): ?>
                           <div class = "row">
                            <div class="col-md-4">
                              <p><?php echo $so->name; ?> (Php <?php echo number_format($so->price)."  ,".$so->duration;?>)
                              </p>
                            </div>
                            <div class="col-md-4">
                              <input type="number" id="<?php echo str_replace(' ', '', strtolower($so->name));?>" placeholder="0" min="0" max="1" class="form-control  form-control-sm mb-0 lashglow">
                            </div>
                            <input type ="hidden" id = "service_price<?php echo $so->id;?>" value = "<?php echo $so->price; ?>">
                            <input type ="hidden" id = "service_id<?php echo $so->id;?>" value = "<?php echo $so->id; ?>">
                            <div class="col-md-4">
                                <div class="text-right">
                                  <div style="width:150px;">TOTAL: PHP <span id="ServiceAmount<?php echo $so->id; ?>">0.00</span></div>
                                </div>
                              </div>
                            </div>
                          <?php endforeach; ?>
                      </div>

                      <div class ="row">
                        <div class ="col-md-4"></div>
                        <div class ="col-md-4"></div>
                        <div class ="col-md-4">
                          <h4 style="padding-left:6%"class="pull-left" for="grandtotal"><strong>GRAND TOTAL: PHP <span id="SeviceTotal">0.00</span></strong></h4>
                        </div>
                    </div>

                      <div class = "row">
                         <div class="col-md-12">
                           <div class="form-group">
                             <label>REMARKS</label>
                             <textarea class="form-control" rows="4" id="remarks"></textarea>
                           </div>
                         </div>
                       </div>
                      <!-- <div class="mt-4" style="padding-top:15px">
                       <p>BOOKING SCHEDULE</p><hr />
                     </div> -->

                     <h4> CONFIRMED BOOKING SCHEDULE </h4>
                     <hr />

                     <table id="tblEditServiceItems" class="table table-condensed table-striped table-hover">
                       <thead>
                         <tr>
                           <th>Customer Name </th>
                           <th>Service Name</th>
                           <th>Time</th>
                           <th>Price</th>
                         </tr>
                       </thead>
                       <tbody></tbody>
                     </table>

                </div>


               <!-- <div class="mt-4">
                 <p>LEGEND</p>
                 <div class="row">
                   <div style="padding-left:2%">
                     <p>LASHES <span class="color-box" style="margin-left: 12px; position: relative;background-color:#e5898f"></span></p>
                   </div>
                   <div>
                     <p>BROWS <span class="color-box" style="margin-left: 12px; position: relative;background-color:#fabcc1"></span></p>
                   </div>
                 </div>
               </div> -->

               <!-- TABLE -->
               <!-- <div class="responsive" style="padding-top:10px">
                 <table class="table table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th>10:30</th>
                      <th>12:00</th>
                      <th>1:30</th>
                      <th>3:00</th>
                      <th>4:30</th>
                      <th>6:00</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><div class="one"></div></td>
                      <td><div class="two"></div></td>
                      <td><div class="three"></div></td>
                      <td><div class="four"></div></td>
                      <td><div class="five"></div></td>
                      <td><div class="six"></div></td>
                    </tr>
                    <tr>
                      <td><div class="seven"></div></td>
                      <td><div class="eight"></div></td>
                      <td><div class="nine"></div></td>
                      <td><div class="ten"></div></td>
                      <td><div class="eleven"></div></td>
                      <td><div class="twelve"></div></td>
                    </tr>
                  </tbody>
                </table>
               </div> -->

                <button id="btnSubmitAppointment" type="button" class="btn btn-success pull-right">
                  <i class="fa fa-check-circle"></i> Save Booking </button>
                </form>
                <br><br><br>
                </div>
              </div> <!-- modal-body CLOSE -->
            </div> <!-- modal-content CLOSE -->
          </div> <!-- modal-dialog-wide CLOSE -->
        </div> <!-- modal CLOSE -->
        <!-- end of add Modal -->
