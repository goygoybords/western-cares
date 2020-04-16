$(document).ready(
  function() {
    // Get all users -- AJAX Request
    $.ajax({
      url : 'all_users',
      dataType : 'json',
      type : 'get',
      data : {
        csrf_token_name : $.cookie('csrf_cookie_name')
      },
      success : function(data, textStatus, jqXHR) {
        // Populate the users table
        populateUsersTable(data);
      },
      error : function(jqXHR, textStatus, errorThrown) {
        // Log the status
        console.error(textStatus);
        // Log the error response object
        console.error(jqXHR);
        // Log error thrown
        console.error(errorThrown);
      }
    });

    // Add a new user -- AJAX Request
    $('#btnCreate').click(
      function(e) {
        e.preventDefault();
        // Prepare user object
        var user = {
          username : $('#txtUsername').val(),
          password : $('#txtPassword').val(),
          email : $('#txtEmail').val(),
          first_name : $('#txtFirstName').val(),
          last_name : $('#txtLastName').val(),
          role : $('#selRole').val()
        };

        $.ajax({
          url : 'add_user',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#addUsers input[name="csrf_token_name"]').val(),
            user : user
          },
          success : function(data, textStatus, jqXHR) {
            // Check server data after insert
            if(data) {
              var userData = {
                id : data,
                username : user.username,
                password : user.password,
                email : user.email,
                first_name : user.first_name,
                last_name : user.last_name,
                role : user.role
              }
              $('#tblUsers tbody').append(createRow(userData));
              $('#addUsers').modal('hide');
            }
          },
          error : function(jqXHR, textStatus, errorThrown) {
            // Log the status
            console.error(textStatus);
            // Log the error response object
            console.error(jqXHR);
            // Log error thrown
            console.error(errorThrown);
          }
        });
      }
    );

    $('#btnEdit').click(
      function(e) {
        e.preventDefault();
        // Prepare user object
        var user = {
          username : $('#editUsers #txtUsername').val(),
          email : $('#editUsers #txtEmail').val(),
          first_name : $('#editUsers #txtFirstName').val(),
          last_name : $('#editUsers #txtLastName').val(),
          role : $('#editUsers #selRole').val()
        };
        var id = $('#editUsers').attr('data-user-id');

        $.ajax({
          url : 'edit_user',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#addUsers input[name="csrf_token_name"]').val(),
            user : user,
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            // Check server data after update
            if(data) {
              window.location.reload();
            }
          },
          error : function(jqXHR, textStatus, errorThrown) {
            // Log the status
            console.error(textStatus);
            // Log the error response object
            console.error(jqXHR);
            // Log error thrown
            console.error(errorThrown);
          }
        });
      }
    );

    $('#btnRemove').click(
      function(e) {
        e.preventDefault();
        var id = $('#removeUser').attr('data-user-id');

        $.ajax({
          url : 'remove_user',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeUser input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            if(data) {
              window.location.reload();
            }
          },
          error : function(jqXHR, textStatus, errorThrown) {
            // Log the status
            console.error(textStatus);
            // Log the error response object
            console.error(jqXHR);
            // Log error thrown
            console.error(errorThrown);
          }
        });
      }
    );

    $('#tblUsers tbody').on('click', '.btn-delete',
      function(e) {
        e.preventDefault();
        var id = $(this).attr('data-user-id');

        $.ajax({
          url : 'get_user',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeUser input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            $('#removeUser').modal('show');
            $('#removeUser').attr('data-user-id', id);
            $('#userToRemove').html('Are you sure you want to remove ' + data.first_name + " " + data.last_name + "?");
          },
          error : function(jqXHR, textStatus, errorThrown) {
            // Log the status
            console.error(textStatus);
            // Log the error response object
            console.error(jqXHR);
            // Log error thrown
            console.error(errorThrown);
          }
        });
      }
    );

    $('#tblUsers tbody').on('click', '.btn-edit',
      function(e) {
        e.preventDefault();
        var id = $(this).attr('data-user-id');

        $.ajax({
          url : 'get_user',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#editUsers input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            // Populate the users table
            $('#editUsers').modal('show');
            $('#editUsers').attr('data-user-id', id);
            $('#editUsers #txtFirstName').val(data.first_name);
            $('#editUsers #txtLastName').val(data.last_name);
            $('#editUsers #txtUsername').val(data.username);
            $('#editUsers #txtEmail').val(data.email);
            $('#editUsers #txtFirstName').val(data.first_name);
            $('#editUsers #selRole').prepend('<option value="' + data.role + '">' + data.role + '</option>');
            $('#editUsers #selRole')[0].selectedIndex = 0;
          },
          error : function(jqXHR, textStatus, errorThrown) {
            // Log the status
            console.error(textStatus);
            // Log the error response object
            console.error(jqXHR);
            // Log error thrown
            console.error(errorThrown);
          }
        });
      }
    );
  }
);

/**
* Populates the users table in the dashboard.
*
* @param data array containing the user information
*/
function populateUsersTable(data) {
  // Iterate through the list of users
  for(var i = 0; i < data.length; i++) {
    $('#tblUsers tbody').append(createRow(data[i]));
  }
}

/**
* Creates the HTML table row containing the information of the user.
*
* @param data user information
*/
function createRow(data) {
  var htmlString = '' +
    '<tr>' +
      '<td>' +
        '<a href="#">' + data.username + '</a>' +
      '</td>' +
      '<td>' +
        '<span>' + data.first_name + ' ' + data.last_name + '</span>' +
      '</td>' +
      '<td>' +
        '<a href="#">' + data.email + '</a>' +
      '</td>' +
      '<td>' +
        '<a href="#">' + data.role + '</a>' +
      '</td>' +
      '<td>' +
        '<div class="btn-group" role="grid">' +
            '<a class="btn btn-warning btn-edit"' +
              'data-user-id="' + data.id + '">' +
              '<i class="fa fa-edit"></i>' +
              '<span class="hidden-sm hidden-xs"> Edit</span>' +
            '</a>' +
            '<a class="btn btn-danger btn-delete"' +
              'data-user-id="' + data.id + '"' +
              'data-user-username="' + data.username + '">' +
              '<i class="fa fa-trash"></i>' +
              '<span class="hidden-sm hidden-xs"> Remove</span>' +
            '</a>' +
          '</div>' +
      '</td>' +
    '</tr>';

    return $.parseHTML(htmlString);
}
