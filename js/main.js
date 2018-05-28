var isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$(document).ready(function () {
  $('#email-popup button').click(function (e) {
    e.preventDefault();
    
    $('#email-popup input').each(function () {
      if ($(this).val() == '') {
        $(this).css('border','2px solid #b91517');
        $(this).parent().find('small').css('display','block');        
      } else {
        $(this).css('border','2px solid #c1c1c1');
        $(this).parent().find('small').css('display','none');
      }                                         
      
      if ($(this).attr('name') == 'email' && isEmail.test($(this).val()) == false && $(this).val() != '') {
        $(this).css('border','2px solid #b91517');
        $(this).parent().find('small').css('display','block');
      } else {
        $(this).parent().find('small').css('display','none');
      }
    
    });
  });
});
