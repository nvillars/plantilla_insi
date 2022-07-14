import { Usuario } from "./usuario";

export interface Contiribuyente extends Usuario{
    numRuc: string;
    codTipbien: string;
    numVerreg: string;
    fecBaja: string;
    fecAlta: string;
    fecFinVigencia: string;
    fecSuspension: string;
    fecLevanteSusp: string;
    dirIpusucrea: string;
    dirIpusumodif: string;
    indExceptuado: string;
    codEstado: string;
    desEstado: string;
    indOmiso: string;
    numSolicitud: string;
    usuarioBf: string;
    razonSocial: string;
}
