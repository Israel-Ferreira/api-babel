"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _this = void 0;

var LivroSchema = new _mongoose.Schema({
  nomeDoLivro: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  editora: {
    type: String,
    required: true
  },
  fotoDoLivro: {
    type: String,
    required: true
  },
  prateleira: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
LivroSchema.pre('save', function () {
  if (!_this.createdAt) {
    _this.createdAt = new Date();
  }
});
var _default = LivroSchema;
exports.default = _default;