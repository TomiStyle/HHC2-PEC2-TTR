### Jornadas de Cocina Tradicional — PEC 2

#### Tecnologías y criterios
- Metodología CSS: BEM + ITCSS-lite
  - BEM para nombres predecibles y escalables: `.bloque`, `.bloque__elemento`, `.bloque--modificador`.
  - ITCSS-lite para organizar la cascada en capas: `base`, `bootstrap`, `utilities`, `layout`, `overrides`.
- Sass: variables, funciones, mixins, parciales e imports.
- Bootstrap 5 (personalizado via Sass) + Bootstrap Icons.
- Container Queries y capas de cascada (usadas en varias páginas).
- Nuevas unidades y colores (moderno CSS: dvh, cqw, oklch, etc.).
- Stylelint con reglas alineadas a BEM y orden de propiedades (sin Prettier).

#### Estructura Sass

- src/assets/styles/
  - _variables.scss
  - _functions.scss
  - _mixins.scss
  - _base.scss
  - _utilities.scss
  - _dependencies.scss
  - main.scss
  - layouts/
    - _home.scss
    - _speakers.scss
    - _article.scss
    - _free.scss


- `main.scss` importa los parciales bajo `@layer` para controlar la cascada.
- `layouts/*` contiene estilos específicos por página.
- 
#### Dependencias
- Bootstrap 5 (Sass) y Bootstrap Icons.
  - Instalación: `npm install bootstrap bootstrap-icons`
  - Importación en `_dependencies.scss`:
    - `@import "~bootstrap/scss/bootstrap";`
    - `@import "~bootstrap-icons/font/bootstrap-icons.css";`

#### Stylelint
- Configuración con `stylelint-config-recommended-scss` + `stylelint-config-recess-order` para orden de propiedades.
- Regla de `selector-class-pattern` para BEM.
- Scripts en `package.json` para hacer las comprobocaciones:
  - `"lint:css": "stylelint \"src/**/*.scss\""`
  - `"lint:css:fix": "stylelint \"src/**/*.scss\" --fix"`

#### Desarrollo
- Arranque: `npm install` y seguir guía de UOC Boilerplate.
- Desarrollo: `npm run dev`
- Build producción: `npm run build`

#### Decisiones clave
- Mobile-first (o desktop-first si aplica): [indicar enfoque]
- Personalización Bootstrap via variables Sass en `_dependencies.scss` o parcial dedicado antes del import.
- Uso de container queries definiendo contenedores con `container-type: inline-size;`.
- Uso de Bootstrap Icons, ya que no tendrá una carga extra de JS y son accesibles.

#### Enlaces
- GitHub: https://github.com/TomiStyle/HHC2-PEC2-TTR
- Netlify: https://hhc2-pec2.netlify.app/