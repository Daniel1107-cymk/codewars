function countSalutes(hallway) {
    let arr = hallway.split('');
    let right = 0;
    let salute = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != '-') {
            if(arr[i] == '>') {
                right++;
            } else {
                salute = salute + (2 * right)
            }
        }
    }
    return salute;
}

console.log(countSalutes('<---->---<---<-->'), 4);