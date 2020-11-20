import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      cost: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: any): void{
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

  sumCost(cost: any[]): any{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cost.length ; i++) {
      // tslint:disable-next-line:no-unused-expression prefer-for-of
      for (let j = 0; j < cost.length; j++) {
        return cost[i] + cost[j - 1];
      }
    }
  }

}
