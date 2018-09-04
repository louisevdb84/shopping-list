import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../../Models/item.model';
import { Status } from '../../../Models/status.model';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-repeating',
  templateUrl: './repeating.component.html',
  styleUrls: ['./repeating.component.css']
})
export class RepeatingComponent implements OnInit {
  items: Item[];
  itemsCopied: Item[];
  status: Status[];

  constructor(private itemsService: ItemsService,
  private statusService: StatusService) { }

  ngOnInit() {    
    this.getItems("Copy");
    this.getItems("Permanent");
    this.getStatus();    

  }

  getItems(status) {    
    this.itemsService.getItemsByStatus('items', status)
      .subscribe(
      (res) => {
        if (status === "Copy") {
          this.items = res.json();            
        }
        else if (status === "Permanent"){
          this.itemsCopied = res.json().filter((item: Item)=> item.isRepeating);  
        }
        
      },        
      (err) => console.log(err));    
  }
  
  getStatus() {
    this.statusService.getStatusList()
      .subscribe(
      (res) => {        
          this.status = res.json();  
      },        
      (err) => console.log(err));    
  }

  copyItems() {    
    this.itemsCopied.forEach(item => {
      item.status = this.status.find(s => s.name === "Copy");
      item._id = null;      
    })    
    this.itemsService.newItems(this.itemsCopied)
      .subscribe(
      (res) => this.getItems("Copy"),
      (err) => console.log(err)
      );
  }

  onAdd(item: Item) {
    item.status = this.status.find(s => s.name === "Current");
    this.itemsService.editItem(item)
      .subscribe(
        (res) => {
          this.getItems("Copy");
          this.itemsService.itemsChanged.next();
        },
        (err) => console.log(err)
    )   
  }

  onRemove(id: string) {
    this.itemsService.removeItem(id)
      .subscribe(
        (res) => this.getItems("Copy"),
        (err) => console.log(err)
      );
  }

}
