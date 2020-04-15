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

        // // Check if the username and password fields are filled up
        // if(username.length > 0 && password.length > 0) 
        // {
        //   // Invoke AJAX request for attempting to login
        //   $.ajax({
        //     data : {
        //       username : username,
        //       password : password,
        //       csrf_token_name : obj.csrf_token_name
        //     },
        //     dataType : 'json',
        //     type: 'post',
        //     url : 'users/attempt_login',
        //     success : function(data) 
        //     {
        //       console.log(data);
        //       if(data.success) 
        //       {
        //         if(data.user_role == 'Administrator')
        //           window.location.replace('sales');
        //         else if (data.user_role == 'Purchasing')
        //           window.location.replace('purchases');
        //         else if (data.user_role == 'Accounting')
        //           window.location.replace('expenses');
        //         else if (data.user_role == 'Sales')
        //           window.location.replace('sales');
        //         else
        //           window.location.replace('dashboard');
        //       } 
        //       else 
        //       {
        //         $('.alert').show();
        //         $('.alert').text(data.error_message);
        //         $('.alert').addClass('alert-danger');
        //       }
        //     },
        //     error : function(jqXHR, textStatus, errorThrown) 
        //     {
        //       // Log the status
        //       console.error(textStatus);
        //       // Log the error response object
        //       console.error(jqXHR);
        //       // Log error thrown
        //       console.error(errorThrown);
        //     }
        //   });
        // } 
        // else 
        // {
        //   $('.alert').show();
        //   $('.alert').text('Username and password should not be empty!');
        //   $('.alert').addClass('alert-danger');
        // }
      }
    );
    // // Get the CSRF token from the cookie jar
    // var obj = { csrf_token_name : $.cookie('csrf_cookie_name') };
    // // Once the page is ready, retrieve required information from the server
    // $.ajax({
    //   data : obj,
    //   dataType : 'json',
    //   type : 'post',
    //   url : 'products/get_all',
    //   success : function(data) 
    //   {
    //     var data_array = { products: [] };
    //     for(var i = 0; i < data.length; i++) 
    //     {
    //         data_array.products.push({ 
    //             "id" : data[i].product_id,
    //             "item_name"  : data[i].item_name,
    //             "code"  : data[i].code,
    //             "cost"  : data[i].cost,
    //             "price"  : data[i].price,
    //             "category"  : data[i].category,
    //         });
    //     }
    //     $("#tblProducts").bootstrapTable({
    //       data:data_array.products,
    //     });

    //     $('.alert').hide();
    //   },
    //   error : function(jqXHR, textStatus, errorThrown) {
    //     // Log the status
    //     console.error(textStatus);
    //     // Log the error response object
    //     console.error(jqXHR);
    //     // Log error thrown
    //     console.error(errorThrown);
    //   }
    // });

    // //load the Unit of measure for the option tab
    // $.ajax({
    //   data : obj,
    //   dataType : 'json',
    //   type : 'post',
    //   url : 'products/get_uom',
    //   success : function(data) 
    //   {
    //       var dropdown = $('#selUnit');
    //       dropdown.empty();
    //       for(i = 0; i < data.length; i++) 
    //       {
    //         dropdown.append('<option value="'+ data[i].id +'">' 
    //           + data[i].description +'</option>');
    //       }
    //       dropdown.selectpicker('refresh');
    //   },
    //   error : function(jqXHR, textStatus, errorThrown) {
    //     // Log the status
    //     console.error(textStatus);
    //     // Log the error response object
    //     console.error(jqXHR);
    //     // Log error thrown
    //     console.error(errorThrown);
    //   }
    // });

    // // Attach an event for user editing
    // $('#btnEditProduct').click(
    //   function(e) {

    //       if( !validateRequiredFields( "#editProduct .form-control.required-field" ) )
    //       {
    //         $("#editProduct #formError #formErrorMessage").text( "This field is required." );
    //         $("#editProduct #formError").show();
    //         return false;
    //       }

    //       var obj = {
    //         product_id : $('#editProduct').attr('data-product-id'),
    //         item_name : $('#editProduct #txtItemNameEdit').val(),
    //         item_category : $('#editProduct #txtItemCategoryEdit').val(),
    //         unit : $('#editProduct #selUnitEdit').val(),
    //         cost : $('#editProduct #txtCostEdit').val(),
    //         price : $('#editProduct #txtPriceEdit').val(),
    //         item_number : $('#editProduct #txtItemNumberEdit').val(),
    //         brand : $('#editProduct #txtBrandEdit').val(),
    //         price : $('#editProduct #txtPriceEdit').val(),
    //         min_value : $('#editProduct #txtMinValueEdit').val(),
    //         remarks : $('#editProduct #txtRemarksEdit').val(),

    //         csrf_token_name : $.cookie('csrf_cookie_name')

    //       };
    //       // Invoke the AJAX request for updating user information
    //       $.ajax({
    //         data : obj,
    //         dataType : 'json',
    //         type : 'post',
    //         url : 'products/update',
    //         success : function(data) 
    //         {
    //           // Hide user edit modal
    //           $('#editProduct').modal('hide');
    //           $('#myModal-update').modal('show');
    //           swal("The Item information Has Been Updated", "", "success");
    //           setTimeout(function(){location.reload();},1500);
    //         },
    //         error : function(jqXHR, textStatus, errorThrown) {
    //           // Log the status
    //           console.error(textStatus);
    //           // Log the error response object
    //           console.error(jqXHR);
    //           // Log error thrown
    //           console.error(errorThrown);
    //         }
    //       });
    //   }
    // );

    // // TODO: Check
    // $('#tblProducts tbody').on('click', '.btn-delete',
    //   function(e) {
    //     e.preventDefault();
    //     var id = $(this).attr('data-product-id');
    //     $('#removeProduct').data('id', id).modal('show');
    // });

    // $('#btnRemoveProduct').click(function()
    // {
    //     id = $('#removeProduct').data('id').split("-");
    //     var obj = {
    //       product_id : id[0],
    //       item_name : id[1],
    //       csrf_token_name : $.cookie('csrf_cookie_name')
    //     };

    //     $.ajax({
    //       data : obj,
    //       dataType : 'json',
    //       type: 'post',
    //       url : 'products/remove',
    //       success : function(data) {
    //         var userIdToDelete = $('#removeProduct').data('id');
    //         $('#removeProduct').modal('hide');
    //         $('#myModal-delete').modal('show');
    //         // Check server data after update
    //         swal("The Item information Has Been Deleted", "", "success");
    //         setTimeout(function(){location.reload();},1500);
    //       },
    //       error : function(jqXHR, textStatus, errorThrown) {
    //         console.error(jqXHR);
    //         console.error(textStatus);
    //         console.error(errorThrown);
    //       }
    //     });
    // });


    // $('#addProduct').on('hidden.bs.modal', function () {
    //   $("#addProduct #formError").hide();
    //   $("#addProduct .form-group.has-error").removeClass( "has-error" );
    // });

    // $('#editProduct').on('hidden.bs.modal', function () {
    //   $("#editProduct #formError").hide();
    //   $("#editProduct .form-group.has-error").removeClass( "has-error" );
    // });

    // $('#filter').keyup(function () {

    //     var rex = new RegExp($(this).val(), 'i');
    //     $('.searchable tr').hide();
    //     $('.searchable tr').filter(function () {
    //         return rex.test($(this).text());
    //     }).show();

    // });
});
