//FED - ASSIGNMENT #2: QUESTION 2 
//Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
//Social Science Subjects - Accounting, Commerce, Marketing, Geography
//Arts Subjects - Government, Economics, Literature, History
//General Subjects - English, Mathematics

let scienceGroup = 'SCIENCE';
let socialScienceGroup = 'SOCIALSCIENCE';
let artsGroup = 'ARTS';
let generalSubjects = 'English, Mathematics';

let studentGroup = artsGroup;

if (studentGroup = 'SCIENCE') {
    console.log('Government, Economics, Literature, History' + ', ' + generalSubjects);
}
else if (studentGroup = 'SOCIALSCIENCE') {
    console.log('Government, Economics, Literature, History' + ', ' + generalSubjects);
}

else if (studentGroup = 'ARTS') {
    console.log('Government, Economics, Literature, History' + ', ' + generalSubjects);
}

else {
    console.log(generalSubjects);
}

//FED - ASSIGNMENT #2: QUESTION 5 

let i = 1;
let num = 20;
let powerFormula = 2 ** i;
let pwr = 0;

while (i < num / 2) {
    i++;

    pwr += powerFormula
    if (powerFormula > num) {
        break;
    }
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");