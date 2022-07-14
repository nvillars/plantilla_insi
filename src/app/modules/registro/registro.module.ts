import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroSolicitudComponent } from './components/registro-solicitud/registro-solicitud.component';
import { AppPrimengModule } from 'src/app/app-primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    RegistroSolicitudComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    AppPrimengModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserModule,
    //BrowserAnimationsModule
  ],providers: [
    //TestService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistroModule { }