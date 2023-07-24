function sortedFrequency(array, target) {
    //start in the middle of the array
    let lowPivot = Math.floor(array.length/2);
    let highPivot = lowPivot;
    lowFound = false;
    highFound = false;
    let step = 4;
    console.log("****")
    console.log("new array")
    for(let i in array){
        console.log(lowPivot + " " + highPivot + " " + array.length)
        console.log( lowFound+ " " + highFound)
        //check if the current lowPivot is the boundary between the target and 
        if(lowFound && highFound) return highPivot - lowPivot +1;

        if(lowPivot === highPivot && (highPivot === array.length || lowPivot ===0)) return -1;

        if(lowPivot <= 0){
            lowFound = true;
            lowPivot = 0;
        }
        else if(array[lowPivot] === target && array[lowPivot-1] !=target) lowFound = true;

        if(highPivot >= array.length){
            highFound = true;
            highPivot = array.length;
        }
        else if(array[highPivot] === target && array[highPivot+1] !=target) highFound = true;

        //add or subtract the next half step to the pivot
        if(!lowFound){
            if(array[lowPivot] >= target) lowPivot -= Math.round(array.length/step);
            else lowPivot += Math.round(array.length/step);
        }

        if(!highFound){
            if(array[highPivot] <= target) highPivot += Math.round(array.length/step);
            else highPivot -= Math.round(array.length/step);
        }
        //double the step value to halve the distance traveled next time
        if(Math.round(array.length/(step*2))!=0) step *= 2;
    }

    //if the pivot leaves the bounds of the array, return  the max value
    return array.length
}

//module.exports = sortedFrequency