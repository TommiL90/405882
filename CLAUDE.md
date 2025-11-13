# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) al trabajar con código en este repositorio.

## Resumen del Proyecto

BM Electricidade es una landing page de alta conversión para una empresa de servicios eléctricos en Ubatuba, São Paulo, Brasil. El sitio está desplegado en Vercel y sirve como plataforma de marketing de una sola página optimizada para la generación de leads locales a través de llamadas telefónicas y mensajería por WhatsApp.

**Objetivo Principal del Negocio**: Convertir visitantes locales en solicitudes de servicio a través de múltiples puntos de contacto (WhatsApp, teléfono, formularios).

## Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo local con Vercel
npm run dev

# Desplegar a producción
npm run deploy

# Build (no necesita proceso de build - sitio estático)
npm run build
```

## Arquitectura

### Estructura del Proyecto
- **`html/`** - Directorio principal del sitio web con todos los activos
  - `index.html` - Aplicación de una sola página con datos estructurados para SEO (819 líneas)
  - `css/` - Hojas de estilo (style.css, animate.min.css, swiper-bundle.min.css)
  - `js/` - Archivos JavaScript (script.js, jQuery, Swiper.js, WOW.js)
  - `images/` - Recursos de imagen incluyendo favicons y fotos de servicios
  - `fonts/` - Archivos de fuentes personalizadas
- **`documentation/`** - Archivos de documentación legacy (no usados en producción)
- **`vercel.json`** - Configuración de despliegue de Vercel que enruta todas las peticiones a `/html/`

### Tecnologías Clave
- **Sin herramientas de build** - HTML/CSS/JavaScript puro (sitio estático)
- **jQuery 3.7.0** - Manipulación del DOM y manejo de eventos
- **Swiper.js** - Carrusel del banner con animaciones personalizadas
- **WOW.js** - Animaciones disparadas por scroll
- **Vercel** - Plataforma de hosting estático con despliegues automáticos

### Despliegue
El sitio está configurado para servir todo el contenido desde el directorio `html/` mediante la configuración de enrutamiento de Vercel. La ruta raíz `/` redirige a `/html/index.html`, y todas las demás rutas se proxy a través de `/html/`. Un push a la rama principal activa el despliegue automático.

## Optimización de Conversión y Elementos UX Críticos

### Puntos Principales de Conversión

#### 1. Botón Flotante de WhatsApp (CTA Más Importante)
- **Ubicación**: Fijo en la esquina inferior derecha, implementado en `<script>` inline al final de `html/index.html:727-816`
- **Comportamiento**:
  - Usa `IntersectionObserver` para activarse solo cuando es visible en el viewport
  - Muestra burbuja contextual después de 3 segundos de visibilidad
  - Rota a través de 4 mensajes dirigidos cada 8 segundos:
    - Oferta de ayuda genérica
    - Servicios de emergencia 24h
    - Presupuestos gratuitos
    - Áreas de servicio locales
- **Para modificar mensajes**: Edita el array `const messages` en `html/index.html:741-746`
- **Optimización de rendimiento**: La burbuja solo aparece cuando el botón está en el viewport para reducir actualizaciones del DOM

#### 2. CTAs de Contacto Directo
- **Header "Contate-nos aqui"**: Botón rojo (`#C32A45`) en la navegación - CTA de alta visibilidad
- **Enlaces tel**: `tel:+5512988340280` para llamadas con un clic en móvil
- **Enlaces WhatsApp**: Mensaje pre-formateado "Olá, preciso de um orçamento" para conversación inmediata
- **Tarjetas de servicio**: Los botones "Solicitar serviço" están actualmente comentados (`html/index.html:426-428`, etc.) - habilitarlos crearía rutas de conversión específicas por servicio

#### 3. Elementos de Confianza
- La meta descripción menciona "+300 clientes satisfeitos" pero no se muestra prominentemente en la página
- **Oportunidad de mejora**: Agregar testimonios o sección "Nossos Números" para mostrar prueba social
- El marcado Schema.org proporciona credibilidad a los motores de búsqueda

### Patrones UX para Servicios Locales

- **Diseño de una sola página**: Sin navegación compleja - fuerza el enfoque en contenido y CTAs
- **Enfoque mobile-first**: Crítico para negocios de servicios locales donde usuarios buscan "en movimiento"
- **Múltiples métodos de contacto**: Teléfono, WhatsApp, email, Instagram - acomoda preferencias del usuario
- **Área servida claramente definida**: Ubatuba, Caraguatatuba, São Sebastião en datos estructurados

## Implementación de SEO Local (Crítico para el Negocio)

### Datos Estructurados (Schema.org)
Ubicados en la sección `<head>` de `html/index.html:52-196`:

