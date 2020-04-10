let progress = document.querySelector('#my-progress-bar');

function increase1pc() {
	let progress1 = progress + 1;
	$("#my-progress-bar").width(progress1 + "%");
	$("#my-progress-bar").text(progress1 + "%");
}

function increase3pc() {
	let progress3 = progress + 3;
	$("#my-progress-bar").width(progress3 + "%")
	$("#my-progress-bar").text(progress3 + "%")
}

function increase7pc() {
	let progress7 = progress + 7;
	$("#my-progress-bar").width(progress7 + "%")
	$("#my-progress-bar").text(progress7 + "%")
}

function init() {
	$("#btn-up1").click(increase1pc);
	$("#btn-up3").click(increase3pc);
	$("#btn-up7").click(increase7pc);
}

$(document).ready(init)