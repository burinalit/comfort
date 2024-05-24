var swiper = new Swiper(".main__slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
var swiper1 = new Swiper('.gallery_list .swiper-container', {
	slidesPerView: 'auto',
	slidesPerView: 2.5,
	spaceBetween: 20,
	autoHeight:true,
	navigation: {
	  nextEl: '.next',
	  prevEl: '.prev',
	},
  });

$( ".rooms_page .list_elem" ).each(function( index ) {
	var elem = $(this).children('.content_media').data('elemid');
	$('#room'+elem+' .slider_item .room_slider').slick({
	  infinite: true,
	  arrows: false,
	  fade: false,
	  dots: true,
	  autoplay: false,
	  speed: 800,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
});

$(document).ready(function(){
    $('.quest_faq_item').click(function () {
      $(this).toggleClass('active').next().slideToggle();
      $('.quest_faq_item').not(this).removeClass('active').next().slideUp();
    });
});

$(document).ready(function(){
	$("#reserve_block").hide();
    $("#pay_block .pay_item").click(function(){
        $("#pay_block").hide();
		$("#reserve_block").show();
    });
});
$(document).ready(function(){
	$("#search_block").hide();
    $(".topinfo_block .search_elem").click(function(){
		$("#search_block").show();
    });
	$("#search_block .close-button").click(function(){
		$("#search_block").hide();
	});
	
	
	
});





$(function() {
	$(".header__burger").click(function() {
		 $(".menu-mob").addClass('open');
	});
	$(".menu-mob__close").click(function() {
		 $(".menu-mob").removeClass('open');
	})
});

$("[data-fancybox]").fancybox({
		beforeLoad: function(instance, slide) {
			var item_id = slide.opts.$orig.data('item-id');
			$('#item_id').val(item_id);
			$('#item_id_span').html(item_id);
		}
});