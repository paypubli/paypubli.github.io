$(document).ready(function() {
  const ano = new Date();

  $('#ano').html(ano.getFullYear());

  $("input[name='PHONE']").inputmask("99 - 99999-9999");

  $('#mc-embedded-subscribe-form').submit(function (e) {
      e.preventDefault();
      $.ajax({
          url: 'https://paypubli.us19.list-manage.com/subscribe/post?u=4fb25629572c3c820d598d597&amp;id=5ba34d2f45',
          type: 'GET',
          data: $('#mc-embedded-subscribe-form').serialize(),
          dataType: 'jsonp',
          contentType: "application/json; charset=utf-8",
          success: function (data) {
             if (data['result'] != "success") {

                  console.log(data['msg']);
             } else {
                  //SUCCESS - Do what you like here
                  window.location = 'https://paypubli.github.io/segredos-do-ifood/v1/';
             }
          }
      });
  });
});
