const express = require("express");
const app = express();
const indexRouter = require("./router/indexRouter.js");
const detalleRouter = require("./router/detalleRouter.js");


app.use(express.static("./public"));

app.set("view engine", "ejs");

app.listen(3000, () => {

    console.log("Servidor en el puerto 3000");
});

app.use("/", indexRouter);
app.use("/detalle", detalleRouter);