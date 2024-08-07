import { ArakooServer } from "@arakoodev/edgechains.js/arakooserver";
import Jsonnet from "@arakoodev/jsonnet";
import fileUriToPath from "file-uri-to-path";
import path from "path";

//@ts-ignore
import createClient from "sync-rpc";

const __dirname = fileUriToPath(import.meta.url);

const server = new ArakooServer();
const app = server.createApp();
const jsonnet = new Jsonnet();

const openAIChatting = createClient(
  path.join(__dirname, "../lib/openAIChatting.cjs")
);

const emailSender = createClient(
  path.join(__dirname, "../lib/emailSender.cjs")
);

app.get("/", async (c) => {
  const { position, to, delay } = c.req.query();
  jsonnet.extString("position", position);
  jsonnet.extString("to", to);
  jsonnet.extString("delay", delay);
  jsonnet.extString("subject", `Interested in ${position}`);
  jsonnet.javascriptCallback("openAIChatting", openAIChatting);
  jsonnet.javascriptCallback("emailSender", emailSender);
  const response = jsonnet.evaluateFile(
    path.join(__dirname, "../../jsonnet/main.jsonnet")
  );
  // const response = "";
  return c.json(response);
});

server.listen(3000);
