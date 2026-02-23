export const URLS = {
    //produccion
    URL_BASE: "https://visionbot-visionweb-backend.t0y4lz.easypanel.host",      
    //desarrollo
    //URL_BASE: "http://localhost:3550",
    
    INICIAR_SESION: "/publico/accesos/signin", 
    REGISTRO: "/publico/registros/user",
    CONTACTO: "/publico/correo/contacto",

    /****SERVICIOS PRIVADOS ************ */
    LISTAR_USUARIOS: "/privado/usuarios/todos",
    CREAR_USUARIO: "/privado/usuarios/agregar",
    ACTUALIZAR_USUARIO: "/privado/usuarios/update",
    ELIMINAR_USUARIO: "/privado/usuarios/delete",
        
    
    /****SERVICIOS PRIVADOS PARA EL PERFIL ************ */
    LISTAR_PERFIL: "/privado/usuarios/perfil",
    ACTUALIZAR_PERFIL: "/privado/usuarios/perfil/actualizar",

    LISTAR_ROLES: "/privado/roles/todos",
    CREAR_ROLES: "/privado/roles/agregar",
    ACTUALIZAR_ROLES: "/privado/roles/update",
    ELIMINAR_ROLES: "/privado/roles/delete"

    
}