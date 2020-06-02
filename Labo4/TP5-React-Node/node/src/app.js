const express = require("express");
const app = express();

const multer = require("multer");


//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());
//upload
const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/images');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
}).single('imagenFormulario');
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//STATIC FILES
app.use(express.static('public'));
//otra ruta
app.use('/upload', upload, (req,res) =>{
  if (req.file) {
    res.json(req.file);
  } else {
    throw 'error';    
  }
});

// importar ruta de instrumento
const instrumentoRouters = require("./routes/instrumentoRoute");

//ruta instrumento
app.use("/instrumento", instrumentoRouters);

//ruta principal
app.use("/", (req, res) => {
  res.send("Hello World from NodeJS express.");
});

//start the server 
app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});
