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
var shops_service_1 = require("../../services/shops.service");
var DisplayShopsComponent = /** @class */ (function () {
    function DisplayShopsComponent(shopsService) {
        this.shopsService = shopsService;
    }
    DisplayShopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getShops();
        this.subscription = this.shopsService.shopsChanged
            .subscribe(function () {
            _this.getShops();
        });
    };
    DisplayShopsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DisplayShopsComponent.prototype.getShops = function () {
        var _this = this;
        this.shopsService.getShops()
            .subscribe(function (res) { return _this.shops = res.json(); }, function (err) { return console.log(err); });
    };
    DisplayShopsComponent.prototype.onEdit = function (shop) {
        this.shopsService.startedEditing.next(shop);
    };
    DisplayShopsComponent.prototype.onDelete = function (shop) {
        var _this = this;
        this.shopsService.deleteShop(shop._id)
            .subscribe(function (res) { return _this.getShops(); }, function (err) { return console.log(err); });
    };
    DisplayShopsComponent = __decorate([
        core_1.Component({
            selector: 'app-display-shops',
            templateUrl: './display-shops.component.html',
            styleUrls: ['./display-shops.component.css']
        }),
        __metadata("design:paramtypes", [shops_service_1.ShopsService])
    ], DisplayShopsComponent);
    return DisplayShopsComponent;
}());
exports.DisplayShopsComponent = DisplayShopsComponent;
//# sourceMappingURL=display-shops.component.js.map