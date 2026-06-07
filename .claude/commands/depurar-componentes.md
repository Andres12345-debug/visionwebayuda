# Depuración y Unificación de Componentes React/MUI

Eres un experto en arquitectura de componentes React con MUI. Tu tarea es auditar `src/app/public/components/` en busca de duplicaciones y unificarlas en componentes reutilizables.

## Paso 1 — Leer todos los componentes

Lee TODOS los archivos `.tsx` dentro de `src/app/public/components/` (todas las subcarpetas). Para cada archivo, extrae:
- Nombre del componente y sus props
- Estructura visual (qué renderiza: cards, botones, títulos, grids, imágenes, etc.)
- Estilos hardcodeados relevantes (gradientes, borderRadius, boxShadow, colores exactos)

## Paso 2 — Identificar patrones duplicados

Busca específicamente estos patrones, que son los más comunes en este proyecto:

1. **Texto con gradiente** — `Box component="span"` con `WebkitBackgroundClip: "text"` y `WebkitTextFillColor: "transparent"`. Componente base: `src/app/public/components/ui/GradientText.tsx`

2. **Botón con gradiente primario** — `Button variant="contained"` con `background: "linear-gradient(90deg, #6366f1, #9333ea)"`. Componente base: `src/app/public/components/ui/PrimaryButton.tsx`

3. **Card con icono circular + título + descripción** — Estructura `Paper`/`Card` con `Avatar` de color dinámico, `Typography` h5/h6 y `Typography body2`. Componente base: `src/app/public/components/shared/ServiceCards.tsx`

4. **Sección Hero Split** — Grid de dos columnas (texto + imagen). Componente base: `src/app/public/components/shared/SectionHeroSplitBase.tsx` con prop `imagePosition: "left" | "right"`

5. **Cualquier otro patrón** — `Box`, `Paper` o `Card` con los mismos estilos (`borderRadius`, `boxShadow`, `background`) repetidos en 3 o más archivos distintos.

## Paso 3 — Reportar hallazgos antes de tocar código

Muestra al usuario una tabla con:
| Patrón | Archivos afectados | Componente base existente o a crear |
|--------|-------------------|--------------------------------------|

Espera confirmación antes de continuar.

## Paso 4 — Ejecutar los cambios

Para cada patrón confirmado:

### Si el componente base YA existe (`ui/` o `shared/`):
1. Agrega el import en cada archivo afectado
2. Reemplaza el JSX duplicado con el componente base
3. Elimina los imports de MUI que ya no se usen

### Si el componente base NO existe:
1. Créalo en `src/app/public/components/ui/` (si es un elemento visual pequeño: botón, texto, icono) o en `src/app/public/components/shared/` (si es una sección completa)
2. Aplica las reglas de diseño del proyecto (ver abajo)
3. Úsalo en todos los archivos afectados

## Reglas de diseño del proyecto

- **Gradiente primario estándar**: `linear-gradient(90deg, #6366f1, #9333ea)` — hover: `linear-gradient(90deg, #4f46e5, #7e22ce)`
- **Gradiente alternativo (azul-púrpura)**: `linear-gradient(90deg, #3b82f6, #8b5cf6)` — usado en secciones de inventario
- **Card estándar dark**: `backgroundColor: isDark ? "#1e293b" : "#fff"`, `border: isDark ? "#334155" : "#e2e8f0"`
- **Card premium (hero)**: `background: isDark ? "#111827" : "#ffffff"`, `boxShadow: isDark ? "0 20px 60px rgba(0,0,0,0.6)" : "0 20px 60px rgba(0,0,0,0.08)"`
- **Imágenes**: ocultas en móvil — `display: { xs: "none", md: "block" }`
- **Botones**: `borderRadius: "14px"`, `textTransform: "none"`, `fontWeight: 600`
- **Texto gradiente**: usar `GradientText` de `ui/GradientText.tsx`, con prop `gradient` opcional para variantes

## Reglas de ubicación de archivos

| Tipo de componente | Carpeta |
|-------------------|---------|
| Elemento UI pequeño (botón, texto, badge) | `src/app/public/components/ui/` |
| Sección reutilizable completa (hero, split, card grid) | `src/app/public/components/shared/` |
| Wrapper de sección con traducciones propias | Carpeta del feature (`componentsWelcome/`, etc.) |

## Lo que NO debes hacer

- No crear componentes base para algo que solo aparece en 1 o 2 lugares
- No unificar componentes que tienen lógica muy diferente aunque se vean parecidos
- No cambiar props o comportamiento existente de componentes ya exportados
- No añadir comentarios explicando qué hace el código; solo comentarios sobre el POR QUÉ si es no obvio
- No tocar `ImageTextSection.tsx` ni `FullServiceSection.tsx` — usan un gradiente azul diferente (`#1976d2`) que no corresponde al sistema de diseño principal
