# Comprobaciones del Preview

Revisión del 23 de noviembre de 2026. Sitio estático en Astro y TypeScript con fuentes e imágenes locales. Se usó Chrome con tamaños emulados y Axe para las comprobaciones automáticas.

## Matriz funcional

| Área | Resultado | Evidencia |
| --- | --- | --- |
| Responsive | PASA | Inicio a 320, 360, 390, 430, 640, 768, 1280 y 1440 px. Sin desbordamiento horizontal. El título de portada ocupa dos líneas y se cargan las ocho imágenes. |
| Navegación | PASA | Menú móvil con teclado, cierre con Escape, cambio de ancla con foco en Talleres, enlace de salto y retorno desde fichas. |
| Talleres | PASA | Cuatro fichas con foto, temario y respuesta HTTP 200. El estado de referencia se muestra sin anunciar cupos ni fechas vigentes. |
| WhatsApp | PASA | El número coincide en la cabecera, la ficha y la barra móvil. Se comprobaron el texto prellenado por cada ficha y la redirección a WhatsApp. La prueba no envió un mensaje. |
| Ubicación | PASA | La URL de Google Maps responde HTTP 200 y su destino es Jr. Elías Aguirre 1168, Chimbote, Áncash, Perú, confirmado por el solicitante. |
| Galería y FAQ | PASA | Ampliación con Enter, navegación por flechas y botones, vuelta a la foto inicial al cerrar con Escape. FAQ abre y cierra con teclado. |
| Accesibilidad automatizada | PASA | Axe sin violaciones en inicio a 390 y 1440 px y en cuatro fichas a 390 px. Movimiento reducido aplicado. |
| Privacidad y errores | PASA | Privacidad responde HTTP 200. Una ruta inexistente responde HTTP 404 y muestra una página de retorno. |
| Dispositivos físicos | NO PROBADO | Las pruebas móviles se ejecutaron con emulación de navegador. |

## Build y auditoría móvil

- `npm ci`, `npm run check` y `npm run build` con Node.js 24.12.0, Astro 7.4.13 y Tailwind CSS 4.3.5. Instalación limpia, 0 errores, 0 advertencias y 7 páginas estáticas. El build generó 42 variantes WebP.
- `npm audit --audit-level=high` reportó 0 vulnerabilidades. Se comprobó que las ocho copias WebP carecen de metadatos EXIF y XMP.
- Chrome 157.0.8103.80, Axe con reglas WCAG A y AA y Lighthouse 13.6.0 en perfil móvil sobre la salida estática local.

| Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- |
| 97/100 | 100/100 | 100/100 | 66/100 | 2,49 s | 0,018 | 93 ms |

La única auditoría binaria fallida fue `is-crawlable` por el `noindex` deliberado del Preview. Se comprobó título, descripción, jerarquía y datos estructurados. La prueba de laboratorio mide TBT. El INP de usuarios reales queda sin medición de campo.

## Evidencia visual

- Inicio a [360 px](capturas/inicio-360.jpg), [390 px](capturas/inicio-390.jpg), [430 px](capturas/inicio-430.jpg) y [768 px](capturas/inicio-768.jpg).
- Inicio a [1280 px](capturas/inicio-1280.jpg) y [1440 px](capturas/inicio-1440.jpg).
- [Ficha móvil](capturas/ficha-390.jpg) y [ampliación de la galería móvil](capturas/galeria-390.jpg).

La primera revisión a 390 px mostró que el nombre accesible de la marca no seguía el texto visible. Se ajustó el enlace y se repitió el análisis. También se ensanchó el encuadre móvil de la portada y se aumentó la resolución seleccionada para fotos anchas en fichas y galería. Las capturas corresponden a la revisión posterior.

## Publicación

El código está en `main` de [reposteria-risco-web](https://github.com/Aaron-Daza-Risco/reposteria-risco-web). Vercel CLI 66.6.0 rechazó el primer despliegue Preview con `first_deployment_production`. Se preparó la vía de borrador manual de Netlify y se solicitó el acceso a la cuenta para completar la comprobación remota.
