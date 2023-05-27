let arr = [1,-4,5,-10,-23,-34,54]
let summed = 0
for (let i=0; i<7; i++){
    if(arr[i]<0){
        summed+=arr[i]
    }
}
console.log(summed)