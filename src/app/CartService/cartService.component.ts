import { Component } from '@angular/core';
import {Api} from '../services/api.service';
// import {HttpClient} from '@angular/common/http';

interface Item {
  price: number;
  product: string;
  id: number;
  quantity: number;
}

interface ApiData {
  data: Item[];
}


@Component({
  selector: 'cartService',
  templateUrl: '../CartService/cartService.component.html',
  styleUrls: ['../CartService/cartService.component.css']
})
export class CartServiceComponent {
  title = 'express-angular-lab';
  items;
  constructor( private api: Api){}

  getCartItems = () => {
    this.api.getAllItems().subscribe((data:ApiData) => this.items = data.data);

  }

}