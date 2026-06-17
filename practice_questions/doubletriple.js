function doubleTriple(one,two,three,four){
    one*=2;
    two*=2;
    three*=3;
    four+=four;
    let sum=0;
    sum=one+two+three+four;
    console.log(sum);
}
doubleTriple(1,2,3,4);