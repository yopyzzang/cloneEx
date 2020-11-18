import {Component, OnInit} from '@angular/core';
import {products} from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  share(product: any) {
    window.alert(`The ${product} is shared.`);
  }
  // tslint:disable-next-line:typedef
  onNotify(){
    window.alert('You Will be notified when the product goes on sale');
  }

}
