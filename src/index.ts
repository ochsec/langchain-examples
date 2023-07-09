import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
// import { getInput } from './template.ts';
// import { getChain } from './llmChain.ts';
// import {getExecutor, input} from './agent.ts';
import { getChain } from './memory.ts';

(async () => {
  dotenv.config();

  const model = new OpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const chain = getChain(model);
  const res1 = await chain.call({ input: "Hi! I'm Jim." });
  console.log(res1);
  const res2 = await chain.call({ input: "What's my name?" });
  console.log(res2);
})();
