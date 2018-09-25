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
var status_service_1 = require("../../services/status.service");
var RepeatingComponent = /** @class */ (function () {
    function RepeatingComponent(itemsService, statusService) {
        this.itemsService = itemsService;
        this.statusService = statusService;
    }
    RepeatingComponent.prototype.ngOnInit = function () {
        this.getItems("Copy");
        this.getItems("Permanent");
        this.getStatus();
    };
    RepeatingComponent.prototype.getItems = function (status) {
        var _this = this;
        this.itemsService.getItemsByStatus('items', status)
            .subscribe(function (res) {
            if (status === "Copy") {
                _this.items = res.json();
            }
            else if (status === "Permanent") {
                _this.itemsCopied = res.json();
            }
        }, function (err) { return console.log(err); });
    };
    RepeatingComponent.prototype.getStatus = function () {
        var _this = this;
        this.statusService.getStatusList()
            .subscribe(function (res) {
            _this.status = res.json();
        }, function (err) { return console.log(err); });
    };
    RepeatingComponent.prototype.copyItems = function () {
        var _this = this;
        this.itemsCopied.forEach(function (item) {
            item.status = _this.status.find(function (s) { return s.name === "Copy"; });
            item._id = null;
        });
        this.itemsService.newItems(this.itemsCopied)
            .subscribe(function (res) { return _this.getItems("Copy"); }, function (err) { return console.log(err); });
    };
    RepeatingComponent.prototype.onAdd = function (item) {
        var _this = this;
        item.status = this.status.find(function (s) { return s.name === "Current"; });
        this.itemsService.editItem(item)
            .subscribe(function (res) {
            _this.getItems("Copy");
            _this.itemsService.itemsChanged.next();
        }, function (err) { return console.log(err); });
    };
    RepeatingComponent.prototype.onRemove = function (id) {
        var _this = this;
        this.itemsService.removeItem(id)
            .subscribe(function (res) { return _this.getItems("Copy"); }, function (err) { return console.log(err); });
    };
    RepeatingComponent = __decorate([
        core_1.Component({
            selector: 'app-repeating',
            templateUrl: './repeating.component.html',
            styleUrls: ['./repeating.component.css']
        }),
        __metadata("design:paramtypes", [items_service_1.ItemsService,
            status_service_1.StatusService])
    ], RepeatingComponent);
    return RepeatingComponent;
}());
exports.RepeatingComponent = RepeatingComponent;
//# sourceMappingURL=repeating.component.js.map