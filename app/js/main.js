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
			$popupBonus = $('.popup_bonus'),
			$popupWindow = $('.popup_window'),
			$claimBonus = $('#claimBonus');


		$button.click(function () {
			if ($button.hasClass('spin')) {
				spin();
			}
		});

		$claimBonus.on('click', function () {
			localStorage.currentSpin = 'HTMLC_1237_spin';
			$popupBonus.fadeOut();
			$popupWindow.fadeIn();
		});

		function spin() {
			$button.removeClass('spin').addClass('disabled');

			$spinner
				// .addClass('wheel_spinner_animated_1')
				.addClass('wheel_spinner_animated_again')
				.removeClass('wheel_spinner_animated')

			setTimeout(function () {
				$spinner
					.removeClass('wheel_spinner_animated_again')
					.addClass('wheel_spinner_animated_1')
			}, 5000);

			$spinnerTwo
				.addClass('wheel_spinner_animated_2')
				.removeClass('wheel_spinner_animated--small');

			setTimeout(function () {
				// localStorage.currentSpin = 'HTMLC_1237_spin';
				$popupOverlay.fadeIn();
				$popupBonus.fadeIn();
			}, 10700);
		}
	};
});