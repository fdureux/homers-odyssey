const express = require("express");
const router = express.Router();
const authRouter = require("./auth/auth");
const app = express();

app.use("/auth", authRouter);

router.get("/", (req, res) => {
  res.send("youhou");
});

module.exports = router;
