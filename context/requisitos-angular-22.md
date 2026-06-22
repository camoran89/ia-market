Actúa como un arquitecto frontend experto en Angular 22, TypeScript 6, RxJS, arquitectura limpia frontend, buenas prácticas de rendimiento, accesibilidad y testing.

Necesito que generes una aplicación Angular 22 moderna usando las mejores prácticas actuales.

Requisitos técnicos obligatorios:

* Usar Angular 22.
* Usar TypeScript 6.
* Usar componentes standalone.
* Evitar NgModules salvo que sea estrictamente necesario.
* Usar signals para estado local y comunicación reactiva.
* Usar `input()` y `output()` en lugar de `@Input()` y `@Output()` cuando aplique.
* Usar `computed()` para valores derivados.
* Usar `effect()` solo cuando sea realmente necesario.
* Usar control flow moderno de Angular:

  * `@if`
  * `@else`
  * `@for`
  * `@switch`
* En los `@for`, usar siempre `track`.
* Usar lazy loading por rutas.
* Usar arquitectura por features.
* Usar servicios desacoplados para consumo HTTP.
* Usar `HttpClient` moderno.
* Manejar estados de carga, error y datos vacíos.
* Usar tipado estricto, evitando `any`.
* Usar interfaces o types claros para modelos de datos.
* Aplicar buenas prácticas de accesibilidad.
* Aplicar buenas prácticas de rendimiento.
* Separar responsabilidades entre componentes, servicios, modelos y páginas.
* Evitar lógica de negocio pesada dentro del HTML.
* Evitar suscripciones manuales innecesarias.
* Usar RxJS solo cuando aporte valor real.
* Usar `ChangeDetectionStrategy.OnPush` si aplica.
* Generar código limpio, mantenible y fácil de escalar.

Estructura esperada del proyecto:

src/
app/
core/
services/
interceptors/
guards/
models/
shared/
components/
pipes/
directives/
features/
nombre-feature/
pages/
components/
services/
models/
routes.ts
app.routes.ts
app.config.ts
environments/

Necesito que entregues:

1. Estructura de carpetas recomendada.
2. Comandos para crear el proyecto.
3. Configuración recomendada de `tsconfig.json`.
4. Configuración de rutas con lazy loading.
5. Ejemplo de componente standalone usando signals.
6. Ejemplo de componente padre e hijo usando `input()`.
7. Ejemplo de listado usando `@for`.
8. Ejemplo de consumo HTTP.
9. Manejo de loading, error y empty state.
10. Pruebas unitarias básicas.
11. Explicación corta de las decisiones técnicas.

Reglas de salida:

* No uses código obsoleto de Angular.
* No uses `*ngIf` ni `*ngFor`; usa control flow moderno.
* No uses `@Input()` si se puede usar `input()`.
* No uses `@Output()` si se puede usar `output()`.
* No uses `any`.
* No generes archivos innecesarios.
* Explica cada archivo brevemente.
* Entrega el código listo para copiar y pegar.
