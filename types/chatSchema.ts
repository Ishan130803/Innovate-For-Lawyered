export interface chatSchema {
  userId: string;
  convid: string;
  chatid: string;
  prompt: string;
  response: "SUCCESS"|"FAIL"|"LOADING";
}

export interface conversationSchema {
  userId: string;
  convid: string;
  title: string;
}
