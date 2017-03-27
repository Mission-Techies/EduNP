/*This is the start of the box to input data*/
var submitURL = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Agency?api_key=keyFQuPxdLW9FdIUb';
var form = $('#my-form');
console.log(form);
form.on('submit', function(e) {
    e.preventDefault();
    var name = $(this).find('input[name=name]').val();
    var description = $(this).find('input[name=description]').val();
    var email = $(this).find('input[name=email]').val();
    var agencycontacts = $(this).find('input[name=agencycontacts]').val();
    var website = $(this).find('input[name=website]').val();
    var address = $(this).find('input[name=address]').val();

    var data = {
        'fields': {
            'Name': name,
            'Description': description,
            'Email': email,
            'Agency Contacts': agencycontacts,
            'Extension' : website,
            'Address': address,
        }
    };
    console.log(data);
    $.post(submitURL, data, function(data) {
        $('#submit-message').text('Submitted!!!!');
        console.log('success', data)
    });
});

/*This is the end of the box to input data*/
