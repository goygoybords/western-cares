const browsOrig = ['10:30 AM', '12:00 NN', '1:30 PM', '3:00 PM', '4:30 PM'];
const lashOrig = ['10:30 AM', '12:00 NN', '1:30 PM', '3:00 PM', '4:30 PM', '6:00 PM'];
var brows = ['10:30 AM', '12:00 NN', '1:30 PM', '3:00 PM', '4:30 PM'];
var lash = ['10:30 AM', '12:00 NN', '1:30 PM', '3:00 PM', '4:30 PM', '6:00 PM'];
var limit = 0;
var lashglowChosen = '';
var browsChosen = '';

function showInitialBrows() {
  $('#browsSlotCMS').empty();
  var code = "";
  for (var i = 0; i < brows.length; i++) {
    code += "<option>"+brows[i]+"</option><br>";
  }
  $('#browsSlotCMS').append(code);
}

function showInitialLash() {
  $('#lashSlotCMS').empty();
  var code = "";
  for (var i = 0; i < lash.length; i++) {
    code += "<option>"+lash[i]+"</option><br>";
  }
  $('#lashSlotCMS').append(code);
}

initTable();
function initTable()
{

  var $table = $('#tblBooking');

  $table.bootstrapTable({
    pagination: true,
    search: true,
    url: 'all_bookings'
  });
}

