"use strict"
function isprime(num)
{
    if(num==1)
        return false
    if(num==2)
        return true
    for(var i=2;i<num;i++)
        if(num%i==0)
            return false
    return true
}
function findfact(num)
{
    var mul=1
    for(var i=1;i<=num;i++)
        mul*=i;
    return mul
}
function fact()
{
    var strt=arguments[0]
    var end=arguments[1]
    while(strt<=end)
    {
        if(isprime(strt)==true)
            console.log(`FACTORIAL OF ${strt} = ${findfact(strt)}`)
        strt++;
    }
}
fact(1,100)