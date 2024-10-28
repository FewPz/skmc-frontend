import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/google', passport.authenticate('google', { 
    scope: ['email', 'profile', 'openid'],
    session: false
}));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/' }), (req, res) => {
    res.send(req.user);
});

export default router;