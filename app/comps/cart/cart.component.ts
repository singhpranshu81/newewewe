import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

getTotalPrice() {
return this.cart.food ? this.cart.food.reduce((total: number, foodItem: { price: number; orderdQuantity: number; }) => {
  return total + (foodItem.price * foodItem.orderdQuantity);
}, 0) : 0;
}
storeTotalPriceInLocalStorage() {
  const totalPrice = this.getTotalPrice();
  localStorage.setItem('totalPrice', totalPrice.toString());
}
  cart: any = {};
   
  constructor(private cartService: CartService,private router:Router) { }
  
  ngOnInit(): void {
    this.cartService.getCartbyId(1).subscribe(  //change here user.id
      (data: any) => {
        this.cart = data;
        //console.log(this.cart); 
      },
      (error) => {
        console.error('Error fetching cart:', error); 
      }
    );
  }
  goToOrderDetails(){
    this.storeTotalPriceInLocalStorage();
      this.router.navigate(['/orderDetails']);
  }
 
  increment(product: any) {
    product.orderdQuantity++;
  }
   
  decrement(product: any) {
    if (product.quantity > 0) {
      product.orderdQuantity--;
    }
  }
  goTODash(){
    this.router.navigate(['/dashboard']);
  }
}
