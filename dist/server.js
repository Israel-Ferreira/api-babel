"use strict";

var _App = _interopRequireWildcard(require("./App"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PORT = process.env.PORT || 6590;

_App.default.listen(PORT, function () {
  console.log("Servidor Iniciado na porta ".concat(PORT));
});

process.on("SIGUSR2", function () {
  (0, _App.closeDbConn)(_App.conn, "nodemon restart", function () {
    return process.kill(process.pid, 'SIGUSR2');
  });
});
process.on("SIGINT", function () {
  (0, _App.closeDbConn)(_App.conn, "A Conexão foi interrompida", function () {
    return process.exit(0);
  });
});