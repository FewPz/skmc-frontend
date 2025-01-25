import { Router } from "express";
import passport from "passport";

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
    res.redirect("http://localhost:3000/");
  }
);

router.get("logut", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    res.redirect("http://localhost:3000/");
  });
});

export default router;
