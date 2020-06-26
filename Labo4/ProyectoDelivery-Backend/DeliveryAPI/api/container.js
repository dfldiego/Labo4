const {
  asClass,
  createContainer,
  asFunction,
  asValue
} = require("awilix");
// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");
const ClienteRoutes = require("../api/routes/cliente.routes");
const DepartamentoRoutes = require("../api/routes/departamento.routes");
const DomicilioRoutes = require("../api/routes/domicilio.routes");
const EmpleadoRoutes = require("../api/routes/empleado.routes");
const LocalidadRoutes = require("../api/routes/localidad.routes");
const PersonaRoutes = require("../api/routes/persona.routes");
const RolEmpleadoRoutes = require("../api/routes/rol.empleado.routes");
const RolRoutes = require("../api/routes/rol.routes");
const UsuarioRoutes = require("../api/routes/usuario.routes");
const StockInsumoRoutes = require("../api/routes/stock.insumo.routes");
const CompraInsumoRoutes = require("../api/routes/compra.insumo.routes");
const UnidadMedidaRoutes = require("../api/routes/unidad.medida.routes");
const InsumoRoutes = require("../api/routes/insumo.routes");
const ArticuloInsumoRoutes = require("../api/routes/articulo.insumo.routes");
const ArticuloRoutes = require("../api/routes/articulo.routes");
const HistorialArticuloVentaRoutes = require("../api/routes/historial.articulo.venta.routes");
const CategoriaRoutes = require("../api/routes/categoria.routes");
const DetallePedidoRoutes = require("../api/routes/detalle.pedido.routes");
const PedidoRoutes = require("../api/routes/pedido.routes");
const EstadosPedidoRoutes = require("../api/routes/estados.pedido.routes");
const ConfiguracionRoutes = require("../api/routes/configuracion.routes");

// business
const {
  ClienteBusiness,
  DepartamentoBusiness,
  DomicilioBusiness,
  EmpleadoBusiness,
  LocalidadBusiness,
  PersonaBusiness,
  RolEmpleadoBusiness,
  RolBusiness,
  UsuarioBusiness,
  StockInsumoBusiness,
  CompraInsumoBusiness,
  UnidadMedidaBusiness,
  InsumoBusiness,
  ArticuloInsumoBusiness,
  ArticuloBusiness,
  HistorialArticuloVentaBusiness,
  CategoriaBusiness,
  DetallePedidoBusiness,
  PedidoBusiness,
  EstadosPedidoBusiness,
  ConfiguracionBusiness,
} = require("../domain/");

// controllers
const {
  ClienteController,
  DepartamentoController,
  DomicilioController,
  EmpleadoController,
  LocalidadController,
  PersonaController,
  RolEmpleadoController,
  RolController,
  UsuarioController,
  StockInsumoController,
  CompraInsumoController,
  UnidadMedidaController,
  InsumoController,
  ArticuloInsumoController,
  ArticuloController,
  HistorialArticuloVentaController,
  CategoriaController,
  DetallePedidoController,
  PedidoController,
  EstadosPedidoController,
  ConfiguracionController,
} = require("../api/controllers");

// services
const {
  ClienteService,
  DepartamentoService,
  DomicilioService,
  EmpleadoService,
  LocalidadService,
  PersonaService,
  RolEmpleadoService,
  RolService,
  UsuarioService,
  StockInsumoService,
  CompraInsumoService,
  UnidadMedidaService,
  InsumoService,
  ArticuloInsumoService,
  ArticuloService,
  HistorialArticuloVentaService,
  CategoriaService,
  DetallePedidoService,
  PedidoService,
  EstadosPedidoService,
  ConfiguracionService,
} = require("../services");

// repositories
const {
  ClienteRepository,
  DepartamentoRepository,
  DomicilioRepository,
  EmpleadoRepository,
  LocalidadRepository,
  PersonaRepository,
  RolEmpleadoRepository,
  RolRepository,
  UsuarioRepository,
  StockInsumoRepository,
  CompraInsumoRepository,
  UnidadMedidaRepository,
  InsumoRepository,
  ArticuloInsumoRepository,
  ArticuloRepository,
  HistorialArticuloVentaRepository,
  CategoriaRepository,
  DetallePedidoRepository,
  PedidoRepository,
  EstadosPedidoRepository,
  ConfiguracionRepository,
} = require("../dal/repositories");

