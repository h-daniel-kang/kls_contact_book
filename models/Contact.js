// models/Contact.js

var mongoose = require("mongoose");

//DB schema
var contactSchema = mongoose.Schema({
  name:{type:String, required:true},
  class:{type:Number},
  email:{type:String},
  phone:{type:String},
  church:{type:String},
  school:{type:String},
  major:{type:String},
  now:{type:String},
  location:{type:String},
  photo:{type:String}
})

var Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
