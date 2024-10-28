import express from 'express';
import passport from 'passport';
import AuthRoute from './routes/AuthRoute';

const app = express();
const port = 3001;

import './config/passport';

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const version = 'v1';
app.use(`/${version}/api/auth`, AuthRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
