import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../../../../Models/item.model';
import { ItemsService } from '../../../Services/items.service';
import { ShopsService } from '../../../services/shops.service';
import { Shop } from '../../../../Models/shop.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('shopInput') shopInputRef: ElementRef;

  items: Item[];
  shops: Shop[];

  constructor(private itemsService: ItemsService,
              private shopsService: ShopsService) { }

  ngOnInit() {        
    this.shops = this.shopsService.getShops();    
    this.items = this.itemsService.getItemsByShop(this.itemsService.getCurrent(), this.shops[0]);
  }

  onShopSelect(event) {    
    var shop = this.shopsService.getShop(event.target.value);
    this.items = this.itemsService.getItemsByShop(this.itemsService.getCurrent(), shop);    
  }

}
