function showHideDescription(){
	var btn = $(this);
	btn.toggleClass("details__btn_plus");
	btn.closest(".details").find(".description__data").slideToggle();
}


$(".details__btn").click(showHideDescription);
