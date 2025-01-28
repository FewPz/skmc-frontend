import express from "express";
import cors from "cors";
import passport from "passport";
import AuthRoute from "./routes/AuthRoute";
import genKeyroute from "./routes/genKeyRoute";
import cookieParser from "cookie-parser";
import session from "express-session";

import "./config/passport";

const app = express();
const port = 3001;
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const version = "v1";
app.use(`/${version}/api/auth`, AuthRoute);
app.use(`/${version}/api/keygen`, genKeyroute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
