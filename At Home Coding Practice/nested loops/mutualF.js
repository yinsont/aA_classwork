let bobsFollowers = ["Elijah", "Stacey", "Derek", "Jolene"];

let tinasFollowers = ["Derek", "Amy", "Elijah"];

let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++){
//   let bobF = bobsFollowers[i]
//   for (let j = 0; j < tinasFollowers.length; j++){
//     let tinaF = tinasFollowers[j]
//     if (bobF === tinaF){
//       mutualFollowers.push(bobF)
//     }
//   }
//   return mutualFollowers
// }

for (let i = 0; i < bobsFollowers.length; i++) {
  let bobF = bobsFollowers[i];

  for (let j = 0; j < tinasFollowers.length; j++){
    let tinaF = tinasFollowers[j];

    if (bobF === tinaF){
        mutualFollowers.push(bobF)
    }
  }
}
console.log(mutualFollowers)

