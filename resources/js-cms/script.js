$(document).ready(
  function () {

    // Navbar scrolling
    $(window).scroll(
      function () {
        var scroll = $(window).scrollTop();
        if ($('#navigation') != null) {
          var mobileMaxWidth = 768;

          if ($(window).width() > mobileMaxWidth && scroll >= 140) {
            $('#navigation').addClass('collapse-header');
            $('#navigation').removeClass('expand-header');
          } else {
            $('#navigation').addClass('expand-header');
            $('#navigation').removeClass('collapse-header');
          }

          // if ($(window).width() > mobileMaxWidth) {
          //   $('#navigation').removeClass('navbar-default');
          // } else {
          //   $('#navigation').addClass('navbar-default');
          // }

        }
      }
    );

    // Initialize wow effects
    wow = new WOW({
      animateClass: 'animated',
      mobile: false,
      offset: 50
    });
    wow.init();

    if ($('#homeCarousel').length) {
      initHomePageCarousel();
    }

    if ($('#serviceSection').length) {
      initClientServices();
    }

    if ($('#facilitiesSection').length) {
      initFacilitiesCard();
    }

    $('#facilitiesTab li a').click(function () {
      var target = $(this).attr('href');

      $('.tab-pane').removeClass('show');
      $(target).addClass('show');

      // $(window).scroll();
      // $("html, " + target).animate({scroll: 1});
    });

    $('#btnSend').click(
      function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var contact = $('#contact').val();
        var company = $('#company').val();
        var message = $('#message').val();

        $('.alert').fadeOut( 'slow' );

        if (name.length > 0 && email.length > 0 && message.length > 0 && contact.length > 0 && company.length > 0) {
          var values = {
            name: name,
            email: email,
            contact: contact,
            company: company,
            message: message
          };

          $.ajax({
            url: $('form').attr('action'),
            dataType: 'json',
            type: 'post',
            data: {
              csrf_token_name: $('form input[name="csrf_token_name"]').val(),
              data: values
            },
            success: function (data, textStatus, jqXHR) {
              console.log('HERE: ' + data);
              if (data) {
                $('#tyModal').modal('show');
                $('#name').val('');
                $('#email').val('');
                $('#contact').val('');
                $('#company').val('');
                $('#message').val('');

                $('.alert-info span').html("  Email was successfully sent to MMAC");
                $('.alert-info').fadeIn( 'slow' );
              } else {
                $('.alert-danger span').html("  Error sending email.");
                $('.alert-danger').fadeIn( 'slow' );
              }

            },
            error: function (jqXHR, textStatus, errorThrown) {
              // Log the status
              console.error(textStatus);
              // Log the error response object
              console.error(jqXHR);
              // Log error thrown
              console.error(errorThrown);
              
              $('.alert-danger span').html("  Error sending email.");
              $('.alert-danger').fadeIn( 'slow' );
            }
          });
        } else {
          $('.alert-danger span').html("  Please fill out all the fields.");
          $('.alert-danger').fadeIn( 'slow' );
          return;
        }
      }
    );
  }
);

