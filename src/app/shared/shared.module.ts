import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  exports: [AngularMaterialModule, FormsModule],
})
export class SharedModule {}
