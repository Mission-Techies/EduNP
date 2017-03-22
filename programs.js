

var programs_data_url = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Programs/?api_key=keykbC2FwErK6UFom';
var programsHTML = '';
var programsDiv = $('.programs');
var renderprogramsData = function (data) {
  console.log(data);
  data.records.forEach(function(programs) {
var icon_Pictures = programs.fields['Pictures'];
    programsHTML += '<h2>' + programs.fields['Name'] + '</h2>';
    programsHTML += '<h2>' + programs.fields['Description'] + '</h2>';
    programsHTML += '<h2>' + programs.fields['Agency'] + '</h2>';

    $.each(icon_Pictures, function(i, Pictures){
      programsHTML += "</br>";
      programsHTML += `<img class="icon" src="${Pictures.url}">`;
      console.log(Pictures.url);
    programsHTML += '<hr />';
  });


programsDiv.html(programsHTML);

});
}

//
$.getJSON(programs_data_url, renderprogramsData);
console.log(programsHTML);
