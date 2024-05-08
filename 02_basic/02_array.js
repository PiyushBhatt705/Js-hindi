const marvel_heroes =["Iron Man", "Spider Man", "Capitan America", "Thor"]
const dc_heroes =["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[4][1]);

const allHeroes = marvel_heroes.concat(dc_heroes)

// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

const another_array = [1, 2, 3,[4, 5, 6], 7,[6,7,[4,5]]]

let real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("piyush"));
console.log(Array.from("piyush"));