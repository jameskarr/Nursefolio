const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer")
const certController = require("../controllers/cert")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get("/", ensureAuth, certController.getCertPage)
router.post("/createCert", upload.single("file"), certController.createCert)
router.delete("/deleteCert/:id", ensureAuth, certController.deleteCert)

module.exports = router