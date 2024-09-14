import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { type NextAuthConfig } from "next-auth";

import { db } from "../drizzle";
import { accounts } from "../drizzle/accounts";
import { sessions } from "../drizzle/sessions";
import { users } from "../drizzle/users";
import { verificationTokens } from "../drizzle/verification-tokens";
import { resend } from "../resend";
import SendWelcomeEmail from "../resend/react/send-welcome";

import { googleProvider } from "./google-provider";

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
    signIn: async ({ account }) => {
      if (account?.provider === "google") {
        return true
      }
      
      return true
    }
  },
  events: {
    createUser: async ({ user }) => {
      await resend.emails.send({
        from: "agley@agley.dev",
        to: user.email!,
        subject: "Welcome to Micro SaaS Boilerplate Next!",
        react: SendWelcomeEmail({
          name: user.name!,
          email: user.email!
        })
      })
    }
  }
} satisfies NextAuthConfig