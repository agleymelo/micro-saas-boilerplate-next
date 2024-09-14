import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { accounts, sessions } from "./schema";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp('email_verified'),
  image: text("image"),
});

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
}));