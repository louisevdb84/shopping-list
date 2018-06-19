import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../../../../Models/item.model';
import { ItemsService } from '../../../Services/items.service';
import { ShopsService } from '../../../services/shops.service';
import { Shop } from '../../../../Models/shop.model';
import { Status } from '../../../../Models/status.model';
import { StatusService } from '../../../services/status.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('shopInput') shopInputRef: ElementRef;

  items: Item[];
  shops: Shop[];
  status: Status[];
  selectedShop: Shop;

  constructor(
    private itemsService: ItemsService,
    private shopsService: ShopsService,
    private statusService: StatusService) { }

  ngOnInit() {        
    this.shopsService.getShops()
    .subscribe(
      (res) => {
        this.shops = res.json()
        this.selectedShop = this.shops[0];
      },
      (err) => console.log(err));
    
      this.statusService.getStatusList()
      .subscribe(
        (res) => this.status = res.json(),
        (err) => console.log(err));
    
    this.getItems("Current");    
  }

  getItems(status) {    
    this.itemsService.getItemsByStatus('items', status)
      .subscribe(
      (res) => {               
        this.items = res.json().filter(item => item.shop.name === this.selectedShop.name)
      },        
      (err) => console.log(err));    
  }

  onShopSelect(event) {        
    this.selectedShop = this.shops.find(shop => shop.name === event.target.value);     
    this.getItems("Current");    
  }

  onDone(item: Item) {
    item.status = this.status.find(s => s.name === "Done");
    this.itemsService.editItem(item)
      .subscribe((res => {
        this.getItems("Current")
        this.itemsService.itemsChanged.next();
      }));        
  }
}
