//var a="bhumi";
//function greet(){
//    console.log(a);
//}
//greet();
function outer(){
    var h=" hello";
    let g="no";
    function inner(){
        console.log(h);
        console.log(g);
    }
    inner();
}
outer();
