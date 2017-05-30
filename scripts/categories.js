function showHideDescription(){
	$(this).closest(".details").find(".description__data").slideToggle();
	console.log("ok");
}

$(".details__btn").click(showHideDescription);