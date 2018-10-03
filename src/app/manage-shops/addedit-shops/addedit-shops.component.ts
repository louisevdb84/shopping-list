import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../../Models/shop.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addedit-shops',
  templateUrl: './addedit-shops.component.html',
  styleUrls: ['./addedit-shops.component.css']
})
export class AddeditShopsComponent implements OnInit {
  @ViewChild('shopForm') shopForm: NgForm;  
  subscription: Subscription;
  editMode = false;
  editId: string;
  editedShop: Shop;  
  shops : Shop[];
  
  constructor(private shopsService: ShopsService) { }

  ngOnInit() {    
    this.subscription = this.shopsService.startedEditing
      .subscribe(
      (shop: Shop) => {          
        this.editId = shop._id;
        this.editMode = true;
        console.log(shop._id)
        this.shopsService.getShop(shop._id)
          .subscribe(
          (res) => {     
            console.log(res);
            this.editedShop = res;   
            this.shopForm.setValue({
              shopName: this.editedShop.name
            })
          }
        )
      }
    )    
  }  

  onSubmit() {        
    if (this.editMode) {  
      console.log(this.editedShop)
      this.editedShop.name = this.shopForm.value.shopName;      
      
      this.shopsService.editShop(this.editedShop)
      .subscribe(
        () => this.shopsService.shopsChanged.next(),
        (err) => console.log(err));    
    }
    else {
      
      let newShop: Shop = new Shop(null, this.shopForm.value.shopName, null);
       this.shopsService.newShop(newShop)
      .subscribe(
        (res) => this.shopsService.shopsChanged.next(),
        (err) => console.log(err));    
    }
    this.editMode = false;
    this.shopForm.resetForm();
   
  }
}
