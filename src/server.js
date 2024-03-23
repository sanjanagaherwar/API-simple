import express from 'express';
import { StatusCodes } from 'http-status-codes';

import appRoutes from './routes';

const app = express();
const port = 3000;


app.use(express.json());//everything it will pass in json 

app.use('/v1', appRoutes);


app.listen(3000, () => {
    console.log(`Server is running on  http://localhost:${port}`);
});
