//((4+5)-(2+3))*2
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
//((4+5)-(2+3))*2
let val1=add(4,5)//9
let val2=add(2,3)//5
let val3=sub(val1,val2);
let val4=multi(val3,2);
console.log(val4);