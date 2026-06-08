# Miel Pura · Web estática

Sitio institucional de **Miel Pura Multifloral de San Pedro, Buenos Aires**.

## Estructura

```
site/
├── index.html
├── styles.css
├── main.js
└── assets/
    ├── img/   (10 imágenes .jpeg)
    └── video/ (4 videos .mp4)
```

## Vista previa local

Simplemente abrí `site/index.html` en el navegador, o servila con cualquier servidor estático:

```bash
# con Python
cd site && python -m http.server 8080

# con Node
npx serve site
```

## Deploy en Cloudflare Pages

Opción 1 — **Conectar repo (Git)**
1. Subí la carpeta `site/` (o su contenido) a un repo de GitHub/GitLab.
2. Entrá a <https://dash.cloudflare.com/> → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Seleccioná el repo.
4. **Build settings:**
   - Framework preset: *None*
   - Build command: *(vacío)*
   - Build output directory: `/` (o `.` según la raíz del repo)
5. **Save and Deploy**.

Opción 2 — **Drag & drop directo (sin Git)**
1. Comprimí la carpeta `site/` en un `.zip`.
2. Entrá a <https://dash.cloudflare.com/> → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
3. Subí el `.zip` y listo. Cada upload genera una URL pública.

## Dominio personalizado

En el dashboard de Pages → *Custom domains* → seguí los pasos para apuntar `mielpura.com.ar` (o el que tengas) vía Cloudflare DNS.

## Notas

- Videos optimizados para reproducir en mobile (`playsinline`, `preload="metadata"`).
- Botón flotante de WhatsApp apunta a `+54 11 3473-6741` — cambialo en `index.html` si actualizás el número.
- El mapa embebido apunta a "San Pedro, Buenos Aires" — ajustalo si querés坐标 exactos.
