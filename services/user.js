const {db} = require('./dbConnect');
const UserService = {};

UserService.create = (user)=> {
   console.log(user)
   return db.none('INSERT INTO users (name, email) VALUES (${name},${email})',{name:user.name,email:user.email})
};

UserService.read = (id)=> {
   return db.one('SELECT * FROM users WHERE id=${id}',{id:id});
};

UserService.update = (name, email, id) => {
   return db.none('UPDATE users SET name = ${name}, email = ${email} WHERE id = (${id})', {name, email, id});
 }

UserService.delete = (id)=> {
   return db.any('DELETE FROM pets WHERE owner=${id}; DELETE FROM users WHERE id=${id}',{id:id});
};

UserService.getPets = id => { 
   return db.any('SELECT * FROM pets JOIN users ON users.id = pets.owner WHERE users.id = ${id};',{id})
}
module.exports = UserService;