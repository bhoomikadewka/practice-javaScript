function maximumInArray(N,arr){
  let max=-Infinity;
   for(let i=0;i<=N;i++){
     if(arr[i]>max){
       max=arr[i];
     }
   }
   console.log(max);
}
maximumInArray(5,[4,5,6,9,3,]);