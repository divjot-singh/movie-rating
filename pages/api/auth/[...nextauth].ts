import NextAuth, { Account, Profile, Session, User } from "next-auth"
import { JWT } from "next-auth/jwt";
import Providers from "next-auth/providers"


export default NextAuth({
	providers:[
		Providers.Google({
			clientId:process.env.GOOGLE_ID,
			clientSecret:process.env.GOOGLE_SECRET,
		}),
	],
	database: process.env.MONGODB_URI,
	callbacks: {
		session: async (session:Session, user:User | undefined = {}) => {
			return session;
		},
		jwt: async (token: JWT, user?: User | undefined, account?: Account | undefined, profile?: Profile | undefined, isNewUser?: boolean | undefined) => {

			if (typeof user !== typeof undefined)
			{
				token.user = user;
			}
			return token;
		}
	},
	session:{
		jwt: true,
        maxAge: 30 * 24 * 60 * 60
	},
})