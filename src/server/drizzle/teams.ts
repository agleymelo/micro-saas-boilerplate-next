import {
  json,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const teams = pgTable(
  "teams",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    owner_user_id: uuid("owner_user_id").references(() => users.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    external_id: text("external_id").notNull(),
    external_api_key: json('external_api_key').$type<{
      ciphertext: string
      iv: string
    }>(),
    created_at: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => {
    return {
      ownerUserIdUnique: uniqueIndex().on(table.owner_user_id),
    };
  },
);

export const TeamsRelations = relations(teams, ({ many }) => ({
  members: many(users),
}))