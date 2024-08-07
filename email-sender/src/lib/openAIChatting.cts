import OpenAI from "openai";
// const { OpenAI } = require("@arakoodev/edgechains.js/openai");

const path = require("path");
const Jsonnet = require("@arakoodev/jsonnet");
const jsonnet = new Jsonnet();

const secretsPath = path.join(__dirname, "../../jsonnet/secrets.jsonnet");
const apiKey = JSON.parse(jsonnet.evaluateFile(secretsPath)).openrouter_api_key;

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey,
});

function openAIChatting() {
  return async (position: string) => {
    const prompt = `Write an email to hiring manager for job title ${position}`;
    try {
      const completion = await openai.chat.completions
        .create({
          model: "mistralai/mistral-7b-instruct:free",
          messages: [{ role: "user", content: JSON.stringify(prompt) }],
        })
        .then((completion: any) => {
          // console.log("ans", completion.choices[0]);
          return JSON.stringify(completion.choices[0].message.content);
        })
        .catch((error: any) => {
          console.error(error);
        });

      return completion;
    } catch (error) {
      console.error(error);
    }
  };
}

// function openAIChatting() {
//   return  (position: string) => {
//     const prompt = `Write an email to hiring manager for job title ${position}`;
//     try {
//       const completion =  openai.chatWithFunction({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: JSON.stringify(prompt) }],
//       })
//         .then((completion: any) => {
//           // console.log("ans", completion.choices[0]);
//           return JSON.stringify(completion.choices[0].message.content);
//         })
//         .catch((error: any) => {
//           console.error(error);
//         });

//       return completion;
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }

module.exports = openAIChatting;
