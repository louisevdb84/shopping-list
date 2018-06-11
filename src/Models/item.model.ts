import {Shop} from './shop.model';
import { Status } from './status.model';

export class Item {
    constructor(
        public name: string,
        public shop: Shop,
        public sorting: number,
        public isRepeating: boolean,
        public status: Status
    )
    { }    
}