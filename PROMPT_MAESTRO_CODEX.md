# PROMPT MAESTRO PARA CODEX — SITIO DE ESCUELA DE REPOSTERÍA RISCO

## Tu misión

Actúa como un equipo de alto nivel integrado por director/a de arte digital especializado/a en pastelería y educación presencial, diseñador/a UX/UI mobile-first, estratega de contenido verificable, fotógrafo/a-editor/a de contenido gastronómico, especialista frontend y responsable de calidad, SEO y despliegue.

Construye DESDE CERO un frontend completamente funcional, no un mockup, para una escuela de repostería en Perú. El objetivo comercial es que una persona que llega desde Facebook, Instagram o WhatsApp encuentre rápidamente: qué enseña la escuela, fotos reales de sus clases y elaboraciones, dónde se encuentra, qué incluye un curso, cómo preguntar y cómo inscribirse con confianza. Debe sentirse como una escuela real, cálida y profesional, no una plantilla de SaaS, una tienda genérica ni una landing de IA.

**Alcance de este encargo:** diseñar, desarrollar, verificar, versionar y subir el código al repositorio indicado, y publicar una URL de PRUEBA/PREVIEW accesible para revisión. NO comprar dominio, NO configurar dominio definitivo, NO activar pagos, NO construir backend ni panel de administración, NO declarar el proyecto en producción comercial definitiva. No inventes resultados de pruebas, enlaces o despliegues.

## Fuentes y destinos

- Página de referencia de la empresa en Facebook: https://www.facebook.com/profile.php?id=100063596920257
- Fuente prevista de fotografías propias: https://photos.google.com/ (el propietario facilitará una selección autorizada, álbum compartido, exportación o archivos locales; no asumas acceso por este enlace de inicio).
- Repositorio ya creado: https://github.com/Aaron-Daza-Risco/reposteria-risco-web.git
- Público principal: personas de Chimbote y alrededores que consideran tomar cursos y talleres presenciales. No infieras dirección exacta, identidad legal, años de experiencia, certificados o precios sin fuente.
- Idioma: español natural de Perú. Moneda S/, zona horaria America/Lima.

## Instrucción crítica sobre la información

1. Primero inspecciona el sitio de Facebook, cualquier material entregado y las fotos efectivamente accesibles. Verifica nombre comercial, identidad gráfica, dirección, teléfonos, horarios, modalidad, talleres reales, fechas, contenidos, duración, precio, qué incluye, cupos, instructoras/es y testimonios.
2. Crea un inventario en `docs/INVENTARIO_FUENTES.md`: dato, fuente, enlace/archivo, fecha consultada, estado (`verificado`, `por_confirmar`, `no_disponible`). Las publicaciones de cursos pasados son material de portafolio; NO las presentes automáticamente como matrículas actuales.
3. No inventes sellos de calidad, testimonios, estrellas, número de alumnas/os, años de trayectoria, cuotas, precios, promociones, licencias, certificados oficiales, convenios ni garantías.
4. Si Facebook bloquea acceso, consigna la limitación y usa capturas/datos del usuario. Si las fotos privadas no son accesibles, solicita únicamente el permiso o la selección imprescindible; avanza con lo que sí está verificado. Nunca simules imágenes reales de la escuela.
5. Si falta algún campo para una sección pública, elimina u oculta esa afirmación: las incógnitas se anotan solo en documentación interna. NO dejes texto lorem ipsum, datos falsos ni botones rotos en la demo final.
6. Considera consentimientos para imágenes donde personas sean reconocibles, especialmente menores. Conserva licencia y procedencia en el inventario. No compartas credenciales ni accesos amplios a bibliotecas privadas.

## Skills obligatorias de este proyecto

Lee y ejecuta estas skills del repositorio ANTES de tomar decisiones de diseño, contenido y publicación:

- `.agents/skills/reposteria-direccion-de-arte/SKILL.md` — dirección artística y UI/UX específica para escuela artesanal de repostería.
- `.agents/skills/reposteria-confianza-inscripciones/SKILL.md` — arquitectura de confianza, curaduría de evidencia, fotografía y contacto sin falsas promesas.
- `.agents/skills/reposteria-auditoria-preview/SKILL.md` — verificaciones funcionales, móviles, seguridad estática y despliegue de prueba.

