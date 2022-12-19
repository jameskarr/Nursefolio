const cloudinary = require("../middleware/cloudinary")
const Doc = require("../models/Doc")

module.exports = {
    getDocPage: async(req, res) => {
        try {
            const doc = await Doc.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean()
            res.render("docs.ejs", {doc})
        }   catch (err) {
            console.log(err)
        }
      },
    createDoc: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path)
            await Doc.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.user.id,
              })
            console.log("Cert has been added!")
            res.redirect("/docs")
        }   catch (err) {
            console.log(err)
        }
    },
    deleteDoc: async (req, res) => {
        try {
            const doc = await Doc.findById({ _id: req.params.id })
            await Doc.remove({ _id: req.params.id })
            await cloudinary.uploader.destroy(doc.cloudinaryId)
            console.log("Deleted Doc")
            res.redirect("/docs")
        }   catch (err) {
            res.redirect("/docs")
        }
    },      
}