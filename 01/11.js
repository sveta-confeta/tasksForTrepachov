let arr = [1, 5, 9, 88, 44, 2, 8, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i],2);

}
console.log(sum);