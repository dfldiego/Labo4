//Importar liberias
var _ = require("lodash");
//Importar sequelize
var sequelize = require("../model/database");
//Importar modelo Instrumento
var Instrumento = require("../model/Instrumento");

const controllers = {};

//para migrar por si no tiene tablas
sequelize.sync();

controllers.list = async (req, res) => {
  try {
    const data = await Instrumento.findAll();
    res.json({ success: true, data: data });
  } catch (error) {
    console.log("Error en el list de controlador");
    return error;
  }
};

controllers.show = async (req, res) => {
  try {
    const data = await Instrumento.findAll({
      limit: 1,
      where: {
        id: req.params["id"],
      },
    });

    if (_.isEmpty(data)) {
      res.status(404);
      return res.json({ success: false, error: "Not found" });
    }

    res.json({ success: true, data: data[0] });
  } catch (error) {
    res.status(500);
    res.json({ success: false, error: error });
  }
};

controllers.create = async (req, res) => {
  try {
    const data = await Instrumento.create(req.body);
    res.json({ success: true, message: "Guardado exitosamente", data: data });
  } catch (error) {
    res.status(500);
    res.json({ success: false, error: error, body: req.body });
  }
};

controllers.update = async (req, res) => {
  try {
    await Instrumento.update(req.body, {
      where: {
        id: req.params["id"],
      },
    });

    const data = await Instrumento.findAll({
      limit: 1,
      where: {
        id: req.params["id"],
      },
    });

    res.json({ success: true, data: data[0], message: "Updated successful" });
  } catch (error) {
    res.status(500);
    res.json({ success: false, error: error });
  }
};

controllers.delete = async (req, res) => {
  // parameter
  const { id } = req.body;
  // delete sequelize
  const del = await Instrumento.destroy({
    where: {
      id: req.params["id"]
    }
  });
  res.json({ success: true, deleted: del, message: "Deleted successful" });
};

//Una f asíncrona se declara con async.
//devuelve una promesa.
/**
await: se usa cuando queremos que la funcion espere que se termine
de ejecutar cierta parte del codigo o funcion, tiene q esperar para
 proseguir la ejecucion de la siguiente linea de codigo.
*/
controllers.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function () {
      //llama a todos los datos del empleado
      const data = Instrumento.findAll();
      return data;
    })
    .catch((err) => {
      return err;
    });
  res.json({ success: true, data: response });
};



module.exports = controllers;
