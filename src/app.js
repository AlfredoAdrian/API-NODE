const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/mongo.database");
const urlPermitidos = require("./config/urlPermitidos");

const app = express();

const port = process.env.PORT || 3000;

app.set("port", port);

// Conectar a MongoDB
connectDB();

//middelwares
app.use(morgan("dev"));
app.use(bodyParser.json());

//configuracion cors
const allowedOrigins = urlPermitidos.map((sitio) => sitio.url);
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST"],
  })
);

//routes
// ruta principal
app.route("/").get((req, res) => {
  res.json({ message: "Hello World, API REST" });
});

//------------- codigo de prueba
//::::rutas de usuarios
// app.use("/", require("./routes/userRoutes"));
//::::ruta de libros
// require("./routes/librosRoutes")(app);

//::::rutas de auth
app.use("/api/auth", require("./routes/authRoutes"));

// servidor en en escucha el puerto 3000
app.listen(app.get("port"), () => {
  console.log(`App listening at http://localhost:${port}`);
});
