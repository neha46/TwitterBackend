import { get } from 'http';
import HashTag from '../models/hashtagSchema.js';

class HashTagsRepository{
 async create(data){
    try {
        const tag=await HashTag.create(data);
        return tag;
    } catch (error) {
        console.log(error);
    }
 }
 async get(id){
    try{
        const HashTag=await HashTag.findById(id);
        return HashTag;
    }
    catch(error){
        console.log(error);
    }
 }

//bulcreate hastag 
async bulkCreate(data){
    try {
        const tag= await HashTag.insertMany(data);
        return tag;
    } catch (error) {
        console.log(error);
    }
}

// find  array of hashtag ny name
async findByName(titleList){
    try {
        const tag= await HashTag.find({
            title:titleList
        })
                return tag;
    } catch (error) {
        console.log(error)
    }
}
 async delete(id){
    try{
        const tag=await HashTag.findByIdAndDelete(id);
        return tag;
    }
    catch(error){
        console.log(error);
    }
 }
}
export default HashTagsRepository;