function addCommas(nStr)
{
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

// Action Formatter for Sales
function actionFormatter(value, row, index)
{
	if(row.status == "POSTED")
	{
		return [
	      '<div class="btn-group" role="grid">\
	        <button class="btn btn-info btn-view" disabled>\
	          <i class="fa fa-info-circle"></i><span class="hidden-sm hidden-xs"> View</span>\
	        </button>\
	        <button class="btn btn-warning btn-edit" disabled>\
	          <i class="fa fa-edit"></i><span class="hidden-sm hidden-xs"> Edit</span>\
	        </button>\
	        <button class="btn btn-danger btn-delete" disabled>\
	          <i class="fa fa-trash"></i><span class="hidden-sm hidden-xs"> Remove</span>\
	        </button>\
	        <button class="btn btn-primary btn-post" disabled>\
	            <i class="fa fa-check-circle"></i><span class="hidden-sm hidden-xs"> Post</span>\
	          </button>\
	      </div>'
	    ].join("");

	}
	else
	{
		return [
      '<div class="btn-group" role="grid">\
        <a class="btn btn-info btn-view">\
          <i class="fa fa-info-circle"></i><span class="hidden-sm hidden-xs"> View</span>\
        </a>\
        <a class="btn btn-warning btn-edit">\
          <i class="fa fa-edit"></i><span class="hidden-sm hidden-xs"> Edit</span>\
        </a>\
        <a class="btn btn-danger btn-delete">\
          <i class="fa fa-trash"></i><span class="hidden-sm hidden-xs"> Remove</span>\
        </a>\
        <a class="btn btn-primary btn-post">\
            <i class="fa fa-check-circle"></i><span class="hidden-sm hidden-xs"> Post</span>\
          </a>\
      </div>'
    ].join("");

	}

}

window.operateEvents =
{
    'click .btn-view': function (e, value, row)
      {
        e.preventDefault();
        var id = row.booking_id;
        $.ajax({
          url : 'get_specific_booking',
          dataType : 'json',
          type : 'post',
          data : { id : id },
          success : function(data, textStatus, jqXHR)
          {
            $('#viewBooking').modal('show');
            $('#viewBookingDate').html(data.date);
            $('#viewClient').html(data.client);
            $('#viewRemarks').html(data.remarks);
            $('#viewTransAmount').html(data.total);

            $.ajax({
                data : { id : id },
                dataType : 'json',
                type: 'post',
                url : 'get_specific_booking_detail',
                success : function(data)
                {
                	$('#tblViewServiceItems tbody').empty();
                	for(var i = 0; i < data.length; i++)
                	{
					    $('#tblViewServiceItems tbody').append('\
		                   <tr>\
		                     <td>' + data[i].name + '</td>\
		                     <td>' + data[i].price + '</td>\
		                     <td>' + data[i].time + '</td>\
		                   </tr>\
		                 ');
					 }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                  console.log(jqXHR);
                  console.log(textStatus);
                  console.log(errorThrown);
                }
              });

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

      },
      'click .btn-delete': function (e, value, row)
      {
        e.preventDefault();
        var id = row.booking_id;

        $.ajax({
          url : 'get_specific_booking',
          dataType : 'json',
          type : 'post',
          data : {
            id : id
          },
          success : function(data, textStatus, jqXHR)
          {
            $('#removeBooking').modal('show');
            $('#removeBooking').attr('data-booking-id', id);
            // $('#customerToRemove').html('Are you sure you want to remove ' + data.first_name + " " + data.last_name + "?");
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
      },
      'click .btn-post': function (e, value, row)
      {
        e.preventDefault();
        var id = row.booking_id;

        $.ajax({
          url : 'get_specific_booking',
          dataType : 'json',
          type : 'post',
          data : {
            id : id
          },
          success : function(data, textStatus, jqXHR)
          {
            $('#postBooking').modal('show');
            $('#postBooking').attr('data-booking-id', id);
            // $('#customerToRemove').html('Are you sure you want to remove ' + data.first_name + " " + data.last_name + "?");
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
      },
      'click .btn-edit': function(e, value, row)
      {
        e.preventDefault();
        showInitialLash();

        var id = row.booking_id;
        $.ajax({
          url : 'get_specific_booking',
          dataType : 'json',
          type : 'post',
          data : { id : id},
          success : function(data, textStatus, jqXHR)
          {
            $('#editBooking').modal('show');
            $('#editBooking').attr('data-booking-id', id);
            $('#editBooking #pickedDate').val(data.date);
            $('#editBooking #txtCustomerEdit').val(data.client);

            $.ajax({
                data : { id : id },
                dataType : 'json',
                type: 'post',
                url : 'get_specific_booking_detail',
                success : function(details)
                { 
                  $('#editBooking #txtServiceAvailed').val(details[0].name);
                  $('#editBooking #txtTimeSlotChosen').val(details[0].time);
                },
                error : function(jqXHR, textStatus, errorThrown) {
                  console.log(jqXHR);
                  console.log(textStatus);
                  console.log(errorThrown);
                }
              });


            var obj = {
        			date: data.date
        		}

            $.ajax({
        			data: obj,
        			dataType: 'json',
        			type: 'post',
        			url: 'get_bookings',
        			success: function(data)
        			{
                $('#tblEditServiceItems tbody').empty();
                for(var i = 0; i < data.length; i++) {
                  $('#tblEditServiceItems tbody').append('\
                     <tr>\
                       <td>' + data[i].first_name + ' ' + data[i].last_name + '</td>\
                       <td>' + data[i].name + '</td>\
                       <td>' + data[i].time + '</td>\
                       <td>' + data[i].price + '</td>\
                     </tr>\
                   ');
                }
                },
              });

            // $('#lashSlotCMS').empty();
            // var code = "";
            // for (var i = 0; i < lash.length; i++) {
            //   code += "<option>"+lash[i]+"</option><br>";
            // }
            // console.log(code);
            // $('#lashSlotCMS').append(code);
            // $('#editCustomer #txtLastName').val(data.last_name);

            // $.ajax({
            //     data : { id : id },
            //     dataType : 'json',
            //     type: 'post',
            //     url : 'get_ailment_items',
            //     success : function(data)
            //     {
            //       for(var i = 0; i < data.length; i++)
            //       {
            //         var row = {
            //           ailment:data[i].ailment,
            //         };
            //         $("#gridsaveEdit").swidget().addRow(row);
            //         $("#gridsaveEdit").swidget().saveChanges();
            //       }
            //     },
            //     error : function(jqXHR, textStatus, errorThrown) {
            //       console.log(jqXHR);
            //       console.log(textStatus);
            //       console.log(errorThrown);
            //     }
            //   });

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

      },
};

$(document).ready(function()
{
	var obj = {};
    $.ajax({
        data : obj,
        dataType : 'json',
        type: 'post',
        url : 'all_customers',
        success : function(clients)
        {
            var dropdown = document.getElementById("selCustomer");
            for(i = 0; i < clients.length; i++)
            {
                var opt = clients[i].first_name + ' ' + clients[i].last_name;
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = clients[i].id;
                dropdown.appendChild(el);
            }

        },
        error : function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        }
    });

    //delete
    $('#btnRemove').click(
      function(e) {
        e.preventDefault();
        var id = $('#removeBooking').attr('data-booking-id');
        $.ajax({
          url : 'remove_booking',
          dataType : 'json',
          type : 'post',
          data : { id : id },
          success : function(data, textStatus, jqXHR)
          {
            if(data)
            {
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
    //end of delete

    //post booking
    $('#btnPost').click(
      function(e) {
        e.preventDefault();
        var id = $('#postBooking').attr('data-booking-id');
        $.ajax({
          url : 'post_booking',
          dataType : 'json',
          type : 'post',
          data : { id : id },
          success : function(data, textStatus, jqXHR)
          {
            if(data)
            {
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
    //end of post booking



	function getDateToday() {
		date = new Date();
		month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
		day = date.getDate();
		if (day < 10) {
			day = "0"+day;
		}
		return date.getFullYear() + '-' + month[date.getMonth()] + '-' + day;
	}



	function clearScheduleFirst() {
		$('.one').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.two').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.three').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.four').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.five').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.six').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.seven').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.eight').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.nine').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.ten').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.eleven').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
		$('.twelve').css({"position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "background": ""});
	}

	function checkAvailableSlots(data, sequenceB, sequenceL) {
		var temp = data.slice(0);
		var browsTemp = [0, 0, 0, 0, 0]
		var lashTemp = [0, 0, 0, 0, 0, 0]

		for (var i = 0; i < temp.length; i++)
		{
			if (temp[i].service_id == 2) {
				if (temp[i].time == "10:30 AM") {
					browsTemp[0] = 1;
				} else if (temp[i].time == "12:00 NN") {
					browsTemp[1] = 1;
				} else if (temp[i].time == "1:30 PM") {
					browsTemp[2] = 1;
				} else if (temp[i].time == "3:00 PM") {
					browsTemp[3] = 1;
				} else if (temp[i].time == "4:30 PM") {
					browsTemp[4] = 1;
				}
			}
			else if (temp[i].service_id == 1 || temp[i].service_id == 3 || temp[i].service_id == 4 || temp[i].service_id == 5)
			{
				if (temp[i].time == "10:30 AM") {
					lashTemp[0] = 1;
				} else if (temp[i].time == "12:00 NN") {
					lashTemp[1] = 1;
				} else if (temp[i].time == "1:30 PM") {
					lashTemp[2] = 1;
				} else if (temp[i].time == "3:00 PM") {
					lashTemp[3] = 1;
				} else if (temp[i].time == "4:30 PM") {
					lashTemp[4] = 1;
				} else if (temp[i].time == "6:00 PM") {
					lashTemp[5] = 1;
				}
			}
		}

		filterBrowsSlot(browsTemp.slice(0), sequenceB);

		if (lashTemp[0] == 1) {
			var tempL = lash.slice(0);
			var tempB = brows.slice(0);
			var index = tempL.indexOf('10:30 AM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
			if (sequenceL[0] > 0) {
				if (lashTemp[1] == 0 && browsTemp[3] == 0) {
					index = tempB.indexOf('12:00 NN');
					if (index > -1) {
						tempB.splice(index, 1);
						brows = tempB.slice(0);
					}
				} else if (lashTemp[1] == 0 && browsTemp[3] > 0) {
					index = tempB.indexOf('12:00 NN');
					if (index > -1) {
						tempB.splice(index, 2);
						brows = tempB.slice(0);
					}
				}

			}
		}

		if (lashTemp[1] == 1) {
			var tempL = lash.slice(0);
			var tempB = brows.slice(0);
			var index = tempL.indexOf('12:00 NN');
			if (index > -1) {

				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
			if (sequenceL[1] > 0 && lashTemp[0] == 0) {
				index = tempB.indexOf('10:30 AM');
				if (index > -1) {
					tempB.splice(index, 1);
					brows = tempB.slice(0);
				}
			}
		}

		if (lashTemp[2] == 1) {
			var tempL = lash.slice(0);
			var tempB = brows.slice(0);
			var index = tempL.indexOf('1:30 PM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
			if (sequenceL[2] > 0 && lashTemp[3] == 0) {
				index = tempB.indexOf('3:00 PM');
				if (index > -1) {
					tempB.splice(index, 1);
					index = tempB.indexOf('12:00 NN')
					if (index > -1) {
						tempB.splice(index, 1);
						brows = tempB.slice(0);
					}
				}
			}
			if (browsTemp[3] > 0) {
				index = tempB.indexOf('1:30 PM');
				if (index > -1) {
					tempB.splice(index+1, 2);
					brows = tempB.slice(0);
				}

			}
		}

		if (lashTemp[3] == 1) {
			var tempL = lash.slice(0);
			var tempB = brows.slice(0);
			var index = tempL.indexOf('3:00 PM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
			if (sequenceL[3] > 0 && lashTemp[2] == 0) {
				index = tempB.indexOf('1:30 PM');
				if (index > -1) {
					tempB.splice(index, 1);
					brows = tempB.slice(0);
				}
			}
		}

		if (lashTemp[4] == 1) {
			var tempL = lash.slice(0);
			var tempB = brows.slice(0);
			var index = tempL.indexOf('4:30 PM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
			if (sequenceL[4] > 0 && lashTemp[3] == 0) {
				index = tempB.indexOf('3:00 PM');
				if (index > -1) {
					tempB.splice(index, 1);
					brows = tempB.slice(0);
				}
			}
		}

		if (lashTemp[5] == 1) {
			var tempL = lash.slice(0);
			var tempB = brows.slice(0);
			var index = tempL.indexOf('6:00 PM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
			if (sequenceL[5] > 0 && lashTemp[4] == 0) {
				index = tempB.indexOf('4:30 PM');
				if (index > -1) {
					tempB.splice(index, 1);
					brows = tempB.slice(0);
				}
			}
		}

		if (lashTemp[0] == 1 && lashTemp[1] == 1 && browsTemp[0] == 0) {
			var tempB = brows.slice(0);
			var index = tempB.indexOf('10:30 AM');
			if (index > -1) {
				tempB.splice(index, 1);
				brows = tempB.slice(0);
			}
		}

		if (lashTemp[1] == 1 && lashTemp[2] == 1 && browsTemp[1] == 0) {
			var tempB = brows.slice(0);
			var index = tempB.indexOf('12:00 NN');
			if (index > -1) {
				tempB.splice(index, 1);
				brows = tempB.slice(0);
			}
		}

		if (lashTemp[2] == 1 && lashTemp[3] == 1 && browsTemp[2] == 0) {
			var tempB = brows.slice(0);
			var index = tempB.indexOf('1:30 PM');
			if (index > -1) {
				tempB.splice(index, 1);
				brows = tempB.slice(0);
			}
		}

		if (lashTemp[3] == 1 && lashTemp[4] == 1 && browsTemp[3] == 0) {
			var tempB = brows.slice(0);
			var index = tempB.indexOf('3:00 PM');
			if (index > -1) {
				tempB.splice(index, 1);
				brows = tempB.slice(0);
			}
		}

		if (lashTemp[4] == 1 && lashTemp[5] == 1 && browsTemp[4] == 0) {
			var tempB = brows.slice(0);
			var index = tempB.indexOf('4:30 PM');
			if (index > -1) {
				tempB.splice(index, 1);
				brows = tempB.slice(0);
			}
		}
	}

	function filterBrowsSlot(browsTemp, sequence) {
		if (browsTemp[0] == 1) {
			var tempB = brows.slice(0);
			var tempL = lash.slice(0);
			var index = tempB.indexOf('10:30 AM');
			if (index > -1) {
				if (sequence[0] == 2 && sequence[2] == 1) {
					tempB.splice(0, 1);
					brows = tempB.slice(0);
				} else if (sequence[0] == 3) {
					tempB.splice(0, 1);
					brows = tempB.slice(0);
				} else {
					tempB.splice(index, 2);
					brows = tempB.slice(0);
				}

			}
			index = tempL.indexOf('12:00 NN');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
		}

		if (browsTemp[2] == 1) {
			var tempB = brows.slice(0);
			var tempL = lash.slice(0);
			var index = tempB.indexOf('1:30 PM');
			if (index > -1) {
				if (sequence[2] == 1) {
					tempB.splice(index-1, 3);
					brows = tempB.slice(0);
				} else {
					tempB.splice(index, 2);
					brows = tempB.slice(0);
				}

			}
			index = tempL.indexOf('3:00 PM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
		}

		if (browsTemp[4] == 1) {
			var tempB = brows.slice(0);
			var tempL = lash.slice(0);
			var index = tempB.indexOf('4:30 PM');
			if (index > -1) {
				if (sequence[4] == 2 && sequence[0] == 1) {
					tempB.splice(index-1, 3);
					brows = tempB.slice(0);
				} else {
					tempB.splice(index-1, 2);
					brows = tempB.slice(0);
				}
			}
			index = tempL.indexOf('6:00 PM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
		}

		if (browsTemp[1] == 1) {
			var tempB = brows.slice(0);
			var tempL = lash.slice(0);
			var index = tempB.indexOf('12:00 NN');
			if (index > -1) {
				tempB.splice(index-1, 3);
				brows = tempB.slice(0);
			}
			index = tempL.indexOf('1:30 PM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
		}

		if (browsTemp[3] == 1) {
			var tempB = brows.slice(0);
			var tempL = lash.slice(0);
			var index = tempB.indexOf('3:00 PM');
			if (index > -1) {
				tempB.splice(index, 2);
				brows = tempB.slice(0);
			}
			index = tempL.indexOf('4:30 PM');
			if (index > -1) {
				tempL.splice(index, 1);
				lash = tempL.slice(0);
			}
		}

		if (browsTemp[1] == 1 && browsTemp[4] == 1) {
			var tempB = brows.slice(0);
			tempB.splice(0, 2);
			brows = tempB.slice(0);
		}

		if (browsTemp[0] == 1 && browsTemp[3] == 1) {
			var tempB = brows.slice(0);
			tempB.splice(0, 2);
			brows = tempB.slice(0);
		}

		if (browsTemp[1] == 1 && browsTemp[3] == 1) {
			var tempB = brows.slice(0);
		}
	}

	function updateSlots() {


		$('#lashlift').val(0);
		$('#glowupfoundation').val(0);
		$('#yumilashlift').val(0);
		$('#lashliner').val(0);
		$('#browmicroblading').val(0);
		$('#lashSlot').empty();
		$('#browsSlot').empty();

		var code = "";
		for (var i = 0; i < brows.length; i++) {
			code += "<option>"+brows[i]+"</option><br>";
		}
		$('#browsSlot').append(code);
		code = "";
		for (var i = 0; i < lash.length; i++) {
			code += "<option>"+lash[i]+"</option><br>";
		}
		$('#lashSlot').append(code);
	}

	// INITIALIZE OF TIME SLOTS
	showInitialBrows();
	showInitialLash();

	$('#pickedDate').change(function() {
		var datePicked = $('#pickedDate').val();

		if (moment(datePicked).format('dddd') == "Sunday") {
			brows = ['10:30 AM', '12:00 NN', '1:30 PM', '3:00 PM'];
			lash = ['10:30 AM', '12:00 NN', '1:30 PM', '3:00 PM'];
		}

		var obj = {
			date: datePicked
		}

		$.ajax({
			data: obj,
			dataType: 'json',
			type: 'post',
			url: 'get_bookings',
			success: function(data)
			{
        $('#tblServiceItems tbody').empty();
        for(var i = 0; i < data.length; i++) {
          $('#tblServiceItems tbody').append('\
             <tr>\
               <td>' + data[i].first_name + ' ' + data[i].last_name + '</td>\
               <td>' + data[i].name + '</td>\
               <td>' + data[i].time + '</td>\
               <td>' + data[i].price + '</td>\
             </tr>\
           ');
        }

				if (data.length == 0) {
					if (moment(datePicked).format('dddd') == "Sunday") {
						brows = ['10:30 AM', '12:00 NN', '1:30 PM', '3:00 PM'];
						lash = ['10:30 AM', '12:00 NN', '1:30 PM', '3:00 PM'];
					} else {
						lash = lashOrig.slice(0);
						brows = browsOrig.slice(0);
					}

					limit = data.length;
					clearScheduleFirst();
				} else {
					clearScheduleFirst();
					var brows1030 = 0;
					var brows1200 = 0;
					var brows0130 = 0;
					var brows0300 = 0;
					var brows0430 = 0;
					var brows0600 = 0;
					var lash1030 = 0;
					var lash1200 = 0;
					var lash0130 = 0;
					var lash0300 = 0;
					var lash0430 = 0;
					var lash0600 = 0;
					var temp = data.slice(0);
					limit = data.length;

					// Sequence of insert
					for (var i = 0, j = 1, k = 1; i < temp.length; i++)
					{
						if (temp[i].service_id == 2)
						{
							if (temp[i].time == "10:30 AM") {
								brows1030 = j;
							}
							if (temp[i].time == "12:00 NN") {
								brows1200 = j;
							}
							if (temp[i].time == '1:30 PM') {
								brows0130 = j;
							}
							if (temp[i].time == '3:00 PM') {
								brows0300 = j;
							}
							if (temp[i].time == '4:30 PM') {
								brows0430 = j;
							}
							j++;
						}
						else if (temp[i].service_id == 1 || temp[i].service_id == 3 || temp[i].service_id == 4 || temp[i].service_id == 5)
						{
							if (temp[i].time == "10:30 AM") {
								lash1030 = k;
							}
							if (temp[i].time == "12:00 NN") {
								lash1200 = k;
							}
							if (temp[i].time == "1:30 PM") {
								lash0130 = k;
							}
							if (temp[i].time == "3:00 PM") {
								lash0300 = k;
							}
							if (temp[i].time == "4:30 PM") {
								lash0430 = k;
							}
							if (temp[i].time == "6:00 PM") {
								lash0600 = k;
							}
							k++;
						}
					}

					var sequenceB = [brows1030, brows1200, brows0130, brows0300, brows0430];
					var sequenceL = [lash1030, lash1200, lash0130, lash0300, lash0430, lash0600];
					checkAvailableSlots(temp, sequenceB, sequenceL);

					//
					for (var i = 0; i < data.length; i++) {
						if (data[i].service_id == 2) {
							if (data[i].time == "10:30 AM") {
								$('.seven').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
								$('.eight').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
							} else if (data[i].time == "12:00 NN") {
								$('.eight').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
								$('.nine').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
							} else if (data[i].time == "1:30 PM") {
								$('.nine').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
								$('.ten').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
							} else if (data[i].time == "3:00 PM") {
								$('.ten').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
								$('.eleven').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
							} else if (data[i].time == "4:30 PM") {
								$('.eleven').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
								$('.twelve').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#fabcc1"
								})
							}
						} else if (data[i].service_id == 1 || data[i].service_id == 3 || data[i].service_id == 4 || data[i].service_id == 5)
						{
							if (data[i].time == "10:30 AM") {
								$('.one').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#e5898f"
								})
							} else if (data[i].time == "12:00 NN") {
								$('.two').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#e5898f"
								})
							} else if (data[i].time == "1:30 PM") {
								$('.three').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#e5898f"
								})
							} else if (data[i].time == "3:00 PM") {
								$('.four').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#e5898f"
								})
							} else if (data[i].time == "4:30 PM") {
								$('.five').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#e5898f"
								})
							} else if (data[i].time == "6:00 PM") {
								$('.six').css({
									"position": "absolute",
									"top": "0",
									"bottom": "0",
									"left": "0",
									"right": "0",
									"background": "#e5898f"
								})
							}
						}
					}


				}

				// Update the options
				updateSlots();
				if (lash.length == 0) {
					// $('#lashlift').val() = 0;
					$('#lashlift').prop('disabled', true);
					$('#glowupfoundation').prop('disabled', true);
					$('#yumilashlift').prop('disabled', true);
					$('#lashliner').prop('disabled', true);
				} else {
					$('#lashlift').prop('disabled', false);
					$('#glowupfoundation').prop('disabled', false);
					$('#yumilashlift').prop('disabled', false);
					$('#lashliner').prop('disabled', false);
				}

				if (brows.length == 0) {
					$('#browmicroblading').prop('disabled', true);
				} else {
					$('#browmicroblading').prop('disabled', false);
				}
			}
		});
	});

	$('.lashglow').change(function() {
		var standard = document.getElementById('lashlift').value;
		var glow = document.getElementById('glowupfoundation').value;
		var yumi = document.getElementById('yumilashlift').value;
		var liner = document.getElementById('lashliner').value;
		var micro = $("#browmicroblading").val();
		var total = 0;
		var grandTotal = 0;

		var price1 = $("#service_price1").val();
		var price2 = $("#service_price2").val();
		var price3 = $("#service_price3").val();
		var price4 = $("#service_price4").val();
		var price5 = $("#service_price5").val();
		var micro = $("#browmicroblading").val();
		// var price2 = $("#service_price2").val();

		if (standard == 1)
		{
			$('#ServiceAmount1').html(addCommas(price1));
			$('#SeviceTotal').html(addCommas(price1));
			grandTotal = price1;
			total = price1;
			lashglowChosen = $('#service_id1').val();

			$('#glowupfoundation').prop('disabled', true);
			$('#yumilashlift').prop('disabled', true);
			$('#lashliner').prop('disabled', true);
		}
		else if (liner == 1)
		{
			$('#service_id').val();
			$('#ServiceAmount3').html(addCommas(price3));
			total = price3;
			grandTotal = price3;
			$('#SeviceTotal').html(addCommas(price3));

			lashglowChosen = $('#service_id3').val();
			$('#lashlift').prop('disabled', true);
			$('#glowupfoundation').prop('disabled', true);
			$('#yumilashlift').prop('disabled', true);
		}
		else if (glow == 1)
		{
			$('#ServiceAmount4').html(addCommas(price4));
			total = price4;
			grandTotal = price4;
			lashglowChosen = $('#service_id4').val();
			$('#lashlift').prop('disabled', true);
			$('#yumilashlift').prop('disabled', true);
			$('#lashliner').prop('disabled', true);
		}
		else if (yumi == 1)
		{
			$('#ServiceAmount5').html(addCommas(price5));
			total = price5;
			grandTotal = price5;
			lashglowChosen = $('#service_id5').val();
			$('#lashlift').prop('disabled', true);
			$('#glowupfoundation').prop('disabled', true);
			$('#lashliner').prop('disabled', true);
		}
		else
		{
			total = 0;
			grandTotal = 0;
			$("#SeviceTotal").html("0.00");
			$('#ServiceAmount1').html("0.00");
			$('#ServiceAmount5').html("0.00");
			$('#ServiceAmount3').html("0.00");
			$('#ServiceAmount4').html("0.00");
			lashglowChosen = 0;
			$('#lashlift').prop('disabled', false);
			$('#glowupfoundation').prop('disabled', false);
			$('#yumilashlift').prop('disabled', false);
			$('#lashliner').prop('disabled', false);
		}

		if (micro == 1)
		{
			$('#ServiceAmount2').html(addCommas(price2));
			grandTotal = parseFloat(total) + parseFloat(price2);
			$('#SeviceTotal').html(addCommas(grandTotal.toFixed(2)));
		}
		else
		{
			grandTotal = 0;
			$('#ServiceAmount2').html("0.00");
		}


	})

	$('#btnSubmitAppointment').click(function()
	{
		var obj;
		var customer_id = $("#selCustomer option:selected").val();
		var remarks = $("#remarks").val();
		var total = $("#SeviceTotal").text();
		total = total.replace(',','')

		if ($('#browmicroblading').val() == 1) {
			browsChosen = $('#service_id2').val()
		}

		if (browsChosen != '' && lashglowChosen != '') {
			obj = {
				date: $('#pickedDate').val(),
				customer_id: customer_id,
				remarks: remarks,
				total: total,
				browsChosen: browsChosen,
				lashglowChosen: lashglowChosen,
				timeLashGlow: $('#lashSlot option:selected').val(),
				timeBrows: $('#browsSlot option:selected').val()
			}
		} else if (browsChosen != '') {
			obj = {
				date: $('#pickedDate').val(),
				customer_id: customer_id,
				total: total,
				remarks: remarks,
				browsChosen: browsChosen,
				timeBrows: $('#browsSlot option:selected').val()
			}
		} else if (lashglowChosen != '') {
			obj = {
				date: $('#pickedDate').val(),
				customer_id: customer_id,
				total: total,
				remarks: remarks,
				lashglowChosen: lashglowChosen,
				timeLashGlow: $('#lashSlot option:selected').val()
			}
		}

		if (limit < 6)
		{

			if($('#pickedDate').val() == "")
			{
          		swal("Error", "Please select a date.", "error");
			}
			else if (typeof obj === "undefined")
			{
          		swal("Error", "Please select a service.", "error");
  			}
			else if (obj.date != "" && (obj.date == getDateToday() || obj.date > getDateToday()))
			{
				$.ajax({
					data: obj,
					dataType: 'json',
					type: 'post',
					url: 'insert_booking',
					success : function(data, textStatus, jqXHR)
			          {
			            // Check server data after insert
			            console.log(data);
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
				})
			}
			else
			{
        		swal("Error", "Please check selected date.", "error");
			}

		}
		else
		{
			// Ideally cannot move to the next modal and would display and error message
      		swal("Error", "Schedule is full for the day.", "error");
		}
	})
	// end of submit function
});
