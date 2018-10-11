import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../../Models/shop.model';
import { NgForm} from '@angular/forms';
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
  @ViewChild('itemForm') itemForm: NgForm;  
  @ViewChild('name') name: ElementRef;
  
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
        this.editedItem.shop = this.shops.find(s => s.name === this.editedItem.shop.name);        
        this.itemForm.setValue({
          itemName: this.editedItem.name,
          shops: this.editedItem.shop,
          sorting: this.editedItem.sorting,
          isRepeating: this.editedItem.isRepeating,
          isCurrent: false
        })        
      }
    )    
   
  }

  ngDoCheck() {          
    if (this.itemForm.form.value.itemName === "" || this.itemForm.form.value.itemName === null) {      
      this.itemForm.form.patchValue({      
        shops: this.shops[0],
        isRepeating: true
      })  
       this.name.nativeElement.focus();
      
    }
    
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getShops() {
    this.shopsService.getShops()
      .subscribe(
      (res) => { this.shops = res;},
      (err) => console.log(err));
  }

  getStatus() {
    this.statusService.getStatusList()
      .subscribe(
      (res) => {this.status = res.json()},
      (err) => console.log(err));
  }

  onSubmit() {            
    const { itemName, shops, sorting, isRepeating, isCurrent } = this.itemForm.value;               
    if (this.editMode) {
      
      this.editedItem.name = itemName;
      this.editedItem.shop = shops;
      this.editedItem.isRepeating = isRepeating;
      this.editedItem.sorting = sorting;
      this.itemsService.editItem(this.editedItem)
        .subscribe(
        ()=> this.itemsService.itemsChanged.next()
      )
      this.editMode = false;
    }
    else {
      console.log(this.itemForm.value)
      if (isRepeating === "true" || isRepeating) {           
        let item: Item = new Item(
          null, null, itemName, shops, sorting, isRepeating,
            this.status.find(status => status.name === "Permanent")
        );              


        this.itemsService.newItem(item)
          .subscribe(
            (res) => this.itemsService.itemsChanged.next(),
            (err) => console.log(err)
        )      
      }
      
      if (isCurrent || isRepeating === "false") {
        let item: Item = new Item(
          null, null,itemName, shops, sorting, isRepeating,
            this.status.find(status => status.name === "Current")
        );        
        this.itemsService.newItem(item)
          .subscribe(
            (res) => this.itemsService.itemsChanged.next(),
            (err) => console.log(err)
        )    
      }
    }    
    this.itemsService.doneEditingAdding.next();
    this.itemForm.resetForm();
    
  }}
