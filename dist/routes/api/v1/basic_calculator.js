'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _basic_calculator_controller = require('../../../controllers/api/v1/basic_calculator_controller');

var _basic_calculator_controller2 = _interopRequireDefault(_basic_calculator_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _basic_calculator_controller2.default.index);
router.post('/addition', _basic_calculator_controller2.default.addition);

exports.default = router;