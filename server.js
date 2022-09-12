import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
const app = express();

const port = process.env.PORT || 5001;

notFoundMiddleware;

app.get('/', (req, res) => {
    res.send('Welcome!');
})

app.use(notFoundMiddleware);

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
})