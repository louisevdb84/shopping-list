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
var items_service_1 = require("../../../Services/items.service");
var DoneComponent = /** @class */ (function () {
    function DoneComponent(itemsService) {
        this.itemsService = itemsService;
    }
    DoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItems("Done");
        this.subscription = this.itemsService.itemsChanged
            .subscribe(function (res) { return _this.getItems("Done"); });
    };
    DoneComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DoneComponent.prototype.getItems = function (status) {
        var _this = this;
        this.itemsService.getItemsByStatus('items', status)
            .subscribe(function (res) {
            _this.items = res.json();
        }, function (err) { return console.log(err); });
    };
    DoneComponent.prototype.removeAll = function () {
        var _this = this;
        this.itemsService.removeAllByStatus("Done")
            .subscribe((function (res) { return _this.getItems("Done"); }));
    };
    DoneComponent = __decorate([
        core_1.Component({
            selector: 'app-done',
            templateUrl: './done.component.html',
            styleUrls: ['./done.component.css']
        }),
        __metadata("design:paramtypes", [items_service_1.ItemsService])
    ], DoneComponent);
    return DoneComponent;
}());
exports.DoneComponent = DoneComponent;
//# sourceMappingURL=done.component.js.map