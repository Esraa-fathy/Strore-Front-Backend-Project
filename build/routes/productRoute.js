"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productHelper_1 = require("../helpers/productHelper");
var verifyAuthentication_1 = __importDefault(require("./Authenticatin/verifyAuthentication"));
var productRoute = (0, express_1.default)();
productRoute.get("/TestingP", function (req, res) {
    try {
        res.send("Product Middleware is Runing!");
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
console.log("Product Middleware is Runing!");
productRoute.post("/products", verifyAuthentication_1.default, productHelper_1.create);
productRoute.get("/products", verifyAuthentication_1.default, productHelper_1.displayAll);
productRoute.get("/products/:id", verifyAuthentication_1.default, productHelper_1.show);
productRoute.delete("/products/:id", verifyAuthentication_1.default, productHelper_1.Delete);
productRoute.put("/products/:id", verifyAuthentication_1.default, productHelper_1.update);
exports.default = productRoute;
