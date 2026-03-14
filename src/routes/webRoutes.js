const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/login", {
    logo: "/images/logo.png",
    appstore: "/images/appstore.png",
    googleplay: "/images/googleplay.png",
    error: null,
    loading: false,
  });
});

module.exports = router;
