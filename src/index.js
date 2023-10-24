import express from 'express';
import connect from './Config/database.js'
import TweetService from './services/tweet-service.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',apiRoutes);
app.listen(3000,async()=>{
    console.log("server created");
    await connect();
    console.log("data base connected");

const  service= new TweetService();
const tweet= await service.create({content:'this #HEYY #OSM #mine is to #beautiful and for #future #CAREER'})

console.log("tweet by",tweet);

})