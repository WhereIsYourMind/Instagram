function SendMail(){
    let result={
        from_name:document.getElementById("fullName").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_cg0jgkd","template_2ksch7f",result).then(function(res){
        alert("выполнено");
    })
}