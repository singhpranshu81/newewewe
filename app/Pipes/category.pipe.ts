import { Pipe, PipeTransform } from '@angular/core';
import { Food } from 'src/entity/Food';

@Pipe({
  name: 'categorySearch'
})
export class CategoryPipe implements PipeTransform {

  transform(food: Food [], name:string): Food[] {
    if(!food || !name){
      return food;
    } 
    return food.filter(food=>
      food.category.categoryName.toLowerCase().includes(name.toLowerCase ()));
  }

}
