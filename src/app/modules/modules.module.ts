import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { AppPrimengModule } from '../app-primeng.module';
import { ModulesComponent } from './modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModulesComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AppPrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
