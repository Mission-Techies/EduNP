var jobs_data_url = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/jobs?api_key=keyFQuPxdLW9FdIUb';
var jobsHTML = '';
var jobsDiv = $('.jobs');
var renderjobsData = function(data) {
    data.records.forEach(function(program) {
        var icon_Pictures = program.fields['Attachments'];
        jobsHTML += '<h1>' + program.fields['Name'] + '</h1>';

        jobsHTML += '<p>' + program.fields['Notes'] + '</p>';
        if (program.fields['URL']) {
            jobsHTML += '<h2>' + program.fields['URL'] + '</h2>';
        };
        

        $.each(icon_Pictures, function(i, Pictures) {
            jobsHTML += "</br>";
            jobsHTML += `<img class="icon" src="${Pictures.url}">`;
            console.log(Pictures.url);


            jobsHTML += '<hr />';
        });
        jobsDiv.html(jobsHTML);
    });

}

function myFunction(x) {
    x.classList.toggle("change");
}
$.getJSON(jobs_data_url, renderjobsData);
