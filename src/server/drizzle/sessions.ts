import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";

export const sessions = pgTable(
  "sessions",
  {
    sessionToken: text("session_token").notNull().primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    expires: timestamp('expires').notNull(),
  }
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id]
  }
  ),
}));
