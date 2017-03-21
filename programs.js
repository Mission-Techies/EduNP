

var programs_data_url = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Programs/?api_key=keykbC2FwErK6UFom';
var programsHTML = '';
var programsDiv = $('.programs');
var renderprogramsData = function (data) {
  console.log(data);
  data.records.forEach(function(programs) {
var programs_Pictures = programs.fields['Pictures'];
    programsHTML += '<h2>' + programs.fields['Name'] + '</h2>';
    programsHTML += '<h2>' + programs.fields['Description'] + '</h2>';
    programsHTML += '<h2>' + programs.fields['Pictures'] + '</h2>';
    programsHTML += '<h2>' + programs.fields['Agency'] + '</h2>';
    programsHTML += '<hr />';

programsDiv.html(techiesHTML);
});
//
$.getJSON(programs_data_url, renderprogramsData);
