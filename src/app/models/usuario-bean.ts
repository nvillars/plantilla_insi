import { Constantes } from "../utils/constantes";

export class UsuarioBean {
    id: string;
    ticket: string;
    login: string;
    correo: string;
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    nombreCompleto: string;
    nroRegistro: string;
    codUO: string;
    desUO: string;
    codCate: string;
    desCate: string;
    nivelUO: number;
    numRUC: string;
    usuarioSOL: string;
    codDepend: string;
    idCelular: string;
    codTOpeComer: string;
    map: any;
  
    constructor() { }

    static fromJSON(data: any) {
      return Object.assign(new this, data);
    }

    obtenerRoles(): Array<any> {
      let lista = [];
      if (this.map && this.map['roles']) {
        lista = this.map['roles'];
      }
      return lista;
    }

    esMenuIA() {
      return Constantes.CODIGO_TIPO_ORIGEN_IA == this.map.tipOrigen;
    }
    esMenuIT() {
      return Constantes.CODIGO_TIPO_ORIGEN_IT == this.map.tipOrigen;
    }
    esMenuET() {
      return Constantes.CODIGO_TIPO_ORIGEN_ET == this.map.tipOrigen;
    }
  
    esPerfilProgramador() {
      return this.obtenerRoles().indexOf(Constantes.PERFIL_SUPERVISOR_PROGR) >= 0;
    }

    esPerfilSolicitante() {
      return this.obtenerRoles().indexOf(Constantes.PERFIL_SUPERVISOR_FISC) >= 0;
    }

    esPerfilAuditor() {
      return this.obtenerRoles().indexOf(Constantes.PERFIL_AUDITOR_AGENTE_P) >= 0;
    }

    esPerfilSupervisor() {
      return this.obtenerRoles().indexOf(Constantes.PERFIL_SUPERVISOR_AUDIT) >= 0;
    }

    esPerfilGerente() {
      return this.obtenerRoles().indexOf(Constantes.PERFIL_GERENCIA) >= 0;
    }

    esPerfilSupervisorROP(){
      return this.obtenerRoles().indexOf(Constantes.PERFIL_SUPERVISOR_ROP) >= 0;
    }
}
