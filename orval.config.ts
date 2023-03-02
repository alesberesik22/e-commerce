import { defineConfig } from "orval";
export default defineConfig({
  petstore: {
    output: {
      mode: "split",
      target: "src/api/store.ts",
      schemas: "src/api/model",
      client: "react-query",
      clean: true,
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: "limit",
        },
      },
    },
    input: {
      target: "./store.yaml",
    },
  },
});
