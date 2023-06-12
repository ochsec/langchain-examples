import { PromptTemplate } from "langchain/prompts";

const template = "What is a good name for a company that makes {product}?";
    const prompt = new PromptTemplate({
    template,
    inputVariables: ["product"],
});

export const getInput = async () => {
    return await prompt.format({ product: "colorful socks?" });
};