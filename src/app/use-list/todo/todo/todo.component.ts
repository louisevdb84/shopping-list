import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../Models/item.model';
import { ItemsService } from '../../../Services/items.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items= this.itemsService.getCurrent();
  }

}
