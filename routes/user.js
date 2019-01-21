
const express = require('express');
const userService = require('../services/user');
const userRouter = express.Router();
//POST - CREATE USER
userRouter.post('/',(req,res)=>{
    const user = req.body;
    userService.create(user)
    .then((data)=>{
        res.json(`created user ${user.name}`)
    },err=>{
        res.json(err.toString());
    })
});
// GET - READ USER
userRouter.get('/:id',(req,res)=>{
    const {id} = req.params;
    userService.read(id)
    .then(data =>{
        res.json(data)
    },err=>{
        console.log(err);
        res.json('lol')});
});
// GET ALL PETS BELONGING TO A USER
userRouter.get('/:id/pets',(req,res)=>{
    const {id} = req.params;
    userService.getPets(id)
    .then(data => {
        res.json(data);
    },err=> res.json(err.toString()))
});
// PUT - UPDATE USER
userRouter.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;

    userService.update(name, email, id)
        .then(() => {
            res.json({
                'msg': `User ${name} has been updated.`
            });
        })
        .catch(e => {
            res.json(e);
        })
})

// DELETE - DELETE USER
userRouter.delete('/:id',(req,res)=>{
    const user = req.body;
    console.log(user);
    userService.delete(user.id)
    .then(()=>{
        res.json(`deleted  FROM DB `);
    },err=> res.json(err));
});

module.exports = userRouter;