function initHomePageCarousel() {
  $.ajax({
    url: 'cms/all_banners',
    dataType: 'json',
    type: 'get',
    success: function (data, textStatus, jqXHR) {

      if (data.length) {

        // Initialize property carousel
        var $innerCarousel = $('#homeCarousel .carousel-inner');
        $innerCarousel.empty();
        var hasActive = false;

        for (var i = 0; i < data.length; i++) {
          if (data[i].image_url.length > 0) {
            var property = data[i];
            var $item = $("<div/>");
            $item.addClass('item');

            if (!hasActive) {
              $item.addClass('active');
              hasActive = true;
            }

            $bannerImg = '<img class="d-block w-100" src="' + $('#baseUrl').val() + 'resources/media/images/carousel/' + data[i].image_url + '" alt="Home carousel slide">';

            $item.append($bannerImg);

            $innerCarousel.append($item);
          }

        }
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

function initClientServices() {
  $.ajax({
    url: 'cms/all_services_by_category',
    dataType: 'json',
    type: 'get',
    success: function (data, textStatus, jqXHR) {

      if (data) {
        var htmlString = '';

        for (var i = 0; i < data.categories.length; i++) {
          var category = data.categories[i];
          var services = data.services[category.categoryName];

          htmlString += '' +
            '<div class="row facilityCategory" >' +
            '<div class="col-md-12 wow fadeInUp" data-wow-duration="1s" style="border-bottom: 1px solid #d7d7d7; margin-bottom: 20px;">' +
            '<h2>' + category.categoryName + '</h2>' +
            '</div>' +
            '</div>';

          for (var j = 0; j < services.length; j++) {
            var service = services[j];

            htmlString += '' +
              '<div class="row wow fadeInLeft facilityInfo" style="">' +
              '<div class="col-md-12" style="border: 1px solid #ddd; background-color: #fff; border-radius: 4px; padding: 10px; ">' +
              '<div>' +
              '<a data-toggle="collapse" href="#service-' + service.id + '">' + service.serviceName + '</a>' +
              '</div>' +
              '<div class="collapse" id="service-' + service.id + '" style="margin-top: 20px; padding-left: 20px;">' +
              '<div class="mt-3">' +
              '<strong>Duration:</strong> ' + service.duration + ' <br>' +
              '<strong>Schedule:</strong> ' + service.schedule + ' <br>' +
              '<strong>Instructor:</strong> ' + service.instructor + ' <br>' +
              '<strong>Location:</strong> ' + service.location + ' <br>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>';

          }

        }

        $('#serviceSection').html(htmlString);

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

function initFacilitiesCard() {
  $.ajax({
    url: 'cms/all_facilities',
    dataType: 'json',
    type: 'get',
    success: function (data, textStatus, jqXHR) {

      if (data) {

        if (data.seniorHighFacilities.length > 0) {
          populateFacilities(data.seniorHighFacilities, "#seniorHighFacilities")
        }

        if (data.TESDAFacilities.length > 0) {
          populateFacilities(data.TESDAFacilities, "#TESDAFacilities")
        }

        if (data.maritimeFacilities.length > 0) {
          populateFacilities(data.maritimeFacilities, "#maritimeFacilities")
        }

        $("a.facilities-image").fancybox({
          'transitionIn': 'elastic',
          'transitionOut': 'elastic',
          'speedIn': 600,
          'speedOut': 200
        });

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


function populateFacilities(data, container) {
  var numCells = 3;
  var numRows = Math.ceil(data.length / numCells);

  $(container).empty();
  // Iterate through the list of facilities
  for (var i = 1; i <= numRows; i++) {
    $(container).append(createFacilitiesRow(data, numCells * i, numCells));
  }
}

function createFacilitiesRow(data, numCells, numCellsPerRow) {
  var htmlString = '' +
    '<div class="row facilities-row">';

  for (var i = (numCells - numCellsPerRow); i < data.length && i < numCells; i++) {
    var facility = data[i];
    htmlString += '' +
      '<div class="col-md-4 wow fadeInUp facility-card" >' +
      '<a class="facilities-image" href="' + $('#baseUrl').val() + 'resources/media/images/facilities/' + facility.image_url + '">' +
      '<img src="' + $('#baseUrl').val() + 'resources/media/images/facilities/' + facility.image_url + '">' +
      '</a>' +
      '<div class="facility-description">' +
      '<span class="offerHeading facility-description-heading">' + facility.facilityName + '</span>' +
      '<br style="display: none;">' +
      '<p class="visionmissionText" style="display: none;">' + facility.description + '</p>' +
      '</div>' +
      '</div>';
  }

  htmlString += '</div>';

  // return $.parseHTML(htmlString);
  return htmlString;
}