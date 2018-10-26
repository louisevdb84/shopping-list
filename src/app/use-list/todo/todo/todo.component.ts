import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Item } from '../../../../Models/item.model';
import { ItemsService } from '../../../Services/items.service';
import { ShopsService } from '../../../services/shops.service';
import { Shop } from '../../../../Models/shop.model';
import { Status } from '../../../../Models/status.model';
import { StatusService } from '../../../services/status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  @ViewChild('shopInput') shopInputRef: ElementRef;
  @ViewChild('sorting') sortingInputRef: ElementRef;

  subscription: Subscription;
  subscription2: Subscription;

  items: Item[];
  shops: Shop[];
  status: Status[];
  selectedShop: Shop;
  displayEdit = false;
  isVisible = "collapse";

  constructor(
    private itemsService: ItemsService,
    private shopsService: ShopsService,
    private statusService: StatusService) { }

  ngOnInit() {

    this.shopsService.getShops()
    .subscribe(
      (res) => {
        this.shops = res;
        this.selectedShop = null;
      },
      (err) => console.log(err));

      this.statusService.getStatusList()
      .subscribe(
        (res) => this.status = res.json(),
        (err) => console.log(err));

      this.subscription = this.itemsService.itemsChanged
      .subscribe(
        (res) => this.getItems('Current')
      );

      this.subscription2 = this.itemsService.doneEditingAdding
      .subscribe(
        () => {
          this.isVisible = 'collapse';
          this.displayEdit = false;
        }
      );

    this.getItems('Current');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

  getItems(status) {
    this.itemsService.getItemsByStatus('items', status)
      .subscribe(
      (res) => {
        if (!this.selectedShop)
        {
          this.items = res;
        } else {
          this.items = res.filter(item => item.shop.name === this.selectedShop.name);
        }

      },
      (err) => console.log(err));
  }

  onShopSelect(event) {
    this.selectedShop = this.shops.find(shop => shop.name === event.target.value);
    this.getItems('Current');
  }

  onSortingChange(event, item) {
    item.sorting = event.target.value;
    this.itemsService.editItem(item)
      .subscribe((res => {
        this.itemsService.getItemByName('Permanent', item.name)
          .subscribe((res) => {            
            res.sorting = item.sorting;
            this.itemsService.editItem(res)
              .subscribe(res => {
                this.getItems('Current');
                this.itemsService.itemsChanged.next();
            });
        });
      }));
  }

  onDone(item: Item) {
    item.status = this.status.find(s => s.name === 'Done');
    this.itemsService.editItem(item)
      .subscribe((res => {
        this.getItems('Current');
        this.itemsService.itemsChanged.next();
      }));
  }

  onEdit(item: Item) {
    this.displayEdit = true;
    this.isVisible = 'visible';
    this.itemsService.startedEditing.next(item);
    this.itemsService.itemsChanged.next();
  }

  onHide() {
    this.isVisible = 'collapse';
    this.displayEdit = false;
  }

  allowDrop(event, item) {
    // console.log(item);
    event.preventDefault();
  }

  drag(event, item) {
    // console.log(item);
    event.dataTransfer.setData('item', JSON.stringify(item));
  }

  drop(event, item) {
    console.log(item);
    // event.preventDefault();
    const data = event.dataTransfer.getData('item');
    console.log(JSON.parse(data));
    // console.log(event.target)

    // item.sorting = 100;
    // this.itemsService.editItem(item)
    //    .subscribe((res => {
    //      this.getItems("Current")
    //      this.itemsService.itemsChanged.next();
    //    }));

    // event.target.appendChild(document.getElementById(data));
  }
}
