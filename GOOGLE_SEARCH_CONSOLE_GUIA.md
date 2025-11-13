# Guía de Configuración de Google Search Console

Esta guía te ayudará a registrar tu sitio en Google Search Console, enviarlo para indexación y monitorear su rendimiento en las búsquedas de Google.

## ¿Por qué es importante Google Search Console?

Google Search Console es **ESENCIAL** para que tu sitio aparezca en Google. Sin registrarte aquí, Google puede tardar semanas o meses en descubrir tu sitio. Esta herramienta te permite:

- ✅ Solicitar indexación manual de tu sitio
- ✅ Enviar tu sitemap.xml para rastreo rápido
- ✅ Monitorear qué búsquedas llevan a tu sitio
- ✅ Ver errores de indexación y cobertura
- ✅ Analizar el rendimiento SEO de tu sitio

---

## PASO 1: Crear Cuenta en Google Search Console

1. **Ve a Google Search Console**:
   - URL: https://search.google.com/search-console

2. **Inicia sesión con tu cuenta de Google**:
   - Usa el email: `bmeletricidade.ubatuba@gmail.com` (recomendado para mantener todo en una cuenta)
   - O usa tu cuenta personal de Google

3. **Haz clic en "Empezar ahora"** o "Start now"

---

## PASO 2: Agregar Propiedad (Tu Sitio Web)

1. **Selecciona tipo de propiedad**:
   - Google te mostrará dos opciones:
     - **Dominio** (requiere verificación DNS)
     - **Prefijo de URL** (más fácil, recomendado)

2. **Selecciona "Prefijo de URL"**:
   - Ingresa: `https://www.bmelectricidade.com.br`
   - Haz clic en "Continuar"

---

## PASO 3: Verificar Propiedad del Sitio

Google te ofrecerá varios métodos de verificación. **Recomendamos usar el método de archivo HTML** (el más fácil con Vercel):

### Método 1: Archivo HTML (Recomendado para Vercel)

1. **Google te proporcionará un archivo HTML**:
   - Ejemplo: `google1234567890abcdef.html`
   - Descarga el archivo

2. **Sube el archivo a tu directorio `/html/`**:
   ```bash
   # Copia el archivo descargado a tu proyecto
   cp ~/Downloads/google1234567890abcdef.html /Users/tomas/Documents/repositorios/Github/bm-electicidad/html/
   ```

3. **Actualiza `vercel.json` para servir el archivo** (YA ESTÁ CONFIGURADO):
   - La configuración actual de `vercel.json` ya permite que Vercel sirva archivos desde `/html/`
   - El archivo será accesible en: `https://www.bmelectricidade.com.br/google1234567890abcdef.html`

4. **Haz commit y despliega**:
   ```bash
   cd /Users/tomas/Documents/repositorios/Github/bm-electicidad
   git add html/google*.html
   git commit -m "Agregar archivo de verificación de Google Search Console"
   git push
   ```

5. **Espera que Vercel despliegue** (1-2 minutos)

6. **Verifica que el archivo es accesible**:
   - Abre en tu navegador: `https://www.bmelectricidade.com.br/google1234567890abcdef.html`
   - Deberías ver el contenido del archivo HTML

7. **Vuelve a Google Search Console y haz clic en "Verificar"**

### Método 2: Etiqueta HTML (Alternativo)

Si prefieres no subir un archivo:

1. **Google te dará una etiqueta `<meta>`**:
   ```html
   <meta name="google-site-verification" content="abc123def456..." />
   ```

2. **Agrega la etiqueta al `<head>` de `html/index.html`**:
   - Colócala después de la línea 6 (después de `<meta name="viewport">`)

3. **Haz commit y despliega**:
   ```bash
   git add html/index.html
   git commit -m "Agregar verificación de Google Search Console"
   git push
   ```

4. **Vuelve a Google Search Console y haz clic en "Verificar"**

---

## PASO 4: Enviar Sitemap.xml

Una vez verificada tu propiedad:

1. **En el menú lateral izquierdo, ve a "Sitemaps"** (o "Mapas del sitio")

2. **Ingresa la URL de tu sitemap**:
   ```
   https://www.bmelectricidade.com.br/sitemap.xml
   ```

3. **Haz clic en "Enviar"** o "Submit"

4. **Verifica el estado**:
   - El sitemap debería aparecer como "Éxito" o "Success" en unos minutos
   - Si aparece "No se pudo obtener", espera 10-15 minutos y vuelve a verificar

---

## PASO 5: Solicitar Indexación Manual de la Página Principal

