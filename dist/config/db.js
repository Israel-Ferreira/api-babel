"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeConnection = exports.createConnection = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createConnection = function createConnection() {
  if (process.env.NODE_ENV === 'production') {
    _mongoose.default.connect(process.env.MONGODB_URI);
  } else {
    _mongoose.default.connect("mongodb://192.168.99.100:27017/livraria", {
      useNewUrlParser: true
    });
  }

  return _getConnection();
};

exports.createConnection = createConnection;

var _getConnection = function _getConnection() {
  return _mongoose.default.connection;
};

var closeConnection = function closeConnection(dbConn, message, callback) {
  dbConn.close(function () {
    console.log("O mongoose foi desconectado por ".concat(message));
    callback();
  });
};

exports.closeConnection = closeConnection;