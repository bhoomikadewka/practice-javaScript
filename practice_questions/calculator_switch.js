function calculator(a,b,operator){
   switch(operator){
    case 1:
        console.log("addition:",a+b);
        break;
    case 2:
      console.log("sub:",a-b);
      break;
   
  
   
    case 3:
      console.log("div:",a/b);
     break;
    case 4:
      console.log("multiplaction:",a*b);
      break;
   case 5:
      console.log("power:",a**b);
      break;
      case 6:
        console.log("mod :",a%b);
        break;
    default:
        console.log('invaid input');
   
   break;

}
}
calculator(9,5,2);
calculator(9,5,"f");
calculator(9,5,1);
calculator(9,5,6);