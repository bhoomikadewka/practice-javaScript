let arr=[3,45,6,7,8];
let max=-Infinity;
let max2=-Infinity;
let max3=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max2=max;
        max=arr[i];
    }
    else if(arr[i]<max && arr[i]>max2){
        max3=max2;
        max2=arr[i];
    }
     else if(arr[i]<max2 && arr[i]>max3){
    max3=arr[i];
    }
}
console.log("first largest number:",max);
console.log("second largest number:",max2);
console.log("third largest number:",max3);

