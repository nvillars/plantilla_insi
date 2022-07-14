export class ConstantesExcepciones {
    static CU04_EX01 = 'Ingrese N dígitos numericos';
    static CU04_EX02 = 'Alfanumérico de 6 cifras';
    static CU04_EX03 = 'Debe Ingresar todos los campos a fin de buscar el expediente';
    static CU04_EX04 = 'El Expediente no se encuentra registrado';
    static NO_REGISTROS = 'No se encontró resultados para la búsqueda';
    static REGISTRAR = 'Registrar';
    static EDITAR = 'Editar';
    static NOTIFICAR = 'Notificar';
    static VER = 'Ver';
    static RETORNO_BF = 'RBF'
    static MENSAJE_REGISTRO = 'Se ha iniciado el registro de la solicitud {numeroSo} - {anio} Asociada al Expediente {codarea} - {coduni} - {anioExp} - {numExp}'
    static CU05_EX01 = 'No es posible registrar la solicitud de permiso excepcional, intente más tarde';

    static APROBADO = '1'
    static DENEGADO = '0'

    static CATALOGO_TIPO_DOCUMENTO = "BP1";
    static TIPO_DOCU_RUC = '6';
    static TIPO_DOCU_DNI = '1';
    static TIPO_DOCU_PASAPORTE = '7';

    static CUS06_EX03 = 'El Ruc no se encuentra en el Padr\u00f3n, Verifique';
    static CUS06_EX04 = 'La validaci\u00f3n del DNI est\u00e1 tomando m\u00e1s tiempo de lo esperado, favor intente m\u00e1s tarde';
    static CUS06_EX05 = 'El DNI no se encuentra en el RENIEC, Verifique';
    static CUS06_EX06 = 'El celular debe iniciar con valor 9 y tener formato ###########, 9 dígitos Num\u00e9ricos'
    static CUS06_EX07 = 'El Registro IQBF del RUC ########## se encuentra de baja'
    static CUS06_EX08 = 'Formato de RUC ingresado debe ser ###########, 11 D\u00edgitos num\u00e9ricos';
    static CUS06_EX09 = 'Formato de DNI ingresado debe ser ########, 8 D\u00edgitos num\u00e9ricos';

    static MESJ_INFO_DNI_FALLECIDO = 'DNI {dni} corresponde a persona Fallecida';
    static MESJ_INFO_DNI_MENOR_DE_EDAD = 'DNI {dni} corresponde a persona Menor de edad';

    static MODA_DANGER = 'danger';

    static CATALOGO_MOTIVO_SOLICITUD = 'BP4';
    static CATALOGO_TIPO_BIEN_FISCALIZADO = 'B76';
    static CATALOGO_UNIDAD_MEDIDA = 'BP2';
    static CATALOGO_UNIDAD_FISICA_PRESENTACION = 'B77';
    static CATALOGO_PRESENTACION_COMERCIAL = 'B45';

    static IU_DATOS_SOLICITANTE = 'DS';
    static IU_MOTIVO_SOLICITUD = 'MS';
    static IU_PROVEEDOR = 'PV';
    static IU_BIENES_FISCALIZADOS = 'BF';
    static IU_ALMACENAMIENTO = 'AL';

    static COD_ESTADO_REGISTROBF_VIGENTE = '01'
    static COD_ESTADO_REGISTROBF_SUSPENDIDO = '02'
    static COD_ESTADO_REGISTROBF_BAJA = '03'

    static CUS11_MSJ_REGISTRO_NO_INSCRITO_O_BAJA = 'No se encuentra inscrito en el (RCBF) o se encuentra de baja';
    static CUS11_MSJ_REGISTRO_SUSPENDIDO = 'La inscripci\u00f3n del proveedor nacional se encuentra en estado SUSPENDIDO';
    static CUS11_MSJ_REGISTRO_CULMINARA_VIGENCIA = 'El proveedor nacional seleccionado culminar\u00e1 la vigencia de su Registro el d\u00eda ${fecFinVig}';
    static CUS11_EX02 = 'La vigencia del proveedor nacional se encuentra en estado Baja';

    static COD_INSUMO = '1';
    static COD_DISOLVENTE = '4';
    static COD_COMBUSTIBLE= '2';
    static COD_MEZCLA = '5';

    static CUS08_EX01 = 'El valor debe ser mayor a cero y menor igual al 100%';
    static CUS08_EX02 = 'El valor debe ser mayor al Rango M\u00ednimo de Concentraci\u00f3n del BF y menor igual al 100%';
    static CUS08_EX04 = 'se permite el ingreso de hasta 600 caracteres, con formato alfanum\u00e9ricos, incluyendo caracteres extraños';
    static CUS08_EX05 = 'El formato de la fecha es dd/mm/aaaa';
    static CUS08_EX06 = 'El rango de uso del bien fiscalizado es de m\u00e1ximo seis (6) meses';
    static CUS08_EX07 = 'Solo se permite Gramos o mililitros';

    static CUS09_EX01 = 'El valor debe ser mayor a cero y menor igual al 100%.';
    static CUS09_EX02 = 'El valor debe ser mayor al porcentaje m\u00ednimo y menor igual al 100%.';

    static LOADING_PROCENSANDO = 'Cargando Informaci\u00f3n ...';
    static COD_TIP_PROVEEDOR_NACIONAL = '6';
    static COD_TIP_PROVEEDOR_OTROS = '0';

    static BF_ACIDO_SULFURICO = '003';
    static BF_ACIDO_CLORHIDRICO = '004';
    static BF_PERMANGANATO_DE_POTASIO = '017';
    static BF_METABISULFITO_DE_SODIO = '055';
    static BF_CARBONATO_DE_SODIO = '009';

    static UNI_MEDIDA_GRAMO = 'GR';
    static UNI_MEDIDA_MILILITRO = 'ML';
}