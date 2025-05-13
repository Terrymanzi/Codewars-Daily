function nbDig(n, d) {
    // your code
    let k = [];
    let array = [];
    let count = [];
    
    for(let i=0; i <= n; i++){
        k.push(i*i)
    }
    // console.log(k);
    
    k.map((i) => {
        array.push(String(i).split(''))
        // .split("").filter())
        // .includes(String(d)))
    })
    
    // console.log(array)
    
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if(array[i][j] == d){
            count.push(array[i][j]);
        };
    }
}  
  
//     console.log(count.length)
    
    return count.length     
}