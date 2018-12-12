"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.closeDbConn = exports.conn = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _db = require("./config/db");

var _livrariaRouter = _interopRequireDefault(require("./routes/livrariaRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); // conexão com o banco de dados

var conn = (0, _db.createConnection)();
exports.conn = conn;
conn.on("connected", function () {
  return console.log("Mongoose foi conectado");
});
conn.on("disconnected", function () {
  return console.log("O Mongoose foi desconectado");
});

var closeDbConn = function closeDbConn(dbConn, mes, cb) {
  return (0, _db.closeConnection)(dbConn, mes, cb);
}; //usando injeção de Dependencia nas rotas


exports.closeDbConn = closeDbConn;
(0, _livrariaRouter.default)(app);
var _default = app;
exports.default = _default;