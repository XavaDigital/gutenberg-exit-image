(function ($) {
	$(document).ready(function () {
		$("body").on("click", function (event) {
			var entranceAnimations = [
				"backInDown",
				"backInLeft",
				"backInRight",
				"backInUp",
				"bounceIn",
				"bounceInDown",
				"bounceInLeft",
				"bounceInRight",
				"bounceInUp",
				"fadeInDownBig",
				"fadeInLeftBig",
				"fadeInRightBig",
				"fadeInUpBig",
				"flip",
				"lightSpeedInRight",
				"lightSpeedInLeft",
				"rotateIn",
				"rotateInDownLeft",
				"rotateInDownRight",
				"jackInTheBox",
				"rollIn",
				"zoomIn",
				"zoomInDown",
				"zoomInLeft",
				"zoomInRight",
				"zoomInUp",
			];

			var exitAnimations = [
				"backOutDown",
				"backOutLeft",
				"backOutRight",
				"backOutUp",
				"bounceOut",
				"bounceOutDown",
				"bounceOutLeft",
				"bounceOutRight",
				"bounceOutUp",
				"fadeOutDownBig",
				"fadeOutLeftBig",
				"fadeOutRightBig",
				"fadeOutUpBig",
				"flip",
				"hinge",
				"lightSpeedOutRight",
				"lightSpeedOutLeft",
				"rotateOut",
				"rotateOutDownLeft",
				"rotateOutDownRight",
				"jackOutTheBox",
				"rollOut",
				"zoomOut",
				"zoomOutDown",
				"zoomOutLeft",
				"zoomOutRight",
				"zoomOutUp",
			];

			var randEnt = Math.floor(Math.random() * entranceAnimations.length);
			var randExit = Math.floor(Math.random() * exitAnimations.length);

			if ($(event.target).is(".wp-block-exit-image-image")) {
				$(event.target).addClass(
					"animate__animated animate__" + exitAnimations[randExit]
				);
				setTimeout(() => {
					$(event.target).removeClass("animate__" + exitAnimations[randExit]);
					$(event.target).addClass("animate__" + entranceAnimations[randEnt]);
					setTimeout(() => {
						$(event.target).removeClass(
							"animate__" + entranceAnimations[randEnt]
						);
					}, 3000);
				}, 1000);
			}
		});
	});
})(jQuery);
