function findOutlier(integers){
    var type;
    for(let i=0; i<3; i++) {
        if((integers[i] % 2) == 0) {
            if(type == 'even'){
                break
            }
            type = 'even'
        } else {
            if(type == 'odd') {
                break
            }
            type = 'odd'
        }
    }
    for(let i=0; i<integers.length; i++) {
        if((integers[i] % 2) != 0) {
            if(type == 'even') {
                return integers[i]
            }
        } else {
            if(type == 'odd') {
                return integers[i]
            }
        }
    }
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)