
var programs_data_url = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Programs?maxRecords=3&view=Main%20View';
var programsHTML = '';
var programsDiv = $('.programs');
var renderprogramsData = function (data) {
  console.log(data);
  data.records.forEach(function(programs); {
var programs_Pictures = programs.fields['Pictures'];
   programsHTML += '<h2>' + programs.fields['Name'] + '</h2>';
   programsHTML += '<h2>' + programs.fields['Description'] + '</h2>';
   programsHTML += '<h2>' + programs.fields['Pictures'] + '</h2>';
   programsHTML += '<h2>' + programs.fields['Agency'] + '</h2>';

})


/*$.each (programs_Pictures, function(i, Pictures){
  programsHTML +="</br>";
  programsHTML += <img src="${Pictures.url}">;
  console.log(Pictures.url);
  programsHTML += '<hr />';
});
*/
programsDiv.html(techiesHTML);
});
//
$.getJSON(programs_data_url, renderprogramsData);