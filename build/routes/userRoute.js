"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userHelper_1 = require("../helpers/userHelper");
var verifyAuthentication_1 = __importDefault(require("./Authenticatin/verifyAuthentication"));
var userRoute = (0, express_1.default)();
userRoute.get("/TestingU", function (req, res) {
    try {
        res.send("User Middleware is Runing!");
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
console.log("User Middleware is Runing!");
userRoute.post("/users", userHelper_1.create);
userRoute.get("/users", verifyAuthentication_1.default, userHelper_1.displayAll);
userRoute.get("/users/:id", verifyAuthentication_1.default, userHelper_1.show);
userRoute.delete("/users/:id", verifyAuthentication_1.default, userHelper_1.Delete);
userRoute.put("/users/:id", verifyAuthentication_1.default, userHelper_1.update);
userRoute.route("/login").post(userHelper_1.login);
exports.default = userRoute;
