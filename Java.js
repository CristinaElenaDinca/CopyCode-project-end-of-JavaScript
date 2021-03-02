$(".pannel").hover(function(){
	$(this).addClass("hoovered");
}, function(){
	$(this).removeClass("hoovered");
});


$(".pannel").click(function(){
	$(".pannel").removeClass("active");
	$(this).addClass("active");
})

$ ("textarea").on("click hover mouseenter keydown keypress keyup paste", function(){
	$("iframe").contents().find("html").html("<html><head><style>"+$("#textareaCss").val()+"</style></head><body>"+$("#textareaHtml").val()+"</body></html>");
	document.getElementById("output").contentWindow.eval($("#textareaJs").val());
});




$("#cssPanel").click(function(){
	$("#textareaHtml").removeClass("visible1");
	$("#textareaHtml").addClass("visible2");
	$("#textareaCss").removeClass("hidden");
	$("#textareaCss").addClass("visible2");
	$("iframe").removeClass("visible1");
	$("iframe").addClass("visible2");
	$("#bodyContainer").addClass("visible4");
});

$("#javaScriptPanel").click(function(){
	$("#textareaHtml").removeClass("visible2 visible1 hidden");
	$("#textareaHtml").addClass("visible3");
	$("#textareaCss").removeClass("visible2 visible1 hidden");
	$("#textareaCss").addClass("visible3");
	$("#textareaJs").removeClass("hidden");
	$("#textareaJs").addClass("visible3");
	$("iframe").removeClass("visible2 visible1 hidden");
	$("iframe").addClass("visible3");
	$("#bodyContainer").removeClass("visible4");
	$("#bodyContainer").addClass("visible5");
});