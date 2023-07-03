const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    userId:{type:Number, required:true},
    task:{type:String, required:true},
    is_completed:{type:Boolean, required:true}
},{
    versionKey: false
})

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = {TodoModel}