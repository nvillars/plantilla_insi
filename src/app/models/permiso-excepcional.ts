import { Bien } from "./bien";
import { DocumentosAdjunto } from "./documentos-adjunto";
import { DocumentosGenerados } from "./documentos-generados";
import { Proveedor } from "./proveedor";
import { Solicitante } from "./solicitante";

export class PermisoExcepcional {

    annSolicitud?: string;
	numSolicitud?: string;
	annPermiso?: string;
	numPermiso?: string;
	codUniOrga?: string;
	codAreaExpediente?: string;
	codUnidRecep?: string;
	annExpediente?: string;
	nmuExpediente?: string;
	codEstadoSol?: string;
	codMotivoSol?: string;
	desMotivoSol?: string;
	fecPresentSol?: string;
	fecCalificacion?: string;
	numDam?: string;
	annPrese?: string;
	codRegimen?: string;
	codAduana?: string;
	codEstadoPerm?: string;
	fecIniVig?: string;
	fecFinVig?: string;
	numTiempoUso?: number;
	fecIniUso?: string;
	fecFinUso?: string;
	fecEmision?: string;
	numConstNotif?: string;
	codTipDocNotif?: string;
	fecElabDocANotif?: string;
	fecNotificacion?: string;
	codMotivoDeneg?: string;
	desMotivoDeneg?: string;
	desObs?: string;
	indTipoPermiso?: string;
	bienes?: Bien;
	proveedores?: Proveedor;
	solicitantes?: Solicitante;
	documentosGenerados?: DocumentosGenerados[];
	documAdjuntos?: DocumentosAdjunto[];

    constructor() {
        this.documentosGenerados = new Array<DocumentosGenerados>();
        this.documAdjuntos = new Array<DocumentosAdjunto>();
    }
}
