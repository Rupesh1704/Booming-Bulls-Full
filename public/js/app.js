const contact = document.querySelector('.contact-form')

let name = document.getElementById('name')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let admission = document.getElementById('admission')
let City = document.getElementById('City')

contact.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        admission: admission.value,
        City: City.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email Sent');
            name.value = '';
            phone.value = '';
            email.value = '';
            admission.value = '';
            City.value = '';
        } else {
            alert('Something Went Wrong!!')
        }
    }

    xhr.send(JSON.stringify(formData));

})