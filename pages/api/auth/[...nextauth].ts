import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER!,
      from: process.env.EMAIL_FROM!,
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_PUBLIC_SECRET,
};

export default NextAuth(authOptions);
