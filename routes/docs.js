const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer")
const docController = require("../controllers/doc")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get("/", ensureAuth, docController.getDocPage)
router.post("/createDoc", upload.single("file"), docController.createDoc)
router.delete("/deleteDoc/:id", ensureAuth, docController.deleteDoc)

module.exports = router