export class Constantes {
    static readonly VALOR_VACIO = '';
    static readonly VALOR_INICIAL = 0;
    static readonly DELIMITER_DATE = '/';

    static readonly IND_DESDE = '0';
    static readonly IND_HASTA = '1';

    static readonly FORMAT_FECHA_YYYYMM = 'YYYYMM';
    static readonly FORMAT_FECHA_DDMMYYYY = 'DD/MM/YYYY';
    static readonly FORMAT_FECHA_YYYYMMDD = 'YYYY-MM-DD';

    static readonly FORMAT_FECHA_DDYYYYMM = 'DDYYYYMM';
    /** INICIO - ET5 - PA */
    static readonly FORMAT_FECHA_DDMMYYYY_GUION = 'DD-MM-YYYY';
    /** FIN - ET5 - PA */

    static readonly COMPARE_MOMENT_BEFORE = '1';
    static readonly COMPARE_MOMENT_AFTER = '-1';
    static readonly COMPARE_MOMENT_SAME = '0';

    // Constantes Modal
    static readonly MODAL_TITULO = 'Mensaje de confirmación';
    static readonly MODAL_MENSAJE = '¿Está seguro que desea guardar?';
    static readonly MODAL_MENSAJE_GUARDAR_SOLICITUD = '¿Est\u00e1 seguro que desea guardar la solicitud?';
    static readonly MODAL_MENSAJE_ANULAR_SOLICITUD = '¿Est\u00e1 seguro que desea anular la solicitud?';
    static readonly MODAL_MENSAJE_ENVIAR_SOLICITUD = '¿Est\u00e1 seguro que desea enviar la solicitud?';
    static readonly MODAL_MENSAJE_GUARDAR_ESTABLECIMIENTO = '¿Est\u00e1 seguro que desea guardar los establecimientos?';
    static readonly MODAL_MENSAJE_GUARDAR_EVALUACION = '¿Est\u00e1 seguro que desea guardar la evaluaci\u00f3n?';
    static readonly MODAL_MENSAJE_CAMBIAR_CALIFICACION = '¿Est\u00e1 seguro que desea cambiar de usuario?';
    static readonly MODAL_MENSAJE_ACTIVAR = '¿Est\u00e1 seguro que desea activar?';
    static readonly MODAL_MENSAJE_DESACTIVAR = '¿Est\u00e1 seguro que desea inactivar?';
    static readonly MODAL_MENSAJE_ELIMINAR = '¿Est\u00e1 seguro que desea eliminar?';
    static readonly MODAL_MENSAJE_AGREGAR_USUARIO = '¿Est\u00e1 seguro que desea agregar al usuario?';
    static readonly MODAL_MENSAJE_DERIVAR = '¿Est\u00e1 seguro que desea Derivar?';
    static readonly MODAL_OK = 1;
    static readonly MODAL_ACEPTAR_SALIR = 2;
    static readonly MODAL_ACEPTAR_CANCELAR = 3;
    static readonly MODAL_CANCELAR_CONFIRMAR = 4;
    static readonly MODAL_NO_SI = 5;

    // Constantes Modal Clases
    static readonly MODAL_PRIMARY = 'primary';
    static readonly MODAL_DANGER = 'danger';
    static readonly MODAL_SUCCESS = 'success';

    // MANTENIMIENTO
    static COD_ESTADO_ACCSUGE_ACTIVO = '0';
    // Constantes Alert Tiempo Duracion
    static readonly ALERT_TIEMPO_100 = 100;
    static readonly ALERT_TIEMPO_1000 = 1000;
    static readonly ALERT_TIEMPO_2000 = 2000;
    static readonly ALERT_TIEMPO_3000 = 3000;
    static readonly ALERT_TIEMPO_4000 = 4000;
    static readonly ALERT_TIEMPO_5000 = 5000;

    // Constantes Error Class FormControl
    static readonly ERROR_CLASS_FORM_CONTROL_LBL = 'label';
    static readonly ERROR_CLASS_FORM_CONTROL_TXT = 'input';
    // COD ESTADO PROGRAMACION
    static readonly COD_ESTADO_PROG_PLANIFICADO = '01';
    static readonly COD_ESTADO_PROG_ASIGNADO = '02';
    static readonly COD_ESTADO_PROG_AUTORIZADO = '07';

    // Constantes Inconsistencias y tipo de bien Otros
    static readonly OPCION_TIPO_BIEN_INSUMO = '1';
    static readonly OPCION_TIPO_BIEN_COMBUSTIBLE = '2'; // 5
    static readonly OPCION_TIPO_BIEN_DISOLVENTE = '4';
    static readonly OPCION_TIPO_BIEN_MEZCLA = '5';
    static readonly OPCION_CODIGO_OTROS = '99';
    static readonly OPCION_NOMBRE_OTROS = 'OTROS';
    static readonly OPCION_LISTA_OTROS = [Constantes.OPCION_TIPO_BIEN_DISOLVENTE,
    Constantes.OPCION_TIPO_BIEN_MEZCLA,
    Constantes.OPCION_CODIGO_OTROS];

