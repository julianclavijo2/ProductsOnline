import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public prods: any;
  public user: string = '';

  public product: Productos = {
    pId: '',
    name: '',
    img: '',
    description: ''

  }

  public from:boolean = false;

  public arrayToCar:Productos[]=[];

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
    let token = JSON.stringify(localStorage.getItem('token_session'));
    this.user = JSON.stringify(localStorage.getItem('email'));
    this.getProducts(token);
  }

  getProducts(token: string) {
    this.authService.products(token).subscribe(rta => {
      console.log(rta);
      this.prods = rta
    })
  }

  sendTocar(item: any) {
    this.arrayToCar.push(item);

  }

  redirectToCar(){

    this.router.navigate(['/car', JSON.stringify(this.arrayToCar)]);
  }



}
