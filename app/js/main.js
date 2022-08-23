$(function () {
	$('select').selectric({
		maxHeight: 170,
		disableOnMobile: false
	});

	window.onload = function () {
		var $button = $('.wheel_btn'),
			$spinner = $('.wheel_spinner--main'),
			$spinnerTwo = $('.wheel_spinner--center'),
			$popupOverlay = $('.popup_overlay'),
			$popupWindow = $('.popup_window');

		$button.click(function () {
			if ($button.hasClass('spin')) {
				spin();
			}
		});

		function spin() {
			$button.removeClass('spin').addClass('disabled');

			$spinner
				.addClass('wheel_spinner_animated_1')
				.removeClass('wheel_spinner_animated')

			$spinnerTwo
				.addClass('wheel_spinner_animated_2')
				.removeClass('wheel_spinner_animated--small');

			setTimeout(function () {
				// localStorage.currentSpin = 'HTMLC_1237_spin';
				$popupOverlay.fadeIn();
				$popupWindow.fadeIn();
			}, 7000);
		}
	};
});
