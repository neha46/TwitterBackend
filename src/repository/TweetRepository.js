import { get } from 'http';
import Tweet from '../models/tweetSchema.js';

class TweetRepository{
 async create(data){
    try {
        const tweet=await Tweet.create(data);
        return tweet;
    } catch (error) {
        console.log(error);
    }
 }
 async get(id){
    try{
        const tweet=await Tweet.findById(id);
        return tweet;
    }
    catch(error){
        console.log(error);
    }
 }

 async getWthComments(id){
    try{
        const tweet= await Tweet.findById(id).populate({path:'comments'});
        return tweet;
    }
    catch(err){
        console.log(err);
    }
 }

//  get all tweets

async  getAll(offset,limit){
    try{
        const tweet=await Tweet.find({}).skip(offset).
        limit(limit);
        return tweet;
    } 
    catch(err){
        console.log(err);
    }
}
//  async update(id,data){
//     try{
//         const tweet=await Tweet.findByIdAndUpdate(id,data,{new:true});
//         return tweet;
//     }
//     catch(error){
//         console.log(error);
//     }
//  }
 async delete(id){
    try{
        const tweet=await Tweet.findByIdAndDelete(id);
        return tweet;
    }
    catch(error){
        console.log(error);
    }
 }
}
export default TweetRepository;