let arr=[3,2,4,-2]
let small=Infinity;
let small2=Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]<small){
        small2=small;
        small=arr[i];
    }
    else if(arr[i]>small && arr[i]>small2){
        small2=arr[i];
    }
}
console.log(small);
console.log(small2);