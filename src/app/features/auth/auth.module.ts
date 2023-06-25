import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

//primeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';

import { AuthRoutingModule } from '@features/auth/auth-routing.module';
import { LoginFormComponent } from '@features/auth/components/login-form/login-form.component';
import { authReducer } from '@features/auth/state/auth.reducer';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    FieldsetModule,
    MessagesModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  providers: [MessageService]
})
export class AuthModule { }
