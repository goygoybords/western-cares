$(document).ready(
  function () {
    $.ajax({
      url: 'all_banners',
      dataType: 'json',
      type: 'get',
      success: function (data, textStatus, jqXHR) {
        // Populate the executives table
        // populateTable(data);
        console.log(data);
        populateImageGrid(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // Log the status
        console.error(textStatus);
        // Log the error response object
        console.error(jqXHR);
        // Log error thrown
        console.error(errorThrown);
      }
    });

    $('#btnCreate').click(
      function (e) {
        e.preventDefault();
        // tinyMCE.triggerSave();
        console.log(new FormData($("form#addBannerForm")[0]));
        $.ajax({
          url: 'add_banner',
          type: 'post',
          contentType: false,
          processData: false,
          data: new FormData($("form#addBannerForm")[0]),
          success: function (data, textStatus, jqXHR) {
            if (data) {
              console.log(data);
              if (data) {
                window.location.reload();
              }
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
            $('#tblExecutives tbody').append(createRow(executiveData));
            $('#addExecutives').modal('hide');
            console.log(jqXHR.responseText);
          }
        });
      }
    );

    $('#btnEdit').click(
      function (e) {
        e.preventDefault();
        // tinyMCE.triggerSave();
        $.ajax({
          url: 'edit_banner',
          type: 'post',
          contentType: false,
          processData: false,
          data: new FormData($("form#editBannerForm")[0]),
          success: function (data, textStatus, jqXHR) {
            // Check server data after update
            if (data) {
              window.location.reload();
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
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
      function (e) {
        e.preventDefault();
        var id = $('#removeBanner').attr('data-banner-id');

        $.ajax({
          url: 'remove_banner',
          dataType: 'json',
          type: 'post',
          data: {
            csrf_token_name: $('#removeBanner input[name="csrf_token_name"]').val(),
            id: id
          },
          success: function (data, textStatus, jqXHR) {
            if (data) {
              window.location.reload();
            }
          },
          error: function (jqXHR, textStatus, errorThrown) {
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

    $('#bannerThumbnailContainer').on('click', '.btn-edit-banner',
      function (e) {
        e.preventDefault();
        var id = $(this).attr('data-banner-id');

        $.ajax({
          url: 'get_banner',
          dataType: 'json',
          type: 'post',
          data: {
            id: id
          },
          success: function (data, textStatus, jqXHR) {
            // Populate the users table
            $('#editBanner').modal('show');
            $('#editBannerID').val(id);
            $('#editBannerImg').attr('src', $('#baseUrl').val() + 'resources/media/images/carousel/' + data.image_url);
            $('#editBannerDescription').val(data.description);
          },
          error: function (jqXHR, textStatus, errorThrown) {
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

    $('#bannerThumbnailContainer').on('click', '.btn-delete-banner',
      function (e) {
        e.preventDefault();
        var id = $(this).attr('data-banner-id');

        $('#removeBanner').attr('data-banner-id', id);
        $('#removeBanner').modal('show');
      }
    );

  }
);


function populateImageGrid(data) {
  var numRows = Math.ceil(data.length / 4);
  var numCells = 4;
  // Iterate through the list of banners
  for (var i = 1; i <= numRows; i++) {
    $('#bannerThumbnailContainer').append(createBannerRow(data, numCells * i));
  }
}

function createBannerRow(data, numCells) {
  var htmlString = '' +
    '<div class="row" style="margin-top: 20px;">';

  for (var i = (numCells - 4); i < data.length && i < numCells; i++) {
    var banner = data[i];
    htmlString += '' +
      '<div class="col-md-3">' +
        '<div class="page-item" style="height: 200px; position: relative;">' +
          '<a href="#" class="bannerDeleteBtn btn-delete-banner" data-banner-id="' + banner.id + '"> <i class="fa fa-times-circle fa-2x pageIcon"></i> </a>' +
          '<div class="page-item-content" style="height: 100%; padding: 0px;">' +
            '<a class="btn-edit-banner" data-banner-id="' + banner.id + '" href="#" data-toggle="modal">' +
              '<img src="' + $('#baseUrl').val() + 'resources/media/images/carousel/' + banner.image_url + '" alt="home page slide" style="height: 100%; width: 100%;">' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  htmlString += '</div>';

  return $.parseHTML(htmlString);
}