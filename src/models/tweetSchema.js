import { timeStamp } from "console";
import mongoose, { VirtualType } from "mongoose";

const tweetSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,"tweet cannot be more than 250 chars"]
    },
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'HashTag'
        }
    ]
    // userEmail:{
    //     type:String,
    // },
    // comments:[
    //     {
    //             type:mongoose.Schema.Types.ObjectId,
    //             ref:'Comment'
    //         }
    // ]
},{timestamps:true})

// create Viruals-----------
tweetSchema.virtual('contentWithEmail').get(function process()
{
    return `${this.content} created By ${this.userEmail}`
})

//pre  hooks ----------
tweetSchema.pre('save',function(next){
    console.log('Inside a hook');
    this.content=this.content+'...'
    next();
})

 const Tweet=mongoose.model('Tweet',tweetSchema);
 export default Tweet;