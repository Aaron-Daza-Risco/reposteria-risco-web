---
name: reposteria-direccion-de-arte
description: Diseñar, construir o revisar el frontend editorial mobile-first de la Escuela de Repostería Risco con fotografía artesanal real, composiciones originales y dirección visual de escuela presencial; NO usar para dashboards, ecommerce general o páginas SaaS.
---

# Skill: Dirección de arte digital para escuela artesanal de repostería

**Identidad que se persigue:** una visita a un obrador luminoso y acogedor. La escuela debe parecer real, cercana y profesional, no ostentosa. El visitante debe imaginarse participando en una clase y saber cómo preguntar por su inscripción.

## Protocolo obligatorio

1. Leer el prompt maestro y `AGENTS.md`. Abrir `references/LENGUAJE_VISUAL.md`.
2. Inspeccionar logo y 10–20 fotos propias disponibles; evaluar luminosidad, paleta, producto, manos, mesas, clase, fachada e instructores. Identificar elementos visuales repetibles que realmente pertenecen a la marca. Si no hay imágenes, reconocer el bloqueo en lugar de diseñar una marca falsa.
3. Comparar tres microconceptos visuales (por ejemplo: «cuaderno de taller», «mesa de obrador», «escuela editorial») en una breve matriz de idoneidad para la escuela. Seleccionar UNO y justificarlo en `docs/DIRECCION_DE_ARTE.md` (máximo 1 página).
4. Diseñar primero móvil (360–390px): primeras dos pantallas deben mostrar identidad, contenido real e indicación clara para ver talleres o consultar. La ubicación y contacto son encontrables sin buscar demasiado.
5. Componer desktop por relaciones entre fotografía y texto, no estirando tarjetas móviles. Utilizar un ritmo: hero fuerte, grupo compacto informativo, pausa de storytelling, catálogo legible, prueba real, acceso al contacto.
6. Implementar y fotografiar mediante capturas reales. Comparar las capturas con los principios de la skill. Revisar al menos 2 iteraciones: estructura y refinamiento.

## Decisiones visuales

- Paleta base flexible: marfil papel `#F7F2E9`, cacao `#5A352D`, frambuesa cocida `#AD584E`, trigo `#D8B897`, verde hoja oscuro `#28362F`. Ajustar si el logo real tiene otra identidad. Mantener buen contraste, no usar los cinco colores en cada módulo.
- Tipografía: una serif editorial de carácter y una sans funcional, fuentes con fallback; escalas moderadas, especialmente H1 móvil (aprox. 34–42px según texto), H2 aprox. 27–34px. Evitar titulares gigantes de marketing y texto en versales extensas.
- Fotografía: luz natural, textura de ingredientes, alumnos trabajando, mesas y el resultado; permitir que fotos reales definan el ritmo. Recorte intencional por contexto, no filtros artificiales uniformizantes.
- Gestos distintivos: índices como ficha de receta, pequeños números de sección, línea editorial fina, bordes suaves y discretos, pie de foto artesanal, un elemento gráfico inspirado en anotaciones de cocina (no caricaturas de cupcakes).
- Retícula: alternar piezas asimétricas controladas con bloques lineales; alineación estricta, suficiente aire, máximo 2–3 densidades por pantalla. Mantener el camino visual hacia información comprobable.
- CTA primario sobrio y claro; secundario de texto o contorno. No competir con la fotografía.

## Antipatrones: PROHIBIDO entregar así

- Layout SaaS genérico con tarjetas idénticas, gradientes púrpura o ilustraciones 3D aleatorias.
- Reseñas inventadas, contadores «+1000 alumnas», sellos sin respaldo.
- Galerías de stock que parecen fotografías del aula real.
- H1 de 5 líneas, overlaid text ilegible sobre fotos, «descubre la magia» sin contenido útil.
- Hero con sliders automáticos, carouseles que mueven texto crítico, menús extensos, iconografía de emojis decorativos y animaciones que retrasan la consulta.
- Un componente React para cada elemento estático si HTML/Astro más simple es suficiente.

## Entregables de la skill

`docs/DIRECCION_DE_ARTE.md` con concepto, tipografías, tokens y rationale; `src/styles/tokens.css`, componentes visuales, capturas móviles/escritorio reales, lista de mejoras tras revisión. Usar `references/LENGUAJE_VISUAL.md` como lista de verificación.
