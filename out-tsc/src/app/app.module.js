"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var create_list_component_1 = require("./create-list/create-list.component");
var use_list_component_1 = require("./use-list/use-list.component");
var current_component_1 = require("./create-list/current/current.component");
var repeating_component_1 = require("./create-list/repeating/repeating.component");
var items_service_1 = require("./Services/items.service");
var done_component_1 = require("./use-list/done/done/done.component");
var todo_component_1 = require("./use-list/todo/todo/todo.component");
var app_routing_module_1 = require("./app-routing.module");
var header_component_1 = require("./header/header/header.component");
var manage_items_component_1 = require("./manage-items/manage-items.component");
var display_items_component_1 = require("./manage-items/display-items/display-items.component");
var addedit_items_component_1 = require("./manage-items/addedit-items/addedit-items.component");
var shops_service_1 = require("./services/shops.service");
var status_service_1 = require("./services/status.service");
var manage_shops_component_1 = require("./manage-shops/manage-shops/manage-shops.component");
var addedit_shops_component_1 = require("./manage-shops/addedit-shops/addedit-shops.component");
var display_shops_component_1 = require("./manage-shops/display-shops/display-shops.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                create_list_component_1.CreateListComponent,
                use_list_component_1.UseListComponent,
                current_component_1.CurrentComponent,
                repeating_component_1.RepeatingComponent,
                done_component_1.DoneComponent,
                todo_component_1.TodoComponent,
                header_component_1.HeaderComponent,
                manage_items_component_1.ManageItemsComponent,
                display_items_component_1.DisplayItemsComponent,
                addedit_items_component_1.AddeditItemsComponent,
                manage_shops_component_1.ManageShopsComponent,
                addedit_shops_component_1.AddeditShopsComponent,
                display_shops_component_1.DisplayShopsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [items_service_1.ItemsService, shops_service_1.ShopsService, status_service_1.StatusService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map