import { MezclaDisolvente } from "./mezcla-disolvente";
import { Presentacion } from "./presentacion";

export class Bien {
    codTipBien?: string;
	codBien?: string;
	annSolicitud?: string;
	numSolicitud?: string;
	nomProd?: string;
	nomCom?: string;
	porRanMin?: any;
	porRanMax?: any;
	codUmCtrl?: string;
	cntUmCtrl?: any;
	desDirAlma?: string;
	codUbigeoAlm?: string;
	desUso?: string;
	indDel?: string;
	codInsumo?: string;
	numInscab?: number;
	nroItem?: string;
	desCodTipProducto?: string;
    mezclaDisolventes?: MezclaDisolvente[];
    presentaciones?: Presentacion[];

    constructor() {
        this.mezclaDisolventes = new Array<MezclaDisolvente>();
        this.presentaciones = new Array<Presentacion>();
    }
}
