import { Injectable } from "@angular/core";
import { Http} from "@angular/http";

@Injectable()
export class StatusService {
  constructor(private http: Http) { }
  
  getStatusList() {
    return this.http.get('http://localhost:3050/status');    
  }

//   getShop(name: string) {
//     return shops.find(shop => shop.name === name);
//   }
}

  




