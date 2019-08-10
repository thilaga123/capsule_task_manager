const mongoose = require('mongoose');
const TaskSchema =  mongoose.Schema({
 Parent_ID: String,
 Parent_Task: String,
 Task: String,
 Start_Date: String,
 End_Date: String,
 Priority: Number,
 Status:String
});
module.exports = mongoose.model('Task', TaskSchema);