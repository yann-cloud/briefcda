import express from 'express';
import path from 'path';
import homePageRouter  from './ROUTES/homePageRoute.js';
import categoryPageRouter from './ROUTES/categoryRoute.js';
import connectDB from './CONFIG/connectDB.js';
import dotenv from "dotenv";
import bodyParser from "body-parser";


dotenv.config();
const __dirname = path.resolve();
const app = express();
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.set('views', 'VUE');

// app.get('/', (req, res) =>{
//     res.send('<h1>hello world</h1>');
// });
connectDB();
app.use(homePageRouter);
app.use(categoryPageRouter);
app.use(express.static(path.join(__dirname, "public")))
app.listen('8082', () =>{
    console.log('server is disponible at port 8082');
})