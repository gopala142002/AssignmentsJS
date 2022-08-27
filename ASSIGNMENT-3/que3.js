"use strict"
function fact(num)
{
    var mul=1
    for(var i=1;i<=num;i++)
        mul*=i
    return mul
}
function checkNum(num)
{
    var temp=num
    var sum=0
    while(temp>0)
    {
        sum+=fact(temp%10)
        temp=parseInt(temp/10)
    }
    if(sum==num)
        return true
    return false
}
var num=145
if(checkNum(145)==true)
    console.log(`${num} IS SPECIAL NUMBER`)
else
    console.log(`${num} IS NOT A SPECIAL NUMBER`)