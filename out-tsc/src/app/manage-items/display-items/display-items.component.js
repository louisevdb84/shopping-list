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
var items_service_1 = require("../../Services/items.service");
var DisplayItemsComponent = /** @class */ (function () {
    function DisplayItemsComponent(itemsService) {
        this.itemsService = itemsService;
    }
    DisplayItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItems();
        this.subscription = this.itemsService.itemsChanged
            .subscribe(function () {
            _this.getItems();
        });
    };
    DisplayItemsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DisplayItemsComponent.prototype.getItems = function () {
        var _this = this;
        this.itemsService.getItemsByStatus('items', 'Permanent')
            .subscribe(function (res) {
            _this.items = res.json();
        }, function (err) { return console.log(err); });
    };
    DisplayItemsComponent.prototype.onEdit = function (item) {
        this.itemsService.startedEditing.next(item);
    };
    DisplayItemsComponent.prototype.onDelete = function (item) {
        var _this = this;
        this.itemsService.removeItem(item._id)
            .subscribe(function (res) { return _this.getItems(); });
    };
    DisplayItemsComponent = __decorate([
        core_1.Component({
            selector: 'app-display-items',
            templateUrl: './display-items.component.html',
            styleUrls: ['./display-items.component.css']
        }),
        __metadata("design:paramtypes", [items_service_1.ItemsService])
    ], DisplayItemsComponent);
    return DisplayItemsComponent;
}());
exports.DisplayItemsComponent = DisplayItemsComponent;
//# sourceMappingURL=display-items.component.js.map