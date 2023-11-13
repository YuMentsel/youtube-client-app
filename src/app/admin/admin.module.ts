import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreationFormComponent } from './pages/creation-form/creation-form.component';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [CreationFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomButtonComponent,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AdminModule {}
