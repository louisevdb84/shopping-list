import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../../../../Models/item.model';
import { ItemsService } from '../../../Services/items.service';
import { ShopsService } from '../../../services/shops.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('shopInput') shopInputRef: ElementRef;

  items: Item[];
  shops: any[];

  constructor(private itemsService: ItemsService,
              private shopsService: ShopsService) { }

  ngOnInit() {        
    this.shopsService.getShops()
    .subscribe(
      (res) => {this.shops = res.json()},
      (err) => console.log(err));
  
    this.items = this.itemsService.getItemsByShop(this.itemsService.getCurrent(), this.shops[0]);
  }

  onShopSelect(event) {    
    var shop = this.shopsService.getShop(event.target.value);
    //this.items = this.itemsService.getItemsByShop(this.itemsService.getCurrent(), shop);    
  }

}
