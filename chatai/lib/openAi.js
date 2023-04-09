import { OpenAI } from "langchain";
import { ChatOpenAI } from "langchain/chat_models";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

export const openai = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
});

export const openaiStream = new OpenAI({
  temperature: 0,
  streaming: true,
  callbackManager: {
    handleNewToken(token) {
      console.log(token);
    },
  },
});
