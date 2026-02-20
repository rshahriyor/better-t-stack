import { db } from "@better-t-stack/db";
import { env } from "@better-t-stack/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { toNodeHandler } from "better-auth/node";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "sqlite" }), // libsql/sqlite
  baseURL: env.BETTER_AUTH_URL ?? "http://localhost:3000",
  trustedOrigins: [env.CORS_ORIGIN],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: true,
        defaultValue: 'user'
      }
    }
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24
  }
});

export const authNodeHandler = toNodeHandler(auth);