Para acelerar la indexación:

1. **En el menú superior, busca la herramienta "Inspección de URLs"** (Search bar con icono de lupa)

2. **Ingresa tu URL principal**:
   ```
   https://www.bmelectricidade.com.br/
   ```

3. **Haz clic en Enter**

4. **Google analizará la URL**:
   - Si dice "La URL no está en Google", es normal (sitio nuevo)
   - Haz clic en **"Solicitar indexación"** o **"Request indexing"**

5. **Espera 1-2 minutos** mientras Google rastrea tu página

6. **Confirma**:
   - Deberías ver "Solicitud de indexación enviada"

---

## PASO 6: Verificar que Robots.txt y Sitemap.xml Son Accesibles

Antes de que Google pueda indexar tu sitio, verifica que estos archivos son accesibles:

1. **Abre tu navegador y verifica estos URLs**:
   - `https://www.bmelectricidade.com.br/robots.txt`
     - Deberías ver:
       ```
       User-agent: *
       Allow: /

       Sitemap: https://www.bmelectricidade.com.br/sitemap.xml
       ```

   - `https://www.bmelectricidade.com.br/sitemap.xml`
     - Deberías ver un XML con tu URL principal y fecha `2025-11-13`

2. **Si NO son accesibles**:
   - Verifica que desplegaste los cambios en Vercel:
     ```bash
     cd /Users/tomas/Documents/repositorios/Github/bm-electicidad
     git status
     git push
     ```
   - Espera 1-2 minutos para que Vercel despliegue

---

## PASO 7: Configurar Google My Business (Crítico para SEO Local)

Para aparecer en búsquedas locales de Google Maps:

1. **Ve a Google Business Profile**:
   - URL: https://business.google.com

2. **Crea un perfil de negocio**:
   - Nombre: **BM Electricidade**
   - Categoría: **Electricista** o **Electrician**
   - Ubicación: **Ubatuba, São Paulo, Brasil**
   - ⚠️ **IMPORTANTE**: Necesitas una dirección física completa para verificar el negocio

3. **Completa toda la información**:
   - Teléfono: `+55 12 98834-0280`
   - Sitio web: `https://www.bmelectricidade.com.br`
   - Horarios: Lunes-Viernes 8:00-18:00, Sábado 8:00-12:00
   - Descripción: Copia la descripción de tu sitio web
   - Servicios: Lista los 8 servicios principales

4. **Agrega fotos**:
   - Usa las fotos de `html/images/` (FOTO-PORTADA-*.webp)
   - Mínimo 3 fotos recomendadas

5. **Solicita verificación**:
   - Google enviará una postal con código a tu dirección
   - O podrás verificar por teléfono/video (según disponibilidad)

---

## PASO 8: Monitorear Rendimiento en Google Search Console

Después de 1-2 semanas, comenzarás a ver datos:

### ¿Qué monitorear?

1. **Rendimiento** (Performance):
   - **Impresiones**: Cuántas veces tu sitio apareció en búsquedas
   - **Clics**: Cuántas veces alguien hizo clic en tu resultado
   - **CTR** (Click-Through Rate): % de clics sobre impresiones
   - **Posición promedio**: En qué posición apareces en búsquedas

2. **Consultas** (Queries):
   - Qué términos de búsqueda llevan a tu sitio
   - **Monitorea estos keywords**:
     - "eletricista ubatuba"
     - "eletricista"
     - "eletricista emergência"
     - "eletricista 24h ubatuba"
     - "instalação elétrica ubatuba"

3. **Páginas** (Pages):
   - Tu única página debería ser: `https://www.bmelectricidade.com.br/`

4. **Cobertura** (Coverage):
   - **Válidas**: Páginas indexadas correctamente (debería ser 1)
   - **Excluidas**: Páginas no indexadas (debería ser 0)
   - **Errores**: Problemas de indexación (debería ser 0)

5. **Mejoras** (Enhancements):
   - **Core Web Vitals**: Métricas de rendimiento (debería estar en verde)
   - **Usabilidad móvil**: Problemas en móvil (debería ser 0)

---

## Timeline Esperado

### Semana 1-2:
- ✅ Sitio verificado en Google Search Console
- ✅ Sitemap enviado
- ✅ Indexación solicitada
- ⏳ Google comienza a rastrear tu sitio
- ⏳ Primeras impresiones (puede aparecer en posiciones 50-100)

