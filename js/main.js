function documentReady(fn) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", fn)
	} else {
		fn();
	}
}

documentReady(() => {
	const options = BodyScrollOptions = {
		reserveScrollBarGap: true,
	};

	// открытие меню
	const menuButton = $(".js-open-menu");
	const menuButtonClose = $(".site-menu__close-button");
	const menu = $(".site-menu");

	menuButton.on("click", function(){
		menu.addClass("is-open");
		menu.css("display", "block");

		menu.find(".site-menu__container").css("opacity", "0");

		setTimeout(function(){
			menu.find(".site-menu__container").css("opacity", "1");
			menu.find(".site-menu__container").addClass("_active");
			bodyScrollLock.disableBodyScroll(menu, options);
		}, 200);
	});

	menuButtonClose.on("click", function(){
		menu.removeClass("is-open");

		// menu.find(".site-menu__container").css("opacity", "0");
		menu.find(".site-menu__container").removeClass("_active");

		setTimeout(function(){
			menu.css("display", "none");
			bodyScrollLock.enableBodyScroll(menu, options);
		}, 200);
	});

});
