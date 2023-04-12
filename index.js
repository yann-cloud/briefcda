import express from 'express';
import path from 'path';
import homePageRouter  from './ROUTES/homePageRoute.js';
import connectDB from './CONFIG/connectDB.js';

const __dirname = path.resolve();
const app = express();

app.set('view engine', 'ejs');

app.set('views', 'VUE');

// app.get('/', (req, res) =>{
//     res.send('<h1>hello world</h1>');
// });
app.use(connectDB);
app.use(homePageRouter);
app.use(express.static(path.join(__dirname, "public")))
app.listen('8082', () =>{
    console.log('server is disponible at port 8082');
})