function printerError(s) {
    var validation = new RegExp('[a-m]', 'i')
    var arr = s.slice("");
    var error = 0;
    for(let i=0; i<arr.length; i++) {
        if(!validation.test(arr[i])) {
            error++
        }
    }
    return `${error}/${arr.length}`
}

var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
console.log(printerError(s), "3/56")