"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var basicCalculatorController = {
    index: function index(req, res, next) {
        res.json({ error: "Podemos hacer /addition o /minus" });
    },

    addition: function addition(req, res, next) {
        var firstValue = Number(req.headers.first_value);
        var secondValue = Number(req.headers.second_value);

        res.json({
            result: firstValue + secondValue
        });
    }
};

exports.default = basicCalculatorController;