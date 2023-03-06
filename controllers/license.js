const cloudinary = require("../middleware/cloudinary")
const License = require("../models/License")

module.exports = {
    getLicensePage: async(req, res) => {
        try {
            const license = await License.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean()
            res.render("license.ejs", {license})
        }   catch (err) {
            console.log(err)
        }
      },
    createLicense: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path)
            await License.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.user.id,
              })
            console.log("License has been added!")
            res.redirect("/license")
        }   catch (err) {
            console.log(err)
        }
    },
    deleteLicense: async (req, res) => {
        try {
            const license = await License.findById({ _id: req.params.id })
            await License.remove({ _id: req.params.id })
            await cloudinary.uploader.destroy(license.cloudinaryId)
            console.log("Deleted License")
            res.redirect("/license")
        }   catch (err) {
            res.redirect("/license")
        }
    }
}