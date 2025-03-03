const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1: Inspect the pokemon array
console.log('Exercise 1 my result: ');
console.dir(pokemon, { maxArrayLength: null });

// Exercise 2: Log the game object
console.log('Exercise 2 my result: ', game);

// Exercise 3: Add a difficulty property to the game object
game.difficulty = "Medium";
console.log('Exercise 3 my result: ', game.difficulty);

// Exercise 4: Add a starter Pokémon to the party
const starterPokemon = pokemon.find(p => p.starter === true);
game.party.push(starterPokemon);
console.log('Exercise 4 my result: ', starterPokemon);

// Exercise 5: Add three more Pokémon to the party
const additionalPokemon = [
  pokemon.find(p => p.number === 4), // Charmander
  pokemon.find(p => p.number === 7), // Squirtle
  pokemon.find(p => p.number === 25), // Pikachu
];
game.party.push(...additionalPokemon);
console.log('Exercise 5 my result: ', game.party);

// Exercise 6: Mark gyms with difficulty below 3 as completed
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log('Exercise 6 my result: ', game.gyms);

// Exercise 7: Evolve the starter Pokémon in the party
const starterIndex = game.party.findIndex(p => p.starter === true);
const evolvedPokemon = pokemon.find(p => p.number === game.party[starterIndex].number + 1);
game.party.splice(starterIndex, 1, evolvedPokemon);
console.log('Exercise 7 my result: ', evolvedPokemon);

// Exercise 8: Print the names of Pokémon in the party
console.log('Exercise 8 my result: ', game.party.map(p => p.name));

// Exercise 9: Print all starter Pokémon
const starters = pokemon.filter(p => p.starter === true);
console.log('Exercise 9 my result: ', starters.map(p => p.name));

// Exercise 10: Add a catchPokemon method to the game object
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon[10]); // Example: Catch Caterpie
console.log('Exercise 10 my result: ', game.party);

// Exercise 11: Modify catchPokemon to decrease the number of pokeballs
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeballItem = this.items.find(item => item.name === "pokeball");
  if (pokeballItem.quantity > 0) {
    pokeballItem.quantity--;
  } else {
    console.log("No more pokeballs left!");
  }
};
game.catchPokemon(pokemon[10]); // Example: Catch Caterpie
console.log('Exercise 11 my result: ', game.items);

// Exercise 12: Complete gyms with difficulty below 6
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});
console.log('Exercise 12 my result: ', game.gyms);

// Exercise 13: Add a gymStatus method to tally completed and incomplete gyms
game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });
  console.log('Exercise 13 my result: ', gymTally);
};
game.gymStatus();

// Exercise 14: Add a partyCount method to count Pokémon in the party
game.partyCount = function() {
  return this.party.length;
};
console.log('Exercise 14 my result: ', game.partyCount());

// Exercise 15: Complete gyms with difficulty below 8
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});
console.log('Exercise 15 my result: ', game.gyms);

// Exercise 16: Log the entire game object
console.log('Exercise 16 my result: ', game);