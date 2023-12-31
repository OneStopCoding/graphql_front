
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: ["src/**/*.tsx", "src/graphql/**/*.graphqls"],
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
          "typescript",
          "typescript-operations",
          "typescript-react-apollo"
      ],
      config: {
        withHooks: true
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
