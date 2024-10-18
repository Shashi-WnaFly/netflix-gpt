import OpenAI from "openai";
import { NETFLIX_GPT_KEY } from "./constants";

const openAi = new OpenAI({
    apiKey: 'sk-XTNDZn4KcmYdCv81SzHYzIOC8ylbKdu8eMVTnKZ-8-T3BlbkFJgBZltqRc4gvm3-xoR1tbs0GMkLCyWcily7fhGKa8MA',
    dangerouslyAllowBrowser: true,
})

export default openAi;