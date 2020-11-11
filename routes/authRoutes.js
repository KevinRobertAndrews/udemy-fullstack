const passport = require("passport");

module.exports = (app) => {
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["https://www.googleapis.com/auth/plus.login"],
        })
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google", {
            scope: ["https://www.googleapis.com/auth/plus.login"],
        })
    );

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send("Logged out.");
    });

    app.get("/api/currentUser", (req, res) => {
        res.send(req.user);
    });
};
