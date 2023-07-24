function countZeroes(array) {
    //start in the middle of the array
    let pivot = Math.floor(array.length/2);
    let step = 4;
    while(pivot<=array.length){
        //check if the current pivot is the boundary of 1s and 0s
        if(pivot <= 0) return array.length;
        if(array[pivot] === 0 && array[pivot-1]===1) return array.length-pivot;
        if(pivot === array.length) return 0;

        //add or subtract the next half step to the pivot
        if(array[pivot] ===1) pivot += Math.round(array.length/step);
        else if(array[pivot] ===0) pivot -= Math.round(array.length/step);
        //double the step value to halve the distance traveled next time
        step *= 2;
    }

    //if the pivot leaves the bounds of the array, return  the max value
    return array.length
}

//module.exports = countZeroes