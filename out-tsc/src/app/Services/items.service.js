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
var ItemsService = /** @class */ (function () {
    function ItemsService(http) {
        this.http = http;
        this.itemsChanged = new rxjs_1.Subject();
        this.startedEditing = new rxjs_1.Subject();
        this.url = 'http://localhost:3050/';
    }
    ItemsService.prototype.get = function (path) {
        return this.http.get(this.url + path);
    };
    ItemsService.prototype.getItemsByStatus = function (path, status) {
        return this.http.post(this.url + path, { status: status });
    };
    ItemsService.prototype.newItem = function (item) {
        return this.http.post('http://localhost:3050/items/new', item);
    };
    ItemsService.prototype.newItems = function (items) {
        return this.http.post('http://localhost:3050/items/copy', items);
    };
    ItemsService.prototype.editItem = function (item) {
        return this.http.put('http://localhost:3050/items/' + item._id + '/edit', item);
    };
    ItemsService.prototype.removeItem = function (id) {
        return this.http.delete('http://localhost:3050/items/delete', { body: { id: id } });
    };
    ItemsService.prototype.removeAllByStatus = function (status) {
        return this.http.delete('http://localhost:3050/items/deleteAll', { body: { status: status } });
    };
    ItemsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ItemsService);
    return ItemsService;
}());
exports.ItemsService = ItemsService;
//   getShop(name: string) {
//     //return shops.find(shop => shop.name === name);
//   }
//   newShop(shop: Shop) {
//     return this.http.post('http://localhost:3050/shops/new', shop);
//   }
//   deleteShop(id: string) {
//     return this.http.delete('http://localhost:3050/shops/delete', {body: {id: id}});
//   }
// }
//# sourceMappingURL=items.service.js.map