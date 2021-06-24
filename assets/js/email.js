$(document).ready(function() {

    if(localStorage.getItem("lang") === "en"){
        $("#basic-form").validate({
          rules: {
            name : {
              required: true,
              minlength: 4
            },
            message: {
                required: true,
                minlength: 10
            },
            email: {
              required: true,
              email: true
            },
            subject: {
                required: true,
                minlength: 5
              }
          },
          messages : {
              name: {
                required: "Please enter your Name",
                minlength: "The name must be at least 4 characters long"
              },
              message: {
                required: "Please write something",
                minlength: "Detail your message a little more"
              },
              email: {
                required: "Please enter your Email",
                email: "Please enter a valid Email format"
              },
              subject: {
                required: "Please enter the subject",
                number: "More details on the subject"
              }
          },
          submitHandler: function(form) {
              const inputs = document.querySelector('#basic-form');
              Email.send({
                  Host: "smtp.gmail.com",
                  Username: "rmcn92prueba@gmail.com",
                  Password: "4760Rmcn",
                  To: "1992rmcn@gmail.com",
                  From: inputs.elements["email"].value,
                  Subject: inputs.elements["subject"].value,
                  Body: inputs.elements["message"].value + "<br><br>" + "Correo: " + inputs.elements["email"].value+ "<br>" + "Nombre: " + inputs.elements["name"].value 
          
              }).then($("#ok").delay(500).fadeIn("slow"));
              $("#ok").delay(1000).fadeOut("slow");
              $('#basic-form')[0].reset();
          }
        });
    } else {
        $("#basic-form").validate({
            rules: {
                name : {
                  required: true,
                  minlength: 4
                },
                message: {
                    required: true,
                    minlength: 10
                },
                email: {
                  required: true,
                  email: true
                },
                subject: {
                    required: true,
                    minlength: 5
                  }
              },
            messages : {
              name: {
                required: "Por favor ingresa tu nombre",
                minlength: "El nombre debe tener al menos 4 caracteres"
              },
              message: {
                required: "Ingresa tu mensaje",
                minlength: "Detalla un poco más tu mensaje"
              },
              email: {
                required: "Por favor ingresa tu Email",
                email: "Por favor ingresa un formato valido de Email"
              },
              subject: {
                required: "Por favor ingresa el asunto",
                number: "Detalla un poco más el asunto"
              }
            },
            submitHandler: function(form) {
                const inputs = document.querySelector('#basic-form');
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "rmcn92prueba@gmail.com",
                    Password: "4760Rmcn",
                    To: "1992rmcn@gmail.com",
                    From: inputs.elements["email"].value,
                    Subject: inputs.elements["subject"].value,
                    Body: inputs.elements["message"].value + "<br><br>" + "Correo: " + inputs.elements["email"].value+ "<br>" + "Nombre: " + inputs.elements["name"].value 
            
                }).then($("#ok").delay(500).fadeIn("slow"));
                $("#ok").delay(1000).fadeOut("slow");
                $('#basic-form')[0].reset();
            }
        });

    }
});



