# Luis Bedoya

**Senior Software Engineer · Backend & Cloud (TypeScript / Node.js · Go · AWS)**

Medellín, Colombia · Panama City, Panama (open to remote work) · +57 300 629 2320 · +507 6397-5671 · luisbedoya13@gmail.com
[personal.amarrete.com](https://personal.amarrete.com/) - [github.com/ibedoya13](https://github.com/ibedoya13) - [linkedin.com/in/luis-david-bedoya-restrepo-baa998167](https://www.linkedin.com/in/luis-david-bedoya-restrepo-baa998167/)

---

## Professional Profile

Software engineer with 7+ years designing, maintaining, and evolving mission-critical applications for the banking and financial sector. Specialized in TypeScript/Node.js architectures on AWS: API and microservices design, secure development (OWASP), and deployment automation. I work end to end, from architecture decisions and code review to production operations and vulnerability remediation in regulated environments.

---

## Professional Experience

### Software Engineer — Banistmo

_Dec 2022 — Present_

- Responsible for evolving the web architectures of three mission-critical applications (two internal and one customer-facing): design decisions, code standards, and team pull request reviews.
- Design and integration of microservices and REST APIs in Node.js and Python on AWS, with CI/CD pipelines and performance tuning of APIs and queries, operating under a 3–4-day corporate release process.
- Implementation of unit and integration tests on backend and frontend (Vitest, Jest, Mocha), integrated into the pipeline as a quality gate before deployment.
- Continuous remediation of security findings —static code analysis, dynamic analysis, and infrastructure components— prioritized by criticality: up to 10 vulnerabilities closed in a single day, on a backlog that receives weekly reports.
- Onboarding of new team members into the technical and process side of the team, and task refinement with teammates during every sprint planning.

**Stack:** AWS · TypeScript · Node.js · Python · Angular · React · Vitest · CI/CD

### Full-Stack Developer — HyperNova Labs (consulting for Banistmo)

_Oct 2019 — Nov 2022_

- Consultant assigned to strategic information-services projects for Banistmo S.A., working within the client's teams.
- Building and consuming high-availability APIs in Java and Node.js, integrated with dynamic Angular interfaces.
- Unit and integration test coverage on frontend and backend (Jasmine/Karma, Mocha, Jest), covering services, components, and critical flows.
- Redesign of operational flows and decomposition of legacy architectures into more decoupled, maintainable components.

**Stack:** Angular · Node.js · Java · REST APIs · Jasmine/Karma · Jest

### Full-Stack Developer — Rootstack

_May 2019 — Oct 2019_

- On-site development and implementation of enterprise solutions for private-sector clients, from requirements gathering to production deployment.

**Stack:** PHP · Laravel · Drupal · MySQL

### Front-End Developer — HyperNova Labs (Banesco Panama online banking)

_Jul 2018 — May 2019_

- Participation in the digital transformation of Banesco (Panama), S.A.'s online banking.
- Creation of modular, reusable, and responsive components with TypeScript, Angular, and Sass.

**Stack:** TypeScript · Angular · Sass · HTML5/CSS3

---

## Technical Skills

- **Languages:** TypeScript, JavaScript, Python, Java, Go, PHP
- **Backend & APIs:** Node.js, Express, Hono, REST, microservices, API design, WebSockets
- **Frontend:** Angular, React, Astro, HTML5, Sass/CSS
- **Cloud & DevOps:** AWS, Cloudflare Workers, D1, KV, GCP, Docker, CI/CD, Git
- **Testing:** Vitest, Jest, Mocha, Jasmine/Karma, Japa — unit and integration testing (frontend and backend)
- **Security:** OWASP Top 10, OAuth 2.0, CSRF protection, dependency analysis, vulnerability remediation
- **Architecture:** scalable solutions, systems integration, legacy code refactoring

---

## Featured Projects

### [midway](https://midway.amarrete.com/) — real-time multiplayer battleship game

- Monorepo with a Go 1.22 backend and a Vue 3 + TypeScript SPA, communicating over WebSockets; the server is authoritative on the rules (fleet placement, turns, shots, sinkings) so the client cannot tamper with the state.
- Custom WebSocket hub built on `gorilla/websocket`: rooms with a 6-digit code and a 32-character secret key generated with `crypto/rand` and compared in constant time, per-IP connection limits, and per-room isolated state.
- Game domain decoupled from the transport (`game`, `room`, and `ws` packages), with Go tests for the board, turns, game resumption, and snapshots, plus integration tests for multi-room and connection limits.
- Transport hardening: `Origin` validation on the upgrade (403 for disallowed origins), per-socket message limits, and custom state views that never reveal the opponent's fleet. SPA deployed on Cloudflare and backend packaged with Docker.

**Stack:** Go · gorilla/websocket · Docker · Vue 3 · TypeScript · Vite · Vitest · Cloudflare

### [kickabouts](https://kickabouts.amarrete.com/) — match results and team draws for eFootball

- Hono 4 application with JSX-based SSR on Cloudflare Workers: results tracking for 1v1/2v2/2v3/3v3 matches and team draws for cooperative modes, with Cloudflare D1 as the database and KV for sessions.
- Google OAuth 2.0 authentication with self-managed KV sessions with TTL, plus admin/player roles enforced by route middleware; user provisioning from the app or via script against the remote D1 database.
- Unbiased random team draw: Fisher-Yates over `crypto.getRandomValues` with rejection sampling to avoid modulo bias, and a canonical signature of each draw so the previous distribution never repeats.
- Hardening: `Origin`-based CSRF guard on mutating requests that fails closed, secrets kept out of versioned configuration, and tests running on the real Workers runtime (`@cloudflare/vitest-pool-workers`) with local D1 and KV.

**Stack:** Hono · Cloudflare Workers · D1 · KV · Google OAuth 2.0 · TypeScript · Vitest · Biome

### [amarrete](https://personal.amarrete.com/) — personal site and interactive CV

- Astro application with server-side rendering (SSR) deployed on Cloudflare Workers, with documents served from Cloudflare R2 through an API.
- Code-editor-style interface built on WebTUI, with a custom syntax highlighter to render the CV content.
- Automated type, build, and format checks in the project workflow.

**Stack:** Astro · TypeScript · Cloudflare Workers · R2 · WebTUI · CSS

---

## Education

- **Systems Engineering (Software Development Emphasis)** — Universidad Interamericana de Panamá, 2014 — 2017

---

## Languages

- **Spanish** — native (working language on all previous teams).
- **English** — professional working proficiency: reading and understanding technical documentation and specialized resources, daily use as a source of technical learning. No formal certification.
