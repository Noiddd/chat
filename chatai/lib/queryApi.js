import { openai } from "./openAi";

const query = async (prompt, chatId) => {
  const res = await openai
    .call(prompt)
    .catch(
      (err) =>
        `Chat was unable to find an answer for that! (Error: ${err.message})`
    );

  console.log(res);

  return res;
};

export default query;
