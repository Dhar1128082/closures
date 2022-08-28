 
//  Ques:1
 function counter(){
    let Counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var Counter = counter();
alert(Counter());    // output ---> 1
alert(Counter());    //output ---> 1
alert(Counter());   //output ---> 1
alert(Counter());   //output ---> 1



// Ques2:

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); //output ---->1 
  }
  console.log(count); // output ----> 0
})();

// this is the example of IIFE(i.e. Immediately Invoked Function Expression)

// Ques3:

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {

      console.log(i); // output----> 3 3 3
    }, 1000);
  }





// //Ques4: Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

 areaCal=function(length)
{
   areaCalculte= function(breadth)
  {
            console.log(`The area of the rectangle is = ${length * breadth}`);
  }
};

areaCal(10);
areaCalculte(3);



// Ques5: Take a variable in outer function and create an inner function to increase the counter every time it is called?

outer = function() {
    let counterOne=0;
    inner = function()
    {
       return counterOne++;  
    }
    return inner;
};

let result=outer();
console.log(result());
console.log(result());
console.log(result());




// Ques 6:
// "Print Output

var a = 12;
(function () {
  console.log(a); // output ----> 12
})();





//Ques 7: 
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);   // output-----> 12
  };
})();
x();




//Ques 8:

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n"+
        "outerVar = " + outerVar + "\n"+
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
// output----> outerArg=123
//innerArg ----> 456
// outerVar--->a
// innerVar --->b
// globalVar --->xyz
    })(456);
})(123);
