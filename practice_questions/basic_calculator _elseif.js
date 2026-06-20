function calculator(a,b,operator){
   if("+"===operator){
    console.log("addition:",a+b);
   }
   else if("-"=== operator){
    console.log("sub:",a-b)
   }
   else if("/"===operator){
    console.log("div:",a/b);
   }
   else if("*"=== operator){
    console.log("multiplaction:",a*b);
   }
   else if("**"=== operator){
    console.log("power:",a**b);
   }
   else if("%"== operator){
    console.log("mod:",a%b);
   }
   else{
    console.log(" invalid input");
   }

}
calculator(9,5,"+");
calculator(9,5,"**");
calculator(9,5,"-");
calculator(9,5,"%");