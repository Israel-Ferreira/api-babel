"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LivroHandler = _interopRequireDefault(require("../handlers/LivroHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(app) {
  app.get('/', function (req, res, next) {
    return res.send({
      message: "Hello Man"
    });
  });
  app.get('/v1/livros', _LivroHandler.default.getAll);
  app.post('/v1/livros/newlivro', _LivroHandler.default.postLivro);
  app.get('/v1/livros/:id', _LivroHandler.default.getById);
  app.put('/v1/livros/:id', _LivroHandler.default.update);
  app.delete('/v1/livros/:id', _LivroHandler.default.removeById);
};

exports.default = _default;