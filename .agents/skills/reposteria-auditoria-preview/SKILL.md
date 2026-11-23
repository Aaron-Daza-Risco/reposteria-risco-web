---
name: reposteria-auditoria-preview
description: Auditar y preparar despliegue de prueba de un sitio estático de escuela de repostería: responsive, accesibilidad, rendimiento, enlaces de WhatsApp/Maps, build, git seguro y Vercel preview sin producción definitiva.
---

# Skill: Auditoría editorial, funcional y preview de repostería

## Puertas de calidad

1. Revisar código y contenido contra `AGENTS.md`; ejecutar comandos reales de install, typecheck, lint y build que existan en `package.json`.
2. Revisar el sitio como visitante nuevo en 360, 390, 430, 768, 1280 y 1440 px. Si hay navegador visual, capturar home, talleres, detalle, galería, ubicación y footer. Detectar errores de responsive, texto superpuesto, scroll horizontal o controles bloqueados por barra móvil.
3. Probar enlaces de contacto reales, URL `wa.me` y mensajes personalizados, mapa, navegación interna, galería y FAQ. Si no existe WhatsApp verificado, no publicar CTA fingido.
4. Inspeccionar listas de cursos y fechas; que no queden cursos vencidos como «inscripciones abiertas».
5. Revisar accesibilidad: teclado completo, foco visible, aria en modal/menu, texto alternativo, reduccion de movimiento, colores AA, zoom y enlaces comprensibles.
6. Verificar metatags y sitemap/robots adecuados a preview, no crear structured data con claims no verificados.
7. Auditoría de rendimiento cuando haya herramientas: registrar datos reales, no inventarlos. Priorizar imagen hero ligera, tamaños explícitos, lazy load en galería, CSS/JS mínimos.
8. Comprobar `.gitignore`, ausencia de credenciales, tokens, imágenes no autorizadas y archivos generados innecesarios.
9. Antes de push: `git status`, verificar remoto, rama y cambios; sin `--force`; no pisar historial. Repositorio esperado: `Aaron-Daza-Risco/reposteria-risco-web`.
10. Desplegar únicamente PREVIEW con `vercel deploy` sin `--prod` o alternativa equivalente. Si enlazar GitHub activaría production al push main, no hacer importación automática ahora. Pedir login interactivo si es indispensable; no revelar credenciales. Verificar URL, respuesta y recursos.
11. Entregar reporte honesto: qué se probó, tamaños, URL, resultados, fallos abiertos, commit, comandos y evidencias.

Leer `references/MATRIZ_PRUEBAS.md` y guardar una tabla real en `docs/QA_PREVIEW.md`.

## Criterio de no-aprobación

No marcar como terminado si no hay datos de contacto funcionales, imágenes propias aprobadas necesarias, enlaces verificados o un build limpio. Se puede entregar avance verificable con bloqueos explícitos, nunca un «100% completo» simulado.
