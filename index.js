import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send('hello world');
});

app.listen('8082', () =>{
    console.log('server is disponible at port 8082');
})