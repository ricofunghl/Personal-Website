var skillButton = document.querySelector(".skill-button");
var skillSection = document.querySelector(".skills");

var navbar = document.querySelector("nav");
var stickyTop = navbar.offsetTop;

var filledSkillBar = document.querySelectorAll(".filled");


var barWidth = {
	htmlBar: 50,
	cssBar: 60,
	jsBar: 70,
	cSharpBar: 80,
	sqlBar: 60,
	visualStudioBar: 20
};


/* sticky nav */

var stickyNav = function() {
	if (window.pageYOffset >= stickyTop) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}

}


/* navigation to different section */

var scrollToSection = function(evt) {
	skillSection.scrollIntoView({behavior:"smooth"});
	evt.preventDefault();
}

/* skill bars to move */


var moveSkillBar = function() {
	let width = 0;
	let i = 0;

		// for (var i = 0; i<filledSkillBar.length; i++)
	 	if(i< 6)
	{
		var ii = i;

			
		var key = filledSkillBar[ii].getAttribute("id") + "Bar";



		filledSkillBar[ii].style.width = width;
		console.log(barWidth[key]);
		(function(ii){
			
			var increment = setInterval(function() {

		        if (width == barWidth[key]) 
		        {
			           clearInterval(increment);
			        } else {
			        	width++;
			        	filledSkillBar[ii].style.width = width + "px";

			    }

			},1);

		})(ii); //refer to https://stackoverflow.com/questions/7749090/how-to-use-setinterval-function-within-for-loop/7749123#7749123

		}
		i++;
    }



	



skillButton.addEventListener("click", scrollToSection);
window.addEventListener("scroll", stickyNav);
moveSkillBar();

