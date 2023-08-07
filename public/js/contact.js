const contactForm = document.querySelector('.contact-form');

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let mailList = document.getElementById('mail-list');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value,
        mailList: mailList.value
    }

    let xhr = XMLHttpRequest;
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if(xhr.responseText == 'sucess'){
            alert('Message sent');
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            message.value = '';
            mailList.value = '';
        }
        else{
            alert('Something went wrong!');
        }
    }

    xhr.send(JSON.stringify(formData));
});