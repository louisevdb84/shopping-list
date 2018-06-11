import { Item } from '../Models/item.model';
import { shops } from '../Data/shops';
import { status } from '../Data/status';

export let items: Item[] = [
    new Item("Rice", shops[0], 90, true, status[0]),
    new Item("Fruits", shops[0], 1, true, status[0]),
    new Item("Husky", shops[1], 100, true, status[0]),
    new Item("Preg Omega Plus", shops[2], 0, true, status[0]),
    new Item("Contact Lenses", shops[4], 0, false, status[0]),

    new Item("Rice", shops[0], 90, true, status[1]),
    new Item("Fruits", shops[0], 1, true, status[1]),
    new Item("Husky", shops[1], 100, true, status[2]),
    new Item("Preg Omega Plus", shops[2], 0, true, status[2]),
    new Item("Contact Lenses", shops[4], 0, false, status[3]),
];