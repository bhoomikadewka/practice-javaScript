function Maxlength(arr){
    var max=0;
    var word=" ";
    for(let i=0;i<arr.length;i++){
        let len=arr[i].length;
        if(len>max){
            max=len;
            word=arr[i];
        }
        
        
    }
    console.log(max);
    console.log(word);
    
    
}
let arr=[" kaya","hai ","pagal"," tu ","chup","rheeeee"];
Maxlength(arr);
