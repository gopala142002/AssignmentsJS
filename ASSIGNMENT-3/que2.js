"use strict"
function isArmstrong(num)
{
    var temp=num
    let sum=0
    while(temp>0)
    {
        sum+=Math.pow(temp%10,3)
        temp=parseInt(temp/10)
    }
    if(sum==num)
        return true
    
}
var num=153
if(isArmstrong(num))
    console.log(`${num} IS ARMSTRONG NUMBER`)
else
    console.log(`${num} IS NOT AN ARMSTRONG NUMBER`)