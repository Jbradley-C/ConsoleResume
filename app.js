//Define full name and make it Uppercase
let nameAllCaps = 'Jason Bradley Chapman'.toUpperCase();

//function for name, career and discription
function aboutMe(myName, myJob, myDescription) {
	console.log('Name: ' + myName);
	console.log('Career: ' + myJob);
	console.log('Description: ' + myDescription + '.');
}

// Calls function to display my basic info
aboutMe(nameAllCaps, 'Web Development Student', 'Father of four trying to make a way');

//Empty console log for line spacing
console.log('');

//Heading for my Interests
console.log('My Interests: ');

//My list of interests
console.log();
console.log('* Making pretty things.. aka, Art.');
console.log('* Cooking, (Mexican food is life).');
console.log('* Video games.');
console.log('* Spending time with my family.');

//Empty console log for line spacing
console.log('');

// Define function to display work experience
function displayPosition(jobTitle, companyName, jobDescription) {
	console.log('*  ' + jobTitle + ' for ' + companyName + ' - ' + jobDescription + '. ');
}

// Call the function to display work experiences
console.log('My Work Experience:');
displayPosition('Asst. Manager', "Jason's Deli", 'Ran day to day operations on assigned shifts');
displayPosition('Assistant Team Leader', 'Whole Foods', 'Helped manage the seafood dept.');
displayPosition('Parts Manager', "Hall's Motorsports", 'Liason between mechanics and manufacturers for parts');

//Empty console log for line spacing
console.log('');

// Define function to list skills and check for "coolness"
function displaySkill(mySkill, isCool) {
    if(isCool == true) {
    console.log("* BAM!: " + mySkill);

}else (isCool == false); {
    console.log("* " + mySkill);
}
}

// Call function to list skills and BAM the cool ones
console.log("My Skills:")
displaySkill("Dancing", true);
displaySkill("Cooking", true);
displaySkill("Html", false);
displaySkill("CSS", false);
displaySkill("Drawing", true);






