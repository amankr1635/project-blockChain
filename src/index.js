const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/routes")
app.use(express.json());

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://Amankr:pwwELCe59UIUh9mj@cluster0.oxwexg5.mongodb.net/bonusProject",{useNewUrlParser:true})

.then(()=> console.log("MongoDb is Connected"))
.catch(err=> console.log(err))

app.use("/",routes)


app.listen(3000,function(){
    console.log("Port is running on "+3000)
})