import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service';

const router = express.Router();


const STATUS = {
    success:'OK',
    failure: 'NO'
};

//localhost:3000/
router.get('/hellome', (req, res) => {
    res.status(StatusCodes.OK);
    res.send('Hello Sanjana!' ); // Send an object as the response
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
    
    return res.status(StatusCodes.CREATED).send({
      status: STATUS.success,
      message: addedUser,
    }); //send the data to the browser from the req
});

router.put('/update/:id', (req,res)=>{
    const { body: user } = req;
    
    const id = parseInt(req.params.id, 10)

    const updatedUser = userService.updatedUser(id, user);
    
    if(updatedUser){
        return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        message: updatedUser,
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} is not found`,
        });
    }
});

export default router;