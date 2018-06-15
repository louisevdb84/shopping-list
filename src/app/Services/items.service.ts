import { items } from '../../Data/items';
import { Item } from '../../models/item.model';
import { Shop } from '../../models/shop.model';

export class ItemsService {
  getItems() {
    return items.slice().
      sort((a, b) =>
        a.sorting - b.sorting);;
  }

  getPermanent() {
    return items.filter(item =>
      item.status.name === "Permanent")
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);;
  }

  
  getCopy() {
    return items.filter(item =>
      item.status.name === "Copy")
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);;
  }

  getCurrent() {
    return items.filter(item =>
      item.status.name === "Current")
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);
  }

  getDone() {
    return items.filter(item =>
      item.status.name === "Done")
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);
  }

  getItemsByShop(itemsArray: Item[], shop: Shop) {
    return itemsArray.filter(item =>
      item.shop === shop)
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);
  }
  statusCopyToCurrent() {
    
  }
}


// import { Injectable } from "@angular/core";
// import { Http, Headers } from "@angular/http";
// import { Shop } from '../../Models/shop.model';

// @Injectable()
// export class ShopsService {
//   constructor(private http: Http) { }
  
//   getShops() {
//     return this.http.get('http://localhost:3050/shops');    
//   }

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

  




