import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeRate'
})
export class ChangeRatePipe implements PipeTransform {


  transform(value: number, course: number): number {
    course = 24.7;
    return Number(Math.floor(value * course) + `$`);
  }

}
