const express = require("express");

const AuthController = require("../controllers/auth.controller");
const authenMiddleware = require("../middleware/authentication");

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { email, password, lastName, firstName } = req.body;
        const result = await AuthController.signup(
            email,
            password,
            lastName,
            firstName
        );
        res.send(result);
    } catch (error) {
        res.send({
            status: 1,
            message: error.toString(),
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await AuthController.login(email, password);
        res.send(result);
    } catch (error) {
        res.send({
            status: 1,
            message: error.toString(),
        });
    }
});

router.get("/test-authen", authenMiddleware.checkToken, (req, res) => {
    console.log(req.user);
    res.send("ok");
});

module.exports = router;
