initTable();
function initTable()
{

  var session =  $("#session_role").data('value');
  var $table = $('#tblOrders');

    $table.bootstrapTable({
      pagination: true,
      search: true,
      url: 'all_orders'
    });
 
  
}

// Action Formatter for Sales
function actionFormatter(value, row, index)
{
  if($("#session_role").data('value') == "Administrator") 
  {
      return [
        '<div class="btn-group" role="grid">\
          <a class="btn btn-info btn-view">\
            <i class="fa fa-info-circle"></i><span class="hidden-sm hidden-xs"> View</span>\
          </a>\
          <a class="btn btn-danger btn-delete">\
            <i class="fa fa-trash"></i><span class="hidden-sm hidden-xs"> Remove</span>\
          </a>\
          <a class="btn btn-primary btn-post">\
            <i class="fa fa-trash"></i><span class="hidden-sm hidden-xs"> Post</span>\
          </a>\
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
          <a class="btn btn-danger btn-delete">\
            <i class="fa fa-trash"></i><span class="hidden-sm hidden-xs"> Remove</span>\
          </a>\
        </div>'
      ].join("");
    }
}

function signatureFormatter(value, row, index)
{
  if(value == '') {
    status = 'Not Signed';
  } else {
    status = 'Signed';
  }

  return status;
}
var base_url = $("#base_url").val();
window.operateEvents = {
    'click .btn-view': function (e, value, row)
      {
        e.preventDefault();
        var id = row.quotation_id;
        $.ajax({
          url : 'get_quotation',
          dataType : 'json',
          type : 'post',
          data : { id : id },
          success : function(data, textStatus, jqXHR) 
          {
            $('#viewQuotation').modal('show');
            $('#viewQuotation').attr('data-customer-id', id);
            $('#viewQuotation #txtCompanyName').val(data.company_name);
            $('#viewQuotation #txtAddress').val(data.address);
            $('#viewQuotation #txtEmail').val(data.email);
            
            $.ajax({
                data : { id : id },
                dataType : 'json',
                type: 'post',
                url : 'get_quotation_detail',
                success : function(data)
                {
                  for(var i = 0; i < data.length; i++)
                  {
                    var row = {
                      ailment:data[i].item_code,
                      cost: data[i].quoted_cost
                    };
                    $("#gridsaveView").swidget().addRow(row);
                    $("#gridsaveView").swidget().saveChanges();
                  }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                  console.log(jqXHR);
                  console.log(textStatus);
                  console.log(errorThrown);
                }
              });


            $.ajax({
                data : { id : id },
                dataType : 'json',
                type: 'post',
                url : 'get_attachment',
                success : function(data)
                {
                  console.log(data.image_path);

                  for(var i = 0; i < data.length; i++)
                  {
                      var dis = "<li><a href ='download_attachment/"+data[i].filename+"'>"+ data[i].filename+"</a></li>";
                    $("#display_attachment").append(dis);
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
        var id = row.quotation_id;

        $.ajax({
          url : 'get_quotation',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeQuotation input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) 
          {
            $('#removeQuotation').modal('show');
            $('#removeQuotation').attr('data-customer-id', id);
            $('#customerToRemove').html('Are you sure you want to remove the selected quotation?');
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
      'click .btn-edit': function(e, value, row)
      {
        e.preventDefault();
        var id = row.id;
        $.ajax({
          url : 'get_customer',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#editCustomers input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR)
          {
            $('#editCustomer').modal('show');
            $('#editCustomer').attr('data-customer-id', id);
            $('#editCustomer #txtFirstName').val(data.first_name);
            $('#editCustomer #txtLastName').val(data.last_name);
            $('#editCustomer #txtAddress').val(data.address);
            $('#editCustomer #txtEmail').val(data.email);
            $('#editCustomer #txtBirthdate').val(data.birthdate);

            $('#editCustomer #lash_length').val(data.lash_length);
            $('#editCustomer #lash_thickness').val(data.lash_thickness);
            $('#editCustomer #lash_color').val(data.lash_color);
            if(data.tint_applied == 'Y')
              $('#editCustomer').find(':radio[name=tint_applied][value="Y"]').prop('checked', true);
            else
              $('#editCustomer').find(':radio[name=tint_applied][value="N"]').prop('checked', true);

            $('#editCustomer  #tint_date_applied').val(data.tint_date_applied);
            $('#editCustomer  #more_details').val(data.ailment_more_details);

            if(data.signature_image != "")
            {
              $("#editCustomer #fromAjax").html('<img id="editViewSignature" style="width: auto; padding: 40px; padding-bottom: 30px; max-height: 320px; margin: 0 auto;"/>');
              $("#editCustomer #editViewSignature").attr("src", data.signature_image);
            }
            

            $.ajax({
                data : { id : id },
                dataType : 'json',
                type: 'post',
                url : 'get_ailment_items',
                success : function(data)
                {
                  for(var i = 0; i < data.length; i++)
                  {
                    var row = {
                      ailment:data[i].ailment,
                    };
                    $("#gridsaveEdit").swidget().addRow(row);
                    $("#gridsaveEdit").swidget().saveChanges();
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
};

$(document).ready(
  function() {


    // Add a new user -- AJAX Request
    $('#btnCreate').click(
      function(e) {
        e.preventDefault();
        // Prepare user object

        var form = $('#addQuotationForm')[0];
        var data = new FormData(form);
        data.append("quoted_items", JSON.stringify($("#gridsave").swidget().dataSource.data) );


        // var customer = {
        //   company_name : $('#addQuotation #txtCompanyName').val(),
        //   address : $('#addQuotation #txtAddress').val(),
        //   alternate_email : $('#addQuotation #txtEmail').val(),
        //   attachment : $('#addQuotation #txtAttachment').val(), 
        //   quoted_items : $("#gridsave").swidget().dataSource.data,
        //   csrf_token_name : $('#addQuotation input[name="csrf_token_name"]').val(),
        // };

        $.ajax({
          url : 'add_quotation',
          dataType : 'json',
          enctype: 'multipart/form-data',
          processData: false,  // Important!
          contentType: false,
          cache: false,  
          type : 'post',
          data : data,
          success : function(data, textStatus, jqXHR)
          {
            //Check server data after insert
            if(data.error === 1)
            {
              alert(data.errors);
            }
            else
            {
               window.location.reload();
            }
            // if(data == 'user_exists')
            //   alert("User Exists");
            // else
            //   window.location.reload();
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
        var customer = {
          email : $('#editCustomer #txtEmail').val(),
          first_name : $('#editCustomer #txtFirstName').val(),
          last_name : $('#editCustomer #txtLastName').val(),
          address : $('#editCustomer #txtAddress').val(),
          birthdate : $('#editCustomer #txtBirthdate').val(),

          lash_length:$('#editCustomer #lash_length option:selected').val(),
          lash_thickness:$('#editCustomer #lash_thickness option:selected').val(),
          lash_color: $('#editCustomer #lash_color option:selected').val(),
          tint_applied: $("#editCustomer input[name='tint_applied']:checked").val(),
          tint_date_applied: $('#editCustomer #tint_date_applied').val(),
          signature_image: $sigdivedit.jSignature('isModified') ? $sigdivedit.jSignature('getData', 'image/jsignature;base30') : '',
          ailment_more_details: $('#editCustomer #more_details').val(),
          ailment : $("#gridsaveEdit").swidget().dataSource.data,
        };
        var id = $('#editCustomer').attr('data-customer-id');

        $.ajax({
          url : 'edit_customer',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#editCustomer input[name="csrf_token_name"]').val(),
            customer : customer,
            id : id
          },
          success : function(data, textStatus, jqXHR)
          {
            //Check server data after update
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

    $('#btnRemove').click(
      function(e) {
        e.preventDefault();
        var id = $('#removeQuotation').attr('data-customer-id');

        $.ajax({
          url : 'remove_quotation',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeQuotation input[name="csrf_token_name"]').val(),
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

    //save ailment
    $('#btnAddRowSave').click(
        function(e)
        {
          var item = $('#selProducts').val();
            if($("#gridsave").swidget().dataSource.data.length!==0)
            {
               var row ={ 
                          ailment: item ,
                          cost: 0,
                        };

              $("#gridsave").swidget().addRow(row);
              $("#gridsave").swidget().saveChanges();
           }
           else
           {
             var row ={ 
                      ailment: item ,
                          cost: 0, 
                        };
             $("#gridsave").swidget().addRow(row);
             $("#gridsave").swidget().saveChanges();
           }
      });

    $('#btnAddRowSaveEdit').click(
        function(e)
        {
          var item = $('#ailment_edit').val();
            if($("#gridsaveEdit").swidget().dataSource.data.length!==0)
            {
               var row ={ ailment: item };

              $("#gridsaveEdit").swidget().addRow(row);
              $("#gridsaveEdit").swidget().saveChanges();
           }
           else
           {
             var row ={ ailment: item };
             $("#gridsaveEdit").swidget().addRow(row);
             $("#gridsaveEdit").swidget().saveChanges();
           }
      });
  }
);



// /**
// * Populates the users table in the dashboard.
// *
// * @param data array containing the user information
// */
// function populateCustomerTable(data) {

//   // Iterate through the list of users
//   for(var i = 0; i < data.length; i++) {
//     $('#tblCustomers tbody').append(createRow(data[i]));
//   }
// }

// /**
// * Creates the HTML table row containing the information of the user.
// *
// * @param data user information
// */
// function createRow(data) {
//   var htmlString = '' +
//     '<tr>' +
//       '<td>' + data.id  +
//       '</td>' +
//       '<td>' + data.first_name + ' ' + data.last_name  +
//       '</td>' +
//       '<td>' +
//         '<span>' + data.address + '</span>' +
//       '</td>' +
//       '<td>' +  data.email +
//       '</td>' +
//       '<td>' +  data.birthdate +
//       '</td>' +
//       '<td>' +
//         '<div class="btn-group" role="grid">' +
//           '<a class="btn btn-primary btn-view"' +
//               'data-customer-id="' + data.id + '">' +
//               '<i class="fa fa-info-circle"></i>' +
//               '<span class="hidden-sm hidden-xs"> View</span>' +
//             '</a>'+
//             '<a class="btn btn-warning btn-edit"' +
//               'data-customer-id="' + data.id + '">' +
//               '<i class="fa fa-edit"></i>' +
//               '<span class="hidden-sm hidden-xs"> Edit</span>' +
//             '</a>' +
//             '<a class="btn btn-danger btn-delete"' +
//               'data-customer-id="' + data.id + '"' +
//               'data-customer-email="' + data.email + '">' +
//               '<i class="fa fa-trash"></i>' +
//               '<span class="hidden-sm hidden-xs"> Remove</span>' +
//             '</a>' +
//           '</div>' +
//       '</td>' +
//     '</tr>';

//     return $.parseHTML(htmlString);
// }
window.onload = function() {
  var gridsave =  initGridSave($("#gridsave"));
  $('#addQuotation').on('hidden.bs.modal', function () {
      gridsave.swidget().destroy();
      gridsave =  initGridSave($("#gridsave"));
  });

  var gridsaveEdit =  initGridSaveEdit($("#gridsaveEdit"));
  $('#editCustomer').on('hidden.bs.modal', function () {
      gridsaveEdit.swidget().destroy();
      gridsaveEdit =  initGridSaveEdit($("#gridsaveEdit"));
  });

  var gridsaveView =  initGridSaveView($("#gridsaveView"));
  $('#viewQuotation').on('hidden.bs.modal', function () {
      gridsaveView.swidget().destroy();
      gridsaveView =  initGridSaveView($("#gridsaveView"));
  });




  // var gridsaveRec =  initGridSaveRec($("#gridsaveRec"));
  // $('#receiveSales').on('hidden.bs.modal', function () {
  //     gridsaveRec.swidget().destroy();
  //     gridsaveRec =  initGridSaveRec($("#gridsaveRec"));
  // });

};

function getFields()
{
  return {
          ailment:{path:"ailment",type:String,},
          cost: {path: "cost", type:String,}
        };
}
function getColumns()
{
  return [
          {field:"ailment",title:"Ailment"},
          {field:"cost",title:"Cost"},
          {title:"Action",buttons:[{cls:"btn btn-danger",commandName:"delete",caption:"<span class=''><i class='fa fa-trash'></i></span>"}]}];
}

function getColumnsView()
{
  return [
            {field:"ailment",title:"Ailment"},
            {field:"cost",title:"Cost"}
        ];
}

function initGridSave(x){
   return x.shieldGrid({
            dataSource: {
              data: {},
              schema: {
              fields: getFields()
          }
        },
        columns: getColumns(),
        editing: {
          enabled: true,
          event: "click",
          type: "cell"
        },
        events: {
          "save" : function(e)
          {
            // var index = e.target.contentTable.find(".sui-editable-cell").get(0).parentNode.rowIndex;
            // var total = 0;
            // var dataSource = $("#gridsave").swidget().dataSource;

            // for(var i = 0; i < dataSource.data.length; i++) {
            //   total += dataSource.data[i].quantity * dataSource.data[i].price;
            // }

            // $('#addTotalSales').text(total.toFixed(2));
          },
          "delete": function (e)
          {
            // var total = 0;
            // var vat = 0;
            // var dataSource = $("#gridsave").swidget().dataSource;
            // for(var i = 0; i < dataSource.data.length; i++)
            // {
            //     total += parseFloat(dataSource.data[i].total_amount_item);
            // }
            // vat = total - (total / 1.12);
            // // vat = total * 0.12;
            // totalSales = total;

            // netSales = totalSales - vat;

            // vatTotal = addCommas(vat.toFixed(2));
            // totalSales = addCommas(totalSales.toFixed(2));
            // netSales = addCommas(netSales.toFixed(2));

            // $('#addTotalSales').html(totalSales);
            // $('#addVatSales').html(vatTotal);
            // $('#addNetSales').html(netSales);
          }
        }
      });
}

function initGridSaveEdit(x)
{
   return x.shieldGrid({
            dataSource: {
              data: {},
              schema: {
              fields: getFields()
          }
        },
        columns: getColumns(),
        editing: {
          enabled: true,
          event: "click",
          type: "cell"
        },
        events: {
          "save" : function(e)
          {

          },
          "delete": function (e)
          {

          }
        }
      });
}

function initGridSaveView(x)
{
   return x.shieldGrid({
            dataSource: {
              data: {},
              schema: {
              fields: getFields()
          }
        },
        columns: getColumnsView(),
        editing: {
          enabled: false,
          event: "click",
          type: "cell"
        },
      });
}
