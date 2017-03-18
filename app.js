var edunp_data_url = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Agency?api_key=keyFQuPxdLW9FdIUb';
var edunpHTML = '';
var edunpDiv = $('.Agency');
var renderedunpData = function(data) {
  data.records.forEach(function(program) {
    edunpHTML += '<h2>' + program.fields['Name'] + '</h2>';
    edunpHTML += '<a href="' + program.fields['Extension'] + '">' + program.fields['Extension'] + '</a>';
    edunpHTML += '<p>' + program.fields['Description'] + '</p>';
    if (program.fields['Email']) {
      edunpHTML += '<p>' + program.fields['Email'] + '</p>';
    };
    if (program.fields['Agency Contacts']) {
      edunpHTML += '<p>' + program.fields['Agency Contacts'] + '</p>';
    };
    edunpHTML += '<a href="' + program.fields['Adress'] + '">' + program.fields['Adress'] + '</a>';
    edunpHTML += '<hr />';
  });
  edunpDiv.html(edunpHTML);
};
function myFunction(x) {
    x.classList.toggle("change");
}
$.getJSON(edunp_data_url, renderedunpData);

/*This is the start of the box to input data*/
/*var submitURL = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Agency?api_key=keyFQuPxdLW9FdIUb';*/
var form = $('#my-form');
form.on('submit', function(e){
   e.preventDefault();
   var fullname = $(this).find('input[name=name]').val();
   var address = $(this).find('input[name=description]').val();
   var email = $(this).find('input[name=email]').val();
   var agencycontacts = $(this).find('textarea[name=agencycontacts]').val();

   if (!fullname) {
      $(this).find('input[name=Name]').addClass("error");
     return;
   }
   if (!description) {
     alert('no description');
     return;
   }
   var data = {
     'fields': {
       'Name': name,
       'Description': description,
       'Email': email,
       'agencycontacts': agencycontact,
    }
   };
  $.post(submitURL, data, function(data){
     $('#submit-message').text('Submitted!!!!');
     console.log('success',data)
  });
});

/*This is the end of the box to input data*/
