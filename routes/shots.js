const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer")
const shotsController = require("../controllers/shots")
const { ensureAuth } = require("../middleware/auth")

router.get("/", ensureAuth, shotsController.getShotsPage)
router.post("/createShot", upload.single("file"), shotsController.createShot)
router.delete("/deleteShot/:id", ensureAuth, shotsController.deleteShot)

module.exports = router