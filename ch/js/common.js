$(function () {

	MainAction.EventInit();
});

var MainAction = {
	EventInit: function () {
		MainAction.Gnb();
		MainAction.FixSliderAdd();
		MainAction.openMotion();
		MainAction.Slider();
		MainAction.ScrollEvent();
	},
	Gnb: function () {
		$("#header a").on("mouseenter", function () {
			$("body").addClass("gnb_on st");
		});
		$("#header").on("mouseleave", function () {
			$("body").removeClass("gnb_on st");
		});
	},
	Slider: function () {
		$('.Mslider').slick({
			infinite: true,
			arrows: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
		}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$(".pcIndex .Mslider .slick-arrow").removeClass("on");
		}).on('afterChange', function (event, slick, currentSlide, nextSlide) {
			var CopyCont = $('.Mslider .item').eq(currentSlide + 1).find('.imgWrap').find("img").attr("src");
			$('.ScrollTopFix').html("").append("<div style='background-image: url(" + CopyCont + ");'></div>");

			$('.Mslider .item').removeClass("on");
			MainAction.SetTime(".pcIndex .Mslider .slick-arrow", "on", "1200");
			$('.Mslider .item').eq(currentSlide + 1).addClass("on");
		});
	},
	FixSliderAdd: function () {
		var CopyCont = $('.Mslider .item').eq(0).find('.imgWrap').find("img").attr("src");
		$('.ScrollTopFix').html("").append("<div style='background-image: url(" + CopyCont + ");'></div>");
	},

	openMotion: function () {
		MainAction.SetTime(".pcIndex .Mslider .item.first", "on", "500");
		MainAction.SetTime(".pcIndex .Mslider .slick-arrow", "on", "1800");
		MainAction.SetTime(".Mslider", "open1", "500");
	},

	SetTime: function (obj, Class, Time) {
		setTimeout(function () {
			$(obj).addClass(Class);
		}, Time);
	},
	SetTimeRemove: function (obj, Class, Time) {
		setTimeout(function () {
			$(obj).removeClass(Class);
		}, Time);
	},
	ScrollEvent: function () {
		var Scrollflg  = "N";
		var Scrollflg2  = "N";
		$(window).on("scroll", function () {
			var height = $(document).scrollTop();

			//style1
			if($(".ScrollTopFix").hasClass("style1")){
				if(Scrollflg == "N"){
					if (height > 200) {
						$(".imgWrap").css("opacity", "0");
						MainAction.SetTime(".ScrollTopFix", "set", "0");
						MainAction.SetTime(".ScrollTopFix", "on", "0");

						setTimeout(function(){
							Scrollflg = "Y";
						},300);
					}
				}

				if(Scrollflg == "Y"){
					if (height < 200) {
						MainAction.SetTimeRemove(".ScrollTopFix", "on", "0");
						MainAction.SetTimeRemove(".ScrollTopFix", "set", "300");

						setTimeout(function(){
							Scrollflg = "N";
						},300);
					}
				}
			}
			//style2
			if($(".ScrollTopFix").hasClass("style2")){
				if(Scrollflg == "N"){
					if (height > 200) {
						$(".imgWrap").css("opacity", "0");
						MainAction.SetTime(".ScrollTopFix", "set", "0");
						MainAction.SetTime(".ScrollTopFix", "on", "0");

						setTimeout(function(){
							Scrollflg = "Y";
						},300);
					}
				}

				if(Scrollflg == "Y"){
					if (height < 200) {
						MainAction.SetTimeRemove(".ScrollTopFix", "on", "0");
						MainAction.SetTimeRemove(".ScrollTopFix", "set", "300");

						setTimeout(function(){
							Scrollflg = "N";
						},300);
					}
				}
			}

			if ($(".pcIndex .TabList").index() != "-1") {
				if (!$(".snb").hasClass("on")) {
					if (height > 166) {
						$(".snb").addClass("on");
					}
				} else {
					if (height < 166) {
						$(".snb").removeClass("on");
					}
				}

				if (height > $(".pcIndex .TabList").offset().top - ($(window).height() - 200)) {
					$(".pcIndex .TabList").addClass("on");

					$(".pcIndex .TabList li").eq(0).addClass("on");
					$(".pcIndex .TabList li").eq(1).addClass("on");
					$(".pcIndex .TabList li").eq(2).addClass("on");
				}

				if (height > $(".pcIndex .TabList").offset().top - 100) {
					$(".pcIndex .TabList li").eq(3).addClass("on");
					$(".pcIndex .TabList li").eq(4).addClass("on");
					$(".pcIndex .TabList li").eq(5).addClass("on");
				}

				if (height > $(".pcIndex .TabList").offset().top + 800) {
					$(".pcIndex .TabList li").eq(6).addClass("on");
					$(".pcIndex .TabList li").eq(7).addClass("on");
					$(".pcIndex .TabList li").eq(8).addClass("on");
				}

				if (height > $(".pcIndex .onA .itemList li").offset().top - 1000) {
					MainAction.SetTime(".pcIndex .onA .itemList li:nth-child(1)", "on", "0");
					MainAction.SetTime(".pcIndex .onA .itemList li:nth-child(2)", "on", "500");
				}
			}

			if ($(".pcIndex .history").index() != "-1") {
				if (!$(".snb").hasClass("on")) {
					if (height > 300) {
						$(".snb").addClass("on");

						
					}
				} else {
					if (height < 300) {
						$(".snb").removeClass("on");
					}
				}

				if(Scrollflg2 == "N"){
					if (height > 150) {
						MainAction.SetTime(".Himg", "set", "0");
						MainAction.SetTime(".Himg", "on", "0");

						setTimeout(function(){
							Scrollflg2 = "Y";
						},300);
					}
				}

				if(Scrollflg2 == "Y"){
					if (height < 150) {
						MainAction.SetTimeRemove(".Himg", "on", "0");
						MainAction.SetTimeRemove(".Himg", "set", "300");

						setTimeout(function(){
							Scrollflg2 = "N";
						},300);
					}
				}
			}
		});
	}
}