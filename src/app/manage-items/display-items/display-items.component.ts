import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../../Models/item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  items : Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {    
    this.getItems();
    this.subscription = this.itemsService.itemsChanged
    .subscribe(
    () => {this.getItems();}
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getItems() {    
      this.itemsService.getItemsByStatus('items', 'Permanent')
        .subscribe(
        (res) => {
          this.items = res;
        },        
        (err) => console.log(err));    
  }

  onEdit(item: Item) {            
    this.itemsService.startedEditing.next(item);
  }

  onDelete(item: Item) {    
    if (confirm("Delete item?")) {
      this.itemsService.removeItem(item._id)
      .subscribe(
        (res) => this.getItems()
    )
  } 

  }

}
