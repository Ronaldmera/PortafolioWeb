document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("LL7zHTKhOzljSR30E"); 

    document.getElementById("btn-subtmit").addEventListener("click", function (event) {
        event.preventDefault(); 

        let params = {
            to_name: "Ronald",
            from_name: document.getElementById("from_name").value,
            from_email: document.getElementById("from_email").value,
            comment: document.getElementById("comment").value
        };
     
        emailjs.send("service_wf0k9lp", "template_q6img3o", params)
            .then(function (response) {
                console.log("Correo enviado con éxito:", response);
                alert("Mensaje enviado correctamente");
            }, function (error) {
                console.error("Error al enviar el correo:", error);
                alert("Hubo un error al enviar el mensaje");
            });
    });
});
