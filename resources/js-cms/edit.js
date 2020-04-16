$(document).ready(
  function() {
    tinymce.init({
      selector : 'textarea',
      menubar : false,
      statusbar : false
    });

    $('.img-check').click(
      function(){
        $(this).toggleClass('check');
    	}
    );

    $('#btnSave').click(
      function(e) {
        e.preventDefault();
        tinyMCE.triggerSave();

        var values = {
          txtHome1 : $('#txtHome1').val(),
          txtHome2 : $('#txtHome2').val(),
          txtHome3 : $('#txtHome3').val(),
          txtHome4 : $('#txtHome4').val(),
          txtHomeMission : $('#txtHomeMission').val(),
          txtHomeVision : $('#txtHomeVision').val(),
          txtProfileHeader : $('#txtProfileHeader').val(),
          txtProfileWriteUp : $('#txtProfileWriteUp').val(),
          txtContactInfo1 : $('#txtContactInfo1').val(),
          txtContactInfo2 : $('#txtContactInfo1').val(),
          txtContactInfo3 : $('#txtContactInfo1').val()
        };

        $.ajax({
          url : $('#formEdit').attr('action'),
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name : $('form input[name="csrf_token_name"]').val(),
            data : values,
            title : $('#txtTitle').val()
          },
          success : function(data, textStatus, jqXHR) {
            if(data) {
              $.notify({
                icon: 'fa fa-check',
              	title: 'Success!',
              	message: 'Updated!',
              }, {
                element: 'body',
                	position: null,
                	type: "success",
                	allow_dismiss: true,
                	newest_on_top: false,
                	showProgressbar: false,
                	placement: {
                		from: "top",
                		align: "center"
                	},
                	offset: 10,
                	spacing: 10,
                	z_index: 1031,
                	delay: 3000,
                	timer: 1000,
                	url_target: '_blank',
                	mouse_over: null,
                	animate: {
                		enter: 'animated fadeInDown',
                		exit: 'animated fadeOutUp'
                	},
                	onShow: null,
                	onShown: null,
                	onClose: null,
                	onClosed: null,
                	icon_type: 'class',
                	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                		'<span data-notify="icon"></span> ' +
                		'<span data-notify="title">{1}</span> ' +
                		'<span data-notify="message">{2}</span>' +
                		'<div class="progress" data-notify="progressbar">' +
                			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                		'</div>' +
                		'<a href="{3}" target="{4}" data-notify="url"></a>' +
                	'</div>'
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

    $('#btnSaveBT').click(
      function(e) {
        e.preventDefault();
        tinyMCE.triggerSave();

        $.ajax({
          url : $('#formEditBT').attr('action'),
          type : 'post',
          contentType: false,
          processData: false,
          data : new FormData($("form#formEditBT")[0]),
          success : function(data, textStatus, jqXHR) {
            if(data) {
              $.notify({
                icon: 'fa fa-check',
                title: 'Success!',
                message: 'Updated!',
              }, {
                element: 'body',
                  position: null,
                  type: "success",
                  allow_dismiss: true,
                  newest_on_top: false,
                  showProgressbar: false,
                  placement: {
                    from: "top",
                    align: "center"
                  },
                  offset: 10,
                  spacing: 10,
                  z_index: 1031,
                  delay: 3000,
                  timer: 1000,
                  url_target: '_blank',
                  mouse_over: null,
                  animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                  },
                  onShow: null,
                  onShown: null,
                  onClose: null,
                  onClosed: null,
                  icon_type: 'class',
                  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                  '</div>'
              });
            }
          },
          error : function(jqXHR, textStatus, errorThrown) {
             console.log(jqXHR.responseText);
          }
        });

      }
    );



  }
);
