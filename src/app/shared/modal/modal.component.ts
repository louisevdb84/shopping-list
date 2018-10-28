import { Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{    
    closeResult: string;
    editMode: boolean =  this.itemService.editMode;
    subscription: Subscription;
    constructor(private modalService: NgbModal, private itemService: ItemsService) { }

    ngOnInit(): void {
    //     this.subscription = this.itemService.startedEditing
    //   .subscribe(
    //         () => {                    
    //             this.editMode = true;
    //   })  
    }
    open(content) {        
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    

}

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}
}