1. **Schema LocalBusiness** (`html/index.html:52-155`)
   - Define nombre del negocio, info de contacto, áreas de servicio
   - Coordenadas geográficas: `-23.4339, -45.0711` (centro de Ubatuba)
   - `areaServed`: 3 ciudades explícitamente definidas
   - `serviceArea`: Radio de 50km desde el punto central
   - `openingHours`: Lunes-Viernes 8am-6pm, Sábado 8am-12pm

2. **Schemas de Service** (líneas 157-183)
   - Schemas separados para "Instalação Elétrica Residencial" y "Emergência Elétrica 24h"
   - Asocia servicios con la entidad LocalBusiness

3. **Schema SocialMediaProfile** (líneas 185-196)
   - Enlaza perfil de Instagram para señales sociales

### Mejores Prácticas de SEO Implementadas
- **URL Canónica**: `https://www.bmelectricidade.com.br/`
- **Palabras clave**: "eletricista em Ubatuba", "eletricista 24h", "instalação elétrica" usadas extensivamente
- **Etiquetas alt**: Todas las imágenes tienen texto alt descriptivo
- **Open Graph + Twitter Cards**: Para compartir en redes sociales

### Oportunidades de Mejora de SEO
- **Embed de Google Maps**: Agregar mapa interactivo al footer para mejores señales locales
- **Dirección física**: Actualmente en Schema pero no mostrada visiblemente - mostrarla genera confianza
- **Consistencia NAP**: Asegurar que Nombre, Dirección, Teléfono coincidan exactamente en todos los listados online

## Funcionalidad JavaScript y Patrones Únicos

### Animación del Carrusel del Banner (`html/js/script.js:101-198`)

**Detalle de Implementación Crítico**: Las animaciones móvil vs escritorio difieren

- **Comportamiento en escritorio** (`window.innerWidth >= 768`):
  1. Oculta todo el texto al cambiar de slide
  2. Muestra subtítulo después de 1000ms
  3. Muestra título después de 1200ms
  4. Anima elementos `<strong>` independientemente después del título

- **Comportamiento en móvil** (`window.innerWidth < 768`):
  1. Trata el título completo como una sola unidad (sin animación independiente de `<strong>`)
  2. Muestra subtítulo después de 800ms
  3. Muestra título completo después de 1000ms
  4. **Razón**: Previene animaciones entrecortadas y asegura legibilidad del texto en pantallas pequeñas

**Enfoque técnico**:
```javascript
const isMobile = window.innerWidth < 768;
```
Este booleano controla la complejidad de la animación en todo el manejador del evento `slideChange`.

### Widget Flotante de WhatsApp (`html/index.html:727-816`)

**Por qué está inline y no en script.js**: Necesita ser autocontenido para fácil mantenimiento y no depende de jQuery u otros scripts.

**Detalles clave de implementación**:
- `IntersectionObserver` con `threshold: 0.1` se activa cuando el 10% del botón es visible
- Animación de cargador (3 puntos) mostrada por 1 segundo antes del primer mensaje
- Rotación de mensajes usa patrón `setTimeout` + `setInterval`
- Click fuera de la burbuja la oculta (`document.addEventListener('click')`)

**Variables para personalizar**:
- Array `messages[]`: Contenido de mensajes rotativos
- `3000`: Retardo inicial antes de mostrar burbuja (ms)
- `8000`: Intervalo entre rotaciones de mensajes (ms)

### Navegación Móvil (`html/js/script.js:5-14`)

Simple jQuery slideToggle para menú hamburguesa:
- Click en `.hamburger` alterna la clase `.is-active`
- `.header-mobile-wrap` se desliza arriba/abajo con animación de 500ms

## Sistema de Estilos y Diseño

### Paleta de Colores
```css
#C9E465  /* Verde Primario - color de marca, botones, acentos */
#1D2A3B  /* Azul Oscuro - header, footer, secciones oscuras */
#C32A45  /* Rojo - botones CTA primarios ("Contate-nos") */
#a81f36  /* Rojo Hover - rojo más oscuro para hovers de botones */
#6D6A6A  /* Gris Texto - contenido de texto secundario */
#F6F6F6  /* Gris Claro - fondos, campos de entrada */
```

### Breakpoints Responsivos
- **1200px**: Ajustes de padding en logo/nav del header
- **992px**: Cambio a layouts de una sola columna (secciones about, why)
- **768px**: Se activa menú móvil, header de escritorio oculto
- **575px**: Tarjetas de servicio se vuelven de una sola columna
- **480px**: Ajustes de formulario modal

### Elementos de Diseño Únicos

1. **Logo del Header Diagonal** (`html/css/style.css:182`)
   ```css
   clip-path: polygon(0px 0px, 100% 0%, 82.68% 101.20%, 0px 100%);
   ```
   Crea corte angular distintivo en el fondo del logo

