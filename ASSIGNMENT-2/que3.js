"use strict"
function findsum()
{
    var sum=0;
    for(var i=15;i<=1000;i+=5)
        if(i%3==0)
            sum+=i
    return sum
}
findsum()
console.log(`SUM OF MULTIPLES OF 3 AND 5 UNDER 1000 :  ${findsum()}`)