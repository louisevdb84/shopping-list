import { Injectable } from "@angular/core";
import { Http} from "@angular/http";
import { Item } from '../../models/item.model';
import { Shop } from '../../models/shop.model';
import { Subject } from "rxjs";

@Injectable()
export class ItemsService {  
  itemsChanged = new Subject();
  startedEditing = new Subject<Item>();
  doneEditingAdding = new Subject();
  
  constructor(private http: Http) { }
  //url: string = 'https://frozen-journey-92176.herokuapp.com/'; 
  url: string = 'http://localhost:3050/'; 
  

  get(path) {
    return this.http.get(this.url + path);      
  }

  getItemsByStatus(path, status) {       
    return this.http.post(this.url + path, {status: status});      
  }
  
  newItem(item: Item) {
    return this.http.post(this.url + 'items/new', item);
  }

  newItems(items: Item[]) {        
    return this.http.post(this.url + 'items/copy', items);
  }

  editItem(item: Item) { 
    return this.http.put(this.url +  'items/' + item._id + '/edit', item);      
  }

  removeItem(id: string) {
    return this.http.delete(this.url + 'items/delete', {body: {id: id}});
  }

  removeAllByStatus(status: string){
    return this.http.delete(this.url + 'items/deleteAll', {body: {status: status}});
  }
}





  


//   getShop(name: string) {
//     //return shops.find(shop => shop.name === name);
//   }

//   newShop(shop: Shop) {
//     return this.http.post('this.url + /shops/new', shop);
//   }

//   deleteShop(id: string) {
//     return this.http.delete(this.url + 'shops/delete', {body: {id: id}});
//   }
// }

  




