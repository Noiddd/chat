import { openai } from "./openAi";
import { HumanChatMessage } from "langchain/schema";
import { SystemChatMessage } from "langchain/schema";
// import { useCollection } from "react-firebase-hooks/firestore";
// import { collection, orderBy, query } from "firebase/firestore";
// import { ChatMessageHistory } from "langchain/dist/memory";

const query = async (prompt, chatId) => {
  const res = await openai
    .call(
      //   [
      //   new SystemChatMessage(
      //     "You are a rude singaporean midget that is insecure about his height and replies using vulgarities"
      //   ),
      //   new HumanChatMessage(prompt),
      // ]
      { input: prompt }
    )
    .catch(
      (err) =>
        `Chat was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};

export default query;
