  var loader = document.getElementById("preload");
  window.addEventListener('load',function(){
    loader.style.display = "none";
  });


  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  var from_email =  document.getElementById("from_email");
  var to_email = "letrungnhan99@gmail.com";
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");

  var email_error = document.getElementById("email_error");
  var subject_error = document.getElementById("subject_error");
  var message_error = document.getElementById("message_error");
  var send_success = document.getElementById("send_mail-success");

  from_email.onblur = function(){
    send_success.innerHTML = "";
     if(from_email.value =="")
      {
        email_error.innerHTML = "&emsp;Your email is not empty!<br/>";
        from_email.style.border = '2px solid red';
      }
      else if(from_email.value.match(pattern) == null)
      {
       email_error.innerHTML = "&emsp;Please enter valid email address!<br/>";
       from_email.style.border = '2px solid red';
      }
      else
      {
        email_error.innerHTML="";
        from_email.style.border = '2px solid green';
      }
  };
  
   subject.onblur = function(){
    send_success.innerHTML = "";
    if(subject.value =="")
    {
      subject_error.innerHTML = "&emsp;Subject is not empty!<br/>";
      subject.style.border = '2px solid red';
    }
     else
      {
       subject_error.innerHTML="";
       subject.style.border = '2px solid green';
      }
  };

  message.onblur = function(){
    send_success.innerHTML = "";
    if(message.value=="")
    {
      message_error.innerHTML = "&emsp;Message is not empty!<br/>";
      message.style.border = '2px solid red';
    }
     else
      {
        message_error.innerHTML="";
        message.style.border = '2px solid green';
      }
  };

  function send_mail(params)
  {
    if(from_email.value =="" ||from_email.value.match(pattern) == null|| subject.value ==""|| message.value=="")
    {
      send_success.innerHTML ="Thông tin không hợp lệ!";
      send_success.style.color = "red";
    }
    else
    {
      var tempParams = {
      from_email : from_email.value,
      to_email : to_email.value,
      subject : subject.value,
      message : message.value,
      };

      emailjs.send('gmail_cv','template_052geuf',tempParams).then(function(res){
      if(res.status == 200)
      {
        from_email.value ="";
        subject.value="";
        message.value="";

        from_email.style.border = '1px solid black';
        subject.style.border = '1px solid black';
        message.style.border = '1px solid black';

       send_success.innerHTML = "Your mail was send success.";
       send_success.style.color = "green";
      }
      else
      {
        send_success.innerHTML = "Sorry, there were some problems.";
      }
     // console.log('success',res.status);
    });
    }
  }





  //Scroll 400px menu đổi màu background và ngược lại
  var menu = document.getElementById("menu");
    if(window.innerWidth < 600)
    {
      window.addEventListener('scroll', function(){
        if(window.scrollY > 1)
        {
          menu.style.backgroundColor = '#776CE1';
          menu.style.border = '1px solid white';
          menu.style.transition = '0.5s';
          menu.style.webkitTransition = '0.5s';
          menu.style.msTransition = '0.5s';
          menu.style.MozTransition = '0.5s';
          menu.style.OTransition = '0.5s';
        }
        else
        {
          menu.style.backgroundColor = 'transparent';
          menu.style.border = 'none';
          menu.style.transition = '0.5s';
          menu.style.webkitTransition = '0.5s';
          menu.style.msTransition = '0.5s';
          menu.style.MozTransition = '0.5s';
          menu.style.OTransition = '0.5s';
        }
      });
    }
    else if(window.innerWidth > 600 && window.innerWidth < 800)
    {
        window.addEventListener('scroll', function(){
        if(window.scrollY > 100)
        {
          menu.style.backgroundColor = '#776CE1';
          menu.style.border = '1px solid white';
          menu.style.transition = '0.5s';
          menu.style.webkitTransition = '0.5s';
          menu.style.msTransition = '0.5s';
          menu.style.MozTransition = '0.5s';
          menu.style.OTransition = '0.5s';
        }
        else
        {
          menu.style.backgroundColor = 'transparent';
          menu.style.border = 'none';
          menu.style.transition = '0.5s';
          menu.style.webkitTransition = '0.5s';
          menu.style.msTransition = '0.5s';
          menu.style.MozTransition = '0.5s';
          menu.style.OTransition = '0.5s';
        }
      });
    }
    else
    {
        window.addEventListener('scroll', function(){
        if(window.scrollY > 200)
        {
          menu.style.backgroundColor = '#776CE1';
          menu.style.border = '1px solid white';
          menu.style.transition = '0.5s';
          menu.style.webkitTransition = '0.5s';
          menu.style.msTransition = '0.5s';
          menu.style.MozTransition = '0.5s';
          menu.style.OTransition = '0.5s';
        }
        else
        {
          menu.style.backgroundColor = 'transparent';
          menu.style.border = 'none';
          menu.style.transition = '0.5s';
          menu.style.webkitTransition = '0.5s';
          menu.style.msTransition = '0.5s';
          menu.style.MozTransition = '0.5s';
          menu.style.OTransition = '0.5s';
        }
      });
    }


  //Nhấn link trên menu sẽ nhảy tới khu vực nội dung tương ứng
  
  var link_top = document.getElementById("link_top");
  var hire_me = document.getElementById("btn_hire");
  var link_about = document.getElementById("link_about");
  var link_skill = document.getElementById("link_skill");
  var link_exp = document.getElementById("link_exp");
  var link_edu = document.getElementById("link_edu");
  var link_contact = document.getElementById("link_contact");

  var header = document.getElementById("header");
  var area_about = document.getElementById("area_about");
  var area_skill = document.getElementById("area_skill");
  var area_exp = document.getElementById("area_exp");
  var area_edu = document.getElementById("area_edu");
  var area_contact = document.getElementById("area_contact");


  link_top.addEventListener('click',function(){
    header.scrollIntoView();
    header.style.transition = '0.5s';
    header.style.webkitTransition = '0.5s';
    header.style.msTransition = '0.5s';
    header.style.MozTransition = '0.5s';
    header.style.OTransition = '0.5s';
  });
  link_about.addEventListener('click',function(){
    area_about.scrollIntoView();
    area_about.style.webkitTransition = '0.5s';
    area_about.style.msTransition = '0.5s';
    area_about.style.MozTransition = '0.5s';
    area_about.style.OTransition = '0.5s';
  });
  link_skill.addEventListener('click',function(){
    area_skill.scrollIntoView();
    area_skill.style.webkitTransition = '0.5s';
    area_skill.style.msTransition = '0.5s';
    area_skill.style.MozTransition = '0.5s';
    area_skill.style.OTransition = '0.5s';
  });
  link_exp.addEventListener('click',function(){
    area_exp.scrollIntoView();
    area_exp.style.webkitTransition = '0.5s';
    area_exp.style.msTransition = '0.5s';
    area_exp.style.MozTransition = '0.5s';
    area_exp.style.OTransition = '0.5s';
  });
  link_edu.addEventListener('click',function(){
    area_edu.scrollIntoView();
    area_edu.style.webkitTransition = '0.5s';
    area_edu.style.msTransition = '0.5s';
    area_edu.style.MozTransition = '0.5s';
    area_edu.style.OTransition = '0.5s';
  });
  link_contact.addEventListener('click',function(){
    area_contact.scrollIntoView();
    area_contact.style.webkitTransition = '0.5s';
    area_contact.style.msTransition = '0.5s';
    area_contact.style.MozTransition = '0.5s';
    area_contact.style.OTransition = '0.5s';
  });
   hire_me.addEventListener('click',function(){
    area_contact.scrollIntoView();
    area_contact.style.webkitTransition = '0.5s';
    area_contact.style.msTransition = '0.5s';
    area_contact.style.MozTransition = '0.5s';
    area_contact.style.OTransition = '0.5s';
  });
