import { Pipe, PipeTransform } from '@angular/core';
import { Food } from 'src/entity/Food';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(food: Food [], name:string): Food[] {
    if(!food || !name){
      return food;
    } 
    return food.filter(food=>
      food.foodName.toLowerCase().includes(name.toLowerCase ()));
  }


}
