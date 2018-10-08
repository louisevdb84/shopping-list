import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Shop } from '../../Models/shop.model';
import { Subject } from "rxjs";

@Injectable()
export class ShopsService {

  shopsChanged = new Subject();  
  startedEditing = new Subject<Shop>();

  constructor(private http: HttpClient) { }
  url: string = 'https://frozen-journey-92176.herokuapp.com/';  
  //url: string = 'http://localhost:3050/'; 
  
  getShops() {        
    return this.http.get<Shop[]>(this.url + 'shops');    
  }

  getShop(id: string) {
    return this.http.get<Shop>(this.url +id+'/shop');  
  }

  newShop(shop: Shop) {    
    return this.http.post(this.url + 'shops/new', shop);
  }

  editShop(shop: Shop) {    
    return this.http.put(this.url + 'shops/' + shop._id + '/edit', shop);      
  }

  deleteShop(id: string) {
    return this.http.request('delete',this.url + 'shops/delete', {body: {id: id}});    
  }
}

  




