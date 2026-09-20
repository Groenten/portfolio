# Elena G. Verduras · Portfolio

Web personal de composición, audiovisual y proyectos interactivos.
Hecha con [Astro](https://astro.build), en español (idioma principal) e inglés (`/en`).

## Arrancar en local

```bash
npm install
npm run dev
```

Se abre en http://localhost:4321

## Añadir un proyecto

1. Crea un archivo `.md` en `src/content/projects/` (copia uno existente).
2. Rellena título y textos en `es` y `en`, año, categoría y herramientas.
3. Añade el vídeo en el bloque `video:`:
   - YouTube: `type: youtube` y el `id` del vídeo.
   - Archivo propio: `type: file`, con `src` (en `public/videos/`) y `poster` (en `public/posters/`).
4. Si tiene demo, añade `demo:` con el enlace.
5. Con `featured: true` aparece destacado.

## Estructura

- `src/content/projects/`: un archivo por proyecto
- `src/content.config.ts`: los campos que tiene cada proyecto
- `src/components/ProjectList.astro`: tarjetas y ventana ampliada
- `src/i18n/ui.ts`: textos del menú en cada idioma
- `src/pages/`: páginas (español) y `src/pages/en/` (inglés)
- `public/videos/` y `public/posters/`: vídeos comprimidos e imágenes
