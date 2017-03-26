var programs_data_url = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Programs/?api_key=keykbC2FwErK6UFom';
var programsHTML = '';
var programsDiv = $('.programs');
var renderprogramsData = function(data) {
    console.log(data);
    data.records.forEach(function(programs) {


        if (programs.fields['Name']) {
            programsHTML += '<h3>' + programs.fields['Name'] + '</h3>';
        };

        if (programs.fields['Description']) {
            programsHTML += '<p>' + programs.fields['Description'] + '</p>';
        };
        var icon_Pictures = programs.fields['Pictures'];

        programsHTML += '<a href="' + programs.fields['Page'] + '">' + programs.fields['Page'] + '</a>';



        $.each(icon_Pictures, function(i, Pictures) {
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
