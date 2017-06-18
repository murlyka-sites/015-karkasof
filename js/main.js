$(document).ready(function() {

	$(".main-slider").slick({
		arrows: false,
		dots: true,
		asNavFor: ".main-slider-bottom__items"
	});

	$(".main-slider-bottom__items").slick({
		arrows: false,
		slidesToShow: 3,
		asNavFor: ".main-slider",
		focusOnSelect: true
	});

	$(".main-versions__tabs").slick({
		arrows: false,
		slidesToShow: 5,
		asNavFor: ".main-versions__contents",
		focusOnSelect: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2
			}
		}]
	});

	$(".main-versions__contents").slick({
		arrows: false,
		slidesToShow: 1,
		asNavFor: ".main-versions__tabs"
	})

	$(".main-gallery__items").slick({
		slidesToShow: 3,
		arrows: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}]
	});



	$(".reviews__items").slick({
		asNavFor: ".reviews__prs",
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false
			}
		}]
	})

	$(".reviews__prs").slick({
		centerMode: true,
		slidesToShow: 5,
		variableWidth: true,
		focusOnSelect: true,
		arrows: false,
		asNavFor: ".reviews__items"
	});

	$(".tags-filter__tag").click(function() {
		$(this).toggleClass("tags-filter__tag_active");

		var checkbox = $(this).find("input[type=checkbox], input[type=radio]");

		checkbox.prop('checked', !checkbox.prop('checked'))
	});

	$(".filter-settings__range-price").ionRangeSlider({
		 type: "double",
		 hide_from_to: true,
		 onChange: function (data) {
		 	
		 	$(".filter-settings__range-fields-group-field-from-price").val(data.from);
		 	$(".filter-settings__range-fields-group-field-to-price").val(data.to);
		 } 
	});

	$(".filter-settings__range-fields-group-field-to-price").change(function () {
		$(".filter-settings__range-price").data("ionRangeSlider").update({
			to: $(this).val()
		});
	})

	$(".filter-settings__range-fields-group-field-from-price").change(function () {
		$(".filter-settings__range-price").data("ionRangeSlider").update({
			from: $(this).val()
		});
	})

	$(".filter-settings__range-area").ionRangeSlider({
		 type: "double",
		 hide_from_to: true,
		 onChange: function (data) {
		 	
		 	$(".filter-settings__range-fields-group-field-from-area").val(data.from);
		 	$(".filter-settings__range-fields-group-field-to-area").val(data.to);
		 } 
	});

	$(".filter-settings__range-fields-group-field-to-area").change(function () {
		$(".filter-settings__range-area").data("ionRangeSlider").update({
			to: $(this).val()
		});
	})

	$(".filter-settings__range-fields-group-field-from-area").change(function () {
		$(".filter-settings__range-area").data("ionRangeSlider").update({
			from: $(this).val()
		});
	})

	$('input.custom[type=checkbox], input.custom[type=radio]').styler();


	$(".filter-sorts__criteria").click(function() {
		if($(this).hasClass("filter-sorts__criteria_active")) {
			$(this).toggleClass("filter-sorts__criteria_order_desc");
		} else {
			$(this).parent().find(".filter-sorts__criteria_active").removeClass("filter-sorts__criteria_active");
			$(this).addClass("filter-sorts__criteria_active");
		}
	});

	$(".articles__items").slick({
		slidesToShow: 3,
		arrows: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".nav-top__icon").click(function() {
		$(".nav-top").toggleClass("nav-top_open")
	});

	$(".project__tabs").slick({
		arrows: false,
		variableWidth: true,
		slidesToShow: 5,
		infinite: false,
		focusOnSelect: true, 
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				centerMode: true
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				centerMode: true
			}
		}]
	});

	$(".project-gallery__photos").slick({
		arrows: false,
		asNavFor: ".project-gallery__prs",
		vertical: true,
		verticalSwiping: true,
		infinite: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				vertical: false,
				verticalSwiping: false
			}
		}]
	});

	$(".project-gallery__prs").slick({
		slidesToShow: 2,
		vertical: true,
		verticalSwiping: true,
		infinite: false,
		asNavFor: ".project-gallery__photos",
		focusOnSelect: true,
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".project-options-tabs").slick({
		slidesToShow: 3,
		arrows: false,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".project-options-keys").slick({
		slidesToShow: 10,
		arrows: false,
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		infinite: false,
		asNavFor: ".project-options-tables",
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 5
			}
		}]
	});

	$(".project-options-tables").slick({
		slidesToShow: 1,
		arrows: false,
		infinite: false,
		// vertical: true,
		swiping: false,
		touchMove: false,
		draggable: false,
		fade: true,
		asNavFor: ".project-options-keys",
		responsive: [{
			breakpoint: 768,
			settings: {
				vertical: false
			}
		}]
	});

	$(".project-faq-item__quest").click(function() {
		$(this).next().toggleClass("project-faq-item__answer_open")
	});

	$(".catalog-rec__items").slick({
		slidesToShow: 3,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}]
	});

});
