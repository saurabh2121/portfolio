$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});


// email message send 

function sendemail() {

  var name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#project_subject').val();
  var message = $('#message').val();

  // var body = $('#body').val();

  var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
  //console.log(name, phone, email, message);


}
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "image12112002@gmail.com",
  Password : "e3aca389-6231-490b-9cfe-90898274e8e3",
  To : 'saurabhjnv2013@gmail.com',
  From : 'image12112002@gmail.com',
  Subject : "New project ",
  Body : "And this is the body"
}).then(
  message => alert(message)
);