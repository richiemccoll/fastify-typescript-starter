import "dotenv/config";

import { envSchema } from "env-schema";
import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

const schema = Type.Object({
  HOST: Type.String({ default: "0.0.0.0" }),
  LOG_LEVEL: Type.String({ default: "info" }),
  PORT: Type.Number({ default: 8080 }),
  ENV: Type.String({ default: "production" }),
  SERVICE_NAME: Type.String({ default: "fastify-typescript-starter" }),
});

export type Config = Static<typeof schema>;

const config = envSchema<Config>({
  schema,
});

export default config;
