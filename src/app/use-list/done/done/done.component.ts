import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../../../Models/item.model';
import { ItemsService } from '../../../Services/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems("Done");

    this.subscription = this.itemsService.itemsChanged
      .subscribe(
        (res) => this.getItems("Done")
      );

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getItems(status) {    
    this.itemsService.getItemsByStatus('items', status)
      .subscribe(
      (res) => {        
          this.items = res.json();                    
      },        
      (err) => console.log(err));    
  }

  removeAll() {
    this.itemsService.removeAllByStatus("Done")
      .subscribe(
        (res => this.getItems("Done"))
    )
  }

}