Aplica `AGENTS.md` como instrucciones permanentes del repositorio. Si estás leyendo este prompt fuera del repositorio y esas skills aún no existen, créalas primero siguiendo el paquete adjunto; no digas que las aplicaste sin haber leído sus archivos.

## Resultado visual esperado

Concepto rector: **«Un taller real, un oficio cercano»**. Dirección visual editorial gastronómica cálida: crema de papel, cacao, frambuesa/terracota muy dosificados, acentos verdes suaves; luz natural, texturas discretas, fotografía auténtica protagonista, serif de carácter en títulos breves y sans legible en información. Ajusta colores según la marca auténtica si se verifica.

El sitio debe tener una firma visual reconocible: composiciones editoriales, recortes fotográficos deliberados, relaciones asimétricas controladas, etiquetas de taller sobrias y detalles tipográficos inspirados en fichas de recetas o tarjetas de obrador. Mantén diseño respirable y mobile-first, evitando clichés como gradientes púrpura, fondos multicolores, muchas tarjetas flotantes, iconos de stock, emojis decorativos indiscriminados, botones fluorescentes, ilustraciones de chefs generadas o texto publicitario hiperbólico.

No copies diseños de terceros. Puedes analizar como referencia editorial el tratamiento fotográfico y jerarquías de escuelas de pastelería reconocidas; entrega una solución original para esta escuela.

Usa 1 familia serif y 1 sans como máximo, con fallback y presupuesto de rendimiento. Limita animaciones a transiciones suaves (150–350 ms) y respeta `prefers-reduced-motion`. Evita el scroll-jacking. La belleza nunca debe impedir la consulta del precio o el contacto.

## Arquitectura de información — estructurar según evidencia

1. **Header:** logo real si existe; menú Inicio, Talleres, La experiencia, La escuela, Ubicación; acción discreta «Consultar por WhatsApp». Menú móvil accesible. No más de 5–6 opciones.
2. **Hero editorial:** fotografía REAL del aula, enseñanza o producto, H1 corto y humano (máx. dos líneas en móvil), una frase de valor concreta y botones «Ver talleres» + «Cómo llegar» o «Consultar cupos» según datos verificados. Priorizar autenticidad a grandilocuencia.
3. **Talleres / próximos cursos:** listado compacto y filtrable si hay variedad real. Tarjetas con foto propia, nombre del taller, modalidad, duración, fecha, lugar, precio y «incluye» SOLO si verificadas. Si no hay fechas confirmadas, titular «Talleres que realizamos» y CTA «Consultar próximas fechas»; NO aparentar matrícula abierta.
4. **Ficha de taller:** una vista simple (página estática por taller o diálogo accesible, decide por SEO/UX) con contenido, nivel, experiencia previa, materiales, ubicación, fechas y condiciones confirmadas; CTA WhatsApp que incluya el nombre del taller. Los datos viven en una fuente estructurada local, sin duplicación.
5. **Así se vive un taller:** reportaje fotográfico real y breve: práctica, preparación, resultado final, ambiente. Una galería editorial intencional, no un mosaico sin significado.
6. **Conoce la escuela:** historia y personas reales, ubicación física/instalaciones, qué hace diferente la experiencia SOLO con evidencia. Evita contadores inventados.
7. **Confianza antes de inscribirse:** información de proceso en 3 pasos verificables: consulta, confirmación de condiciones/cupo, inscripción por canal oficial. Explicar claramente que la web deriva a WhatsApp y NO cobra ni confirma matrículas automáticamente.
8. **Ubicación:** dirección exacta sólo cuando esté validada; enlace a Google Maps con coordenadas o URL verificadas, indicación clara de presencialidad, referencia visual de fachada si la hay. Si no es válida, mostrar solo ciudad corroborada y contacto para solicitar ubicación.
9. **Preguntas frecuentes:** 5–7 respuestas cortas basadas en políticas reales sobre insumos, experiencia previa, edades, materiales, pago, cancelaciones, certificados y horarios; las preguntas sin respuesta confirmada remiten al contacto, nunca se contestan inventando.
10. **Footer:** marca, redes sociales verificadas, teléfono/WhatsApp oficial, lugar verificado y nota sencilla de privacidad si corresponde.

Si la información disponible aconseja menos secciones, simplifica. La narrativa visual debe llevar desde la inspiración hasta la prueba de realidad y finalmente la consulta. **No saturar con texto**: párrafos de 1–3 oraciones, títulos útiles y microcopy tangible.

## Interacciones que sí aportan valor

