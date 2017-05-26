/*
presence__link
*/
function showWindow(event){
	event.preventDefault();
	$(".container__window").show();
}

function hideWindow(){
	$(".container__window").hide();
}

$(".presence__link").click(showWindow);
$(".avail-heading__btn").click(hideWindow);