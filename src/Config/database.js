import mongoose from 'mongoose';

const connect=async()=>{
  await  mongoose.connect("mongodb+srv://anisha:neha12@cluster0.wpwulto.mongodb.net/MongoLearn")

}
export default connect;