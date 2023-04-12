import mongoose from "mongoose";


const connectDB = async () =>{
    let url = 'mongodb+srv://root1:root@cluster0.j4cyv.mongodb.net/?retryWrites=true&w=majority';

    try {
      await mongoose.connect(url);
        console.log('connection réussie');
    } catch (error) {
        console.log({error});
    }
}

export default connectDB;