import mongoose from "mongoose";

const ColdemailSchema = new mongoose.Schema({
  to: {
    type: String,
    required: [true, "Please provide email"],
  },
  subject: {
    type: String,
    required: [true, "please provide subject"],
  },
  text: {
    type: String,
    required: [true, "please provide text for an email"],
  },
  delay: {
    type: String,
    required: [true, "provide delay"],
  },
});

const Coldemail = mongoose.model("Coldemail", ColdemailSchema);

export default Coldemail;
