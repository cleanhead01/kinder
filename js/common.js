(function ($) {
  var deviceSize = 767;
  function scrollOX(status) {
    $("html").css({
      overflowY: status,
    });
    var htmlWidth = $("html").width();
    return htmlWidth;
  }
  var swh = scrollOX("hidden"),
    sws = scrollOX("scroll"),
    swd = swh - sws;
  if (swd > 0) {
    deviceSize = deviceSize - swd;
  }

  init();
  function init() {
    var ww = $(window).width();
    if (ww > deviceSize && !$("html").hasClass("pc")) {
      $("html").addClass("pc").removeClass("mobile");
      $(".logoNav .nav").show();
      $(".depth1 > li").removeClass("on");
      $(".open_nav, .close_nav, .depth2").hide();
    } else if (ww <= deviceSize && !$("html").hasClass("mobile")) {
      $("html").addClass("mobile").removeClass("pc");
      $(".open_nav").show();
      $(".logoNav .nav, .depth2").hide();
    }
  }

  $(window).on("resize", function () {
    init();
  });

  $("#containerBox").load("main.html");

  // 모바일화면에서 1단계메뉴 클릭했을때 2단계메뉴 보이게 하고,
  // 2단계 메뉴가 없으면 1단계메뉴 페이지 로드시키기
  $(".depth1 > li > a").on("click", function (e) {
    e.preventDefault();
    if ($("html").hasClass("mobile")) {
      if ($(this).next().is(".depth2")) {
        $(this).parent().toggleClass("on");
        $(this).parent().find(".depth2").stop().slideToggle(300);
        $(this)
          .parent()
          .siblings()
          .each(function () {
            if ($(this).find(".depth2").css("display") === "block") {
              $(this).find(".depth2").slideUp(300);
              $(this).removeClass("on");
            }
          });
      } else if (!$(this).next().is(".depth2")) {
        var url = $(this).attr("href");
        $("#container").remove();
        $("#containerBox").load(url);
        $(".open_nav").show();
        $(".logoNav .nav, .close_nav").hide();
        $(".depth1 > li").removeClass("on");
      }
    } else if ($("html").hasClass("pc")) {
      var url = $(this).attr("href");
      $("#container").remove();
      $("#containerBox").load(url);
    }
  });

  // pc화면에서 1단계메뉴에 호버했을때 2단계메뉴 보이게 하기
  $(".depth1 > li").hover(
    function () {
      if ($("html").hasClass("pc")) {
        $(this).find(".depth2").stop().slideDown(300);
      }
    },
    function () {
      if ($("html").hasClass("pc")) {
        $(this).find(".depth2").stop().slideUp(300);
      }
    }
  );

  // 2단계 메뉴 클릭하면 모든 화면에서 페이지 로드시킨 후, 모바일화면에서는 햄버거 버튼만 보이게 하기
  $(".nav .depth2 > li > a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#container").remove();
    $("#containerBox").load(url);
    if ($("html").hasClass("mobile")) {
      $(".open_nav").show();
      $(".logoNav .nav, .depth2, .close_nav").hide();
      $(".depth1 > li").removeClass("on");
    }
  });

  $(".login a, h1 a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#container").remove();
    $("#containerBox").load(url);
  });

  // 햄버거버튼 클릭시 네비박스 나타나기
  $(".logoNav .open_nav").on("click", function () {
    $(this).next().stop().slideDown(300);
    $(this).hide();
    $(this).nextAll(".close_nav").css({ display: "block" });
  });

  // 닫기버튼 클릭시 네비박스 사라지기
  $(".logoNav .close_nav").on("click", function () {
    $(this).prev().stop().slideUp(300);
    $(this).hide();
    $(this).prevAll(".open_nav").css({ display: "block" });
    $(".depth2").hide();
    $(".logoNav .nav .depth1 > li").removeClass("on");
  });


  $('.slideInner').slick({
    autoplay: true,            
    autoplaySpeed: 3500, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
    responsive:[{
        breakpoint:1025,  // 1px 큰 값으로 설정해야 1024px 부터 작동됨
        settings:{
            arrows:false
        }
    }]
})

$('.touchcon .rotation ul').on('touchmove', function(){
  $(this).stop().animate({
    marginLeft:"-33.33%"
  }, 500, function(){
    $(this).appendTo(".rotation").css({
      marginLeft:"0%"
    })
  })
})



})(jQuery);
