const express=require("express");
const app= express();

app.listen(8080,()=>console.log("Listenning to port 8080"))


/*app.use((req,res)=>{
    console.log("Received a request")
    res.send("A response from the server")
})*/



app.get('/',(req,res)=>res.send('Home Page'))

app.get('/cats',(req,res)=>res.send("Get request /cats"))

app.get('/dogs',(req,res)=>{console.log("entered get request /dogs");
                            res.send("Get response /dogs")})
app.post('/cats',(req,res)=> res.send("Post request /cats"))

app.post('/dogs',(req,res)=>{res.send("post request /dogs")})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    res.send(`Viewing the sub ${subreddit}`)})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}=req.params;
    res.send(`Viewing the PostId ${postId} on the subreddit ${subreddit}`)
})

app.get('/search',(req,res)=>{
    const {q}=req.query

    if(!q)
    {
        res.send("No search string was submitted");
    }
    res.send(`Showing results for search ${q}`)
})


app.get("*",(req,res)=>res.send("Unknown path"))