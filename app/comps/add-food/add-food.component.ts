import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/entity/Food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent {
  fix: number = 0;
  foodModel: Food = {
    foodId: 0,
    foodName: '',
    description: '',
    price: 0,
    orderdQuantity:0,
    isDisable:'False',
    quantity: 0,
    url: '',
    category: {
      categoryId: 0,
      categoryName: '',
    },
    cart: {
      cartId: 0,
    },
  };
  constructor(
    private foodService: FoodService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    
    
  }
  categoryType: string = '';

  nextId: number = 0;
  currentId: number = 0;

  isCreateNewCategory(): boolean {
    return this.categoryType === 'new';
  }

  isSelectExistingCategory(): boolean {
    this.currentId = this.searchIDFromCategory(
      this.foodModel.category.categoryName
    );
    this.foodModel.category.categoryId = this.currentId;
    return this.categoryType === 'existing';
  }

  category: any = [];
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((data) => {
      this.category = data;
    });
    this.categoryService.getNextCategoryId().subscribe((data) => {
      this.nextId = data;
      this.fix = this.nextId;
    });
  }

  searchIDFromCategory(categoryName: string): number {
    let categoryID = 0;
    for (let i = 0; i < this.category.length; i++) {
      if (this.category[i].categoryName === categoryName) {
        categoryID = this.category[i].categoryId;
        break;
      }
    }
    return categoryID;
  }

  onSubmit() {
    // this.findCategoryByName(this.foodModel.category.categoryName)
    this.foodService.createFood(this.foodModel).subscribe({
      next: (response) => {
        console.log('Food Created..', response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error adding Food...', error);
      },
    });
  }
}
