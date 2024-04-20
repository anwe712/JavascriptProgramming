//Write a JavaScript program to find the maximum number in an array
let i ;
const a = [ 10 , 30 , 456 , 890 , 90];
var max = a[0];
for (i = 0 ; i < a.length ; i++){
    if (a[i] > max){
      max = a[i];
    }
}
    console.log("The maximum number is "+ max);


