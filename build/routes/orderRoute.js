"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var orderHelper_1 = require("../helpers/orderHelper");
var verifyAuthentication_1 = __importDefault(require("./Authenticatin/verifyAuthentication"));
var orderRoute = (0, express_1.default)();
orderRoute.get("/TestingO", function (req, res) {
    try {
        res.send("Order Middleware is Runing!");
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
console.log("Order Middleware is Runing!");
orderRoute.post("/orders", verifyAuthentication_1.default, orderHelper_1.create);
orderRoute.get("/orders", verifyAuthentication_1.default, orderHelper_1.displayAll);
orderRoute.get("/orders/:id", verifyAuthentication_1.default, orderHelper_1.show);
orderRoute.delete("/orders/:id", verifyAuthentication_1.default, orderHelper_1.Delete);
orderRoute.put("/orders/:id", verifyAuthentication_1.default, orderHelper_1.update);
exports.default = orderRoute;
