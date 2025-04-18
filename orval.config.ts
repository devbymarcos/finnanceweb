import { defineConfig } from "orval";

export default defineConfig({
  mockApi: {
    input: "./src/orval/api.yaml",
    output: {
      target: "./src/http/orval-client.ts",
      client: "fetch",
      mock: true,
    },
  },
});
