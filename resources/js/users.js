$(document).ready(
  function() 
  {
    $(".login-tab").click(
      function(e)
      {
        $("body").removeClass("cart_open");
        $('#modal-login').modal('show');
      });

    $("#signup-tab").click(
      function(e)
      {
        e.preventDefault();
        $('#modal-login').modal('hide');
        $('#modal-signup').modal('show');
      });

    $(".qty_counter").on("click", function () 
      {
          var $button = $(this);
          var oldValue = $("#qty_value").val();
          var button_cart = $("#specific_button_price").text();
          var price = $("#specific_moadl_selling_price").text();
          price = $.trim(price);
          price = parseFloat(price);

          // button_cart = button_cart.replace("Add"," ");
          // button_cart = $.trim(button_cart);
          button_cart = parseFloat(button_cart);
          button_cart = button_cart.toFixed(2);

          if ($.trim($button.text()) == "Plus") 
          {
              var newVal = parseFloat(oldValue) + 1;
              var total = newVal * price;
              total = parseFloat(total);

              $("#specific_button_price").text(total.toFixed(2)); 
          } 
          else 
          {
              if (oldValue > 0) 
              {
                  var newVal = parseFloat(oldValue) - 1;
                  var total = newVal * price;
                  total = parseFloat(total);
                  $("#specific_button_price").text(total.toFixed(2)); 
              } 
              else
              {
                  newVal = 0;
              }
          }
          $("#qty_value").val(newVal);
        });

        $('#check_ff').click(function()
          {
            if($(this).prop("checked") == true)
            {
                $(".ship_to").removeClass("d-none");
            }
            else
            {
                $(".ship_to").addClass("d-none");
            }
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
            country_code : $('#registrationForm #country_code option:selected').val(),
            company_name : $('#registrationForm #company_name').val(),
            address : $('#registrationForm #address').val(),
            csrf_token_name : $.cookie('csrf_cookie_name')
          };
          //Invoke the AJAX request for updating user information
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
                  setTimeout(function(){location.reload();});
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

    $('#btnChangePassword').click(
      function(e) 
      {
        // Prevent default action of button
        e.preventDefault();

        var id = $("#passwordForm").attr('data-user-id');
        var password = $('#passwordForm #txtPassword').val();
        var passconf = $('#passwordForm #txtPasswordConfirmation').val();

        $.ajax({
            data : 
            {
              password: password,
              passconf: passconf,
              csrf_token_name : $.cookie('csrf_cookie_name'),
            },
            dataType : 'json',
            type: 'post',
            url : 'users/change_password/' + id,
            success : function(data) 
            {
              if(data.is_error == 1)
              {
                  $("#passwordForm #error_mesage").html();
                  $("#passwordForm #error_mesage").html(data.errors);
              }
              else if(data.success == 1)
              {
                  $("#passwordForm #error_mesage").html()
                  swal({
                    title: "Good job!",
                    text: "Password Update Successful",
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

    $('.viewItemModal').click(
      function(e) 
      {
        e.preventDefault();

        var id = $(this).attr('data-product-id');
        var base_url = $("#base_url").val();
        $.ajax({
          url : 'products/get_product/' + id,
          dataType : 'json',
          type : 'post',
          data : { id : id },
          success : function(data, textStatus, jqXHR) 
          {
            //Populate the users table
            $("#modal-item-info").modal('show');
            $('#modal-item-info').attr('data-customer-id', id);
            $('#specific_image').empty();
            $('#specific_image').append('<img style = "width:100%" src="'+  base_url+data.image_path + '" alt="" />');
            $("#specific_item_code").html(data.item_code);
            $('#specific_moadl_selling_price').html(data.selling_price);
            $('#specific_button_price').html(data.selling_price);
            $("#specific_description").html(data.description + " ." +data.dimension);
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
