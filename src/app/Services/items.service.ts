import { items } from '../../Data/items';

export class ItemsService {
  getItems() {
    return items.slice().
      sort((a, b) =>
        a.sorting - b.sorting);;
  }

  getPermanent() {
    return items.filter(item =>
      item.status.name === "Permanent")
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);;
  }

  
  getCopy() {
    return items.filter(item =>
      item.status.name === "Copy")
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);;
  }

  getCurrent() {
    return items.filter(item =>
      item.status.name === "Current")
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);
  }

  getDone() {
    return items.filter(item =>
      item.status.name === "Done")
      .slice()
      .sort((a, b) =>
        a.sorting - b.sorting);;
  }
  statusCopyToCurrent() {
    
  }
}
