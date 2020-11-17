$(document).ready(function () {
  
  var waittime = 0;
  info = ['H','i',',', ' I', ' a','m', ' H','s','i','e','h',' C','h','e','n','g','-','W','e','i',
      '<br>','嗨',' ~',' 我','是','正','偉','歡','迎','來','到','這','裡','！'];

  $(".h4").ready(function () {

    // $(".h4").text("");
    setInterval(function () {
      $(".h4").append(info[waittime]);
      waittime += 1;
    }, 150); 

    setTimeout(() => {
      $('h5').addClass('delay');
      $('.fas.fa-caret-down').addClass('delay');
    }, 5500);
    

  });




});