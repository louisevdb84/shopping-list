import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../../Models/item.model';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {
  items : Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getPermanent();
    this.getItems();
  }

  getItems() {    
      this.itemsService.getItemsByStatus('items', 'Permanent')
        .subscribe(
        (res) => {
          this.items = res.json();
          // this.items.sort((a, b) => {
          //   a.sorting - b.sorting;
          // })
        },        
        (err) => console.log(err));    
  }

}
