import { type NextAuthConfig } from "next-auth";
import { db } from "../drizzle";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { googleProvider } from "./google-provider";
import { accounts } from "../drizzle/accounts";
import { sessions } from "../drizzle/sessions";
import { users } from "../drizzle/users";
import { verificationTokens } from "../drizzle/verification-tokens";

export const authConfig = {
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [googleProvider],
  session: {
    strategy: "database"
  },
  pages: {
    signIn: '/auth/log-in',
    error: '/auth/error',
  },
  callbacks: {
    session: async ({ session, user, ...params }) => {
      if ("token" in params && session.user) {
        session.user.id = params.token.sub!
      }

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id
        }
      }
    },
  }
} satisfies NextAuthConfig