(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


		// Sticky Navbar
    $(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
					$('.sticky-top').addClass('shadow-sm').css('top', '-1px');
			} else {
					$('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
			}
		});


		// Navbar Collapse
		$("#navbarCollapse >.navbar-nav >a").click(function(){
			if($(this).parent().parent().hasClass("show")){
				$(this).parent().parent().removeClass("show")
			}
		});


     // Fact Counter
		$('.counter-value').each(function(){
				$(this).prop('Counter',0).animate({
						Counter: $(this).text()
				},{
						duration: 2000,
						easing: 'easeInQuad',
						step: function (now){
								$(this).text(Math.ceil(now));
						}
				});
		});


		// Experience
    $('.experience').waypoint(function () {
			$('.progress .progress-bar').each(function () {
					$(this).css("width", $(this).attr("aria-valuenow") + '%');
			});
		}, {offset: '80%'});

		
		// Pie Chart
		var pieData = [{
			values: [5613, 4768],
			labels: ['女性', '男性'],
			type: 'pie',
			marker: {
				colors: [
						'#E15759',
						'#4E79A7'
				]
		}
		}];
		var pieLayout = {
			title: {
				text: '受害者總體性別比',
				font: {
						size: 24
				}
			}
		};
		Plotly.newPlot('pieChart', pieData, pieLayout);


		// County Bar Chart
		var barData = [{
			x: [
				'臺北市',
				'新北市',
				'臺中市',
				'高雄市',
				'桃園市',
				'臺南市',
				'彰化縣',
				'屏東縣',
				'新竹縣',
				'新竹市',
				'苗栗縣',
				'南投縣',
				'花蓮縣',
				'基隆市',
				'宜蘭縣',
				'嘉義縣',
				'嘉義市',
				'臺東縣',
				'雲林縣',
				'金門縣',
				'澎湖縣',
				'連江縣',
			],
			y: [
				4607,
				4253,
				3931,
				3252,
				3028,
				2256,
				1249,
				917,
				666,
				877,
				591,
				530,
				395,
				437,
				495,
				444,
				382,
				391,
				676,
				98,
				75,
				12
			],
			type: 'bar',
			marker: {
				color: '#3F9E9F',
			}
		}];
		var barLayout = {
				title: {
					text: '各縣市詐騙件數統計',
					font: {
							size: 24
					}
				},
				xaxis: {
						title: '縣市',
						tickangle: -45
				},
				yaxis: {
						title: '案件數'
				}
		};
		Plotly.newPlot('barChartCounty', barData, barLayout);


		// Article carousel
    $(".article-carousel").owlCarousel({
			autoplay: true,
			smartSpeed: 1000,
			center: false,
			dots: false,
			loop: true,
			margin: 50,
			nav : true,
			navText : [
					'<i class="bi bi-arrow-left"></i>',
					'<i class="bi bi-arrow-right"></i>'
			],
			responsiveClass: true,
			responsive: {
					0:{
							items:1
					},
					768:{
							items:1
					},
					992:{
							items:1
					}
			}
		});






})(jQuery);

