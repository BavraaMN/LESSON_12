
const mycart= {   
   totalPrice : 0,    
   count :0,
   items :[],
   discount:0,

   setDiscount(discobject){
      if (discobject=="METHED")
      { 
       this.discount=discount+15;
      } 
      else if (discobject=="NEWYEAR")
      { 
        this.discount=discount+21;   
      }
   },
   calculateItemPrice() {
       return this.totalPrice*((100 - discount) / 100); 
   },

   add: function(productname, productcount, produccost) {
        this.items.push({
            productname:productname,
            productcount:productcount,
            productcost:produccost     
                }            
            );

        this.totalPrice=this.totalPrice + produccost*productcount;
        this.count=this.count + productcount;       

     },  

   increaseCount (adder){
     this.count=this.count + adder;
   },  

   clear (){
      this.items= [];
      this.count= 0,
      this.cost= 0,
      this.totalPrice=0;
      console.log('cleared');
   },

   print (){    // items.forEach() 

     console.log('printing json: '+ JSON.stringify(this.items));
   }
}



mycart.add('Computer',100,100);
mycart.add('Computer',100,100);
mycart.add('Computer',100,100);
mycart.add('Computer',100,100);
mycart.add('Computer',100,100);




mycart.print();