 <!-- modal: password -->
    <div id="modal-password" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-head d-flex align-items-center justify-content-center">
            <div>
              <svg width="157" height="24" viewBox="0 0 1150 172">
                <h1>Change Pasword</h1>
              </svg>
            </div>
            <a href="#" data-dismiss="modal">
              <svg width="18px" height="18px" viewBox="0 0 26 27" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Close</title>
                <defs>
                  <rect width="39" height="39" rx="5"></rect>
                </defs>
                <g transform="translate(-6 -6)" fill="none" fill-rule="evenodd">
                  <g transform="rotate(135 17.586 18.914)">
                    <rect fill="#212121" y="15.448" width="34" height="4" rx="2"></rect>
                    <rect fill="#212121" transform="rotate(90 17 17.448)" y="15.448" width="34" height="4" rx="2"></rect>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div class="modal-body px-4">
            <form id = "passwordForm" data-user-id = "<?php echo $this->session->userdata('userID'); ?>">
                <p class="mt-3">
                    <strong>Change Password</strong>
                    <div id = "error_mesage" style="color:red;"></div>
                </p>
                <div class="form-group">
                  <input class="form-control" value="" id = "txtPassword" required type="password">
                  <label>Password</label>
                </div>
                <div class="form-group">
                  <input class="form-control" value="" id = "txtPasswordConfirmation" required type="password">
                  <label>Password Confirmation</label>
                </div>
                <button class="btn btn-primary btn-block" id = "btnChangePassword">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>