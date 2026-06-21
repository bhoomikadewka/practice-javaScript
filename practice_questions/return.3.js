function callpizzahut(flag){
    if(flag){
        return "pizza delivered";
    }else{
        return "order cancelled";
    }
}
let payment= true;
let pizza= callpizzahut(payment);// value 
console.log(pizza);

function delivered(operation){
    if("pizza delivered"=== operation){
        return "share pizza with friends";
    }else{
        return " no party";
    }

}
console.log(delivered(pizza));