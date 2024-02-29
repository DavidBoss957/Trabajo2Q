
const dbConnect = require('./config/mongo')
const express = require("express")
const app = express()//Le decimos a la app de express() que use cors para evitar el error Cross-Domain (XD)
require('dotenv').config();

const cors = require("cors")
app.use(cors())
app.use(express.json())

app.use("/api", require("./routes"))
app.use(express.static("trabajos"))//localhost:3000/file.jpg

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Servidor escuchando en el puerto " + port)
})

dbConnect()