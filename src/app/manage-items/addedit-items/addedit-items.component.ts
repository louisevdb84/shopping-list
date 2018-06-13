import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../../Models/shop.model';

@Component({
  selector: 'app-addedit-items',
  templateUrl: './addedit-items.component.html',
  styleUrls: ['./addedit-items.component.css']
})
export class AddeditItemsComponent implements OnInit {
  shops : Shop[];
  constructor(private shopsService: ShopsService) { }

  ngOnInit() {
    this.shops = this.shopsService.getShops();
  }

}
