export class ConstantesStores {

    static readonly USUARIOBF_CUS08 = 'usuarioBfCus08';
    static readonly USUARIOBF = 'usuarioBf';
    private static _STORE_USERDATA = 'SUNAT.userdata';
    private static _STORE_CATALOGO = 'SUNAT.catalogo';
    private static _CATALOGO_TIPO_OPERACION = 'BAG';
    private static _CATALOGO_TIPO_DOCUMENTO = 'B83';
    private static _CATALOGO_EQUIPO_MAQUINARIA = 'B84';
    private static _CATALOGO_TIPO_DOCUMENTO_ROP = 'BK4';

    static TIPO_DOCUMENTO_RUC = '6';
    static STORE_ESTABLECIMIENTO = 'SUNAT.establecimientos';
    static RUC_CONTRIBUYENTE = '20548867992';
    static RUC_VERSION = '336';

    static readonly RUTA_SESSION_TIPO_DOCUMENTO = 'SUNAT.tipoDocumentos';

    static get EQUIPO_MAQUINARIA() { return this._CATALOGO_EQUIPO_MAQUINARIA; }

    static get TIPO_OPERACION() {
        return this._CATALOGO_TIPO_OPERACION;
    }

    static get TIPO_DOCUMENTO() {
        return this._CATALOGO_TIPO_DOCUMENTO;
    }

    static get TIPO_DOCUMENTO_ROP() {
        return this._CATALOGO_TIPO_DOCUMENTO_ROP;
    }

    static get STORE_CATALOGO() {
        return this._STORE_CATALOGO;
    }

    static set STORE_CATALOGO(value) {
        this._STORE_CATALOGO = value;
    }

    static get STORE_USERDATA() {
        return this._STORE_USERDATA;
    }

    static set STORE_USERDATA(value) {
        this._STORE_USERDATA = value;
    }
}
