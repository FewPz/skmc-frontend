import { generateToken } from "../utils/jwt";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { db } from "../db/db";
import { users } from "../db/schema/users";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI as string;
const JWT_SECRET = process.env.JWT_SECRET as string;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
  throw new Error(
    "GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_CALLBACK_URL must be provided"
  );
}

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_REDIRECT_URI,
      scope: ["email", "profile", "openid"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = {
        googleId: profile.id,
        displayName: profile.displayName,
        emails: profile.emails?.[0].value,
        picture: profile.photos?.[0].value,
      };
      const checkUser = await db
        .select()
        .from(users)
        .where({ email: user.emails });
      if (!checkUser) {
        await db.insert(users).values(user);
      }
      const token = generateToken(user);
      done(null, { token, user });
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    (jwtPayload, done) => {
      try {
        const user = { id: jwtPayload.id, email: jwtPayload.email };
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

console.log("Google strategy configured successfully.");
