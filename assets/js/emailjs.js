const btn = document.getElementById('send');

document.getElementById('basic-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
       
        const serviceID = 'default_service';
        const templateID = 'template_0y8eakd';

        emailjs.sendForm(serviceID, templateID, this)
            
    });