// JavaScript
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = this;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var suggestions = document.getElementById('suggestions').value;

    var subject = 'Feedback Form Submission';
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nSuggestions: ' + suggestions;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://mail.google.com/mail/feed/atom', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('to=masiretumo11@gmail.com&subject=' + subject + '&body=' + body);

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Your feedback has been sent successfully!');
        } else {
            alert('Error sending feedback. Please try again.');
        }
    };
});
