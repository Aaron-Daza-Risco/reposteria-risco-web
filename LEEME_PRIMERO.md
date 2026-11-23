# Kit Codex — Escuela de Repostería Risco

Este ZIP contiene un PROMPT MAESTRO y skills reales de Codex para crear, verificar, subir a GitHub y desplegar un frontend estático en modo preview.

## Cómo usarlo

1. Extraer este ZIP en la carpeta LOCAL que usarás para el proyecto `reposteria-risco-web`. Mantener las carpetas `.agents` y los nombres exactamente como están. No extraer dentro de un proyecto distinto.
2. Abrir esa carpeta en Codex. La estructura incluye `AGENTS.md` y tres skills con `SKILL.md`.
3. Copiar el contenido de `PROMPT_MAESTRO_CODEX.md` y enviarlo como primera instrucción a Codex. Si quieres, menciona explícitamente `$reposteria-direccion-de-arte`, `$reposteria-confianza-inscripciones`, `$reposteria-auditoria-preview`.
4. Facilitar a Codex la selección AUTORIZADA de fotos y datos reales de contacto/ubicación. Si Facebook no puede leerse automáticamente, aportar capturas, logo, flyers o información validada.
5. Permitir acceso de GitHub y Vercel sólo a través de los mecanismos de autenticación previstos; nunca pegar tokens en código ni chats públicos.
6. Verificar el enlace PREVIEW entregado antes de decidir dominio y lanzamiento definitivo.

## Estructura

```
reposteria-risco-web/
├── PROMPT_MAESTRO_CODEX.md
├── AGENTS.md
├── .agents/
│   └── skills/
│       ├── reposteria-direccion-de-arte/
│       │   ├── SKILL.md
│       │   └── references/LENGUAJE_VISUAL.md
│       ├── reposteria-confianza-inscripciones/
│       │   ├── SKILL.md
│       │   └── references/FUENTES_Y_FOTOS.md
│       └── reposteria-auditoria-preview/
│           ├── SKILL.md
│           └── references/MATRIZ_PRUEBAS.md
└── LEEME_PRIMERO.md
```

## Advertencias relevantes

- La página de Facebook puede requerir iniciar sesión. El prompt prohíbe inventar su contenido cuando no está disponible.
- `photos.google.com` por sí solo no da acceso automático a fotos privadas: facilitar un álbum autorizado/exportación o fotos locales.
- GitHub es un repositorio vacío verificado al preparar el kit; Codex debe revalidarlo antes de trabajar.
- Vercel preview es distinto de un despliegue `--prod` y del dominio definitivo. Un push a `main` conectado automáticamente a Vercel puede generar production; el prompt evita esa conexión hasta que el propietario lo autorice.
- Este ZIP contiene INSTRUCCIONES para que Codex construya el sitio; no contiene aún el frontend final ni significa que se haya publicado.
