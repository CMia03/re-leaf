import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://localhost:1337/graphql`,
  documents: "src/graphql/**/*.ts",
  generates: {
    "src/generated/": {
      preset: "client",
    },
  },
};

export default config;