### Semana 3-4:
- ✅ Sitio aparece en búsquedas de "bmelectricidade" y "bm electricidade"
- ⏳ Comienza a aparecer en búsquedas de "eletricista ubatuba" (posiciones 20-50)
- ⏳ Primeros clics orgánicos
- 📊 Datos de rendimiento disponibles en Search Console

### Mes 2-3:
- ⏳ Mejora de posiciones para keywords principales (objetivo: Top 10)
- 📈 Aumento de impresiones (100-500/mes)
- 📈 Aumento de clics (10-50/mes)
- ⏳ Google My Business verificado y activo

### Mes 4-6:
- 🎯 Objetivo: Top 5 para "eletricista ubatuba"
- 🎯 Objetivo: Top 10 para "eletricista emergência ubatuba"
- 📈 500-2000 impresiones/mes
- 📈 50-200 clics/mes
- 💰 Primeras conversiones desde búsqueda orgánica

---

## Verificar Indexación Actual

Para verificar si tu sitio ya está en Google:

1. **Búsqueda site:**:
   - Ve a Google.com
   - Busca: `site:bmelectricidade.com.br`
   - Si **NO aparece resultado**, tu sitio **NO está indexado** (es lo esperado)
   - Si **aparece**, tu sitio **YA está indexado** (¡excelente!)

2. **Búsqueda por nombre**:
   - Busca: `BM Electricidade Ubatuba`
   - Si aparece, es una buena señal
   - Si NO aparece, es normal (sitio nuevo)

---

## Problemas Comunes y Soluciones

### "No se pudo obtener el sitemap"

**Causa**: Google no puede acceder a `sitemap.xml`

**Solución**:
1. Verifica que el archivo es accesible: `https://www.bmelectricidade.com.br/sitemap.xml`
2. Verifica que `vercel.json` tiene la ruta configurada (ya está)
3. Espera 10-15 minutos y vuelve a intentar

### "La URL no está indexada"

**Causa**: Es normal en sitios nuevos

**Solución**:
1. Solicita indexación manual (Paso 5)
2. Espera 1-2 semanas
3. Verifica que no haya errores en "Cobertura"

### "robots.txt bloquea la página"

**Causa**: Configuración incorrecta en robots.txt

**Solución**:
- Ya corregido en esta actualización
- `robots.txt` ahora permite todo con `Allow: /`

### "Sitemap tiene formato incorrecto"

**Causa**: Sitemap mal configurado

**Solución**:
- Ya corregido en esta actualización
- Sitemap actualizado con formato correcto y solo la URL principal

---

## Comandos Útiles

### Verificar archivos localmente:
```bash
# Ver sitemap.xml
cat /Users/tomas/Documents/repositorios/Github/bm-electicidad/html/sitemap.xml

# Ver robots.txt
cat /Users/tomas/Documents/repositorios/Github/bm-electicidad/html/robots.txt

# Ver vercel.json
cat /Users/tomas/Documents/repositorios/Github/bm-electicidad/vercel.json
```

### Desplegar cambios:
```bash
cd /Users/tomas/Documents/repositorios/Github/bm-electicidad
git add .
git commit -m "Optimizaciones de SEO"
git push
```

### Verificar estado del despliegue en Vercel:
1. Ve a: https://vercel.com/dashboard
2. Selecciona tu proyecto: `bm-electicidad`
3. Verifica que el último despliegue dice "Ready"

---

## Recursos Adicionales

- **Google Search Console**: https://search.google.com/search-console
- **Google Business Profile**: https://business.google.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Documentación de Search Console**: https://support.google.com/webmasters

---

## Resumen de Acciones Completadas

✅ **Sitemap.xml actualizado** (fecha: 2025-11-13, solo URL principal)
✅ **Robots.txt simplificado** (sin crawl-delay, permite todo)
✅ **Vercel.json optimizado** (rutas para robots.txt y sitemap.xml)
✅ **Index.html optimizado** (title acortado, scripts con defer, email en Schema)
✅ **.htaccess eliminado** (no funciona en Vercel)

---

## Próximas Acciones (Tu Responsabilidad)

1. ⏳ **Verificar archivos en producción** (robots.txt, sitemap.xml)
2. ⏳ **Registrar sitio en Google Search Console**
3. ⏳ **Enviar sitemap.xml**
4. ⏳ **Solicitar indexación manual**
5. ⏳ **Crear perfil de Google My Business**
6. ⏳ **Monitorear rendimiento semanalmente**

---

**¿Necesitas ayuda con algún paso?** Consulta esta guía o pide asistencia.

¡Buena suerte con tu sitio! 🚀⚡