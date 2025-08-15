import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calculator } from './calculator/calculator';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Calculator], // owned by this module
  imports: [CommonModule, FormsModule], // ngModel
  exports: [Calculator], // expose to other modules
})
export class MathModule {}
