import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

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
      // You can conditionally redirect to a custom URL
      return baseUrl; // Redirect to the homepage (or any other page you prefer)
    },
  },
});

export { authOptions as GET, authOptions as POST };
