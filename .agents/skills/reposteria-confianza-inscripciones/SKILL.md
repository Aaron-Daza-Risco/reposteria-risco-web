---
name: reposteria-confianza-inscripciones
description: Construir confianza en una escuela presencial de repostería mediante datos verificables, fotografías propias autorizadas, cursos claros, ubicación y consultas de inscripción por WhatsApp; evita inventar prueba social, cupos y certificados.
---

# Skill: Evidencia real y conversión honesta de talleres

## Principio

La confianza no se diseña con cinco estrellas falsas. Se construye mostrando clases reales, información concreta, ubicación verificable, expectativas explícitas y canales oficiales.

## Flujo de contenido

1. Crear `docs/INVENTARIO_FUENTES.md` con dato / evidencia / fecha / estado. Fuente primaria: dueño/escuela y sus archivos; secundaria: Facebook oficial accesible. Señalar claramente datos históricos.
2. Crear `docs/INVENTARIO_FOTOS.md` con nombre de archivo, origen, autorización, sujeto, uso (hero/curso/ambiente/fachada), calidad y consentimiento para personas visibles. Leer `references/FUENTES_Y_FOTOS.md`.
3. Definir modelo `Workshop`: slug, title, category, cover, verifiedStatus, description, learningOutcomes, format, duration, nextDate, price, materialsIncluded, venue, whatsAppPrefill, sourceRefs, updatedAt. Campos no verificados se omiten en UI. Mostrar estado `disponible` únicamente cuando existe confirmación vigente.
4. Diferenciar **portafolio de talleres realizados** y **próximos talleres**. Nunca convertir un flyer de 2020 o 2026 pasado en convocatoria abierta sin verificación.
5. Diseñar el contacto como un embudo honesto: *Consulta -> Verificación de cupo/condiciones por canal oficial -> Inscripción fuera de esta web*. Mostrar «Consulta disponibilidad», no «Reserva confirmada».
6. Si hay testimonios: exigir permiso y fuente real, redactar sin alterar el sentido, sin estrellas inventadas. Si no hay, usar galería y proceso transparente.
7. Añadir explicación breve sobre si la web recibe pagos o datos: para esta fase, no hay pagos/registro; CTA redirige a canal externo.
8. Revisar todo el contenido antes de publicar; marcar `por_confirmar` sólo en documentos internos. Si hay campo crítico sin fuente, omitirlo o colocar «Consulta por WhatsApp» cuando exista teléfono confirmado.

## Redacción

Usar frases prácticas: «Aprende a preparar…», «Taller presencial», «Consulta próximas fechas», «Conoce el espacio donde practicamos». Evitar «la mejor academia», «garantizado», «certificado oficial», «cupos limitados» sin base. Titulares menores a 10 palabras cuando sea posible. Textos 1–3 frases. Español de Perú y moneda S/ cuando corresponda.

## Puentes entre confianza y UI

- En cards: foto propia + título + fecha/estado verificable + «Ver detalles»; evitar íconos como sustituto de datos.
- En detalle: qué se aprende, nivel, qué incluye, dónde se dicta, condiciones y contacto, sólo lo respaldado.
- En ubicación: nunca publicar dirección o mapa que no se haya verificado con el propietario.
- En WhatsApp: prefijo correcto, mensaje prellenado contextual y `rel="noopener noreferrer"` para enlaces externos; probar en móvil.
- En redes: enlace a Facebook original verificado, no widgets sociales pesados que ralenticen el sitio.

## Resultado

Documentos de evidencia, catálogo de cursos tipado, imágenes aprobadas y comunicaciones honestas de inscripción. Cualquier limitación de acceso queda reflejada en `docs/PENDIENTES_PUBLICACION.md`, no disfrazada con material inventado.
