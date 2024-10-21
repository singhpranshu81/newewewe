import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/entity/Category';

@Component({
  selector: 'app-add-cuisine',
  templateUrl: './add-cuisine.component.html',
  styleUrls: ['./add-cuisine.component.css']
})
export class AddCuisineComponent {

  dummyCat: Category ={
    categoryId:0,
    categoryName:'',
    
  }



  constructor(private router:Router,private categoryService:CategoryService){}
  goToDash(){
    this.categoryService.createCategory(this.dummyCat).subscribe(
      {
        next: (response) => {
          console.log('Category Created..', response);
          window.alert("New Cuisine Created..");
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error adding Food...', error);
        },
      }
    )
    this.router.navigate(['/dashboard'])
  }



}
