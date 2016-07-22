var main = function() {

/*
  $("div").hover(function() {
    $(this).animate({left: '250px'});
  	document.getElementById("funbox").innerHTML = "Don't Touch Me.";
  }, function() {
  	$(this).animate({right: '250px'});
  	document.getElementById("funbox").innerHTML = "Stop It.";
  
  }); */


/*
//hover to expand w/o dequeue 
$(".funbox").hover(function(){
    $(this).animate({ width: "500px" });
    
}, function() {
    $(this).animate({ width: "250px",
     				   });
    
});
*/

$(".menu-icon").click(function() {

	$('.menu').animate({
      left: "60px"
    }, 200);

})

$(".close-icon").click(function(){

	$('.menu').animate({
      left: "-300px"
    }, 200);	

})

//hover to expand with dequeue
$(".funbox").hover(function(){
	if (!$(this).hasClass('animated')) {
		$(this).dequeue().stop().animate({ width: "350px" }, 200);
	}
}, function() {
    $(this).addClass('animated').animate({ width: "250px" }, "normal", "linear", function() {
		$(this).removeClass('animated').dequeue();
	});
});


//click to expand
/* 
$("div").click(function(){
    
    $(this).animate({ width: "700px",
    				  height: "300px" });

}); */
//button to collapse bubbles
$("button").click(function() {
	$("div").animate({width: "250px",
						 height: "58px"});
})


}//main



$(document).ready(main);