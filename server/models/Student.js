const mongoose = require('mongoose');
const { Schema } = mongoose;

const studetSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  grade: Number,
  age: Number,
});
const Student = mongoose.model('Student', studetSchema);
module.exports = Student;
