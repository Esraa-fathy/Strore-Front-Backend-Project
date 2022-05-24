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
exports.Model_OF_Ordproducts = void 0;
var db_1 = __importDefault(require("../db"));
var Model_OF_Ordproducts = /** @class */ (function () {
    function Model_OF_Ordproducts() {
    }
    Model_OF_Ordproducts.prototype.create = function (op) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, returningResult, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "INSERT INTO orderProducts (quantity,order_id,product_id) VALUES($1, $2,$3) RETURNING *";
                        return [4 /*yield*/, connection.query(sql, [
                                op.quantity,
                                op.order_id,
                                op.product_id,
                            ])];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        returningResult = result.rows[0];
                        return [2 /*return*/, returningResult];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("Could not create product: ".concat(op.product_id, " to order: ").concat(op.order_id, ": ").concat(err_1.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Model_OF_Ordproducts.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "SELECT * FROM orderProducts";
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("Error at retrieving products in orders: ".concat(err_2.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Model_OF_Ordproducts.prototype.orderinproduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = "SELECT order_id,name,price FROM products INNER JOIN orderPoducts ON product.id = orderPoducts.product_id";
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        result = _a.sent();
                        connection.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        err_3 = _a.sent();
                        throw new Error("unable get order in product: ".concat(err_3));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Model_OF_Ordproducts.prototype.delete = function (order_id, product_id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, returningResult, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = 'DELETE FROM orderProducts WHERE order_id=($1) and product_id=($2) RETURNING *';
                        return [4 /*yield*/, connection.query(sql, [order_id, product_id])];
                    case 2:
                        result = _a.sent();
                        returningResult = result.rows[0];
                        connection.release();
                        return [2 /*return*/, returningResult];
                    case 3:
                        err_4 = _a.sent();
                        throw new Error("Could not delete product: ".concat(product_id, " in order ").concat(order_id, ", Please check error message: ").concat(err_4.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Model_OF_Ordproducts.prototype.update = function (op) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, returningResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, db_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = 'UPDATE orderProducts SET quantity=$1, order_id=$2, product_id=$3 WHERE id=$4 RETURNING *';
                        return [4 /*yield*/, connection.query(sql, [op.quantity, op.order_id, op.product_id, op.id])];
                    case 2:
                        result = _a.sent();
                        returningResult = result.rows[0];
                        console.log(returningResult);
                        connection.release();
                        return [2 /*return*/, returningResult];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Not able to update product (".concat(op.product_id, ") in order (").concat(op.order_id, "), Please check error message: ").concat(error_1.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Model_OF_Ordproducts;
}());
exports.Model_OF_Ordproducts = Model_OF_Ordproducts;
