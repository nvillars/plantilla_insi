import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild  } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ConstantesExcepciones } from 'src/app/utils/constantes-excepciones';
import { getFormatDate, stringToDateDDMMYYYY } from 'src/app/utils/utilitarios';

import { Solicitud } from 'src/app/models/solicitud';
import { PermisoExcepcional } from 'src/app/models/permiso-excepcional';
import { Solicitante } from 'src/app/models/solicitante';
import { Proveedor } from 'src/app/models/proveedor';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-registro-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.css']
})
export class RegistroSolicitudComponent implements OnInit {
  
  public es: any;
  public solicitud: Solicitud = new Solicitud();
  public tipo: string;
  public iuSolicitud: boolean;
  public iuInfoCalificacion: boolean;
  public iuNotificacion: boolean;
  public iuSolicitante: boolean;
  public iuMotivo: boolean;
  public iuProveedor: boolean;
  public iuBienFiscalizado: boolean;
  public iuAlmacenamiento: boolean;
  public iuDocuGenCali: boolean;
  public iuResultadoDenegado: boolean;
  public iuResultadoAprobado: boolean;
  public botones: boolean;
  public fechaIngreso: Date;
  public esSolicitudAprobado: boolean;
  public indexTab: number = 0;
  public rsForm: FormGroup;
  public tipoPermiso: string;

  constructor() { }

  ngOnInit(): void {
    this.es = getFormatDate(this.es);
  }

}
