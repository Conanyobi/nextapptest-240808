import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../prisma/db";

const bcrypt = require("bcrypt");
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider(
            {
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider(
            {
                name: "Credentials",
                credentials: {
                    email: { label: "Email", type: "email" },
                    password: { label: "Mot de passe", type: "password" } 
                },
                async authorize(credentials) {
                    const user = await prisma.user.findUnique({
                      where: { email: credentials?.email },
                    });
            
                    if (user && user.hashedPassword) {
                      const isValidPassword = await bcrypt.compare(
                        credentials?.password,
                        user.hashedPassword
                      );
            
                      if (isValidPassword) {
                        return user;
                      }
                    }
                    return null;
                  },
            }
        )
    ]
}