    // Constantes tipos de documentos
    static readonly TIPO_DOCUMENTO_RUC = '6';
    static readonly TIPO_DOCUMENTO_DNI = '1';
    static readonly TIPO_DOCUMENTO_PASAPORTE = '7';
    static readonly TIPO_DOCUMENTO_CARNE_EXTRANJERIA = '4';
    static readonly TIPO_DOCUMENTO_CEDULA_DIPLOMATICA = '10';

    static readonly MAX_LENGHT_DOC_DNI = '8';
    static readonly MAX_LENGHT_DOC_RUC = '11';
    static readonly MAX_LENGHT_DOC_OTROS = '15';

    static readonly TIPO_VALI_ONLYNUMBER = 'onlyNumber';
    static readonly TIPO_VALI_ONLYNUMBERLETTER = 'onlyNumberLetter';

    // Constantes tipos de intervencion
    static readonly TIPO_INTERVENCION_CONTROL = '01';
    static readonly TIPO_INTERVENCION_FISCALIZACION = '02';

    // Constantes tipos de acciones
    static readonly TIPO_ACCION_CARTA = '01';
    static readonly TIPO_ACCION_ESQUELA = '02';
    static readonly TIPO_ACCION_VISITA_PROGRAMADA = '03';
    static readonly TIPO_ACCION_VISITA_NO_PROGRAMADA = '04';

    // Constantes de Validacion Pattern
    static readonly VALIDA_PATTERN_SOLO_NUMERO = '^[0-9]*$';

    // Constantes estados de programa de control
    static readonly COD_EST_SOLICITUD_DEVUELTO = '03';

    // PERFILES
  static readonly PERFIL_SUPERVISOR_PROGR = 'IQBF_ACF_SUPERVISOR_PROGR';
  static readonly PERFIL_SUPERVISOR_FISC = 'IQBF_ACF_SUPERVISOR_FISC';
  static readonly PERFIL_GERENCIA = 'IQBF_ACF_GERENCIA';
  static readonly PERFIL_PROGRAMADOR = 'IQBF_ACF_PROGRAMADOR';
  static readonly PERFIL_PROGRAMADOR_ADMI = 'IQBF_ACF_PROGRAMADOR_ADMI';
  static readonly PERFIL_AUDITOR_AGENTE_P = 'IQBF_ACF_AUDITOR_AGENTE_P';
  static readonly PERFIL_SUPERVISOR_AUDIT = 'IQBF_ACF_SUPERVISOR_AUDIT';
  static readonly PERFIL_CONSULTAS = 'IQBF_ACF_CONSULTAS';
  static readonly PERFIL_SUPERVISOR_ROP = 'IQBF_ROP_SUPERVISOR_GORBF';

    // Constantes estados de programa de control
    static readonly COD_EST_PROGRAM_PLANIFICADO = '01';
    static readonly COD_EST_PROGRAM_ASIGNADO = '02';
    static readonly COD_EST_PROGRAM_EN_PROCESO_CARGA = '03';
    static readonly COD_EST_PROGRAM_EJECUTADO = '04';
    static readonly COD_EST_PROGRAM_PROGRAMADO = '05';
    static readonly COD_EST_PROGRAM_APROBADO = '06';
    static readonly COD_EST_PROGRAM_AUTORIZADO = '07';
    static readonly COD_EST_PROGRAM_CONCLUIDO = '08';
    static readonly COD_EST_PROGRAM_GENERADO_OC_OF = '09';
    static readonly COD_EST_PROGRAM_CERRADA = '10';
    static readonly COD_EST_PROGRAM_CANCELADA = '11';
    static readonly COD_EST_PROGRAM_GENERADA = '12';
    static readonly COD_EST_PROGRAM_EN_PROCESO_SELECCION = '13';
    static readonly COD_EST_PROGRAM_SIN_USR_SELECCIONADOS = '14';
    static readonly COD_EST_PROGRAM_SELECCION_PROCESADA = '15';
    static readonly COD_EST_PROGRAM_DEVUELTO_SUPERVISOR = '16';
    static readonly COD_EST_PROGRAM_DEVUELTO_GERENCIA = '17';
    static readonly COD_EST_PROGRAM_ERROR_CARGA = '18';
    static readonly COD_EST_PROGRAM_NOTIFICADA = '19';
    static readonly COD_EST_PROGRAM_ERRORSELECCION = '20';
    static readonly ESTADOS_PROGRAM_OTROS = [
        Constantes.COD_EST_PROGRAM_PLANIFICADO, Constantes.COD_EST_PROGRAM_ASIGNADO,
        Constantes.COD_EST_PROGRAM_EN_PROCESO_CARGA, Constantes.COD_EST_PROGRAM_EJECUTADO,
        Constantes.COD_EST_PROGRAM_PROGRAMADO, Constantes.COD_EST_PROGRAM_APROBADO,
        Constantes.COD_EST_PROGRAM_AUTORIZADO, Constantes.COD_EST_PROGRAM_CONCLUIDO,
        Constantes.COD_EST_PROGRAM_GENERADO_OC_OF, Constantes.COD_EST_PROGRAM_CERRADA,
        Constantes.COD_EST_PROGRAM_CANCELADA, Constantes.COD_EST_PROGRAM_ERROR_CARGA];
    static readonly ESTADOS_PROGRAM_DEFINIDO = [
        Constantes.COD_EST_PROGRAM_GENERADA, Constantes.COD_EST_PROGRAM_EN_PROCESO_SELECCION,
        Constantes.COD_EST_PROGRAM_SIN_USR_SELECCIONADOS, Constantes.COD_EST_PROGRAM_SELECCION_PROCESADA,
        Constantes.COD_EST_PROGRAM_PROGRAMADO, Constantes.COD_EST_PROGRAM_DEVUELTO_SUPERVISOR,
        Constantes.COD_EST_PROGRAM_APROBADO, Constantes.COD_EST_PROGRAM_DEVUELTO_GERENCIA,
        Constantes.COD_EST_PROGRAM_AUTORIZADO, Constantes.COD_EST_PROGRAM_CERRADA,
        Constantes.COD_EST_PROGRAM_CANCELADA, Constantes.COD_EST_PROGRAM_NOTIFICADA,
        Constantes.COD_EST_PROGRAM_ERRORSELECCION];

