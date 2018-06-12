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

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getCurrent();    
  }

}
