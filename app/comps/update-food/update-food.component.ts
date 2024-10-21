import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/entity/Food';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent {
  
  constructor(private foodService:FoodService,private aroute: ActivatedRoute,
  private router: Router){}
  public fid:any = this.aroute.snapshot.params['fid'];

  dummyfood: any = {
    foodId: this.fid,
    foodName: '',
    isDisable:'False',
    orderdQuantity:0,
    quantity: 0,
    price: 0,
    description:'',
    url:'',
    category: {
      categoryId: 0,
      categoryName: '',
    },
    cart: {
      cartId: 0,
    },
  };



  food:any={}
  ngOnInit(): void {
    this.foodService.getFoodById(this.fid).subscribe((data)=>{this.food=data})
  }
  goToDash(){
    this.dummyfood.foodName = this.food.foodName
    this.dummyfood.orderdQuantity=this.food.orderdQuantity
    this.dummyfood.quantity=this.food.quantity
    this.dummyfood.isDisable=this.food.isDisable
    this.dummyfood.price=this.food.price
    this.dummyfood.description=this.food.description
    this.dummyfood.url=this.food.url
 
    this.dummyfood.category.categoryId=this.food.category.categoryId;
    this.dummyfood.category.categoryName=this.food.category.categoryName;
    this.dummyfood.cart.cartId=this.food.cart.cartId;

   
    
    
   this.foodService.updateFood(this.dummyfood).subscribe((data) => {
    window.alert("Food updated...")
    console.log("updated"+data); // Log the response
  });
           this.router.navigate(['/dashboard'])
  }

}
