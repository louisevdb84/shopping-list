import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Shop } from '../../Models/shop.model';
import { Subject } from "rxjs";

@Injectable()
export class ShopsService {

  shopsChanged = new Subject();  
  startedEditing = new Subject<Shop>();

  constructor(private http: Http) { }
  //url: string = 'https://frozen-journey-92176.herokuapp.com/';  
  url: string = 'http://localhost:3050/'; 
  
  getShops() {
    return this.http.get(this.url + 'shops');    
  }

  getShop(id: string) {
    return this.http.get(this.url + +id+'/shop');  
  }

  newShop(shop: Shop) {
    return this.http.post(this.url + 'shops/new', shop);
  }

  editShop(shop: Shop) { 
    return this.http.put(this.url + 'shops/' + shop._id + '/edit', shop);      
  }

  deleteShop(id: string) {
    return this.http.delete(this.url + 'shops/delete', {body: {id: id}});
  }
}

  




