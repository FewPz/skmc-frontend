import express from "express";
import cors from "cors";
import passport from "passport";
import AuthRoute from "./routes/AuthRoute";
// import KeygenRoute from "./routes/KeygenRoute";

const app = express();
const port = 3001;
app.use(cors());

import "./config/passport";

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const version = "v1";
app.use(`/${version}/api/auth`, AuthRoute);
// app.use(`/${version}/api/keygen`, KeygenRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
