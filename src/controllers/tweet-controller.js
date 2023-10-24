import TweetRepository from '../repository/TweetRepository.js';
import TweetService from '../services/tweet-service.js';

const tweetService= new TweetService();
const TweetController=async(req,res)=>{
 try {
    
     const tweet=await tweetService.create(req.body);
     return(
        res.status(201),json({
            success:true,
            message:"a new tweet created successfully",
            data:tweet,
            error:{},
        })
     )
 } catch (error) {
    return(
        res.status(500),json({
            success:false,
            message:"error while creating tweet",
            data:{},
            error:error,
        })
     )
 }
}
export default TweetController;