import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { createUser, getUserByGoogleId } from "../services/userServices";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { userJwtSchema } from "../db/schema";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: process.env.GOOGLE_REDIRECT_URI,
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      try {
        let user = await getUserByGoogleId(profile.id);
        if (!user) {
          await createUser({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            picture: profile.photos[0].value,
          });
          user = await getUserByGoogleId(profile.id);
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "",
};

passport.use(
  new JwtStrategy(jwtOptions, (payload: typeof userJwtSchema, done: any) => {
    const user = payload;
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done: any) => {
  done(null, obj);
});
