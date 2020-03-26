import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  modalRef: BsModalRef
  constructor(private modalService: BsModalService){}
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template)
  }

  ngOnInit(): void {
  }

}
