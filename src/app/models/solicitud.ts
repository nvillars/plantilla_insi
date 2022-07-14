import { PermisoExcepcional } from "./permiso-excepcional";

export class Solicitud {
    numSolicitud?: string;
	expediente?: string;
	fecIngreso?: string;
	asunto?: string;
	estadoSolicitud?: string;
	numPermiso?: string;
	invocadoDesde?: string
	permisoExcepcional?: PermisoExcepcional = new PermisoExcepcional();
}