2. **Subrayados de Títulos** (`.def-title::before`)
   Línea verde se extiende a la izquierda de los títulos de sección - elemento de marca distintivo

3. **Estilos de Botones**
   - Por defecto: Verde (`#C9E465`)
   - CTA (rojo): Clase `.btn-red` con `border-radius: 0.75rem`

### Arquitectura CSS
- **Prefijo de sección**: `.s-banner`, `.s-services`, `.s-about`, etc.
- **Basado en componentes**: Cada sección es autocontenida
- **Clases de utilidad**: `.def-title`, `.def-btn`, `.center-title`, `.color-white`, `.color-green`
- **Media queries mobile-first**: Los estilos escalan de móvil a escritorio

## Guía de Actualización de Contenido

### Actualizar Información de Contacto (3 ubicaciones)

Al cambiar teléfono/email/dirección, actualizar en:
1. **Sección del header** (`.header-top`): `html/index.html:213-252`
2. **Sección del footer** (`.site-footer`): `html/index.html:649-695`
3. **Schema.org JSON-LD** (`<head>`): `html/index.html:63,139-141`

**Crítico**: La info de contacto debe coincidir exactamente en las tres ubicaciones para consistencia de SEO.

### Agregar/Editar Servicios

Los servicios están en divs `.services-item`: `html/index.html:416-550`

Estructura:
```html
<div class="services-item wow fadeIn" data-wow-delay="0.1s">
  <div class="services-thumb">
    <img src="images/service-image.webp" alt="Nombre del servicio">
  </div>
  <div class="services-body">
    <h3 class="services-title">Título del Servicio</h3>
    <div class="services-desc">Texto de descripción</div>
    <!-- Botón CTA opcional (actualmente comentado) -->
  </div>
</div>
```

**Nota**: Los servicios están en dos filas (`.services-row`), 4 tarjetas en la primera fila, 4 en la segunda.

### Modificar Slides del Banner

Cada slide: `html/index.html:314-396`

```html
<div class="swiper-slide" style="background-image: url(images/FOTO-PORTADA-1.webp)">
  <div class="container">
    <div class="banner-content">
      <div class="banner-subtitle">Soluções Elétricas - Ubatuba</div>
      <h1 class="banner-title">Encabezado con <strong>énfasis</strong></h1>
    </div>
  </div>
</div>
```

**Importante**:
- Usar `<h1>` solo en el primer slide, `<h2>` en los siguientes para SEO
- Las imágenes de fondo son estilos inline
- Las etiquetas `<strong>` activan animación especial en escritorio

### Actualizar Mensajes de WhatsApp

Edita el array en `html/index.html:741-746`:
```javascript
const messages = [
  "Olá! Precisa de um eletricista? Estou aqui para ajudar! ⚡",
  "Emergência elétrica? Atendimento 24h disponível! 🔧",
  "Orçamento gratuito para instalações elétricas! 💡",
  "Manutenção e reparos elétricos em Ubatuba! 🏠"
];
```

## Consideraciones Técnicas

### Rendimiento
- **Sin paso de build**: Los cambios se reflejan inmediatamente
- **Formato de imagen**: WebP usado para navegadores modernos, con fallbacks
- **Preload**: Imagen LCP precargada en `<head>`: `<link rel="preload" as="image" href="images/FOTO-PORTADA-1.webp">`
- **Animaciones lazy**: Animaciones WOW.js solo se activan al hacer scroll hacia el viewport

### Compatibilidad de Navegadores
- **Características ES6**: Se usan `const`, arrow functions, template literals
- **IntersectionObserver**: Usado para botón de WhatsApp (navegadores modernos)
- **Flexbox & Grid**: Usados en todo el sitio - IE11 puede tener problemas

### Notas de Accesibilidad
- **Contraste de color**: Los colores del texto cumplen con las pautas WCAG
- **Etiquetas alt**: Presentes en todas las imágenes
- **HTML semántico**: Jerarquía de encabezados apropiada, elementos `<nav>`, `<main>`, `<footer>`
- **Estados de foco**: Indicadores de foco del navegador presentes por defecto

## Ideas para Mejoras Futuras

Basadas en mejores prácticas de optimización de conversión:

1. **Agregar sección de testimonios** con fotos y citas de clientes
2. **Habilitar CTAs específicos por servicio** (actualmente comentados)
3. **Agregar galería de fotos "Antes/Después"** de proyectos completados
4. **Implementar embed de Google Maps** en el footer
5. **Agregar seguimiento de click-to-call** para analytics
6. **Crear banner de emergencia** para servicios fuera de horario
7. **Agregar badges de confianza** (certificaciones, años en el negocio, seguro)
8. **Implementar A/B testing** en colores/texto de botones CTA
