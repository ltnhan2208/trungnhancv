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
          console.log(window.scrollY);
        }
        else
        {
          menu.style.backgroundColor = 'transparent';
          menu.style.border = 'none';
          menu.style.transition = '0.5s';
        }
      });
    }
    else if(window.innerWidth > 600 && window.innerWidth < 800)
    {
        if(window.scrollY > 100)
        {
          menu.style.backgroundColor = '#776CE1';
          menu.style.border = '1px solid white';
          menu.style.transition = '0.5s';

        }
        else
        {
          menu.style.backgroundColor = 'transparent';
          menu.style.border = 'none';
          menu.style.transition = '0.5s';
        }
    }
    else
    {
       if(window.scrollY > 400)
        {
          menu.style.backgroundColor = '#776CE1';
          menu.style.border = '1px solid white';
          menu.style.transition = '0.5s';

        }
        else
        {
          menu.style.backgroundColor = 'transparent';
          menu.style.border = 'none';
          menu.style.transition = '0.5s';
        }
    }


  //Nhấn link trên menu sẽ nhảy tới khu vực nội dung tương ứng
  
  var link_top = document.getElementById("link_top");
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
  });
  link_about.addEventListener('click',function(){
    area_about.scrollIntoView();
  });
  link_skill.addEventListener('click',function(){
    area_skill.scrollIntoView();
  });
  link_exp.addEventListener('click',function(){
    area_exp.scrollIntoView();
  });
  link_edu.addEventListener('click',function(){
    area_edu.scrollIntoView();
  });
  link_contact.addEventListener('click',function(){
    area_contact.scrollIntoView();
  });
