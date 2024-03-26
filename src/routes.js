import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service';

const router = express.Router();
const port = 3000;

const STATUS = {
    success:'OK',
    failure: 'NO'
};

//localhost:3000/
router.get('/hello-me', (req, res) => {
    res.status(StatusCodes.OK);
    res.send('Hello Sanjana!' ); // Send an object as the response
});
  
router.post('/add', (req,res)=>{
    // const data = []; //send some data, array
    const { body: users } = req;
    data.push(req.body); //push to add what we recieve from the body
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

export default router;