import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BienComponent } from './components/registro-solicitud/bienes-fiscalizados/bien/bien.component';
import { RegistroSolicitudComponent } from './components/registro-solicitud/registro-solicitud.component';

const routes: Routes = [
  {path:"registro-solicitud", component: RegistroSolicitudComponent},
  //{path:"bien", component: BienComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
