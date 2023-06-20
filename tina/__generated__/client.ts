import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '460783b4311d691899223f800d62864797311b1c', queries });
export default client;
  