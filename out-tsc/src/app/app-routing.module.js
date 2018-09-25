"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var use_list_component_1 = require("./use-list/use-list.component");
var create_list_component_1 = require("./create-list/create-list.component");
var manage_items_component_1 = require("./manage-items/manage-items.component");
var display_items_component_1 = require("./manage-items/display-items/display-items.component");
var addedit_items_component_1 = require("./manage-items/addedit-items/addedit-items.component");
var manage_shops_component_1 = require("./manage-shops/manage-shops/manage-shops.component");
var display_shops_component_1 = require("./manage-shops/display-shops/display-shops.component");
var addedit_shops_component_1 = require("./manage-shops/addedit-shops/addedit-shops.component");
var appRoutes = [
    { path: '', redirectTo: '/uselist', pathMatch: 'full' },
    { path: 'uselist', component: use_list_component_1.UseListComponent },
    { path: 'createlist', component: create_list_component_1.CreateListComponent },
    {
        path: 'items', component: manage_items_component_1.ManageItemsComponent, children: [
            { path: 'display', component: display_items_component_1.DisplayItemsComponent },
            { path: 'new', component: addedit_items_component_1.AddeditItemsComponent },
            { path: ':id/edit', component: addedit_items_component_1.AddeditItemsComponent }
        ]
    },
    {
        path: 'shops', component: manage_shops_component_1.ManageShopsComponent, children: [
            { path: 'display', component: display_shops_component_1.DisplayShopsComponent },
            { path: 'new', component: addedit_shops_component_1.AddeditShopsComponent },
            { path: ':id/edit', component: addedit_shops_component_1.AddeditShopsComponent }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map