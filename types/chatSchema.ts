import { StringExpressionOperatorReturningNumber } from "mongoose";

export interface chatSchema {
  chatid : string,
  prompt : string,
  response: string,
}

export interface conversationSchema {
  convid : string,
  chats : Array<chatSchema>
}
