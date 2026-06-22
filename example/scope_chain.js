let a=3;// global scope
function outer(){
    var b =6;
    function inner(){
        console.log(a);
        console.log(b);
    }
    inner();
}outer();