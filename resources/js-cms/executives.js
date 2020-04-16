$(document).ready(
  function() {
    $.ajax({
      url : '../all_executives',
      dataType : 'json',
      type : 'get',
      data : {
        csrf_token_name : $.cookie('csrf_cookie_name')
      },
      success : function(data, textStatus, jqXHR) {
        // Populate the executives table
        populateTable(data);
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
        tinyMCE.triggerSave();
        console.log(new FormData($("form#addExecutiveForm")[0]));
        $.ajax({
          url : '../add_executive',
          type : 'post',
          contentType: false,
          processData: false,
          data : new FormData($("form#addExecutiveForm")[0]),
          success : function(data, textStatus, jqXHR) {
            if(data) {
              var obj = jQuery.parseJSON(data);
              var executiveData = {
                id : obj.id,
                name : obj.name,
                description : obj.description,
                position : obj.position,
                image_url : obj.image_url
              }
              $('#tblExecutives tbody').append(createRow(executiveData));
              $('#addExecutives').modal('hide');
            }
          },
          error : function(jqXHR, textStatus, errorThrown) {
            $('#tblExecutives tbody').append(createRow(executiveData));
            $('#addExecutives').modal('hide');
            console.log(jqXHR.responseText);
          }
        });
      }
    );

    $('#btnEdit').click(
      function(e) {
        e.preventDefault();
        tinyMCE.triggerSave();
        $.ajax({
          url : '../edit_executive',
          type : 'post',
          contentType: false,
          processData: false,
          data : new FormData($("form#editExecutiveForm")[0]),
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
        var id = $('#removeExecutive').attr('data-executive-id');

        $.ajax({
          url : '../remove_executive',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeExecutive input[name="csrf_token_name"]').val(),
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

    $('#tblExecutives tbody').on('click', '.btn-delete',
      function(e) {
        e.preventDefault();
        var id = $(this).attr('data-executive-id');

        $.ajax({
          url : '../get_executive',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeExecutive input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            $('#removeExecutive').modal('show');
            $('#removeExecutive').attr('data-executive-id', id);
            $('#executiveToRemove').html('Are you sure you want to remove ' + data.name + "?");
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

    $('#tblExecutives tbody').on('click', '.btn-edit',
      function(e) {
        e.preventDefault();
        var id = $(this).attr('data-executive-id');

        $.ajax({
          url : '../get_executive',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#editExecutives input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            // Populate the users table
            $('#editExecutives').modal('show');
            $('#editExecutives').attr('data-executive-id', id);
            $('#editExecutives #txtID').val(id);
            $('#editExecutives #editName').val(data.name);
            $('#editExecutives #editPosition').val(data.position);
            tinymce.get('editDescription').setContent(data.description);
            $('#editExecutives #editImageLocation').val(data.image_url);
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
    $('#tblExecutives tbody').append(createRow(data[i]));
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
      '<td width="20%"><strong>' + data.name + '</strong></td>' +
      '<td width="15%">' + data.position + '</td>' +
      '<td width="28%">' + data.description + '</td>' +
      '<td><img src="http://localhost/beezbees_works/resources/media/images/' + data.image_url + '" height="50" width="auto" /></td>' +
      '<td>' +
        '<div class="btn-group" role="grid">' +
          '<a class="btn btn-warning btn-edit"' +
            'data-executive-id="' + data.id + '">' +
            '<i class="fa fa-edit"></i>' +
            '<span class="hidden-sm hidden-xs"> Edit</span>' +
          '</a>' +
          '<a class="btn btn-danger btn-delete"' +
            'data-executive-id="' + data.id + '"' +
            'data-executive-name="' + data.name + '">' +
            '<i class="fa fa-trash"></i>' +
            '<span class="hidden-sm hidden-xs"> Remove</span>' +
          '</a>' +
        '</div>' +
      '</td>' +
    '</tr>';

    return $.parseHTML(htmlString);
}
