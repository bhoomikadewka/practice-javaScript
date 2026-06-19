 function fizzBuzz(num){    // [1to num] check
for( let i=1;i<=num;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzBuzz");
    }
    else if(i%3==0){
    console.log("Fizz");
    }
    else if(i%5==0){
console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
 }
 fizzBuzz(2);
 fizzBuzz(1);
 fizzBuzz(3);