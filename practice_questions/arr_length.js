let arr=["hello"," my","name","bhumika"];
// find maximam string have in above array\
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i].length>max.length){
        max=arr[i];
        
    }
}
console.log(max);
console.log("maximum length",max.length);