import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const port = 3000;

const STATUS = {
  SUCCESS:'OK',
  FAILURE: 'NO'
};

app.use(express.json());//everything it will pass in json 

//localhost:3000/
app.get('/hello-me', (req, res) => {
  res.status(StatusCodes.OK);
  res.send('Hello Sanjana!' ); // Send an object as the response
});

app.post('/add', (req,res)=>{
  const data = []; //send some data, array
  const { body } = req;
  data.push(req.body); //push to add what we recieve from the body
  //const data = req.body;
  
  if (!body.name){
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.FAILURE,
      message:'Name is required',
    });
  }
  
  return res.status(StatusCodes.CREATED).send({
    status: STATUS.SUCCESS,
    message: data,
  }); //send the data to the browser from the req
});

app.listen(3000, () => {
    console.log(`Server is running on  http://localhost:${port}`);
});
