let arr = [1,-4,-4,5,-10,-10,-23,-34,-34,54]
for (let i=0; i<10; i++){
    for (let j=0; j<10; j++){
        if(arr[i]===arr[j] && i!==j){
            console.log(arr[i])
        }
    }
}