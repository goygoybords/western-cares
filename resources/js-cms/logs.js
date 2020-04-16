$(document).ready(
  function() {
    // Get all logs -- AJAX Request
    $.ajax({
      url : 'all_logs',
      dataType : 'json',
      type : 'get',
      data : {
        csrf_token_name : $.cookie('csrf_cookie_name')
      },
      success : function(data, textStatus, jqXHR) {
        if(data.length > 0) {
          // Populate the logs table
          populateLogsTable(data);
        } else {
          $('#tblLogs tbody')
            .append('<tr><td class="danger">No records found.</td></tr>');
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

/**
* Populates the logs table in the dashboard.
*
* @param data array containing the logs
*/
function populateLogsTable(data) {
  // Iterate through the list of logs
  for(var i = 0; i < data.length; i++) {
    $('#tblLogs tbody').append(createRow(data[i]));
  }
}

/**
* Creates the HTML table row containing the information of the user.
*
* @param data log information
*/
function createRow(data) {
  return '' +
    '<tr>' +
      '<td>' +
        '[' + data.date + '] ' + data.message +
      '</td>' +
    '</tr>';
}
