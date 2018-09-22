let mathamtics = 100;
let englishText = 15;
let computerSkills2 = 60;

if (
    (mathamtics > 50 && englishText > 50 && computerSkills2 > 50) || 
    (maths === 100 || englishText === 100 || computerSkills2 === 100)
) {
    console.log("Congratulations! You have passed the TechKaro Admission Test!");
} else if ((mathamtics > 50 && englishText > 50) || computerSkills2 > 80) {
    console.log("You have also qualified!");
} else {
    console.log("Sorry! Please try again next year!");    
}