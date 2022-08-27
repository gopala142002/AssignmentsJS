"use strict"
function findgrade(num)
{
    switch(true)
    {
        case (num>90 && num<=100):
            console.log("S Grade")
            break
        case (num>80 && num<=90):
            console.log("A GRADE")
            break
        case (num>70 && num<=80):
            console.log("B GRADE")
            break
        case (num>60 && num<=70):
            console.log("C GRADE")
            break
        case (num>50 && num<=60):
            console.log("D GRADE")
            break  
        case (num>40 && num<=50):
            console.log("E GRADE")
            break  
        case (num>0 && num<=40):
            console.log("STUDENT HAS FAILED")
            break  
        default : 
            console.log("INVALID MARKS")
            break
    }
}
var marksobtained=50
findgrade(marksobtained);