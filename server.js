//uses .env file in config folder
require("dotenv").config({ path: "./config/.env" })

//passport config
require("./config/passport")(passport)

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const methodOverride = require("method-override")
const flash = require("express-flash")
const logger = require("morgan")
const connectDB = require("./config/database")

//connects mongoDB
connectDB()

//uses EJS for views
app.set("view engine", "ejs")

//static folder
app.use(express.static("public"))

//body parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//logging
app.use(logger("dev"))

//uses forms for put / delete
app.use(methodOverride("_method"))

//setup sessions - stored in MongoDB
app.use(
  session({
    secret: "not so secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//uses flash messages for user errors, info, ect...
app.use(flash())

//routes for which the server is listening
app.use("/", require("./routes/index"))
app.use("/shots", require("./routes/shots"))
app.use("/license", require("./routes/license"))
app.use("/certs", require("./routes/certs"))
app.use("/docs", require("./routes/docs"))

//server running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!")
})
