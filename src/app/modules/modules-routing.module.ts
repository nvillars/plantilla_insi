import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  //{path: 'ol-iq-iacontrolacceso/ServletAcceso.htm', component: ModulesComponent },
  {path: '', component: ModulesComponent, 
  children: [
    //{path: 'consulta', loadChildren: () => import('./consulta/consulta.module').then(m => m.ConsultaModule)},
    {path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }