import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../../../Models/item.model';
import { ItemsService } from '../../../Services/items.service';
import { Subscription } from 'rxjs';
import { Status } from '../../../../models/status.model';
import { StatusService } from '../../../services/status.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  items: Item[];
  status: Status[];

  constructor(private itemsService: ItemsService, private statusService: StatusService) { }

  ngOnInit() {
    this.getItems("Done");

    this.statusService.getStatusList()
      .subscribe(
        (res) => this.status = res.json(),
        (err) => console.log(err));

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

  undo(item) {    
    item.status = this.status.find(s => s.name === "Current");
    console.log(item);
    this.itemsService.editItem(item)
      .subscribe((res => {                
        this.itemsService.itemsChanged.next();
      }));        
  }

  removeAll() {
    this.itemsService.removeAllByStatus("Done")
      .subscribe(
        (res => this.itemsService.itemsChanged.next())
    )
  }

}
