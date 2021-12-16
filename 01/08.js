let arr=[1,5,9,88,44,2,8 ,-9];

let  arrResult=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]>0 && arr[i]<10){
        arrResult.push(arr[i]);
    }

}
console.log(arrResult);