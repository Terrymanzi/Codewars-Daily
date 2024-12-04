/*
TASK
Given two forces (F1 and F2 ) and the angle F2 makes with F1 
find the resultant force R and the angle it makes with F1.
////////////////////////////////////////////////////////////
INPUT
Three values :
-F1
-F2 making an angle θ with F1
-angle θ
////////////////////////////////////////////////////////////
OUTPUT
An array consisting of two values :
R (the resultant force)
angle R makes with F1 (φ)
////////////////////////////////////////////////////////////
NOTES:
Units for each of the following are given as under :
F1 = Newton
F2 = Newton
angle θ = degree
R = Newton
φ = degree
*/

//SOLUTION

function calcResultantForce(force1, force2, theta) {
    //converting from radians to degrees
    let angle = Math.cos(theta * (180 / Math.PI))
    // finding the resultant force
    let rForce = Math.sqrt(force1 + force2 + (2*force1*force2*angle));
    //finding the angle rForce makes with force1
    let rAngle = Math.atan((force2*(Math.sin(theta))) / (force1 + force2* angle));
    //creating the array
    const arraySolution = [rForce,rAngle];
    //returning the array of results
    return arraySolution;
}
//calling the function
const result = calcResultantForce(2,1,60);
console.log(result);