function send_mail(params)
{
  var from_email =  document.getElementById("from_email").value;
  var to_email = "letrungnhan99@gmail.com";
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var email_error = document.getElementById("email_error");
  var subject_error = document.getElementById("subject_error");
  var message_error = document.getElementById("message_error");
  if(from_email =="")
  {
   email_error.innerHTML = "&emsp;Không được trống!<br/>";
  }
  else if(subject =="")
  {
    subject_error.innerHTML = "&emsp;Không được trống!<br/>";
  }
  else if(message=="")
  {
    message_error.innerHTML = "&emsp;Không được trống!<br/>";
  }
  else
  {
    var tempParams = {
    from_email : from_email,
    to_email : to_email,
    subject : subject,
    message : message,
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
