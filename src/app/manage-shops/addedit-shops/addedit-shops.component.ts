import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../../Models/shop.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addedit-shops',
  templateUrl: './addedit-shops.component.html',
  styleUrls: ['./addedit-shops.component.css']
})
export class AddeditShopsComponent implements OnInit {
  @ViewChild('shopForm') shopForm: NgForm;

  shops : Shop[];
  
  constructor(private shopsService: ShopsService) { }

  ngOnInit() {
    this.getShops();
  }

  getShops() {
    this.shopsService.getShops()
      .subscribe(
      (res) => {this.shops = res.json()},
      (err) => console.log(err));
  }

  onAddItem() {
    let newShop: Shop = new Shop(null, this.shopForm.value.shopName);
    this.shopForm.resetForm();
    this.shopsService.newShop(newShop)
      .subscribe(
        (res) => this.getShops(),
        (err) => console.log(err));    
  }

  onDelete(shop) {    
    this.shopsService.deleteShop(shop._id)
      .subscribe(
        (res) => this.getShops(),
        (err) => console.log(err));    
  }


}
