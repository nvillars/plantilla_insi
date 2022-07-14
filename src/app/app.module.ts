import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppPrimengModule } from './app-primeng.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModulesModule } from './modules/modules.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppPrimengModule,
    NgbModule,
    ModulesModule,
    HttpClientModule
  ],
  exports:[
    AppPrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
