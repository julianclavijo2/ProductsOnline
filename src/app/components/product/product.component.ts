import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';

declare const swal: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productItem: Productos = {
    pId: '',
    name: '',
    img: '',
    description: ''
  }
  @Output() selected = new EventEmitter<any>();
  @Input() origin: boolean = false;
  @Output() deleted = new EventEmitter<any>();

  ngOnInit(): void {

  }

  addTocar(item: Productos) {
    this.selected.emit(item)
  }

  deleteTocar(prod:any){
    this.deleted.emit(prod);
  }
}
