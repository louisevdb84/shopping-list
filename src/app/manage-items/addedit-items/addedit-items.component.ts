import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../../Models/shop.model';
import { NgForm } from '@angular/forms';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../../Models/item.model';
import { Status } from '../../../Models/status.model';
import { StatusService } from '../../services/status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addedit-items',
  templateUrl: './addedit-items.component.html',
  styleUrls: ['./addedit-items.component.css']
})
export class AddeditItemsComponent implements OnInit, OnDestroy {
  @ViewChild('f') itemForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Item;
  
  shops: Shop[];
  status: Status[];
  
  constructor(
    private itemsService: ItemsService,
    private shopsService: ShopsService,
    private statusService: StatusService) { }

  ngOnInit() {
    this.getShops();
    this.getStatus();
    this.subscription = this.itemsService.startedEditing
      .subscribe(
      (item: Item) => {
        this.editMode = true;
        this.editedItem = item;
        console.log(this.editedItem);
        console.log(this.itemForm)
      }
    )
    this.itemForm.setValue({
      name: "A NAME",
      // shops: this.shops[0].name,
      // isRepeating: "True"
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  onSubmit() {    
    const { name, shops, sorting, isRepeating } = this.itemForm.value;            
    let item: Item = new Item(
      null, name, shops, sorting, isRepeating,
        this.status.find(status => status.name === "Permanent")
    );        
    this.itemsService.newItem(item)
      .subscribe(
        (res) => this.itemsService.itemsChanged.next(),
        (err) => console.log(err)
    )    
    this.itemForm.resetForm();
  }}
