import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../../Models/shop.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addedit-items',
  templateUrl: './addedit-items.component.html',
  styleUrls: ['./addedit-items.component.css']
})
export class AddeditItemsComponent implements OnInit {
  //constructor(private shopsService: ShopsService) { }

  ngOnInit() {
    //this.getShops();
  }

  // getShops() {
  //   this.shopsService.getShops()
  //     .subscribe(
  //     (res) => {this.shops = res.json()},
  //     (err) => console.log(err));
  // }

  // onAddItem() {
  //   let newShop: Shop = new Shop(null, this.shopForm.value.shopName);
  //   this.shopsService.newShop(newShop)
  //     .subscribe(
  //       (res) => this.getShops(),
  //       (err) => console.log(err));    
  // }

  // onDelete(shop) {    
  //   this.shopsService.deleteShop(shop._id)
  //     .subscribe(
  //       (res) => this.getShops(),
  //       (err) => console.log(err));    
  // }


}
