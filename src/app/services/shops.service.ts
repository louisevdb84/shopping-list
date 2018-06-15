import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Shop } from '../../Models/shop.model';

@Injectable()
export class ShopsService {
  constructor(private http: Http) { }
  
  getShops() {
    return this.http.get('http://localhost:3050/shops');    
  }

  getShop(name: string) {
    //return shops.find(shop => shop.name === name);
  }

  newShop(shop: Shop) {
    return this.http.post('http://localhost:3050/shops/new', shop);
  }

  deleteShop(id: string) {
    return this.http.delete('http://localhost:3050/shops/delete', {body: {id: id}});
  }
}

  




