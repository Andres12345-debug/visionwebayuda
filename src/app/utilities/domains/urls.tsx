export const URLS = {
    //produccion
    //URL_BASE: "https://visionweb-visionweb.mqbbpj.easypanel.host/",
    //desarrollo
    URL_BASE: "https://visionweb-visionweb.mqbbpj.easypanel.host",

    INICIAR_SESION: "/publico/accesos/signin",
    REGISTRO: "/publico/registros/user",
    CONTACTO: "/publico/correos/contacto",
    PREGUNTAR_ASISTENTE: "/publico/asistente/pregunta",

    /*** CORREOS ***/
    LISTAR_CORREOS: "/privado/correos",
    OBTENER_CORREO: "/privado/correos",
    RESPONDER_CORREO: "/privado/correos/responder",


    /****SERVICIOS PRIVADOS ************ */
    LISTAR_USUARIOS: "/privado/usuarios/todos",
    CREAR_USUARIO: "/privado/usuarios/agregar",
    ACTUALIZAR_USUARIO: "/privado/usuarios/actualizar",
    ELIMINAR_USUARIO: "/privado/usuarios/delete",

    /****CATÁLOGO DE SERVICIOS ************ */
    LISTAR_SERVICIOS: "/privado/servicios/todos",
    OBTENER_SERVICIO: "/privado/servicios",
    CREAR_SERVICIO: "/privado/servicios/agregar",
    ACTUALIZAR_SERVICIO: "/privado/servicios/actualizar",
    ELIMINAR_SERVICIO: "/privado/servicios/delete",

    /****CONTRATOS DE CLIENTE-SERVICIOS ************ */
    LISTAR_CLIENTE_SERVICIOS: "/privado/cliente-servicios/todos",
    MIS_CLIENTE_SERVICIOS: "/privado/cliente-servicios/mios",
    OBTENER_CLIENTE_SERVICIO: "/privado/cliente-servicios",
    CREAR_CLIENTE_SERVICIO: "/privado/cliente-servicios/agregar",
    ACTUALIZAR_CLIENTE_SERVICIO: "/privado/cliente-servicios/actualizar",
    ELIMINAR_CLIENTE_SERVICIO: "/privado/cliente-servicios/delete",

    /****SERVICIOS PRIVADOS PARA EL PERFIL ************ */
    LISTAR_PERFIL: "/privado/usuarios/perfil",
    ACTUALIZAR_PERFIL: "/privado/usuarios/perfil/actualizar",

    LISTAR_ROLES: "/privado/roles/todos",
    CREAR_ROLES: "/privado/roles/agregar",
    ACTUALIZAR_ROLES: "/privado/roles/actualizar",
    ELIMINAR_ROLES: "/privado/roles/delete"
}