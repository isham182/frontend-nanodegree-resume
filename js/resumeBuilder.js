$("#main").append("Josh Isham");
var awesomethoughts = ("I am Josh and I am Awesome!");
console.log (awesomethoughts);
var funthoughts = 
	awesomethoughts.replace("Awesome", "Fun");
console.log (funthoughts)

var name = "Josh Isham"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front-end Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);