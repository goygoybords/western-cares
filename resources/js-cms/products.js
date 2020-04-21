initTable();
function initTable()
{

  var $table = $('#tblProducts');

  $table.bootstrapTable({
    pagination: true,
    search: true,
    url: 'all_products'
  });
}

// Action Formatter for Sales
function actionFormatter(value, row, index)
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
      </div>'
    ].join("");
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
        var id = row.product_id;
        $.ajax({
          url : 'get_product',
          dataType : 'json',
          type : 'post',
          data : { id : id },
          success : function(data, textStatus, jqXHR) 
          {
            //Populate the users table
            $('#viewProduct').modal('show');
            $('#viewProduct').attr('data-customer-id', id);
            $('#viewProduct #txtItemCode').val(data.item_code);
            $('#viewProduct #txtDescription').val(data.description);
            $('#viewProduct #txtBrand').val(data.brand); 
            $('#viewProduct #txtDimension').val(data.dimension);
            $('#viewProduct #txtUnit').val(data.uom);  
            $('#viewProduct #txtCost').val(data.cost);
            $('#viewProduct #txtSellingPrice').val(data.selling_price);
            $('#viewProduct #txtCategory').val(data.category);
            $('#viewProduct #viewImage').append('<img height = 200px width = 200px src="'+  base_url + data.image_path + '" alt="something" />');

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
        var id = row.product_id;

        $.ajax({
          url : 'get_product',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeProduct input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR) {
            $('#removeProduct').modal('show');
            $('#removeProduct').attr('data-customer-id', id);
            $('#productToRemove').html('Are you sure you want to remove ' + data.item_code + "?");
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
        var id = row.product_id;
        $.ajax({
          url : 'get_product',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#editProduct input[name="csrf_token_name"]').val(),
            id : id
          },
          success : function(data, textStatus, jqXHR)
          {
            $('#editProduct').modal('show');
            $('#editProduct').attr('data-customer-id', id);
            $('#editProduct #txtItemCode').val(data.item_code);
            $('#editProduct #txtDescription').val(data.description);
            $('#editProduct #txtBrand').val(data.brand);
            $('#editProduct #txtDimension').val(data.dimension);
            $('#editProduct #selUom').val(data.unit_id);
            $('#editProduct #selCategory').val(data.category_id);
            $('#editProduct #txtIDEdit').val(id);
            $('#editProduct #txtCost').val(data.cost);
            $('#editProduct #txtPrice').val(data.selling_price);
            $('#editProduct #viewImage').append('<img height = 200px width = 200px src="'+  base_url + data.image_path + '" alt="something" />');

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
};

$(document).ready(
  function() {

    // // Signature Code for JS START
    // var tmpObject = {
    // color:"#f00",
    // lineWidth:5,
    // height: 200,
    // width:600,
    // 'UndoButton':true
    // };
    // tmpObject["background-color"] = "#F6F6F6";

    // $sigdiv = $("#signatureparent").jSignature(tmpObject);
    // $sigdivedit = $("#signatureparentedit").jSignature(tmpObject);
    // // UPON Button submit, in order to get value of signature, use Code
    // var image_draw = $sigdiv.jSignature('isModified') ? $sigdiv.jSignature('getData', 'image/jsignature;base30') : '';
    //      dataToBePassedAsAdd = image_draw;
    // var image_draw_edit = $sigdivedit.jSignature('isModified') ? $sigdivedit.jSignature('getData', 'image/jsignature;base30') : '';


    // Signature Code for JS END

    // Add a new user -- AJAX Request
    $('#btnCreate').click(
      function(e) {
        e.preventDefault();
        // Prepare user object
        var file_data = $('#addProduct #txtProductImage')[0];   
        // var form_data = new FormData();                  
        // form_data.append('file', file_data);

        var form = $('#addProductForm')[0];
        var data = new FormData(form);

        var customer = {
          item_code : $('#addProduct #txtItemCode').val(),
          description : $('#addProduct #txtDescription').val(),
          brand : $('#addProduct #txtBrand').val(),
          dimension : $('#addProduct #txtDimension').val(),
          csrf_token_name : $('#addProduct input[name="csrf_token_name"]').val(),
          uom_id : $('#addProduct #selUom').val(),
          category_id:$('#addProduct #selCategory option:selected').val(),
          product_image: file_data,
          cost : $('#addProduct #txtCost').val(),
          selling_price : $('#addProduct #txtSellingPrice').val(),
        };

        $.ajax({
          url : 'add_product',
          dataType : 'json',
          enctype: 'multipart/form-data',
          processData: false,  // Important!
          contentType: false,
          cache: false,          
          type : 'post',
          data : data,
          success : function(data, textStatus, jqXHR)
          {
            if(data.error == 1)
            {
                alert(data.errors);
            }
            else
            {
               window.location.reload();
            }

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
      }
    );

    $('#btnEdit').click(
      function(e) {
        e.preventDefault();
        // Prepare user object
        var file_data = $('#editProduct #txtProductImage')[0];   
        var id = $('#editProduct').attr('data-customer-id');
        // var form_data = new FormData();                  
        // form_data.append('file', file_data);

        var form = $('#editProductForm')[0];
        var data = new FormData(form);
        var id = $('#editProduct').attr('data-customer-id');
        form.append('id', id);

        var customer = {
          item_code : $('#editProduct #txtItemCode').val(),
          description : $('#editProduct #txtDescription').val(),
          brand : $('#editProduct #txtBrand').val(),
          dimension : $('#editProduct #txtDimension').val(),
          csrf_token_name : $('#editProduct input[name="csrf_token_name"]').val(),
          uom_id : $('#editProduct #selUom').val(),
          category_id:$('#editProduct #selCategory option:selected').val(),
          product_image: file_data,
          cost : $('#editProduct #txtCost').val(),
          selling_price : $('#editProduct #txtSellingPrice').val(),
          csrf_token_name : $('#editProduct input[name="csrf_token_name"]').val(),
        };

        

        $.ajax({
          url : 'edit_product',
          dataType : 'json',
          enctype: 'multipart/form-data',
          type : 'post',
          processData: false,  // Important!
          contentType: false,
          cache: false,  
          data : data,
          success : function(data, textStatus, jqXHR)
          {
            console.log(data);
            if(data.error == 1)
            {
              alert(data.errors);
            }
            else
            {
              window.location.reload();
            }
            //Check server data after update
            // if(data)
            // {
            //   window.location.reload();
            // }
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
        var id = $('#removeProduct').attr('data-customer-id');

        $.ajax({
          url : 'remove_product',
          dataType : 'json',
          type : 'post',
          data : {
            csrf_token_name :
              $('#removeProduct input[name="csrf_token_name"]').val(),
            id : id
          },
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

    //save ailment
    $('#btnAddRowSave').click(
        function(e)
        {
          var item = $('#ailment').val();
            if($("#gridsave").swidget().dataSource.data.length!==0)
            {
               var row ={ ailment: item };

              $("#gridsave").swidget().addRow(row);
              $("#gridsave").swidget().saveChanges();
           }
           else
           {
             var row ={ ailment: item };
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
  $('#addProduct').on('hidden.bs.modal', function () {
      gridsave.swidget().destroy();
      gridsave =  initGridSave($("#gridsave"));
  });

  var gridsaveEdit =  initGridSaveEdit($("#gridsaveEdit"));
  $('#editProduct').on('hidden.bs.modal', function () {
      gridsaveEdit.swidget().destroy();
      gridsaveEdit =  initGridSaveEdit($("#gridsaveEdit"));
  });

  var gridsaveView =  initGridSaveView($("#gridsaveView"));
  $('#viewCustomer').on('hidden.bs.modal', function () {
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
        };
}
function getColumns()
{
  return [{field:"ailment",title:"Ailment"},
          {title:"Action",buttons:[{cls:"btn btn-danger",commandName:"delete",caption:"<span class=''><i class='fa fa-trash'></i></span>"}]}];
}

function getColumnsView()
{
  return [{field:"ailment",title:"Ailment"}];
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
