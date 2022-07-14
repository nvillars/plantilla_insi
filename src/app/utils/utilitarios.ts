import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Constantes } from "./constantes";
import * as moment from 'moment';
import { Contiribuyente } from "../interfaces/contiribuyente";
import { ConstantesStores as SESSION } from "./constantes-stores";
import { environment } from "src/environments/environment";
import { UsuarioBean } from "../models/usuario-bean";


export function getFormatDate(es: any) {
    return {
        firstDayOfWeek: 0,
        dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: 'Hoy',
        clear: 'Borrar',
        dateFormat: 'mm/dd/yy',
        weekHeader: 'Wk'
    };
}

export function getModalOptions(configExtra: object) {
    return {
      ...configExtra,
      ...{
        backdrop: 'static',
        keyboard: false
      }
    } as object;
  }

export function trim(value: any): string {
    if (isEmpty(value)) {
        return '';
    }
    return value.toString().trim();
}

export function isEmpty(value: any): boolean {
    if (value == null || value == undefined) {
        return true;
    }
    if (value.__proto__.constructor === String) {
        return value.trim().length === 0;
    }
    if (value.__proto__.constructor === Array) {
        return value.length === 0;
    }
    if (value.__proto__.constructor === Object) {
        return Object.getOwnPropertyNames(value).length === 0;
    }
    return false;
}

export function isNotEmpty(value: any): boolean {
    return !isEmpty(value);
}

export function toNumber(value: any): number {
    if (isEmpty(value)) {
        return null;
    }
    return parseInt(value);
}

export function isNumber(value: any): value is number {
    return !isNaN(toNumber(value));
}

export function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
}

export function stringToNgbDateStruct(value: string): NgbDateStruct {
    if (isEmpty(value)) {
        return  null;
    }
    const date = value.split(Constantes.DELIMITER_DATE);
    return {
      day: parseInt(date[0], 10),
      month: parseInt(date[1], 10),
      year: parseInt(date[2], 10)
    };
}
export function ngbDateStructToString(date: NgbDateStruct): string {
    if (isEmpty(date)) {
        return  '';
    }
    return `${padNumber(date.day)}${Constantes.DELIMITER_DATE}${padNumber(date.month)}${Constantes.DELIMITER_DATE}${date.year}`;
}

export function dateToString(date: Date, format: string): string {
    return moment(date).format(format);
}

export function stringToDate(date: string, format: string): Date {
    return moment(date, format).toDate();
}

export function stringToMoment(date: string, format: string): moment.Moment {
    return moment(date, format);
}

export function dateToStringDDMMYYYY(date: Date): string {
    return dateToString(date, Constantes.FORMAT_FECHA_DDMMYYYY);
}

export function dateToStringYYYYMMDD(date: Date): string {
    return dateToString(date, Constantes.FORMAT_FECHA_YYYYMMDD);
}

export function stringToDateDDMMYYYY(date: string): Date {
    return stringToDate(date, Constantes.FORMAT_FECHA_DDMMYYYY);
}

export function stringToMomentDDMMYYYY(date: string): moment.Moment {
    return stringToMoment(date, Constantes.FORMAT_FECHA_DDMMYYYY);
}

/**
 * @param fecha puede ser "dd/mm/yyyy" y buscar "dd-mm-yyyy"
 * @param caracterInicial puede ser "/"
 * @param caracterFinal puede ser "-"
 */
export function cambiarSeparadorFecha(fecha: string, caracterInicial: string, caracterFinal: string) {
    return fecha.split(caracterInicial).join(caracterFinal);
}

export function compareTwoDates(strDateHigh: string, strDateLow: string): number {
    const dateLow = stringToMomentDDMMYYYY(strDateLow);
    dateLow.set({hour: 0, minute: 0, second: 0, millisecond: 0});
    const dateHigh = stringToMomentDDMMYYYY(strDateHigh);
    dateHigh.set({hour: 0, minute: 0, second: 0, millisecond: 0});
    if (dateLow.isBefore(dateHigh)) {
        return 1;
    } else if (dateLow.isAfter(dateHigh)) {
        return -1;
    } else if (dateLow.isSame(dateHigh)) {
        return 0;
    }
    return null;
}

export function formatDatePeriodoFront(value: any): Object {
    if (isEmpty(value)) {
        return {year: '0000', month: '00'};
    }
    return {year: value.slice(0, 4), month: value.slice(4, 6)};
}

export function formatDatePeriodoBack(value: any): string {
    if (isEmpty(value)) {
        return '000000';
    }
    return `${value.year}${padNumber(value.month)}`;
}

