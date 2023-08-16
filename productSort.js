function sortByProduct(n){
    let finished = {}
    for(let i =0; i < n.length;i++){
        let currentNum = n[i] * i+1
        let num = n[i]
        finished[currentNum] = num
    }
  return (Object.values(finished))
}
console.log(sortByProduct([23, 2, 3, 4, 5]))