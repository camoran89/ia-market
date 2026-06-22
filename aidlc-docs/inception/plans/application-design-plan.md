# Application Design Plan

## Purpose
Crear un plan estructurado para definir componentes, servicios y dependencias del marketplace conversacional con IA y geolocalización.

## 1. Analysis Scope
- [x] Leer requisitos y user stories existentes
- [x] Identificar áreas clave: chat IA, pedidos, comprobantes, suscripciones, administración, geolocalización
- [x] Confirmar que el proyecto es Greenfield y requiere un diseño completo de componentes

## 2. Design Artifacts to Generate
- [ ] `components.md` con nombres, propósito y responsabilidades de cada componente
- [ ] `component-methods.md` con métodos clave y firmas de entrada/salida
- [ ] `services.md` con servicios y patrones de orquestación
- [ ] `component-dependency.md` con dependencias y patrones de comunicación
- [ ] `application-design.md` con consolidación general del diseño

## 3. Design Questions
- [ ] Confirmar si el dominio de chat IA debe ser un componente separado con su propio adaptador de IA
- [ ] Validar si la gestión de comprobantes debe operar como subdominio independiente de pedidos
- [ ] Definir si la suscripción de vendedor es un flujo de negocio con servicio dedicado
- [ ] Preguntar si el panel administrativo debe exponer APIs separadas de las APIs de vendedor/comprador
- [ ] Evaluar si el mapa y geolocalización necesitarán un servicio de ubicación independiente

## 4. Execution Plan
- [ ] Generar `components.md`
- [ ] Generar `component-methods.md`
- [ ] Generar `services.md`
- [ ] Generar `component-dependency.md`
- [ ] Generar `application-design.md`
- [ ] Revisar y validar consistencia entre artefactos
- [ ] Actualizar `aidlc-docs/aidlc-state.md` si los artefactos se completan

## 5. Clarifying Questions
### 1. Componente de Chat IA
A) El chat IA se diseña como componente independiente con adaptación a motores de IA y flujo conversacional
B) El chat IA se trata como parte del backend de transacciones y no como componente separado
C) Otra (describir con detalle)

[Answer]: A

### 2. Gestión de comprobantes
A) El módulo de comprobantes debe ser un subdominio independiente con validación, almacenamiento y estado propio
B) Los comprobantes se gestionan como parte del flujo de pagos del pedido sin componente independiente
C) Otra (describir con detalle)

[Answer]: A

### 3. Suscripción de vendedor
A) La suscripción de vendedor se trata como un servicio dedicado separado del flujo de pedidos
B) La suscripción se maneja como parte del componente de perfil de vendedor
C) Otra (describir con detalle)

[Answer]: A

### 4. API administrativa
A) El panel administrativo expone APIs separadas de las APIs de comprador/vendedor
B) El panel administrativo reutiliza las mismas APIs con control de roles
C) Otra (describir con detalle)

[Answer]: A

### 5. Geolocalización y mapa
A) La geolocalización y el mapa se implementan como un servicio independiente que alimenta múltiples componentes
B) La geolocalización se integra dentro del motor de búsqueda y no como servicio independiente
C) Otra (describir con detalle)

[Answer]: A
