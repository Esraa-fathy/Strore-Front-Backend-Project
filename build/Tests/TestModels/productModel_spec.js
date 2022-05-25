"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userModel_1 = require("../../models/userModel");
var productModel_1 = require("../../models/productModel");
var orderModel_1 = require("../../models/orderModel");
var db_1 = __importDefault(require("../../db"));
var userTestModel = new userModel_1.Model_OF_User();
var productTestModel = new productModel_1.Model_OF_Product();
var orderTestModel = new orderModel_1.Model_OF_Order();
describe("PRODUCT MODEL", function () {
    describe("Test CRUD API methods", function () {
        it(" create method ", function () {
            expect(productTestModel.create).toBeDefined();
        });
        it(" DisplayAllproducts method", function () {
            expect(productTestModel.displayAllproducts).toBeDefined();
        });
        it(" ShowOneProduct method", function () {
            expect(productTestModel.showOneProduct).toBeDefined();
        });
        it(" Delete method ", function () {
            expect(productTestModel.delete).toBeDefined();
        });
    });
    describe("Test Model logic", function () {
        var user = {
            first_name: "Naglaa",
            last_name: "fathy",
            email: "naglaafathy4256219@gmail.com",
            pass: "test",
        };
        var products = {
            name: "fried Checken",
            price: 100,
            category: "food",
        };
        var orders = {
            user_id: 1,
            status: "active",
        };
        beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userTestModel.create(user)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, orderTestModel.create(orders)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var connection, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "DELETE FROM orderProducts;\nALTER SEQUENCE orderProducts_id_seq RESTART WITH 1;\nDELETE FROM orders;\nALTER SEQUENCE orders_id_seq RESTART WITH 1;\nDELETE FROM products;\nALTER SEQUENCE products_id_seq RESTART WITH 1;\nDELETE FROM users;\nALTER SEQUENCE users_id_seq RESTART WITH 1";
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        _a.sent();
                        connection.release();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Add new pruduct", function () { return __awaiter(void 0, void 0, void 0, function () {
            var createdproduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productTestModel.create(products)];
                    case 1:
                        createdproduct = _a.sent();
                        expect(createdproduct.id).toEqual(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it("List of product", function () { return __awaiter(void 0, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productTestModel.displayAllproducts()];
                    case 1:
                        products = _a.sent();
                        expect(products.length).toBeGreaterThan(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Return specefic product", function () { return __awaiter(void 0, void 0, void 0, function () {
            var returnedproduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productTestModel.showOneProduct("1")];
                    case 1:
                        returnedproduct = _a.sent();
                        expect(returnedproduct.id).toEqual(1);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
