import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

// const STATUS = {
//     success:'OK',
//     failure: 'NO'
// };


//localhost:3000/
router.get('/hellome', (req, res) => {
    res.status(StatusCodes.OK);
    res.send('Hello Sanjana!' ); // Send an object as the response
});
  

export default router;