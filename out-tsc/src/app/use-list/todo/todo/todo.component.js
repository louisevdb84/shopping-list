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
var shops_service_1 = require("../../../services/shops.service");
var status_service_1 = require("../../../services/status.service");
var TodoComponent = /** @class */ (function () {
    function TodoComponent(itemsService, shopsService, statusService) {
        this.itemsService = itemsService;
        this.shopsService = shopsService;
        this.statusService = statusService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopsService.getShops()
            .subscribe(function (res) {
            _this.shops = res.json();
            _this.selectedShop = _this.shops[0];
        }, function (err) { return console.log(err); });
        this.statusService.getStatusList()
            .subscribe(function (res) { return _this.status = res.json(); }, function (err) { return console.log(err); });
        this.getItems("Current");
    };
    TodoComponent.prototype.getItems = function (status) {
        var _this = this;
        this.itemsService.getItemsByStatus('items', status)
            .subscribe(function (res) {
            _this.items = res.json().filter(function (item) { return item.shop.name === _this.selectedShop.name; });
        }, function (err) { return console.log(err); });
    };
    TodoComponent.prototype.onShopSelect = function (event) {
        this.selectedShop = this.shops.find(function (shop) { return shop.name === event.target.value; });
        this.getItems("Current");
    };
    TodoComponent.prototype.onDone = function (item) {
        var _this = this;
        item.status = this.status.find(function (s) { return s.name === "Done"; });
        this.itemsService.editItem(item)
            .subscribe((function (res) {
            _this.getItems("Current");
            _this.itemsService.itemsChanged.next();
        }));
    };
    __decorate([
        core_1.ViewChild('shopInput'),
        __metadata("design:type", core_1.ElementRef)
    ], TodoComponent.prototype, "shopInputRef", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'app-todo',
            templateUrl: './todo.component.html',
            styleUrls: ['./todo.component.css']
        }),
        __metadata("design:paramtypes", [items_service_1.ItemsService,
            shops_service_1.ShopsService,
            status_service_1.StatusService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map