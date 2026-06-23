function parent(){
    console.log("parent fuction ");
    function child(){
        console.log("child function ");
        return "hello frm child";
    }
    return child;
}
console.log(parent());
let fn=parent();
console.log(fn);
console.log(fn());