
function a(){
    console.log("a is called ")
    b()
    console.log("a is done")
}

function b(){
    console.log("b is called")
    c()
    console.log("b is done")

}

function c(){
    console.log("c is called")
}

a()