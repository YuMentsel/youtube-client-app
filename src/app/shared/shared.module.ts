import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule],
  exports: [AngularMaterialModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
