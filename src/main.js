const { db } = require("../db/connection.js");
const { Pokemon, Trainer, Badge } = require("./models");

async function main() {
  const trainers = await Trainer.findAll();
  const pokemon = await Pokemon.findAll();
  const badges = await Badge.findAll();

  console.log(trainers[0]);

  await trainers[0].addPokemon(pokemon[0]);
  await trainers[0].addPokemon([pokemon[1], pokemon[2]]);

  const trainer = await Trainer.findOne({where: {name: "Red"}});
  console.log(JSON.stringify(trainer));

  const trainerWithPokemon = await Trainer.findOne({
    where: {
      name: "Red"
    }, 
    include: Pokemon});
  console.log(JSON.stringify(trainerWithPokemon, null, 2));

  await trainers[0].addBadge(badges[0]);
  await trainers[1].addBadge(badges[0]);
  await trainers[1].addBadge(badges[1]);

  console.log('---Testing Many to Many Eager Loading---')
  const trainersWithBadges = await Trainer.findAll({include: Badge});
  console.log(JSON.stringify(trainersWithBadges, null, 2));
}

main();
