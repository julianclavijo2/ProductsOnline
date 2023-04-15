import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
declare const swal: any;

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public itemsInCar: Productos[] = []
  public from: boolean = true;

  public products: [{
    pId: string,
    quantity: number

  }] = [
      {
        pId: '',
        quantity: 0

      }

    ];

  constructor(private router: ActivatedRoute, private authService: AuthService , private route:Router ) { }

  ngOnInit() {
    this.router.params.subscribe(
      param => this.itemsInCar = JSON.parse(param["items"]))
  }

  itemDelet(event: any) {
    console.log(event);
    this.itemsInCar = this.itemsInCar.filter(item => item.pId !== event.pId);

  }

  sendToBd() {

    const newArray = [];

    // Recorremos el array original
    for (let i = 0; i < this.itemsInCar.length; i++) {
      // Verificamos si el objeto ya existe en el nuevo array
      const index = newArray.findIndex(item => item.pId === this.itemsInCar[i].pId);
      if (index !== -1) {
        // Si ya existe, sumamos la cantidad
        newArray[index].quantity++;
      } else {
        // Si no existe, agregamos el objeto con una cantidad de 1
        newArray.push({ pId: this.itemsInCar[i].pId, quantity: 1 });
      }
    }


    let objToInsert = {
      empployeeId: "abc1234",
      products: newArray
    }
    let token = JSON.stringify(localStorage.getItem('token_session'))
    this.authService.checkout(objToInsert, token).subscribe(rts => {
      console.log(rts);
      this.itemsInCar = [];


      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Los productos se guardaron satisfactoriamente',
        showConfirmButton: false,
        timer: 1500
      })

      this.route.navigate(['products'])
    })
  }
}
