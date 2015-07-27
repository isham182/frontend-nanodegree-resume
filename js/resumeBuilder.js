var bio = {
	"name" : "Josh Isham",
	"role" : "Front-end Web Developer",
	"contacts":{
		"Mobile": "903-217-5644",
		"Email": "JIKappaSigma@gmail.com",
		"Github": "Isham182",
		"Location": "Dallas/Fort Worth"
	},
	"welcomeMessage": "Welcome to my resume, Please contact me for any info",
	"skills": [
		"awesomeness","Front-end","Java Script", "something special",
	],
	"bioPic": "images/me.jpg"
}

var education = {
	"schools": [
		{
			"name": "Texas A&M Commerce",
			"city": "Commerce, TX",
			"degree": "Bachelors",
			"majors": "Criminal Justice",
			"dates": 2012
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}

	]
}

var work = {
	"jobs": [
		{
			"employer": "Department of Homeland Security",
			"title": "Behavior Detection Officer",
			"dates": "July 15, 2012 - Present",
			"description": "As a BDO I observe behaviors of passengers to determine the threat level of that passenger. I Asses multiple individuals simultaneously and use defined methods to detect unusual behavior. Conduct casual conversation on passengers meeting our behavior threshold to determine reason for such behaviors. I also fill out incident reports on passengers who are referred to law enforcement. Detect, deter, and investigate possible harm towards aviation and surroundings. While on the floor I manage between 8-20 officers."
		},
		{
			"employer": "Army",
			"title": "Military Police",
			"dates": "August 2008 - August 2014",
			"description": "As a Military Police Officer I have proven project management experience in the collection, analysis, and presentation of criminal evidence in compliance with law enforcement protocols. Solid reporting skills in conducting thorough investigations and maintaining accurate records. Perform Search and Seizure, vehicle inspections, prepare enforcement investigation reports, security of military base to include gate security, and foot patrols. I was trained in basic canine handling techniques. Lead 3-4 soldiers. Train 20-40 Soldiers when requested in Military Police training."
		},
		{
			"employer": "Catfish Cove",
			"title": "Manager",
			"dates": "July 2006 - July 2008",
			"description": "As a Manager at Catfish Cove i Managed between 8-20 employees. I did payroll, time audits, expense reports and worked every position at the restaraunt. Catfish Cove is now out of Business."
		},
		{
			"employer": "L-3 Communications",
			"title": "Assembler Electrician",
			"dates": "July 2003 - July 2006",
			"description": "Worked on Government Airplanes such as 747, and 757. Electrical and Mechanical work."
		}
	]
}

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2015",
		"description": "My description will go here.",
		"images": [
			"http://sample images"
		]
	}	
	]
}
var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
var formattedname = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.Email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.Github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.Location);

$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);

var formattedmessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedmessage);

var formattedpic = HTMLbioPic.replace("%data%", "images/me.jpg");
$("#header").append(formattedpic);


if(bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}