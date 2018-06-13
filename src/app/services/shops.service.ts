import { shops } from "../../Data/shops";

export class ShopsService {

  getShops() {
    return shops.slice();
  }
}

