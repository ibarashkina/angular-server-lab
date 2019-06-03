import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class Api {

    constructor(private http: HttpClient) {
    }

getAllItems = () => this.http.get('http://localhost:8890/cart-items');

}