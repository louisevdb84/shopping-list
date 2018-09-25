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
var forms_1 = require("@angular/forms");
var items_service_1 = require("../../Services/items.service");
var item_model_1 = require("../../../Models/item.model");
var status_service_1 = require("../../services/status.service");
var AddeditItemsComponent = /** @class */ (function () {
    function AddeditItemsComponent(itemsService, shopsService, statusService) {
        this.itemsService = itemsService;
        this.shopsService = shopsService;
        this.statusService = statusService;
        this.editMode = false;
    }
    AddeditItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getShops();
        this.getStatus();
        this.subscription = this.itemsService.startedEditing
            .subscribe(function (item) {
            _this.editMode = true;
            _this.editedItem = item;
            _this.itemForm.setValue({
                itemName: "A NAME",
            });
            console.log(_this.editedItem);
            console.log(_this.itemForm);
        });
        this.itemForm.setValue({
            itemName: "A NAME",
        });
    };
    AddeditItemsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AddeditItemsComponent.prototype.getShops = function () {
        var _this = this;
        this.shopsService.getShops()
            .subscribe(function (res) { _this.shops = res.json(); }, function (err) { return console.log(err); });
    };
    AddeditItemsComponent.prototype.getStatus = function () {
        var _this = this;
        this.statusService.getStatusList()
            .subscribe(function (res) { _this.status = res.json(); }, function (err) { return console.log(err); });
    };
    AddeditItemsComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.itemForm.value, itemName = _a.itemName, shops = _a.shops, sorting = _a.sorting, isRepeating = _a.isRepeating;
        var item = new item_model_1.Item(null, itemName, shops, sorting, isRepeating, this.status.find(function (status) { return status.name === "Permanent"; }));
        this.itemsService.newItem(item)
            .subscribe(function (res) { return _this.itemsService.itemsChanged.next(); }, function (err) { return console.log(err); });
        this.itemForm.resetForm();
    };
    __decorate([
        core_1.ViewChild('itemForm'),
        __metadata("design:type", forms_1.NgForm)
    ], AddeditItemsComponent.prototype, "itemForm", void 0);
    AddeditItemsComponent = __decorate([
        core_1.Component({
            selector: 'app-addedit-items',
            templateUrl: './addedit-items.component.html',
            styleUrls: ['./addedit-items.component.css']
        }),
        __metadata("design:paramtypes", [items_service_1.ItemsService,
            shops_service_1.ShopsService,
            status_service_1.StatusService])
    ], AddeditItemsComponent);
    return AddeditItemsComponent;
}());
exports.AddeditItemsComponent = AddeditItemsComponent;
//# sourceMappingURL=addedit-items.component.js.map