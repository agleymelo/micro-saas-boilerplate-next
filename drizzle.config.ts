import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["micro-saas-boilerplate-next_*"],
} satisfies Config;
