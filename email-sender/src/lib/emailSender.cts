const axios = require("axios");
const path = require("path");
const Jsonnet = require("@arakoodev/jsonnet");
const jsonnet = new Jsonnet();

interface emailOptions {
  to: string;
  subject: string;
  text: string;
  delay: string;
}

function emailSender() {
  return async ({ to, subject, text, delay }: emailOptions) => {
    const options = {
      method: "POST",
      url: "http://localhost:5000/api/v1/coldemail",
      data: {
        to,
        subject,
        text,
        delay,
      },
    };

    try {
      const response = await axios
        .request(options)
        .then((response: any) => {
          const res = response.data;

          console.log("output", res);
          return JSON.stringify(res);
        })
        .catch((error: any) => {
          console.log(error);
        });

      return response;
    } catch (error) {
      console.log(error);
      return "error while sending email..";
    }
  };
}

module.exports = emailSender;
