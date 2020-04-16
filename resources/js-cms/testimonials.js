$(document).ready(
  function() {
    $.ajax({
      url : '../all_testimonials',
      dataType : 'json',
      type : 'get',
      data : {
        csrf_token_name : $.cookie('csrf_cookie_name')
      },
      success : function(data, textStatus, jqXHR) {
        // Populate the products table
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
        var testimonial = {
          author : $('#addTestimonials #txtAuthor').val(),
          testimonial_message : tinyMCE.get('addTestimonialMessage').getContent()
        };

        $.ajax({
          url : '../add_testimonial',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#addTestimonials input[name="csrf_token_name"]').val(),
            testimonial : testimonial
          },
          success : function(data, textStatus, jqXHR) {
            // Check server data after insert
            if(data) {
              var testimonialData = {
                id : data,
                author : testimonial.author,
                testimonial_message : testimonial.testimonial_message
              }
              $('#tblTestimonials tbody').append(createRow(testimonialData));
              $('#addTestimonials').modal('hide');
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
        var testimonial = {
          author: $('#editTestimonials #txtAuthor').val(),
          testimonial_message : tinyMCE.get('editTestimonialMessage').getContent()
        };
        var id = $('#editTestimonials').attr('data-testimonial-id');

        $.ajax({
          url : '../edit_testimonial',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#editTestimonials input[name="csrf_token_name"]').val(),
            testimonial : testimonial,
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
        var id = $('#removeTestimonial').attr('data-testimonial-id');

        $.ajax({
          url : '../remove_testimonial',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeTestimonial input[name="csrf_token_name"]').val(),
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

    $('#tblTestimonials tbody').on('click', '.btn-delete',
      function(e) {
        e.preventDefault();
        var id = $(this).attr('data-testimonial-id');

        $.ajax({
          url : '../get_testimonial',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeTestimonial input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            $('#removeTestimonial').modal('show');
            $('#removeTestimonial').attr('data-testimonial-id', id);
            $('#testimonialToRemove').html('Are you sure you want to remove testimony of ' + data.author + "?");
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

    $('#tblTestimonials tbody').on('click', '.btn-edit',
      function(e) {
        e.preventDefault();
        var id = $(this).attr('data-testimonial-id');

        $.ajax({
          url : '../get_testimonial',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#editTestimonials input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            // Populate the users table
            $('#editTestimonials').modal('show');
            $('#editTestimonials').attr('data-testimonial-id', id);
            $('#editTestimonials #txtAuthor').val(data.author);
            tinymce.get('editTestimonialMessage').setContent(data.testimonial_message);
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
* Populates the testimonials table.
*
* @param data array containing the testimonial information
*/
function populateTable(data) {
  // Iterate through the list of testimonials
  for(var i = 0; i < data.length; i++) {
    $('#tblTestimonials tbody').append(createRow(data[i]));
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
      '<td><strong>' + data.author + '</strong></td>' +
      '<td style="width: 65%">' + data.testimonial_message + '</td>' +
      '<td>' +
        '<div class="btn-group" role="grid">' +
            '<a class="btn btn-warning btn-edit"' +
              'data-testimonial-id="' + data.id + '">' +
              '<i class="fa fa-edit"></i>' +
              '<span class="hidden-sm hidden-xs"> Edit</span>' +
            '</a>' +
            '<a class="btn btn-danger btn-delete"' +
              'data-testimonial-id="' + data.id + '"' +
              'data-testimonial-author="' + data.author + '">' +
              '<i class="fa fa-trash"></i>' +
              '<span class="hidden-sm hidden-xs"> Remove</span>' +
            '</a>' +
          '</div>' +
      '</td>' +
    '</tr>';

    return $.parseHTML(htmlString);
}
