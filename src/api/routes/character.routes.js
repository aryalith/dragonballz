const express = require("express");
const router = express.Router();

const { getCharacters } = require("../controlers/character.controllers")

router.get("/all", getCharacters)

module.exports = router;