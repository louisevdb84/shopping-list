import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Shop } from '../../Models/shop.model';
import { Subject } from "rxjs";

@Injectable()
export class ShopsService {

  shopsChanged = new Subject();  
  startedEditing = new Subject<Shop>();

  constructor(private http: Http) { }
  
  getShops() {
    return this.http.get('http://localhost:3050/shops');    
  }

  getShop(id: string) {
    return this.http.get('http://localhost:3050/'+id+'/shop');  
  }

  newShop(shop: Shop) {
    return this.http.post('http://localhost:3050/shops/new', shop);
  }

  editShop(shop: Shop) { 
    return this.http.put('http://localhost:3050/shops/' + shop._id + '/edit', shop);      
  }

  deleteShop(id: string) {
    return this.http.delete('http://localhost:3050/shops/delete', {body: {id: id}});
  }
}

  




