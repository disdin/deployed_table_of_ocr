import mongoose from "mongoose";

var Schema = mongoose.Schema;

var recordsSchema = new Schema({
  Jobs: String,
  Count: Number,
});


export default {
  recordsSchema
};
