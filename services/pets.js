const {db} = require('./dbConnect');

const PetService = {};

PetService.create = (pet)=> {
   console.log(pet)
   return db.none('INSERT INTO pets (owner,type,name, age) VALUES (${owner},${type},${name},${age})',{owner,type,name,age} = pet)
};

PetService.read = (id)=> db.one('SELECT * FROM pets WHERE id=${id}',{id})

PetService.update = (name, age, type, owner,id) => {
   return db.none('UPDATE pets SET name = ${name}, age =${age} ,type=${type}, owner=${owner} WHERE id=${id}', {name, age,type, owner,id});
 }

PetService.delete = (id)=> {
   return db.any('DELETE FROM pets WHERE id=${id}',{id:id});
};

module.exports = PetService;