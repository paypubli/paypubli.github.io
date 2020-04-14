$(document).ready(function() {
  const ano = new Date();

  $('#ano').html(ano.getFullYear());

  $("input[name='PHONE']").inputmask("99 - 99999-9999");

});
