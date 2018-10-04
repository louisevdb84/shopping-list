import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../../Models/item.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  items: Item[];
  display = false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems("Current");
    this.itemsService.itemsChanged
      .subscribe(
      (res) => this.getItems("Current")        
    )
  }

  getItems(status) {    
    this.itemsService.getItemsByStatus('items', status)
      .subscribe(
      (res) => {        
        this.items = res;   
      },        
      (err) => console.log(err));    
  }
  onRemove(item: Item) {
    this.itemsService.removeItem(item._id)
      .subscribe(
        (res) => this.itemsService.itemsChanged.next()
  )
  }
  displayAdd() {
    this.display = !this.display;
  }

}
