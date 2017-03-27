var events_data_url = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/events?api_key=keyFQuPxdLW9FdIUb';
var eventsHTML = '';
var eventsDiv = $('.events');
var rendereventsData = function(data) {
    console.log(data);
    data.records.forEach(function(program) {
        var icon_Pictures = program.fields['Pictures'];


        if (program.fields['Name']) {
            eventsHTML += '<h3>' + program.fields['Name'] + '</h3>';
        };

        if (program.fields['Notes']) {
            eventsHTML += '<p>' + program.fields['Notes'] + '</p>';
        };
        if (program.fields['URL']) {
            eventsHTML += '<a href="' + program.fields['URL'] + '">' + program.fields['URL'] + '</a>';


        };


        if (program.fields['Agency']) {
            eventsHTML += '<p>' + program.fields['Agency'] + '</p>';

        };

        $.each(icon_Pictures, function(i, Pictures) {
            eventsHTML += "</br>";
            eventsHTML += `<img class="icon" src="${Pictures.url}">`;
            console.log(Pictures.url);


            eventsHTML += '<hr />';
        });
        eventsDiv.html(eventsHTML);
    });

}
//
$.getJSON(events_data_url, rendereventsData);
console.log(eventsHTML);
