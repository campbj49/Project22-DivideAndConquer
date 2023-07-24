function findRotationCount(array) {
    let pivot = Math.round(array.length/2);
    let step = 4;
    console.log("New array")
    for(let i in array){
        console.log(array[pivot] + " " + pivot);
        //check if the current pivot is the boundary of highs and lows
        if(pivot ===array.length || pivot ===0) return pivot;
        if(array[pivot] <= array[pivot-1]) return pivot;

        //add or subtract the next half step to the pivot
        if(array[pivot] > array[pivot + Math.round(array.length/step)]) pivot += Math.round(array.length/step);
        else pivot -= Math.round(array.length/step);
        //double the step value to halve the distance traveled next time
        if(Math.round(array.length/(step*2))!=0) step *= 2;

        //stop reversing the direction of pivot movement after the initial check
        initialDirRev = 1;
    }

    //if the pivot leaves the bounds of the array, return  the max value
    return -1
}

//module.exports = findRotationCount