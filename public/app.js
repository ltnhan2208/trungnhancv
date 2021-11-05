function send_mail(params)
{
  var tempParams = {
    from_email : document.getElementById("from_email").value,
    to_email : document.getElementById("to_email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  };

  emailjs.send('gmail_cv','template_052geuf',tempParams).then(function(res){
    if(res.status == 200)
    {
     alert('Your mail was send to letrungnhan99@gmail.com');
    }
    else
    {
      alert("Sorry, there was an error");
    }
   // console.log('success',res.status);
  });
}