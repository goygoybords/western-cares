$(document).ready(
  function() {
    $.ajax({
      url : 'all_messages',
      dataType : 'json',
      type : 'get',
      data : {
        csrf_token_name : $.cookie('csrf_cookie_name')
      },
      success : function(data, textStatus, jqXHR) {
        if(data.length > 0) {
          populateTable(data);
        } else{
          $('#tblMessages tbody')
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
function populateTable(data) {
  // Iterate through the list of logs
  for(var i = 0; i < data.length; i++) {
    $('#tblMessages tbody').append(createRow(data[i]));
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
        data.date +
      '</td>' +
      '<td>' +
        data.name +
      '</td>' +
      '<td><a href="mailto:' + data.email + '">' +
        data.email +
      '</a></td>' +
      '<td>' +
        data.message +
      '</td>' +
    '</tr>';
}
