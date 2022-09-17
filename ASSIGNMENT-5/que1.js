"use strict"
class cylinder
{
    constructor(radius,height) 
    {
        this.radius=radius;
        this.height=height;    
    }
    getVolume() 
    {
        let vol=(3.14*Math.pow(this.radius,2)*this.height).toFixed(4);
        console.log(`VOLUME OF CYLIDER IS : ${vol}`);
    }
}
class sphere
{
    constructor(radius)
    {
        this.radius=radius;
    }
    getVolume()
    {
        let vol=((4/3)*3.14*Math.pow(this.radius,3)).toFixed(4);
        console.log(`VOLUME OF SPHERE IS  : ${vol}`);
    }
}
class cone
{
    constructor(radius,height)
    {
        this.radius=radius;
        this.height=height;
    }
    getVolume()
    {
        let vol=((3.14*Math.pow(this.radius,2)*this.height)/3).toFixed(4);
        console.log(`VOLUME OF CONE IS    : ${vol}`);
    }
}
let obj=new cylinder(3,4);
obj.getVolume();
let obj1=new sphere(4);
obj1.getVolume();
let obj2=new cone(4,5);
obj2.getVolume();