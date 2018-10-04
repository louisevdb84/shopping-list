import {Shop} from './shop.model';
import { Status } from './status.model';
import { User } from './user.model';

export class Item {
    constructor(
        public _id: string, 
        public userId:string,
        public name: string,
        public shop: Shop,
        public sorting: number,
        public isRepeating: boolean,
        public status: Status
    )
    { }    
}