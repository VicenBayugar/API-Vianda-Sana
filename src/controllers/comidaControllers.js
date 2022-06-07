const comidaSchema = require("../models/comida");

const comidaControllers = {
  agregarComida: async (req, res) => {
    try {
      const comida = comidaSchema(req.body);
      await comida.save();
      res.json(comida);
    } catch (error) {
      res.send("No se pude cargar la comida");
      console.log(error);
    }
  },
  obtenerComidas: async (req, res) => {
    try {
      const comidas = await comidaSchema.find();
      res.json(comidas);
    } catch (error) {
      res.send("No se pudo cargar las comidas");
      console.log(error);
    }
  },
  obtenerUnaComida: async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const unaComida = await comidaSchema.findById(id);
      res.json(unaComida);
    } catch (error) {
      res.send("No se pudo carga la comida");
      console.log(error);
    }
  },
  eliminarComida: async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const unaComida = await comidaSchema.deleteOne(id);
      res.json(unaComida);
    } catch (error) {
      res.send("No se pudo carga la comida");
      console.log(error);
    }
  },
  editarComida: async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const comidaEditada = await comidaSchema.findByIdAndUpdate(id, req.body);
      res.json(comidaEditada);
    } catch (error) {
      res.send("No se pudo actualizar la comida");
      console.log(error);
    }
  },
};

module.exports = comidaControllers;
