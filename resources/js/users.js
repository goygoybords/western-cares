$(document).ready(
  function() 
  {
    $("#login-tab").click(
      function(e)
      {
        $('#modal-login').modal('show');
      });

    $("#signup-tab").click(
      function(e)
      {
        e.preventDefault();
        $('#modal-login').modal('hide');
        $('#modal-signup').modal('show');
      });

    $('#registerButton').click(
      function(e) {
        // Prevent default action of button
        e.preventDefault();
          var obj = {
            firstname : $('#registrationForm #firstname').val(),
            lastname : $('#registrationForm #lastname').val(),
            contactnumber : $('#registrationForm #contactnumber').val(),
            email : $('#registrationForm #email').val(),
            password : $('#registrationForm #password').val(),
            csrf_token_name : $.cookie('csrf_cookie_name')
          };
          // Invoke the AJAX request for updating user information
          $.ajax({
            data : obj,
            dataType : 'json',
            type : 'post',
            url : 'users/register',
            success : function(data) 
            {
              if(data.is_error == 1)
              {
                $("#registrationForm #error_mesage").html();
                $("#registrationForm #error_mesage").html(data.errors);
              }
              else
              {
                $('#modal-signup').modal('hide');
                $("#registrationForm #error_mesage").html();
                swal({
                    title: "Good job!",
                    text: "Thank you for registering you may now login!",
                    icon: "success",
                    button: "Success!",
                  }).then(function(e)
                  { 
                      setTimeout(function(){location.reload();},1500);
                  });
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


    $('#btnLogin').click(
      function(e) {
        // Prevent default action of button
        e.preventDefault();
        // Get username input
        var email = $('#txtEmail').val();
        // Get password input
        var password = $('#txtPassword').val();

        $.ajax({
            data : {
              email : email,
              password : password,
              csrf_token_name : $.cookie('csrf_cookie_name'),
            },
            dataType : 'json',
            type: 'post',
            url : 'users/attempt_login',
            success : function(data) 
            {
              if(data.is_error == 1)
              {
                  $("#loginForm #error_mesage").html();
                  $("#loginForm #error_mesage").html(data.errors);
              }
              else if(data.success == 0)
              {
                  $("#loginForm #error_mesage").html();
                  $("#loginForm #error_mesage").html(data.error_message);
              }
              else if(data.success == 1)
              {
                  setTimeout(function(){location.reload();},1500);
                  // window.location.replace('dashboard');
              }
            },
            error : function(jqXHR, textStatus, errorThrown) 
            {
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

    $('#btnUpdate').click(
      function(e) {
        // Prevent default action of button
        e.preventDefault();
        var id = $("#editUserForm").attr('data-user-id');
        var firstname = $('#editFirstName').val();
        var lastname = $('#editLastName').val();
        var contactnumber = $("#editContactNumber").val();
        var email = $("#editEmail").val();

        $.ajax({
            data : 
            {
              firstname: firstname,
              lastname: lastname,
              contactnumber: contactnumber,
              email : email,
              csrf_token_name : $.cookie('csrf_cookie_name'),
            },
            dataType : 'json',
            type: 'post',
            url : 'users/edit/' + id,
            success : function(data) 
            {
              if(data.is_error == 1)
              {
                  $("#editUserForm #error_mesage").html();
                  $("#editUserForm #error_mesage").html(data.errors);
              }
              else if(data.success == 1)
              {
                  $("#editUserForm #error_mesage").html()
                  swal({
                    title: "Good job!",
                    text: "Record Update Successful",
                    icon: "success",
                    button: "Success!",
                  }).then(function(e)
                  { 
                      setTimeout(function(){location.reload();});
                  });
              }
            },
            error : function(jqXHR, textStatus, errorThrown) 
            {
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
});
