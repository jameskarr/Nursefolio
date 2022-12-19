module.exports = {
  getDashboard: (req, res) => {
    try {
      res.render("dashboard.ejs")
    } catch (err) {
      console.log(err)
    }
  }
}