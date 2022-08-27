//to check a given year if leap year or not
"use strict"
var year=2002;
if(year%400==0)
    console.log("LEAP YEAR");
else if(year%100==0)
    console.log("NOT A LEAP YEAR");
else if(year%4==0)
    console.log("LEAP YEAR");
else
    console.log("NOT A LEAP YEAR");