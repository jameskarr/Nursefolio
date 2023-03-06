const cloudinary = require("../middleware/cloudinary")
const Cert = require("../models/Cert")

module.exports = {
    getCertPage: async(req, res) => {
        try {
            const cert = await Cert.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean()
            res.render("cert.ejs", {cert})
        }   catch (err) {
            console.log(err)
        }
      },
    createCert: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path)
            await Cert.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.user.id,
              })
            console.log("Cert has been added!")
            res.redirect("/certs")
        }   catch (err) {
            console.log(err)
        }
    },
    deleteCert: async (req, res) => {
        try {
            const cert = await Cert.findById({ _id: req.params.id })
            await Cert.remove({ _id: req.params.id })
            await cloudinary.uploader.destroy(cert.cloudinaryId)
            console.log("Deleted Cert")
            res.redirect("/certs")
        }   catch (err) {
            res.redirect("/certs")
        }
    }
}