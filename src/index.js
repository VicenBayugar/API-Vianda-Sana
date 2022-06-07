const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3004;
require("dotenv").config();
const comidaRoute = require("./routes/comida");

app.use(cors());
app.use(express.json());
app.use("/api", comidaRoute);

app.get("/", (req, res) => {
  res.send("API Comida Saludable");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a Mongo"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("Servidor corriendo en puerto: ", port));
