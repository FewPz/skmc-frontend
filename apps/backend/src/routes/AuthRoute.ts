import { Router } from "express";
import passport from "passport";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/",
  }),
  (req, res) => {
    const user = req.user as any;
    const token = jwt.sign(
      {
        name: user.name,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("token", token);
    res.redirect(`http://localhost:3000/`);
  }
);

router.get("/logut", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    res.redirect("http://localhost:3000/");
  });
});

export default router;
