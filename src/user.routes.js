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



export default router;