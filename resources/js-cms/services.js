$(document).ready(
  function() {
    $.ajax({
      url : 'all_services',
      dataType : 'json',
      type : 'get',
      data : {
        csrf_token_name : $.cookie('csrf_cookie_name')
      },
      success : function(data, textStatus, jqXHR) {
        // Populate the executives table
        populateTable(data.services);
        populateDropdown(data.categories, '#addServices #selCategory');
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

    $('#btnCreate').click(
      function(e) {
        e.preventDefault();
        
        $.ajax({
          url : 'add_service',
          type : 'post',
          contentType: false,
          processData: false,
          data : new FormData($("form#addServiceForm")[0]),
          success : function(data, textStatus, jqXHR) {
            if(data) {
              var obj = jQuery.parseJSON(data);
              if(data) {
                window.location.reload();
              }
            }
          },
          error : function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
          }
        });
      }
    );

    $('#btnEdit').click(
      function(e) {
        e.preventDefault();
        // tinyMCE.triggerSave();
        $.ajax({
          url : 'edit_service',
          type : 'post',
          contentType: false,
          processData: false,
          data : new FormData($("form#editServiceForm")[0]),
          success : function(data, textStatus, jqXHR) {
            // Check server data after update
            if(data) {
              window.location.reload();
            }
          },
          error : function(jqXHR, textStatus, errorThrown) {
             console.log(jqXHR.responseText);
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
        var id = $('#removeServices').attr('data-service-id');

        $.ajax({
          url : 'remove_service',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeServices input[name="csrf_token_name"]').val(),
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

    $('#tblServices tbody').on('click', '.btn-delete',
      function(e) {
        e.preventDefault();
        var id = $(this).attr('data-service-id');

        $('#removeServices').attr('data-service-id', id);
        $('#removeServices').modal('show');
      }
    );

    $('#tblServices tbody').on('click', '.btn-edit',
      function(e) {
        e.preventDefault();
        var id = $(this).attr('data-service-id');

        $.ajax({
          url : 'get_service',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#editService input[name="csrf_token_name"]').val(),
              id : id
          },
          success : function(data, textStatus, jqXHR) {
            console.log( data );
            
            populateDropdown(data.categories, '#editServices #selCategory');

            var service = data.service;
            // Populate the edit service modal
            $('#editServices').modal('show');
            $('#editServices').attr('data-service-id', id);
            $('#editServices #serviceID').val(id);
            $('#editServices #txtName').val(service.name);
            $('#editServices #txtSmallDescription').val(service.small_description);
            $('#editServices #txtDescription').val(service.description);
            $('#editServices #txtDuration').val(service.duration);
            $('#editServices #txtPrice').val(service.price);
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
function populateTable(data) {
  // Iterate through the list of users
  for(var i = 0; i < data.length; i++) {
    $('#tblServices tbody').append(createRow(data[i]));
  }
}

function populateDropdown(data, selector) {
  // Iterate through the list of users
  for(var i = 0; i < data.length; i++) {
    var option = data[i];
    $(selector).append($("<option />").val(option.id).text(option.name));
  }
}

/**
* Creates the HTML table row containing the information of the user.
*
* @param data user information
*/
function createRow(data) {
  console.log(data);
  var htmlString = '' +
    '<tr>' +
      '<td><strong>' + data.name + '</strong></td>' +
      '<td>' + data.small_description + '</td>' +
      '<td>' + data.description + '</td>' +
      '<td>' + data.duration + '</td>' +
      '<td>' + data.price + '</td>' +
      '<td>' +
        '<div class="btn-group" role="grid">' +
          '<a class="btn btn-warning btn-edit"' +
            'data-service-id="' + data.id + '">' +
            '<i class="fa fa-edit"></i>' +
            '<span class="hidden-sm hidden-xs"> Edit</span>' +
          '</a>' +
          '<a class="btn btn-danger btn-delete"' +
            'data-service-id="' + data.id + '"' +
            'data-service-name="' + data.title + '">' +
            '<i class="fa fa-trash"></i>' +
            '<span class="hidden-sm hidden-xs"> Remove</span>' +
          '</a>' +
        '</div>' +
      '</td>' +
    '</tr>';

    return $.parseHTML(htmlString);
}
