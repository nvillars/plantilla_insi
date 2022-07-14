import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ConstantesExcepciones } from '../utils/constantes-excepciones';
import { mappingMenu } from '../utils/mapping-menu';
import { isNotEmpty } from '../utils/utilitarios';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  
  mostrarMenu: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mostrarMenu = true;
    if (environment.production) {
      const pagina = sessionStorage.getItem('pagina');
      console.log('pagina: ', pagina);
      if (isNotEmpty(pagina)) {
        const pagCompleta = mappingMenu[pagina];
        this.router.navigate([`/${pagCompleta}`]);
      }
      this.mostrarMenu = false;
    }
  }

  registrarSolicitud() {
    const expediente = [];
    const navigationExtras: NavigationExtras = { state: { expediente: expediente, tipo: ConstantesExcepciones.REGISTRAR } };
    this.router.navigate(['registro/registro-solicitud'], navigationExtras);
  }

}
