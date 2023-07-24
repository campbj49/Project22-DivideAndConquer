function findFloor(array, floor) {
    let pivot = Math.floor(array.length/2);
    let step = 4;
    console.log("New array")
    for(let i in array){
        console.log(pivot, + " " + array.length);
        //check if the current pivot is the boundary of 1s and 0s
        if(pivot <= 0) return -1;
        if(array[pivot] > floor && array[pivot-1] <= floor) return array[pivot-1];
        if(pivot === array.length) return array[pivot-1];

        //add or subtract the next half step to the pivot
        if(array[pivot] < floor) pivot += Math.round(array.length/step);
        else if(array[pivot] >= floor) pivot -= Math.round(array.length/step);
        //double the step value to halve the distance traveled next time
        if(Math.round(array.length/(step*2))!=0) step *= 2;
    }

    //if the pivot leaves the bounds of the array, return  the max value
    return array.length
}

//module.exports = findFloor