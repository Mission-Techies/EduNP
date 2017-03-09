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

//
if (program.fields['Category']){
  edunpHTML += '<p>'+ program.fields['Category']+ '<p>';
};
    edunpHTML += '<hr />';
  });
  edunpDiv.html(edunpHTML);
};
function myFunction(x) {
    x.classList.toggle("change");
}
$.getJSON(edunp_data_url, renderedunpData);
