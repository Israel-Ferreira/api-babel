"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LivroRepository = _interopRequireDefault(require("../repositories/LivroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LivroController =
/*#__PURE__*/
function () {
  function LivroController() {
    _classCallCheck(this, LivroController);
  }

  _createClass(LivroController, [{
    key: "getAllLivros",
    value: function getAllLivros() {
      return _LivroRepository.default.find({});
    }
  }, {
    key: "getLivroById",
    value: function getLivroById(id) {
      return _LivroRepository.default.findById(id);
    }
  }, {
    key: "deleteLivro",
    value: function deleteLivro(id) {
      return _LivroRepository.default.findByIdAndRemove(id);
    }
  }, {
    key: "adicionarLivro",
    value: function adicionarLivro(obj) {
      if (obj.nomeDoLivro === "" && obj.editora === "" && obj.autor === "" && obj.genero === "") {
        throw new Error("Objeto Vazio");
      } else if (obj.genero === "Livro de Youtuber") {
        throw new Error("Não pode requisitar merda");
      } else {
        return _LivroRepository.default.create(obj);
      }
    }
  }, {
    key: "updateLivro",
    value: function updateLivro(id, obj) {
      if (obj.nomeDoLivro !== "" && obj.editora !== "" && obj.autor !== "") {
        return _LivroRepository.default.findByIdAndUpdate(id, obj);
      }
    }
  }]);

  return LivroController;
}();

var _default = new LivroController();

exports.default = _default;