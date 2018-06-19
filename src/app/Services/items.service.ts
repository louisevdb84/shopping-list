import { Injectable } from "@angular/core";
import { Http} from "@angular/http";
import { Item } from '../../models/item.model';
import { Shop } from '../../models/shop.model';
import { Subject } from "rxjs";

@Injectable()
export class ItemsService {  
  itemsChanged = new Subject();
  
  constructor(private http: Http) { }
  url: string = 'http://localhost:3050/';  

  get(path) {
    return this.http.get(this.url + path);      
  }

  getItemsByStatus(path, status) {       
    return this.http.post(this.url + path, {status: status});      
  }
  
  newItem(item: Item) {
    return this.http.post('http://localhost:3050/items/new', item);
  }

  newItems(items: Item[]) {        
    return this.http.post('http://localhost:3050/items/copy', items);
  }

  editItem(item: Item) { 
    return this.http.put('http://localhost:3050/items/' + item._id + '/edit', item);      
  }

  removeItem(id: string) {
    return this.http.delete('http://localhost:3050/items/delete', {body: {id: id}});
  }

  removeAllByStatus(status: string){
    return this.http.delete('http://localhost:3050/items/deleteAll', {body: {status: status}});
  }
}





  


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

  




