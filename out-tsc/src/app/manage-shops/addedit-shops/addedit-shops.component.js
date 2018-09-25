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
var shop_model_1 = require("../../../Models/shop.model");
var forms_1 = require("@angular/forms");
var AddeditShopsComponent = /** @class */ (function () {
    function AddeditShopsComponent(shopsService) {
        this.shopsService = shopsService;
        this.editMode = false;
    }
    AddeditShopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shopsService.startedEditing
            .subscribe(function (shop) {
            _this.editId = shop._id;
            _this.editMode = true;
            _this.shopsService.getShop(shop._id)
                .subscribe(function (res) {
                _this.editedShop = res.json();
                _this.shopForm.setValue({
                    shopName: _this.editedShop.name
                });
            });
        });
    };
    AddeditShopsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editMode) {
            this.editedShop.name = this.shopForm.value.shopName;
            this.shopsService.editShop(this.editedShop)
                .subscribe(function (res) { return _this.shopsService.shopsChanged.next(); }, function (err) { return console.log(err); });
        }
        else {
            var newShop = new shop_model_1.Shop(null, this.shopForm.value.shopName);
            this.shopsService.newShop(newShop)
                .subscribe(function (res) { return _this.shopsService.shopsChanged.next(); }, function (err) { return console.log(err); });
        }
        this.editMode = false;
        this.shopForm.resetForm();
    };
    __decorate([
        core_1.ViewChild('shopForm'),
        __metadata("design:type", forms_1.NgForm)
    ], AddeditShopsComponent.prototype, "shopForm", void 0);
    AddeditShopsComponent = __decorate([
        core_1.Component({
            selector: 'app-addedit-shops',
            templateUrl: './addedit-shops.component.html',
            styleUrls: ['./addedit-shops.component.css']
        }),
        __metadata("design:paramtypes", [shops_service_1.ShopsService])
    ], AddeditShopsComponent);
    return AddeditShopsComponent;
}());
exports.AddeditShopsComponent = AddeditShopsComponent;
//# sourceMappingURL=addedit-shops.component.js.map