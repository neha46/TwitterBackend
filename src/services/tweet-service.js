import  TweetRepository  from '../repository/TweetRepository.js';
import HashTagsRepository from '../repository/HashTagsRepository.js'

class TweetService{
    constructor(){
        this.TweetRepository= new TweetRepository;
        this.HashTagsRepository= new HashTagsRepository;
    }
    async create(data){
        const content=data.content;
        console.log("inputed data by",data);
        //this regex extracts hashtags from data 
        const tags=content.match(/#[a-z0-9A-Z_]+/g).map((tag)=>tag.substring(1).toLowerCase())
// remove #symbol from hashtags

        console.log("current tags",tags);

        const tweet= await this.TweetRepository.create(data);
        

        //aise tags jo already present h vo find hoga 
        let alreadyPresentTags= await this.HashTagsRepository.findByName(tags);
        console.log("alread Present tags:",alreadyPresentTags)
   
        let PresentTags=alreadyPresentTags.map((tag=>tag.title));

        //aise new tags jo inputed data me tags present ni h
        let newTags=tags.filter((value)=>!PresentTags.includes(value))
        console.log("not present tags:",newTags)
        newTags=newTags.map((tag)=>{
            return {title:tag, tweets:[tweet.id]}//-----------------------------------------------------main y puchna h
        })
        
//  new tags that are commented
        //jo tags present ni h unka liy hastag  create kr dena
        const response= await this.HashTagsRepository.bulkCreate(newTags)
        console.log(response)
        const AB=alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id)
            tag.save();
        })
        return tweet;
    }
}
export default TweetService;