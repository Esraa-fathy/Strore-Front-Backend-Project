"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ordproductsHelper_1 = require("../helpers/ordproductsHelper");
var verifyAuthentication_1 = __importDefault(require("./Authenticatin/verifyAuthentication"));
var ordproductsRoute = (0, express_1.default)();
ordproductsRoute.get("/TestingOP", function (req, res) {
    try {
        res.send("OrderProducts Middleware is Runing!");
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
console.log("OrderProducts Middleware is Runing!");
ordproductsRoute.post("/op", verifyAuthentication_1.default, ordproductsHelper_1.create);
ordproductsRoute.get("/op", verifyAuthentication_1.default, ordproductsHelper_1.index);
ordproductsRoute.get("/op", verifyAuthentication_1.default, ordproductsHelper_1.orderinproduct);
ordproductsRoute.delete("/op/:id/:id", verifyAuthentication_1.default, ordproductsHelper_1.Delete);
ordproductsRoute.put("/op/:id", verifyAuthentication_1.default, ordproductsHelper_1.update);
exports.default = ordproductsRoute;
