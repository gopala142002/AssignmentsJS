"use sticks"
function matchHouses(steps)
{
    return 6*steps-(steps-1);
}
let steps=4;
console.log(`NUMBER OF MATCHSTICKS IN THE GIVEN STEP IS : ${matchHouses(steps)}`)