const passport = require("passport");

module.exports = (app) => {
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: "profile",
        })
    );

    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send("Logged out.");
    });

    app.get("/api/currentUser", (req, res) => {
        res.send(req.user);
    });
};
