/* start of the box to input data of Agency*/
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

/*end of the box to input data of Agency*/


/* start of the box to input data of Programs*/
var submitURL2 = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Programs?api_key=keyFQuPxdLW9FdIUb';
var form = $('#my-programs');
console.log(form);
form.on('submit', function(e) {
    e.preventDefault();
    var name = $(this).find('input[name=name]').val();
    var description = $(this).find('input[name=description]').val();
    var agency = $(this).find('input[name=agency]').val();
    var page = $(this).find('input[name=page]').val();


    var data = {
        'fields': {
            'Name': name,
            'Description': description,
            'Agency': agency,
            'Page' : page,

        }
    };
    console.log(data);
    $.post(submitURL2, data, function(data) {
        $('#submit-message').text('Submitted!!!!');
        console.log('success', data)
    });
});

/*end of the box to input data of Programs*/

/* start of the box to input data of Events*/
var submitURL3 = 'https://api.airtable.com/v0/appQ8einDCzZyfJYO/Programs?api_key=keyFQuPxdLW9FdIUb';
var form = $('#my-events');
console.log(form);
form.on('submit', function(e) {
    e.preventDefault();
    var name = $(this).find('input[name=name]').val();
    var notes = $(this).find('input[name=notes]').val();
    var url = $(this).find('input[name=url]').val();



    var data = {
        'fields': {
            'Name': name,
            'Notes': notes,
            'url': url,


        }
    };
    console.log(data);
    $.post(submitURL3, data, function(data) {
        $('#submit-message').text('Submitted!!!!');
        console.log('success', data)
    });
});

/*end of the box to input data of Events*/
