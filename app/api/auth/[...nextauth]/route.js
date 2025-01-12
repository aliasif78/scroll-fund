// Next Auth
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// Database
import mongoose from "mongoose";
import User from "@/models/User";
import connectDB from "@/db/connectDB";

export const authOptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to the homepage (or any other page you prefer)
      return baseUrl;
    },

    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await connectDB();

        // Check if the user already exists in the database
        const user = await User.findOne({ email: profile.email });

        // Doesn't exist
        if (!user) {
          // Create a new user
          const newUser = await User.create({
            name: profile.name,
            email: profile.email,
            profilePic: profile.image,
            username: profile.login,
          });

          // Save the user to the database
          await newUser.save();
        }

        // Close the connection
        // await client.disconnect();

        // Grant the user permission to sign in
        return true;
      }

      // Don't allow other providers
      else return false;
    },

    async session({ session, user, token }) {
      // CONTINUE FROM HERE - FIND OUT HOW TO GET THE USERNAME (IT'S ALREADY STORED IN THE DB)
      session.user.username = user.username;
      return session;
    },
  },
});

export { authOptions as GET, authOptions as POST };
