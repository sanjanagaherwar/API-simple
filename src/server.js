import express from 'express';

import mainRoutes from './main.routes';
import userRoutes from './user.routes';

const app = express();
const port = 3000;


app.use(express.json());//everything it will pass in json 

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);


app.listen(3000, () => {
    console.log(`Server is running on  http://localhost:${port}`);
});
