const mongoose=require("mongoose")

let sc=mongoose.Schema;
const writeschema=new sc(
    {
      title :String,
      write :String,
    }
);
var writemodel =mongoose.model("write",writeschema)
module.exports=writemodel;
