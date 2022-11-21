function printObject(obj) {
    for(let key in obj){
        console.log(obj[key])
    }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120