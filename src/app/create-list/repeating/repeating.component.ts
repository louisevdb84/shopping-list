import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../../Models/item.model';

@Component({
  selector: 'app-repeating',
  templateUrl: './repeating.component.html',
  styleUrls: ['./repeating.component.css']
})
export class RepeatingComponent implements OnInit {
  items: Item[];

  constructor(private itemsService : ItemsService) { }

  ngOnInit() {
    console.log("ONINIT")
    this.items = this.itemsService.getCopy();
  }

  onAdd() {
    alert("ADD")
  }

  onRemove() {
    alert("REMOVE")
  }

}
