"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _LivroSchema = _interopRequireDefault(require("../models/LivroSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _mongoose.default.model('Livro', _LivroSchema.default, 'livros');

exports.default = _default;