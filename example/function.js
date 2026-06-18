function a(){
    var c=20;
    function b(){
        console.log(c);
    }
    return b();
}
var x= a();
console.log(a);