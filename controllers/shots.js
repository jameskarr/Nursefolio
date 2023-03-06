const cloudinary = require("../middleware/cloudinary")
const ShotRecord = require("../models/ShotRecord")

module.exports = {
    getShotsPage: async(req, res) => {
        //console.log(req.user) the _id: becomes the id in user: req.user.id
        try {
            const shots = await ShotRecord.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean()
            res.render("shots.ejs", {shots})
        }   catch (err) {
            console.log(err)
        }
      },
    createShot: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path)
            await ShotRecord.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.user.id,
              });
            console.log("ShotRecord has been added!")
            res.redirect("/shots")
        }   catch (err) {
            console.log(err)
        }
    },
    deleteShot: async (req, res) => {
        try {
            const shot = await ShotRecord.findById({ _id: req.params.id })
            await ShotRecord.remove({ _id: req.params.id })
            await cloudinary.uploader.destroy(shot.cloudinaryId)
            console.log("Deleted ShotRecord")
            res.redirect("/shots")
        }   catch (err) {
            res.redirect("/shots")
        }
    }
}