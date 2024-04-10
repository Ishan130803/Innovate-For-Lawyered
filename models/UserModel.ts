import { Schema } from "mongoose";

const chatSchema = new Schema({
  promptID: {
    type: Schema.Types.UUID,
    required: true,
  },
  prompt: {
    type: Schema.Types.String,
  },
  response: {
    type: Schema.Types.String,
  },
  date:{
    type: Schema.Types.Date,
  }
});


const conversationSchema = new Schema({
  conversationID: {
    type: Schema.Types.String,
  },
  chats:[chatSchema]
});

const userSchema = new Schema({
  
})
