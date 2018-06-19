import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../../Models/shop.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-shops',
  templateUrl: './display-shops.component.html',
  styleUrls: ['./display-shops.component.css']
})
export class DisplayShopsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  shops : Shop[];

  constructor(private shopsService: ShopsService) { }

  ngOnInit() {
    this.getShops();
    this.subscription = this.shopsService.shopsChanged
      .subscribe(
      () => {
        this.getShops();
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getShops() {
    this.shopsService.getShops()
      .subscribe(
      (res) => this.shops = res.json(),
      (err) => console.log(err));
  }

  
  onEdit(shop: Shop) {
    this.shopsService.startedEditing.next(shop);
  }

  onDelete(shop:Shop) {    
    this.shopsService.deleteShop(shop._id)
      .subscribe(
        (res) => this.getShops(),
        (err) => console.log(err));    
  }

}
