// for a given array with marks of student . find average marks  [85,97,37,44,76,60]
let marks= [85,97,37,44,76,60];
let sum=0;
for (let ave of marks){
   sum=sum+ave;
}
let average=sum/marks.length;
console.log(" the average of the entire class is :",average);