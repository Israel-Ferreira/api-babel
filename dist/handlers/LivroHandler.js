"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LivroController = _interopRequireDefault(require("../controllers/LivroController"));

var _httpStatus = _interopRequireDefault(require("http-status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sendResp = function sendResp(res, statusCode, data) {
  res.status(statusCode).send({
    'result': data
  });
};

var LivroHandler =
/*#__PURE__*/
function () {
  function LivroHandler() {
    _classCallCheck(this, LivroHandler);
  }

  _createClass(LivroHandler, [{
    key: "getAll",
    value: function getAll(req, res, next) {
      _LivroController.default.getAllLivros().then(function (rsp) {
        return sendResp(res, _httpStatus.default.OK, rsp);
      }).catch(function (err) {
        return sendResp(res, _httpStatus.default.NOT_FOUND, err.message);
      });
    }
  }, {
    key: "getById",
    value: function getById(req, res, next) {
      var id = req.params.id;

      _LivroController.default.getLivroById(id).then(function (rsp) {
        return sendResp(res, _httpStatus.default.OK, rsp);
      }).catch(function (err) {
        return sendResp(res, _httpStatus.default.INTERNAL_SERVER_ERROR, er.message);
      });
    }
  }, {
    key: "postLivro",
    value: function postLivro(req, res, next) {
      var obj = req.body;

      _LivroController.default.adicionarLivro(obj).then(function (rsp) {
        return sendResp(res, _httpStatus.default.CREATED, "Livro Adicionado com sucesso");
      }).catch(function (err) {
        return sendResp(res, _httpStatus.default.INTERNAL_SERVER_ERROR, err.message);
      });
    }
  }, {
    key: "removeById",
    value: function removeById(req, res, next) {
      var id = req.params.id;

      _LivroController.default.deleteLivro(id).then(function (rsp) {
        return sendResp(res, _httpStatus.default.OK, rsp);
      }).catch(function (err) {
        return sendResp(res, _httpStatus.default.INTERNAL_SERVER_ERROR, err.message);
      });
    }
  }, {
    key: "update",
    value: function update(req, res, next) {
      var id = req.params.id;
      var livroUp = req.body;

      _LivroController.default.updateLivro(id, livroUp).then(function (rsp) {
        return sendResp(res, _httpStatus.default.OK, "Livro Atualizado com sucesso");
      }).catch(function (err) {
        return sendResp(res, _httpStatus.default.OK, err);
      });
    }
  }]);

  return LivroHandler;
}();

var _default = new LivroHandler();

exports.default = _default;