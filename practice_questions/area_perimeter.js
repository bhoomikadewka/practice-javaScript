function areaPerimeter(L1,B1,L2,B2){
    let area1=L1*B1;
    let perimeter1=2*(L1+B1);
    let area2=L2*B2;
    let perimeter2=2*(L2+B2);
    console.log(area1>area2);
    console.log(perimeter1>perimeter2);
}
areaPerimeter(1,2,2,3);
areaPerimeter(3,3,1,1);