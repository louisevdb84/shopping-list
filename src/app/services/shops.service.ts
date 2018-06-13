import { shops } from "../../Data/shops";

export class ShopsService {

  getShops() {
    return shops.slice();
  }

  getShop(name: string) {
    return shops.find(shop => shop.name === name);
  }
}

