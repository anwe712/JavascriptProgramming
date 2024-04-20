//walculate the average of the numbers in an array of numbers
let i , sum = 0;
const arr = [ 23 , 87 , 90 , 73];
for (i = 0 ; i < arr.length ; i++)
{
        sum = sum + arr[i];
        average = sum / (arr.length);
}
console.log("The average of the elements in the array= "+average);