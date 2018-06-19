import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../../Models/shop.model';
import { NgForm } from '@angular/forms';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../../Models/item.model';
import { Status } from '../../../Models/status.model';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-addedit-items',
  templateUrl: './addedit-items.component.html',
  styleUrls: ['./addedit-items.component.css']
})
export class AddeditItemsComponent implements OnInit {
  @ViewChild('f') itemForm: NgForm;
  
  shops: Shop[];
  status: Status[];
  
  constructor(
    private itemsService: ItemsService,
    private shopsService: ShopsService,
    private statusService: StatusService) { }

  ngOnInit() {
    this.getShops();
    this.getStatus();
  }

  getShops() {
    this.shopsService.getShops()
      .subscribe(
      (res) => {this.shops = res.json()},
      (err) => console.log(err));
  }

  getStatus() {
    this.statusService.getStatusList()
      .subscribe(
      (res) => {this.status = res.json()},
      (err) => console.log(err));
  }

  onAddItem() {    
    const { name, shops, sorting, isRepeating } = this.itemForm.value;            
    let item: Item = new Item(
      null, name, shops, sorting, isRepeating,
        this.status.find(status => status.name === "Permanent")
    );    

    this.itemForm.resetForm();

    this.itemsService.newItem(item)
      .subscribe(
        (res) => this.itemsService.itemsChanged.next(),
        (err) => console.log(err)
    )    
  }


  // onDelete(shop) {    
  //   this.shopsService.deleteShop(shop._id)
  //     .subscribe(
  //       (res) => this.getShops(),
  //       (err) => console.log(err));    
  // }


}
