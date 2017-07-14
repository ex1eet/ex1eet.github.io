
$(document).ready(function(){
	          $('.slick-slider').slick({dots: true,
		        infinite: true,
		        slidesToShow: 3,
		        slidesToScroll: 3});	
	        /* $('.click-slider').slick(); */

			        $(".slowly").on("click", function (event) {
		          //отменяем стандартную обработку нажатия по ссылке
		          event.preventDefault();
		          //забираем идентификатор бока с атрибута href
		          var id  = $(this).attr('href'),
		          //узнаем высоту от начала страницы до блока на который ссылается якорь
		            top = $(id).offset().top;
		          //анимируем переход на расстояние - top за 600 мс
		          $('body,html').animate({scrollTop: top}, 600);
		        });
	        });