import { OpenAI } from "langchain";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const template = "What is a good name for a company that makes {product}?";
const prompt = new PromptTemplate({
    template,
    inputVariables: ["product"],
});

export const getChain = (model: OpenAI): LLMChain => {
    return new LLMChain({ llm: model, prompt });
};