    // Tipos de tipo de programacion
    static readonly COD_TIP_PROG_BIEN = '01';
    static readonly COD_TIP_PROG_SERVICIO = '02';

    // Constantes establecimiento
    static readonly ESTABLECIMIENTO_POR_RUC = '0';
    static readonly ESTABLECIMIENTO_POR_OTROS = '1';

    // Constantes ubigeo
    static readonly UBIGEO_DEPARTAMENTO = 'departamento';
    static readonly UBIGEO_PROVINCIA = 'provincia';
    static readonly UBIGEO_DISTRITO = 'distrito';

    // Extensiones
    static readonly ARCHIVO_EXTENSION_XLS = 'xls';
    static readonly ARCHIVO_EXTENSION_EXCEL_XLSX = 'xlsx';
    static readonly ARCHIVO_EXTENSION_EXCEL_XLSM = 'xlsm';
    static readonly ARCHIVO_EXTENSION_PFD = 'pdf';

    // Tamanio
    static readonly ARCHIVO_TAMANIO_2MB = 2;

    // Constantes estados de Solicitud
    static readonly COD_ESTADO_SOLICITUD_DEVUELTO = '03';
    static readonly COD_ESTADO_SOLICITUD_AUTORIZADO = '04';
    static readonly COD_ESTADO_SOLICITUD_APROBADO = '07';
    static readonly COD_ESTADO_SOLICITUD_ARCHIVADO = '08';

    // Constante Criterio
    static readonly MAX_VAL_100 = 100;

    // Indicadores de Estados
    static readonly IND_ESTADO_ACTIVO = '1';
    static readonly IND_ESTADO_INACTIVO = '0';

    // Indicadores Eliminado
    static readonly IND_ESTADO_ELIMINADO = '1';
    static readonly IND_ESTADO_NO_ELIMINADO = '0';

    // Constante codProgramaControl para programa Otros
    static readonly COD_TIP_PROG_OTROS = '999';

    // tipo Documentos usuario
    static readonly CO_TIP_DOC_DNI = '01';
    static readonly CO_TIP_DOC_RUC = '06';

    // tipo de programa de control Transportista/Destinatario
    static readonly LISTA_PROG_CONTROL_GRE = [ '006', '004', '010', '011' ];

    // Constantes Estado DJRO
    static readonly CODIGO_EST_DJRO_EN_PLAZO = '01';
    static readonly CODIGO_EST_DJRO_PRESENTADO = '02';
    static readonly CODIGO_EST_DJRO_SUSTITUIDO = '03';
    static readonly CODIGO_EST_DJRO_PENDIENTE = '04';
    static readonly CODIGO_EST_DJRO_REGULARIZADO = '05';
    static readonly CODIGO_EST_DJRO_RECTIFICADO = '06';

    // Constantes Estado Envio
    static readonly CODIGO_EST_ENVIO_PENDIENTE = '01';
    static readonly CODIGO_EST_ENVIO_EN_EDICION = '02';
    static readonly CODIGO_EST_ENVIO_COMPLETO = '03';
    static readonly DES_EST_ENVIO_TODOS = 'Todos';
    // Constantes Tipo Operación
    static readonly CODIGO_TIPO_OPE_INGRESO = '01';
    static readonly CODIGO_TIPO_OPE_EGRESO = '02';
    static readonly CODIGO_TIPO_OPE_PRODUCCION = '03';
    static readonly CODIGO_TIPO_OPE_USO = '04';
    static readonly CODIGO_TIPO_OPE_ALMACENAMIENTO = '05';
    static readonly CODIGO_TIPO_OPE_TRANSPORTE= '06';
    static readonly CODIGO_TIPO_OPE_GENERAL = '07';

    // Constantes Tipo Origen
    static readonly CODIGO_TIPO_ORIGEN_IT = 'IT';
    static readonly CODIGO_TIPO_ORIGEN_IA = 'IA';
    static readonly CODIGO_TIPO_ORIGEN_ET = 'ET';
}
