import { OpenAI } from "langchain";
import { ChatOpenAI } from "langchain/chat_models";
import { CallbackManager } from "langchain/callbacks";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  modelName: "gpt-3.5-turbo",
  // streaming: true,
  // callbackManager: CallbackManager.fromHandlers({
  //   async handleLLMNewToken(token) {
  //     process.stdout.write(token);
  //   },
  // }),
});

const memory = new BufferMemory();
export const openai = new ConversationChain({ llm: model, memory: memory });

export const openaiStream = new OpenAI({
  temperature: 0,
  streaming: true,
  callbackManager: {
    handleNewToken(token) {
      console.log(token);
    },
  },
});
