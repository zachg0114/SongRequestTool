import GoogleProvider from 'next-auth/providers/google'
import checkUser from './mongo/checkUser'
export const authOptions = {
        providers: [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
        ],
        callbacks: {
          async signIn({ user, account, profile, email, credentials }){
            const isAllowedToSignIn = await checkUser(user.email) 
            if (isAllowedToSignIn) {
              user.isAdmin = true;
              return true
            } else {
              return false
            }
          }
        }
}

