"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var ShopsService = /** @class */ (function () {
    function ShopsService(http) {
        this.http = http;
        this.shopsChanged = new rxjs_1.Subject();
        this.startedEditing = new rxjs_1.Subject();
    }
    ShopsService.prototype.getShops = function () {
        return this.http.get('http://localhost:3050/shops');
    };
    ShopsService.prototype.getShop = function (id) {
        return this.http.get('http://localhost:3050/' + id + '/shop');
    };
    ShopsService.prototype.newShop = function (shop) {
        return this.http.post('http://localhost:3050/shops/new', shop);
    };
    ShopsService.prototype.editShop = function (shop) {
        return this.http.put('http://localhost:3050/shops/' + shop._id + '/edit', shop);
    };
    ShopsService.prototype.deleteShop = function (id) {
        return this.http.delete('http://localhost:3050/shops/delete', { body: { id: id } });
    };
    ShopsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ShopsService);
    return ShopsService;
}());
exports.ShopsService = ShopsService;
//# sourceMappingURL=shops.service.js.map