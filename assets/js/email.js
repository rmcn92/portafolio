const btn = document.querySelector('#send');
const inputs = document.querySelector('form');
btn.addEventListener('click', ()=>{
    Email.send({
        Host: "smtp.gmail.com",
        Username: "rmcn92prueba@gmail.com",
        Password: "4760Rmcn",
        To: "1992rmcn@gmail.com",
        From: inputs.elements["email"].value,
        Subject: inputs.elements["subject"].value,
        Body: inputs.elements["message"].value + "<br><br>" + "Correo: " + inputs.elements["email"].value+ "<br>" + "Nombre: " + inputs.elements["name"].value 

    }).then(msg=>alert("Ok"));


});