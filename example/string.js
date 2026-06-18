let arr="hello";
let result=" ";
for(let i=0;i<arr.length;i++){
    if(arr[i]==="l"){
        result=result+"#";
    }else{
        result=result+arr[i];
    }
}
console.log(result);