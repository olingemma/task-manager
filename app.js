const express= require("express");
const app= express();
const tasks= require("./routes/task");
const connect = require("./db/connect");
const port = 3000;
const notFound= require("./middleware/not-found");
const errorHandler= require("./middleware/error-handler");

// middleware
app.use(express.static("./public"))
app.use(express.json())

// routes
app.use("/api/v1/tasks",tasks)

// not-found;
app.use(notFound);
app.use(errorHandler);

const start=async ()=>{
  try{
    await connect();
    app.listen(port,()=>{
      console.log(`Server is listening on port ${port}...`)
    })
  }catch(err){
    console.log(err)
  }
}

start();