export function obtenerFechaDePeriodo(periodo:string): Date{
    return new Date(parseInt(periodo.slice(0, 4)), parseInt(periodo.slice(4, 6)) - 1, 1);
}

export function formatearAPeriodo(fecha:Date){
    return dateToString(fecha, Constantes.FORMAT_FECHA_YYYYMM);
}

export function formatHoraFront(value: any): Object {
    if (isEmpty(value)) {
        return {hour: 0, minute: 0, second: 0};
    }
    return {hour: toNumber(value.slice(0, 2)), minute: toNumber(value.slice(3, 5)), second: toNumber(value.slice(6, 8))};
}

export function formatHoraBack(value: any): string {
    if (isEmpty(value)) {
        return '00:00:00';
    }
    return `${padNumber(value.hour)}:${padNumber(value.minute)}:${padNumber(value.second)}`;
}

export function toStrJson(value: any): string {
    if (isEmpty(value)) {
        return null;
    }
    return JSON.stringify(value);
}

export function toJson(value: string): any {
    if (isEmpty(value)) {
        return null;
    }
    return JSON.parse(value);
}

export function cloneJson(value: any): any {
    return toJson(toStrJson(value));
}

export function formatUbigeo(value: any, opcionUbigeo: string): string {
    let result = '';
    if (isEmpty(value)) {
        return '';
    }

    if (opcionUbigeo == Constantes.UBIGEO_DEPARTAMENTO) {
        result = value.slice(0, 2);
    } else if (opcionUbigeo == Constantes.UBIGEO_PROVINCIA) {
        result = value.slice(2, 4);
    } else if (opcionUbigeo == Constantes.UBIGEO_DISTRITO) {
        result = value.slice(4, 6);
    }

    return result;
}

export function getFechaActual(format: string): string {
    const fecha: Date = new Date();
    if (format == Constantes.FORMAT_FECHA_DDYYYYMM) {
        return `${padNumber(fecha.getDate())}/${padNumber(fecha.getMonth() + 1)}/${fecha.getFullYear()}`;
    }
    return '';
}

export function getAnioActual(): number {
    const fecha: Date = new Date();
    return fecha.getFullYear();
}

export function obtenerUsuarioBf(): Contiribuyente {
    const usuario: Contiribuyente = JSON.parse(sessionStorage.getItem(SESSION.USUARIOBF));
    return usuario;
}

export function obtenerUsuarioBfCus08(): Contiribuyente {
    const usuario: Contiribuyente = JSON.parse(sessionStorage.getItem(SESSION.USUARIOBF_CUS08));
    return usuario;
}

export function guardarUsuarioBfCus08(usuario: Contiribuyente): void {
    sessionStorage.setItem(SESSION.USUARIOBF_CUS08, JSON.stringify(usuario));
} 

export function obtenerUsuarioBean(): UsuarioBean {
    if (!environment.production) {
        return  dummyUserBean();
    } else {
        return JSON.parse(sessionStorage.getItem('usuariobean'));
    }
}

export function getMomentActual(): string {
    return dateToString(new Date(), Constantes.FORMAT_FECHA_DDMMYYYY);
}

export function dummyUserBean(): UsuarioBean {
    // 20600027639 - 20600012038 -  ruc comunicar envasado - reenvasado
    // 20548867992
    // 20600011791 prestador servicios
    const usuario = new UsuarioBean();
    usuario.nombreCompleto = 'Rosas Alva Huaman Edward';
    usuario.login = '20100066603EROSAS';

    // usuario.numRUC = '20563983176';
  //   usuario.numRUC = '20100717124'; // B, F 20334171877  20515858360 10098820570 20600020324

    usuario.numRUC = '20204621242';

    usuario.nroRegistro = '1548';
    usuario.codUO = '1U2303';
    usuario.map = {vigInvocaDesde: 1587584171065,
                isClon: false,
                ddpData: {ddp_numruc: '20503076382',
                            ddp_numreg: '0021',
                            ddp_flag22: '00',
                            ddp_estado: '00',
                            ddp_tamano: '03',
                            ddp_tpoemp: '39',
                            ddp_ciiu: '01110',
                            t1238_emp: '0'},
                roles: ["IQBF_ROP_SUPERVISOR_GORBF","IQBF_ROP_SUPERVISOR_GORBF"],
                idMenu: '1113143559610',
                jndiPool: 'p0021',
                tipUsuario: '0',
                tipOrigen: 'IT',
                primerAcceso: false,
                vigInvocaHasta: 1587584831065
            };
    return usuario;
}