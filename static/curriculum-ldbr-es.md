# Luis Bedoya

**Ingeniero de Software Senior · Backend & Cloud (TypeScript / Node.js · Go · AWS)**

Medellín, Colombia · Ciudad de Panamá, Panamá (disponible para trabajo remoto) · +57 300 629 2320 · +507 6397-5671 · luisbedoya13@gmail.com
[personal.amarrete.com](https://personal.amarrete.com/) - [github.com/ibedoya13](https://github.com/ibedoya13) - [linkedin.com/in/luis-david-bedoya-restrepo-baa998167](https://www.linkedin.com/in/luis-david-bedoya-restrepo-baa998167/)

---

## Perfil Profesional

Ingeniero de software con 7+ años diseñando, manteniendo y evolucionando aplicaciones críticas para el sector bancario y financiero. Especializado en arquitecturas TypeScript/Node.js sobre AWS: diseño de APIs y microservicios, desarrollo seguro (OWASP) y automatización de despliegues. Trabajo de extremo a extremo, desde las decisiones de arquitectura y la revisión de código hasta la operación en producción y la remediación de vulnerabilidades en entornos regulados.

---

## Experiencia Profesional

### Ingeniero de Software — Banistmo

_dic. 2022 — Actualidad_

- Responsable de la evolución de las arquitecturas web de tres aplicaciones de misión crítica (dos internas y una de cara al cliente): decisiones de diseño, estándares de código y revisión de pull requests del equipo.
- Diseño e integración de microservicios y APIs REST en Node.js y Python sobre AWS, con pipelines de CI/CD y optimización de rendimiento de APIs y consultas, operando bajo un proceso de liberación corporativo de 3–4 días.
- Implementación de pruebas unitarias y de integración sobre backend y frontend (Vitest, Jest, Mocha), integradas en el pipeline como puerta de calidad previa al despliegue.
- Remediación continua de hallazgos de seguridad —análisis estático de código, análisis dinámico y componentes de infraestructura— priorizados por criticidad: hasta 10 vulnerabilidades cerradas en un mismo día, sobre un backlog que recibe reportes semanales.
- Acompañamiento de los nuevos integrantes del equipo en su integración técnica y de procesos, y refinamiento de tareas con los compañeros durante la planificación de cada sprint.

**Stack:** AWS · TypeScript · Node.js · Python · Angular · React · Vitest · CI/CD

### Desarrollador Full-Stack — HyperNova Labs (consultoría para Banistmo)

_oct. 2019 — nov. 2022_

- Consultor asignado a proyectos estratégicos de servicios de información para Banistmo S.A., trabajando dentro de los equipos del cliente.
- Construcción y consumo de APIs de alta disponibilidad en Java y Node.js, integradas con interfaces dinámicas en Angular.
- Cobertura de pruebas unitarias y de integración en frontend y backend (Jasmine/Karma, Mocha, Jest), cubriendo servicios, componentes y flujos críticos.
- Rediseño de flujos operativos y descomposición de arquitecturas legacy hacia componentes más desacoplados y mantenibles.

**Stack:** Angular · Node.js · Java · REST APIs · Jasmine/Karma · Jest

### Desarrollador Full-Stack — Rootstack

_may. 2019 — oct. 2019_

- Desarrollo e implementación in situ de soluciones empresariales para clientes del sector privado, desde el levantamiento de requerimientos hasta la puesta en producción.

**Stack:** PHP · Laravel · Drupal · MySQL

### Desarrollador Front-End — HyperNova Labs (banca en línea de Banesco Panamá)

_jul. 2018 — may. 2019_

- Participación en la transformación digital de la banca en línea de Banesco (Panamá), S.A.
- Creación de componentes modulares, reutilizables y responsivos con TypeScript, Angular y Sass.

**Stack:** TypeScript · Angular · Sass · HTML5/CSS3

---

## Habilidades Técnicas

- **Lenguajes:** TypeScript, JavaScript, Python, Java, Go, PHP
- **Backend & APIs:** Node.js, Express, Hono, REST, microservicios, diseño de APIs, WebSockets
- **Frontend:** Angular, React, Astro, HTML5, Sass/CSS
- **Cloud & DevOps:** AWS, Cloudflare Workers, D1, KV, GCP, Docker, CI/CD, Git
- **Pruebas:** Vitest, Jest, Mocha, Jasmine/Karma, Japa — pruebas unitarias y de integración (frontend y backend)
- **Seguridad:** OWASP Top 10, OAuth 2.0, protección CSRF, análisis de dependencias, remediación de vulnerabilidades
- **Arquitectura:** soluciones escalables, integración de sistemas, refactorización de código legacy

---

## Proyectos Destacados

### [midway](https://midway.amarrete.com/) — juego de batalla naval multijugador en tiempo real

- Monorepo con backend en Go 1.22 y SPA en Vue 3 + TypeScript, comunicados por WebSocket; el servidor es autoritativo sobre las reglas (colocación de flota, turnos, disparos, hundimientos) para que el cliente no pueda alterar el estado.
- Hub WebSocket propio sobre `gorilla/websocket`: salas con código de 6 dígitos y clave secreta de 32 caracteres generada con `crypto/rand` y comparada en tiempo constante, límite de conexiones por IP y estado aislado por sala.
- Dominio del juego desacoplado del transporte (paquetes `game`, `room` y `ws`), con pruebas en Go de tablero, turnos, reanudación de partida y snapshots, más pruebas de integración de multi-sala y de los límites de conexión.
- Endurecimiento del transporte: validación de `Origin` en el upgrade (403 a orígenes no permitidos), límite de mensajes por socket y vistas de estado personalizadas que no revelan la flota del rival. SPA desplegada en Cloudflare y backend empaquetado en Docker.

**Stack:** Go · gorilla/websocket · Docker · Vue 3 · TypeScript · Vite · Vitest · Cloudflare

### [kickabouts](https://kickabouts.amarrete.com/) — registro de partidos y sorteo de equipos para eFootball

- Aplicación Hono 4 con SSR por JSX sobre Cloudflare Workers: registro de resultados 1v1/2v2/2v3/3v3 y sorteo de equipos para modalidades cooperativas, con Cloudflare D1 como base de datos y KV para las sesiones.
- Autenticación con Google OAuth 2.0 y sesiones propias en KV con TTL, más roles admin/player protegidos por middleware de autorización; alta de usuarios desde la aplicación o vía script contra la D1 remota.
- Sorteo de equipos aleatorio sin sesgo: Fisher-Yates sobre `crypto.getRandomValues` con rejection sampling para evitar el sesgo de módulo, y firma canónica de cada reparto para no repetir la distribución del sorteo anterior.
- Endurecimiento: guarda CSRF por `Origin` en peticiones mutantes que falla cerrado, secretos fuera de la configuración versionada y pruebas sobre el runtime real de Workers (`@cloudflare/vitest-pool-workers`) con D1 y KV locales.

**Stack:** Hono · Cloudflare Workers · D1 · KV · Google OAuth 2.0 · TypeScript · Vitest · Biome

### [amarrete](https://personal.amarrete.com/) — sitio personal y CV interactivo

- Aplicación Astro con renderizado en servidor (SSR) desplegada en Cloudflare Workers, con documentos servidos desde Cloudflare R2 a través de una API.
- Interfaz tipo editor de código construida sobre WebTUI, con un resaltador de sintaxis propio para renderizar el contenido del CV.
- Verificación automatizada de tipos, build y formato en el flujo de trabajo del proyecto.

**Stack:** Astro · TypeScript · Cloudflare Workers · R2 · WebTUI · CSS

---

## Educación

- **Ingeniería en Sistemas (Énfasis en Desarrollo de Software)** — Universidad Interamericana de Panamá, 2014 — 2017

---

## Idiomas

- **Español** — nativo (idioma de trabajo en todos los equipos anteriores).
- **Inglés** — competencia profesional: lectura y comprensión de documentación técnica y recursos especializados, uso diario como fuente de aprendizaje técnico. Sin certificación formal.
