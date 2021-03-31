function comp(array1, array2){
    if(!array1 || !array2 || array1.length != array2.length) return false
    var isTheSame
    isTheSame = array1.map(value => value * value).sort().toString() == array2.sort().toString()
    return isTheSame
}

a1 = [10, 5, 8, 1, 7, 7, 9, 7, 10, 7, 7, 2, 7, 5, 9, 0, 9, 5, 8, 8, 1, 3, 0, 4];
a2 = [64, 4, 81, 25, 49, 1, 16, 81, 9, 49, 49, 49, 25, 100, 64, 100, 81, 49, 64, 1, 49, 0, 1, 25];
console.log(comp(a1, a2), false);