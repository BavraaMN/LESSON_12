
'use strict';
const Rectangle = {
     width:5,
     height:5,
   
    setWidth(width)
    {
      this.width = width;  
    },
    setheight(heigth)
    {
        this.height = heigth;
    },
    calcArea() {
        return this.width * this.height+' см*см';
    },
    calcPerimeter() {
        return 2*this.width+2*this.height+ ' см';
    }
}
Rectangle.setWidth(100);
Rectangle.setheight(200);
console.log(Rectangle.calcArea());
console.log(Rectangle.calcPerimeter());