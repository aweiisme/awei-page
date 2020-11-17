$(document).ready(function () {
  // 滾輪下滑特效
  var s = skrollr.init();

  //   隨滾輪消失的事件
  $(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0) $(".explore").addClass("at_top");
    else $(".explore").removeClass("at_top");

    if ($(window).scrollTop() <= 0)
      $(".navbar")
        .addClass("at_top")
        // .removeClass("navbar-light")
        .removeClass("bg-light");
    else
      $(".navbar")
        .removeClass("at_top")
        // .addClass("navbar-light")
        .addClass("bg-light");
  });

  $('.scroll').on("click", "a", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(target).offset().top }, 500);
  });


  var vm = new Vue({
    el: "#work",
    data: {
      works: []
    },
    mounted: function () {
      var vobj = this;
      $.ajax({
        url:
          "works",
        success: function (res) {
          vobj.works = JSON.parse(res);
        }
      });
    }
  });

  $(".send").click(function (e) { 
    $('.send').html('傳送中...'); 
    setTimeout(() => {
      $("#inputname").val("");
      $("#inputemail").val("");
      $("#inputtextarea").val("");
      $('.send').html('已送出，感謝您的留言');
      setTimeout(() => {
        $('.send').html('可再次留言');
        setTimeout(() => {
          $('.send').html('送出');
        }, 1000);
      }, 2000);
    }, 2000);
    
  });
  
});