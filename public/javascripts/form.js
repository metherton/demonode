$(document).ready(function(){
    $('#btnSendSms').on('click', function(e) {
        e.preventDefault();
        // Based on the selected demo, fire off an ajax request
        // We expect just a string of text back from the server (keeping it simple)
        $.ajax('/sendsms', {
            method:'POST',
            dataType:'text',
            data:{
                phone:$('#phone').val(),
                message:$('#message').val()
            },
            success: function(data) {
                alert(data);
            },
            error: function(jqxhr) {
                alert('There was an error sending a request to the server :(');
            }
        })
    });
});