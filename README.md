# Escuela de Repostería Risco

Frontend estático para consultar por talleres presenciales en Chimbote. El catálogo muestra temarios de referencia y abre WhatsApp con el tema de cada consulta.

## Desarrollo local

Usa Node.js 24.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

El build genera `dist/`. Astro y TypeScript generan las rutas de cada taller. Tailwind CSS y las fuentes locales sirven los estilos. El menú y la galería son los únicos componentes que usan JavaScript en el navegador.

## Edición de contenido

- `src/data/site.ts` reúne datos de contacto, instrucciones de inscripción y FAQ.
- `src/data/workshops.ts` contiene el catálogo y sus referencias. Para anunciar una edición, verifica `verifiedStatus` y `nextDate`, actualiza la evidencia y vuelve a construir el sitio.
- `src/data/gallery.ts` asigna fotos a portada, fichas y galería. Usa solo copias autorizadas y registra su procedencia en el [inventario](docs/INVENTARIO_FOTOS.md).

## Preview

El HTML y las respuestas configuradas solicitan que los buscadores excluyan esta versión de su índice. Vercel mantiene deshabilitados los despliegues automáticos desde Git. Para un proyecto de Vercel que ya admita Preview, se puede usar:

```sh
npx vercel deploy --environment preview --project reposteria-risco-web
```

Como alternativa, una cuenta de Netlify con un proyecto de revisión permite subir el build manual como borrador:

```sh
npm run build
npx netlify-cli deploy --dir dist --no-build --site <id-del-proyecto>
```

Consulta el [informe de comprobaciones](docs/QA_PREVIEW.md) y el [inventario de fuentes](docs/INVENTARIO_FUENTES.md).
