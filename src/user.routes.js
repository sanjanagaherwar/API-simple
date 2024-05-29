import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service';

const router = express.Router();


// const STATUS = {
//     success:'OK',
//     failure: 'NO'
// };


router.get('/all', (req,res)=>{
    const users = userService.getAllUsers();

    if (users.length){
        return res.status(StatusCodes.OK).send(users);
    }
    return res.status(StatusCodes.NOT_FOUND).send(`No users found.`);
    
});

router.get('/:id', (req,res)=>{
    const id = parseInt(req.params.id, 10)

    const user = userService.getUser(id);

    if (user){
        return res.status(StatusCodes.OK).send(user);
    }
    return res.status(StatusCodes.NOT_FOUND).send(`User ${id} not found.`);
    
});

router.post('/add', (req,res)=>{
    // const data = []; //send some data, array
    const { body: user } = req;
    // data.push(req.body); //push to add what we recieve from the body
    //const data = req.body;
    
    const addedUser = userService.addUser(user);
    
    // if (!users.name){
    //   return res.status(StatusCodes.BAD_REQUEST).send({
        // status: STATUS.failure,
        // message:'Name is required',
    //   });
    // }
    
    return res.status(StatusCodes.CREATED).send(addedUser);
 //send the data to the browser from the req
});

router.put('/update/:id', (req,res)=>{
    const { body: user } = req;
    
    const id = parseInt(req.params.id, 10)

    const updatedUser = userService.updateUser(id, user);
    
    if(updatedUser){
        return res.status(StatusCodes.OK).send(updatedUser)
    } else {
        return res.status(StatusCodes.NOT_FOUND).send(`User ${id} is not found.`);
    }
});

router.delete('/delete/:id', (req,res)=>{
    const { params } = req;

    const id = parseInt(req.params.id, 10);

    const status = userService.removeUser(id);
    if (status ===  true){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Failed to delete user ${id}`);
    }
    return res.status(StatusCodes.OK).send(`User ${id} deleted`)
})

export default router;