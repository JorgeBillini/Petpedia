//POST - CREATE PET 
//GET -READ PET
// PUT - UPDATE PET
// DELETE - DELETE DO IT
const express = require('express');
const PetService = require('../services/pets');
const petRouter = express.Router();
//POST - CREATE pet
petRouter.post('/',(req,res)=>{
    const pet = req.body;
    PetService.create(pet)
    .then((data)=>{
        res.json(`created pet ${pet.name}`)
    },err=>{
        res.json(err.toString());
    })
});
// GET - READ USER
petRouter.get('/:id',(req,res)=>{
    const {id} = req.params;
    PetService.read(id)
    .then(data =>{
        res.json({
            'msg': data
        })
    },err=>{
        console.log(err);
        res.json('lol')});
});
// PUT - UPDATE USER
petRouter.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name,age,type,owner} = req.body;

    PetService.update(name, age,type,owner, id)
        .then(() => {
            res.json({
                'msg': `pet ${name} has been updated.`
            });
        })
        .catch(e => {
            res.json(e.toString());
        })
})

// DELETE - DELETE USER
petRouter.delete('/:id',(req,res)=>{
    const {id} = req.params;
    PetService.delete(id)
    .then(()=>{
        res.json(`deleted  FROM DB `);
    },err=> res.json(err));
});

module.exports = petRouter;