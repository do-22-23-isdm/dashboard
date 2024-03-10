import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Keycloak({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
});
