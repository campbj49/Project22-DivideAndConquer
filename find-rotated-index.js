function findRotatedIndex(array, target) {
    
    let initialDir = -1;
    if(array[0] === target) return 0;
    if(array[0] > target) initialDir = 1;

    let pivot = Math.round(array.length/2) + (Math.round(array.length/4)* initialDir);
    let step = 8;
    console.log("New array")
    for(let i in array){
        console.log(array[pivot] + " " + target + " " + pivot);
        //check if the current pivot is the boundary of 1s and 0s
        if(array[pivot]=== target) return pivot;
        if(array[pivot] > target && array[pivot-1] < target) return -1;
        if(pivot === array.length) return -1;

        //add or subtract the next half step to the pivot
        if(array[pivot] < target) pivot += Math.round(array.length/step);
        else if(array[pivot] >= target) pivot -= Math.round(array.length/step);
        //double the step value to halve the distance traveled next time
        if(Math.round(array.length/(step*2))!=0) step *= 2;

        //stop reversing the direction of pivot movement after the initial check
        initialDirRev = 1;
    }

    //if the pivot leaves the bounds of the array, return  the max value
    return -1
}

//module.exports = findRotatedIndex