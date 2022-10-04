function mirrorArray(array){
    var mirrored = [];

    for (i = 0; i < array.length; i ++){ //cycle through array
        mirrored.push(array[i]); //pushes element within each index
    }

    for (i = array.length - 1; i >= 0; i --) { //same things as above but backwawrds
        mirrored.push(array[i]);
    }
    console.log(mirrored);
}

console.log(mirrorArray([1,2,3]))
console.log(mirrorArray(['a', 'b', 'c']))

//-------------------------------------------------------------------

function avgValue(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i ++) { 
        var num = array[i];
        sum += num;
        // console.log(i)
    }

    var avg = (sum / array.length);
    console.log (avg) //return
}

console.log(avgValue([2,3,7]));