- Navegación ancla con compensación por header fijo y foco correcto.
- Galería con ampliación/lightbox, ESC, navegación por teclado, botones cerrables, texto alternativo, swipe opcional sin dependencia pesada.
- Filtro de talleres por categoría/estado SOLO si hay suficientes talleres para justificarlo.
- Acordeón de FAQ accesible y sin bloqueos.
- CTA de WhatsApp con URL `https://wa.me/NUMERO_VERIFICADO?text=...`, prefijo internacional real, `encodeURIComponent` y mensaje contextual («Hola, deseo información sobre el taller de ...»). Si teléfono no verificado, NO publiques enlace inválido; ofrece Facebook u otro contacto verificado.
- Botón «Cómo llegar» a Maps; no inventar coordenadas.
- Barra móvil inferior de contacto discreta, no intrusiva, que no tape contenido, con altura y safe areas respetadas.
- Estados hover/focus/active consistentes; sin microinteracciones que entorpezcan.

## Fotografías: priorizar verdad + calidad

- Usar exclusivamente imágenes de la escuela proporcionadas o autorizadas. No introducir imágenes generadas o stock que se presenten como sus clases.
- Selecciona, con permiso, 1 hero fuerte, 6–12 fotografías de talleres, 3–6 de experiencia/instructor/instalaciones y 1 exterior si hay evidencia. Evita repeticiones y fotos borrosas.
- Documenta archivo original, uso asignado y permiso de publicación en `docs/INVENTARIO_FOTOS.md`.
- Descargar/copy a `public/images` o colección de assets del proyecto; convertir a formatos adecuados (AVIF/WebP/JPEG compatibles), comprimir, variantes responsivas, conservar proporción y evitar recortes de rostros/manos/productos importantes.
- No usar `photos.google.com` ni URLs temporales de su API como CDN de producción. Su Picker permite seleccionar fotos autorizadas; los enlaces de contenido expiran. No exponer tokens en frontend ni Git.
- Mantén las fotos con `alt` descriptivos auténticos. Sólo usar fondos neutros/espacios reservados durante el trabajo; la versión final no debe fingir que contiene evidencias que todavía faltan.

## Tecnología y estructura

Preferencia: **Astro (versión estable compatible con el entorno) + TypeScript + Tailwind CSS**, generación estática y JavaScript mínimo. Interactividad mediante componentes pequeños e islands sólo cuando de verdad haga falta. Prioriza HTML semántico y CSS bien estructurado frente a dependencia masiva de bibliotecas. Si encuentras limitaciones técnicas reales, documenta una alternativa razonada antes de implementarla; no conviertas el proyecto en un backend innecesario.

Organiza contenido en datos tipados, por ejemplo `src/data/site.ts`, `src/data/workshops.ts`, `src/data/gallery.ts`; componentes reutilizables pequeños, `src/styles/tokens.css`, assets locales, scripts y rutas con títulos/metadata. El proyecto debe poder actualizar fotos/cursos editando datos, sin modificar cada componente. No guardar información privada en la web.

Define tokens (colores, escala tipográfica, spacing, max-width, radios, motion) y construye diseño responsive real desde 320px. Si el logo no está disponible, usa una versión tipográfica provisional claramente documentada, NO un logo falso atribuido a la empresa.

### SEO y calidad

- HTML semántico, un H1, jerarquía de títulos correcta, metadata de Open Graph, favicon propio/temporal no engañoso, canonical sólo con URL real del sitio, sitemap/robots adecuados al entorno de PRUEBA (evitar indexar preview si corresponde).
- JSON-LD `LocalBusiness`/`EducationalOrganization` y `Course` sólo con propiedades verificadas. No publicar direcciones, ratings ni ofertas inventadas en datos estructurados.
- Optimizar imágenes, tipografías, CSS, defer scripts, dimensiones anti-CLS; priorizar LCP móvil y buen INP.
- Objetivos de auditoría: Lighthouse móvil Performance/Accessibility/Best Practices/SEO >=90 donde las pruebas sean disponibles y razonablemente reproducibles; CWV aspiracionales LCP <=2.5 s, INP <=200 ms, CLS <=0.1 en condiciones de medición apropiadas. No afirmar resultados sin capturas/logs.
- Accesibilidad WCAG 2.2 AA cuando sea aplicable: teclado, foco visible, contraste, objetivos táctiles, `aria` bien usado, `prefers-reduced-motion`, zoom 200% y error states.
- Privacidad: no enviar datos de alumnas/os a terceros ni activar rastreadores analíticos por defecto; revisar permisos de fotos y evitar imágenes de menores sin autorización.

