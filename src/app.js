const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;

app.set("port", port);

//middelwares
app.use(morgan("dev"));
app.use(bodyParser.json());

//routes
// ruta principal
app.route("/").get((req, res) => {
  res.json({ message: "Hello World, API REST" });
});
//rutas de usuarios
app.use("/", require("./routes/userRoutes"));
//ruta de libros
require("./routes/librosRoutes")(app);

// servidor en en escucha el puerto 3000
app.listen(app.get("port"), () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