// db
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    ClienteController: asClass(ClienteController).singleton(),
    ClienteRoutes: asFunction(ClienteRoutes).singleton(),
    DepartamentoController: asClass(DepartamentoController).singleton(),
    DepartamentoRoutes: asFunction(DepartamentoRoutes).singleton(),
    DomicilioController: asClass(DomicilioController).singleton(),
    DomicilioRoutes: asFunction(DomicilioRoutes).singleton(),
    EmpleadoController: asClass(EmpleadoController).singleton(),
    EmpleadoRoutes: asFunction(EmpleadoRoutes).singleton(),
    LocalidadController: asClass(LocalidadController).singleton(),
    LocalidadRoutes: asFunction(LocalidadRoutes).singleton(),
    PersonaController: asClass(PersonaController).singleton(),
    PersonaRoutes: asFunction(PersonaRoutes).singleton(),
    RolEmpleadoController: asClass(RolEmpleadoController).singleton(),
    RolEmpleadoRoutes: asFunction(RolEmpleadoRoutes).singleton(),
    RolController: asClass(RolController).singleton(),
    RolRoutes: asFunction(RolRoutes).singleton(),
    UsuarioController: asClass(UsuarioController).singleton(),
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
    StockInsumoController: asClass(StockInsumoController).singleton(),
    StockInsumoRoutes: asFunction(StockInsumoRoutes).singleton(),
    CompraInsumoController: asClass(CompraInsumoController).singleton(),
    CompraInsumoRoutes: asFunction(CompraInsumoRoutes).singleton(),
    UnidadMedidaController: asClass(UnidadMedidaController).singleton(),
    UnidadMedidaRoutes: asFunction(UnidadMedidaRoutes).singleton(),
    InsumoController: asClass(InsumoController).singleton(),
    InsumoRoutes: asFunction(InsumoRoutes).singleton(),
    ArticuloInsumoController: asClass(ArticuloInsumoController).singleton(),
    ArticuloInsumoRoutes: asFunction(ArticuloInsumoRoutes).singleton(),
    ArticuloController: asClass(ArticuloController).singleton(),
    ArticuloRoutes: asFunction(ArticuloRoutes).singleton(),
    HistorialArticuloVentaController: asClass(HistorialArticuloVentaController).singleton(),
    HistorialArticuloVentaRoutes: asFunction(HistorialArticuloVentaRoutes).singleton(),
    CategoriaController: asClass(CategoriaController).singleton(),
    CategoriaRoutes: asFunction(CategoriaRoutes).singleton(),
    DetallePedidoController: asClass(DetallePedidoController).singleton(),
    DetallePedidoRoutes: asFunction(DetallePedidoRoutes).singleton(),
    PedidoController: asClass(PedidoController).singleton(),
    PedidoRoutes: asFunction(PedidoRoutes).singleton(),
    EstadosPedidoController: asClass(EstadosPedidoController).singleton(),
    EstadosPedidoRoutes: asFunction(EstadosPedidoRoutes).singleton(),
    ConfiguracionController: asClass(ConfiguracionController).singleton(),
    ConfiguracionRoutes: asFunction(ConfiguracionRoutes).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
    ClienteService: asClass(ClienteService).singleton(),
    DepartamentoService: asClass(DepartamentoService).singleton(),
    DomicilioService: asClass(DomicilioService).singleton(),
    EmpleadoService: asClass(EmpleadoService).singleton(),
    LocalidadService: asClass(LocalidadService).singleton(),
    PersonaService: asClass(PersonaService).singleton(),
    RolEmpleadoService: asClass(RolEmpleadoService).singleton(),
    RolService: asClass(RolService).singleton(),
    UsuarioService: asClass(UsuarioService).singleton(),
    StockInsumoService: asClass(StockInsumoService).singleton(),
    CompraInsumoService: asClass(CompraInsumoService).singleton(),
    UnidadMedidaService: asClass(UnidadMedidaService).singleton(),
    InsumoService: asClass(InsumoService).singleton(),
    ArticuloInsumoService: asClass(ArticuloInsumoService).singleton(),
    ArticuloService: asClass(ArticuloService).singleton(),
    HistorialArticuloVentaService: asClass(HistorialArticuloVentaService).singleton(),
    CategoriaService: asClass(CategoriaService).singleton(),
    DetallePedidoService: asClass(DetallePedidoService).singleton(),
    PedidoService: asClass(PedidoService).singleton(),
    EstadosPedidoService: asClass(EstadosPedidoService).singleton(),
    ConfiguracionService: asClass(ConfiguracionService).singleton(),
  })
  .register({
    ClienteRepository: asClass(ClienteRepository).singleton(),
    DepartamentoRepository: asClass(DepartamentoRepository).singleton(),
    DomicilioRepository: asClass(DomicilioRepository).singleton(),
    EmpleadoRepository: asClass(EmpleadoRepository).singleton(),
    LocalidadRepository: asClass(LocalidadRepository).singleton(),
    PersonaRepository: asClass(PersonaRepository).singleton(),
    RolEmpleadoRepository: asClass(RolEmpleadoRepository).singleton(),
    RolRepository: asClass(RolRepository).singleton(),
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    StockInsumoRepository: asClass(StockInsumoRepository).singleton(),
    CompraInsumoRepository: asClass(CompraInsumoRepository).singleton(),
    UnidadMedidaRepository: asClass(UnidadMedidaRepository).singleton(),
    InsumoRepository: asClass(InsumoRepository).singleton(),
    ArticuloInsumoRepository: asClass(ArticuloInsumoRepository).singleton(),
    ArticuloRepository: asClass(ArticuloRepository).singleton(),
    HistorialArticuloVentaRepository: asClass(HistorialArticuloVentaRepository).singleton(),
    CategoriaRepository: asClass(CategoriaRepository).singleton(),
    DetallePedidoRepository: asClass(DetallePedidoRepository).singleton(),
    PedidoRepository: asClass(PedidoRepository).singleton(),
    EstadosPedidoRepository: asClass(EstadosPedidoRepository).singleton(),
    ConfiguracionRepository: asClass(ConfiguracionRepository).singleton(),
  })
  .register({
    ClienteBusiness: asClass(ClienteBusiness).singleton(),
    DepartamentoBusiness: asClass(DepartamentoBusiness).singleton(),
    DomicilioBusiness: asClass(DomicilioBusiness).singleton(),
    EmpleadoBusiness: asClass(EmpleadoBusiness).singleton(),
    LocalidadBusiness: asClass(LocalidadBusiness).singleton(),
    PersonaBusiness: asClass(PersonaBusiness).singleton(),
    RolEmpleadoBusiness: asClass(RolEmpleadoBusiness).singleton(),
    RolBusiness: asClass(RolBusiness).singleton(),
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    StockInsumoBusiness: asClass(StockInsumoBusiness).singleton(),
    CompraInsumoBusiness: asClass(CompraInsumoBusiness).singleton(),
    UnidadMedidaBusiness: asClass(UnidadMedidaBusiness).singleton(),
    InsumoBusiness: asClass(InsumoBusiness).singleton(),
    ArticuloInsumoBusiness: asClass(ArticuloInsumoBusiness).singleton(),
    ArticuloBusiness: asClass(ArticuloBusiness).singleton(),
    HistorialArticuloVentaBusiness: asClass(HistorialArticuloVentaBusiness).singleton(),
    CategoriaBusiness: asClass(CategoriaBusiness).singleton(),
    DetallePedidoBusiness: asClass(DetallePedidoBusiness).singleton(),
    PedidoBusiness: asClass(PedidoBusiness).singleton(),
    EstadosPedidoBusiness: asClass(EstadosPedidoBusiness).singleton(),
    ConfiguracionBusiness: asClass(ConfiguracionBusiness).singleton(),
  });

module.exports = container;