## Plan operativo de ejecución — debes llegar hasta el preview real

**Fase 0 — Diagnóstico.** Examina repositorio local/remoto y capacidades disponibles. No sobrescribas trabajo previo. Confirma acceso a fotos y redes públicas; prepara manifiesto verificado, pendientes y riesgos.

**Fase 1 — Dirección creativa.** Define una propuesta de arte concreta: referencias únicamente como orientación, paleta ajustable a logo real, combinación de tipos, sistema de imágenes, story-board de home, estructura móvil. Haz una revisión crítica: ¿parece una escuela de repostería real de Chimbote o una plantilla intercambiable? Corrige antes de programar.

**Fase 2 — Implementación completa.** Construye sitio, componentes y navegación, carga cursos/fotos verificadas, incorpora CTAs funcionales, imágenes optimizadas, favicon, páginas informativas. No dejes secciones esqueleto, texto lorem ni enlaces `#` sin destino en el producto entregado.

**Fase 3 — Prueba visual y funcional.** Ejecuta instalación limpia, lint/typecheck/build, verifica visualmente en móvil 360/390/430 px, tableta 768 px y desktop 1280/1440 px; prueba menú, galerías, filtros, FAQ, WhatsApp, mapas, enlaces y estados vacíos, teclado y `prefers-reduced-motion`. Usa navegador real y capturas si tienes herramienta; si no, indica honestamente qué no pudo verificarse. Incluye auditoría SEO/accesibilidad/performance con resultados reales.

**Fase 4 — GitHub.** El remoto objetivo es `https://github.com/Aaron-Daza-Risco/reposteria-risco-web.git`. Verifica `git status`, rama, commits existentes y remotos; si es nuevo, inicializa git, agrega `.gitignore`, README, docs y assets autorizados. No sobreescribas historial ni uses `git push --force`. Configura `origin` sólo si no existe, o verifica si apunta al destino esperado. Haz commits descriptivos, ejecuta pruebas, y **push a `main`** cuando la identidad del repo y permisos estén confirmados. Si GitHub solicita autorización interactiva, pide autorización sin revelar tokens ni fingir push exitoso. No subas `.env`, credenciales, fotografías privadas sin permiso, node_modules ni archivos gigantes innecesarios.

**Fase 5 — Deploy de PRUEBA.** Preferir Vercel PREVIEW con CLI o entorno equivalente, no despliegue `--prod` y no dominio definitivo. Si conectar GitHub a Vercel llevaría a publicar automáticamente `main` como Production, evita esa conexión por ahora y usa `vercel deploy` de preview con el proyecto local, o configura correctamente una rama de preview. El objetivo es una URL revisable, no una publicación definitiva. Si el proveedor exige autorización o configuración en mi cuenta, solicita sólo esa acción concreta. Abre la URL y valida respuesta HTTP, fotos, navegación y WhatsApp desde vista móvil cuando sea posible.

**Fase 6 — Entrega comprobable.** Reporta la URL exacta del preview, URL del repo, rama, hash del commit, instrucciones locales, capturas de móvil/escritorio, resultados de build y pruebas, contenido verificado y lista de datos pendientes. Si no logras publicar o faltan assets, explica con precisión el bloqueo y el último paso completado. No afirmes «terminado» o «desplegado» sin evidencia.

## Criterios para aceptar el trabajo

La web es aceptable sólo si: (1) se distingue visualmente de un boilerplate, (2) utiliza imágenes propias aprobadas, no ficticias, (3) muestra información verificable y transparente de inscripción, (4) se ve excelente y es utilizable en móvil, (5) los CTA y enlaces funcionan, (6) supera un build limpio y las verificaciones disponibles, (7) el código está en el repo exacto, y (8) hay URL de preview funcional o se documenta claramente el impedimento real.

**Autonomía:** trabaja de principio a fin sin detenerte por detalles estéticos menores; elige opciones profesionales. Pregunta únicamente por un acceso necesario, un consentimiento de publicación o datos críticos de contacto imposibles de verificar. No supongas acceso a una cuenta privada solo porque conozcas su URL. No pases a pagar servicios ni compres dominio. Empieza ahora con el inventario y aplica las skills del repositorio.
