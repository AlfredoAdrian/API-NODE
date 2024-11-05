module.exports = function (app) {
  app.get("/api/libros", (req, res) => {
    res.json(require("../../db/offline/libros.json"));
  });
  app.get("/api/libros/:id", (req, res) => {
    let id = req.params.id;
    res.json(
      require("../../db/offline/libros.json").find((libro) => libro.id == id)
    );
  });
};
