import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CustomButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AuthModule {}
