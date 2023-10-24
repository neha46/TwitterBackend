 # Requirements 

 - user able to create  post
 post /tweet can not more than 250 chars
 Every post/ Tweet will  be having  support for image upload


 any post is visible to all those users who follows author
 anyone who follow you  abel to comment/ tweet on post
  anyone who follow you  abel to like post

  we can like and comment
  Retweet

  - user
    name
    follower count
    having bio
    last 10 tweets from user

- pagination on tweets
- user auth

- evert tweet mighr be have an hashtag

<!-- some tweet examples -->
   //create one tweet -------------
    // const tweet=await Tweet.create({
    //     content:'Second-content',
    //     userEmail:'A1@b.com'
    // });
    // console.log('created tweet:'+tweet);


    // get one and update by save method-------
//     const tweet=await Tweet.findById('65327ec4798d77e78c19fef3');
// tweet.content="myFirst Content";
// await tweet.save();
    
//     console.log(tweet.userEmail);

//const tweetRepo=new TweetRepository;


// create one tweet ------------------
// const tweet= await tweetRepo.create({
//     content:"third-content",
//     userEmail:"c@d.com"
// })
// console.log(tweet);

// get one tweet------------------------------
// const tweet= await tweetRepo.get('65328d916b8cbf7ef064217b')
// console.log(tweet);

// update one tweet-------------------------
// const tweet=await tweetRepo.update('653280cb41e9f086350412fa',{content:"updated new"});
// console.log(tweet);

// create one tweet by nesting of schema --------
// const tweet=await tweetRepo.create({content:"nested2"})
// console.log(tweet)
// const comment = await Comment.create({
//     content:"this is my second comment",
//     userEmail:"neha@1.com",
// })
// console.log(comment)
//  tweet.comments.push(comment);
//  await tweet.save();
//  console.log(tweet)

// get tweet by follow populate method--------
// const tweet= await tweetRepo.getWthComments('6532a37839bbe522832835d9');
// console.log(tweet)

// get all tweet by skip and limit method-----
// const tweet=await tweetRepo.getAll(1,2);
// console.log(tweet);

// for virtuals------------
// const tweet=await tweetRepo.getAll(1,2);
// console.log(tweet[1].contentWithEmail);

// pre  hooks
// const tweet=await tweetRepo.create({content:"with new hooks"})
// console.log(tweet);
