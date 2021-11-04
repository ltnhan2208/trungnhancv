function sendMail()
{
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var Body = "name:"+ name +"<br/>Email:"+email+"<br/>Subject:"+subject+"<br/>Message:"+message;
}
  Email.send({
    Host : "smtp.gmail.com",
    Username : "letrunghan99@gmail.com",
    Password : "nhan0135792468",
    To : 'letrungnhan99@gmail.com',
    From : email,
    Subject : "Email from"+name,
    Body : Body
}).then(
  message => {
    if(message == "OK")
    {
      alert('Your email sent');
    }
    else
    {
      console.error(message);
       alert('Error');
    }
  });

