import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {

  modalRef: BsModalRef
  constructor(private modalService: BsModalService){}

  openModal(template: TemplateRef<any>){

    this.modalRef = this.modalService.show(template)
  }

  ngOnInit(): void {
  }

}
