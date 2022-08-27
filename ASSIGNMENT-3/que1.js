"use strict"
var n=5
var str="";
var temp=1
for(var i=0;i<5;i++)
{
    for(var j=0;j<=i;j++)
        str+=temp+++" "
    str+="\n"
}
console.log(str)