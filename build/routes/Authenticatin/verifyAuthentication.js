"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var verifyAuthToken = function (req, res, next) {
    try {
        //headers.authorization=>   bearer<> Token
        var authorizationHeader = req.headers.authorization;
        var token = authorizationHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.TOKEN);
        var role = parseJwt(token);
        req.body.userRole = role.user;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(401);
        res.json("Access denied, invalid token");
    }
};
exports.default = verifyAuthToken;
var parseJwt = function (token) {
    var base64Payload = token.split(".")[1];
    var payload = Buffer.from(base64Payload, "base64");
    return JSON.parse(payload.toString());
};
