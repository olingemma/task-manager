require("dotenv").config();
const mongoose= require("mongoose");

const connect= function(){
	mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true}).then(()=>{console.log("connected to database...")}).catch((err)=>{console.log(err)})
}

module.exports= connect;
