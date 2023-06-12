import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
// import { getInput } from './template.ts';
// import { getChain } from './llmChain.ts';
import {getExecutor, input} from './agent.ts';

(async () => {
  dotenv.config();

  const model = new OpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const executor = await getExecutor(model);
  console.log("Loaded agent.");
  console.log(`Executing with input "${input}"...`);

  const result = await executor.call({ input });
  console.log(`Got output ${result.output}`);
})();
