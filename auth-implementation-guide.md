# Guía de implementación: actualizar Login y Registro (frontend)

Plan de trabajo para poner al día el flujo de autenticación del frontend según
[`frontend-auth-guide.md`](frontend-auth-guide.md) (contrato real del backend).

## 0. Resumen del cambio de contrato

El backend dejó de usar `nombreAcceso` como identificador de login. Ahora:

- El login es por **`correoUsuario`** (email) + `claveAcceso`.
- El registro ya no acepta `codRol` ni `nombreAcceso` — el rol siempre es `clientes`
  y el identificador es el correo.
- El JWT trae el claim **`correo`**, no `acceso`.

Eso vuelve obsoletos varios modelos/servicios/componentes actuales que siguen
hablando de `nombreAcceso` / `acceso`.

## 1. Modelos (`src/app/models`)

| Archivo | Acción | Detalle |
|---|---|---|
| `Acess.tsx` (`Acceso`) | Reescribir | Solo `correoUsuario` + `claveAcceso` (lo que pide `LoginDto`). Quitar `codUsuario`/`nombreAcceso`, que el backend no usa para login. |
| `SessionRegister.tsx` (`RegistroSesion`) | Reescribir | Debe reflejar `RegistroDto`: `nombreUsuario`, `fechaNacimientoUsuario`, `generoUsuario`, `telefonoUsuario`, `correoUsuario`, `claveAcceso`. Quitar `codRol` y `nombreAcceso` (el backend los ignora/rechaza). |
| `UserRegister.tsx` (`RegistroUsuario`) | Eliminar | Clase duplicada de `RegistroSesion`, sin ninguna referencia en el código (`grep` no encuentra usos fuera de su propia definición). |
| `SessionData.tsx` (`DatoSesion`) | Reescribir | El claim del token ya no es `acceso`, ahora es `correo`. Actualizar la propiedad y el constructor. |

## 2. Servicios (`src/app/services`)

| Archivo | Acción | Detalle |
|---|---|---|
| `AcessService.tsx` | Mantener | Solo necesita el modelo `Acceso` actualizado; la llamada a `INICIAR_SESION` ya es correcta. |
| `RegistroService.tsx` | Renombrar método | `iniciarSesion` → `registrarUsuario` (el nombre actual es confuso: este servicio llama a `/publico/registros/user`, no a login). Actualizar el tipo del parámetro a `RegistroSesion` ya reescrito. |

`urls.tsx` ya tiene las constantes correctas (`INICIAR_SESION`, `REGISTRO`) — no
requiere cambios.

## 3. Páginas (`src/app/public/pages`)

### 3.1 `Login.tsx`

- Cambiar el campo `nombreAcceso` por `correoUsuario` (input `type="email"`,
  ícono de correo en vez de persona).
- Actualizar `formularioValido` para validar formato de email básico.
- Actualizar `interface TokenPayload`: el claim es `correo`, no `acceso`.
- El resto del flujo (guardar `tokenApp` en `localStorage` bajo
  `TOKEN_AUTORIZACION`, decodificar con `jwtDecode`, redirigir a `/dash`) sigue
  igual.

### 3.2 `Register.tsx` (nueva)

No existe página de registro hoy (`RegistroService` está sin usar). Crear una
siguiendo el mismo estilo visual de `Login.tsx` (split panel con `Grid`,
`useFormulario`, `SEO`, traducciones vía `i18next`):

- Campos: `nombreUsuario`, `correoUsuario` (email), `telefonoUsuario`,
  `fechaNacimientoUsuario` (date picker o `TextField type="date"`),
  `generoUsuario` (select numérico — catálogo propio del frontend),
  `claveAcceso` (con reglas mínimas de fortaleza, ya que el backend no las valida).
- Llamar a `RegistroService.registrarUsuario(...)`.
- La respuesta exitosa ya trae `tokenApp` — **no hay que loguear de nuevo**:
  guardar el token igual que en `Login.tsx` y redirigir a `/dash`.
- Manejar el error `406` (`"El usuario ya existe"`) con un mensaje específico
  ("ya existe una cuenta con ese correo"), y el resto como error genérico.

## 4. Rutas (`src/routes/MainRoute.tsx`)

Agregar `LazyRegister` (lazy import de `Register.tsx`) y exponerlo en, por
ejemplo, `/registro` y `/crear-cuenta` (mismo patrón de alias que usa `login`/
`ingresar`). Añadir un enlace cruzado entre `Login` y `Register` ("¿No tienes
cuenta? Crea una").

## 5. Componentes que decodifican el token

`Profile.tsx` y `UserMenu.tsx` decodifican el JWT directamente. Solo
`Profile.tsx` lee el claim afectado (`acceso`, mostrado como "Acceso" en la UI):
cambiar a `correo` y la etiqueta a "Correo". `UserMenu.tsx` no usa ese claim, no
requiere cambios de contrato (aunque comparte el mismo problema de fondo: cada
componente decodifica el token por su cuenta — fuera del alcance de esta
actualización, pero candidato a un `AuthContext` centralizado más adelante).

## 6. Traducciones (`src/assets/language/{es,en}.json`)

Agregar claves nuevas bajo una sección `register` (paralela a `login`):
título, subtítulo, labels de cada campo, botón de envío, estado "registrando…",
mensajes de error (`correo ya registrado`, `credenciales inválidas`), y el
enlace cruzado hacia/desde `login`. Reusar `seo.loginTitle`/`Description` como
modelo para `seo.registerTitle`/`Description`.

## 7. Verificación

1. Levantar el backend en `localhost:3550` (o el `URL_BASE` configurado).
2. Probar registro con un correo nuevo → debe loguear automáticamente y
   redirigir a `/dash`.
3. Probar registro con un correo ya existente → debe mostrar el error 406.
4. Probar login con el correo recién creado → debe entrar a `/dash`.
5. Revisar `/dash/profile` → el campo "Correo" debe mostrar el email del token.
6. Probar login con credenciales inválidas → mensaje de error genérico.
