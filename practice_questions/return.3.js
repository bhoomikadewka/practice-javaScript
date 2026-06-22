function callpizzahut(flag){ // step 2
    if(flag){
        return "pizza delivered";
    }else{
        return "order cancelled";
    }
}
//step 1
let payment= true;
let pizza= callpizzahut(payment);// value 
console.log(pizza);

function delivered(operation){
    if("pizza  delivered"=== operation){
        return "share pizza with friends";
    }else{
        return " no party";
    }

}
//step 3
console.log(delivered(pizza));