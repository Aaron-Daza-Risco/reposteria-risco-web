# Referencia: fuentes y gestión fotográfica

## Facebook
Página indicada: https://www.facebook.com/profile.php?id=100063596920257

- Puede requerir sesión o bloquear navegación automática. No hacer scraping agresivo ni evadir controles de acceso.
- Usar capturas y archivos facilitados por el propietario si falla la consulta.
- Registrar URL concreta de cada publicación usada y si la fecha ya pasó.

## Google Photos no es Google Drive
- Abrir https://photos.google.com/ no equivale a recibir acceso a la biblioteca privada del propietario.
- Seleccionar fotos mediante exportación/álbum autorizado o Google Photos Picker API si el entorno y el permiso lo permiten. Preferir archivos originales autorizados aportados por el propietario.
- No solicitar permisos globales ni tokens personales, ni conectar una cuenta privada en el cliente web.
- Nunca incrustar en producción base URLs de Google Photos: son temporales y requieren autorización en determinados flujos. Evitar tratar Google Photos como CDN.
- Publicar copias comprimidas y autorizadas dentro del proyecto o almacenamiento web diseñado para servir imágenes.

## Manifiesto recomendado

| ID | Archivo origen | Uso | Quién lo proporcionó | Permiso publicación | Personas/menores | Calidad | Estado |
|---|---|---|---|---|---|---|---|
| FOTO-001 | ... | hero | propietario | por confirmar | revisar | ... | pendiente |

No añadir datos personales privados en inventarios que suban al repositorio público. Los documentos públicos deben guardar referencias mínimas y consentimiento como estado, no identificaciones completas.

## Selección fotográfica

Hero: 1 foto con sujeto claro, espacio negativo útil, entorno real. Cursos: foto específica de cada producto/taller. Experiencia: variedad de acción, detalle y resultado. Ubicación: fachada o aula verificable. No reutilizar la misma foto en todos los bloques.
