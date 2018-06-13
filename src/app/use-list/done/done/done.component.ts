import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../Models/item.model';
import { ItemsService } from '../../../Services/items.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getDone();
  }

}
