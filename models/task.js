const mongoose= require("mongoose");

const taskSchema= new mongoose.Schema({
	name:{
		type:String,
		required:[true,"Please enter the name"],
		trim:true,
		maxlength:[20,"name can not be more than 20 characters"]
	},
	completed:{
		type:Boolean,
		default:false
	}
})

const Task= mongoose.model("task",taskSchema);

module.exports= Task;
