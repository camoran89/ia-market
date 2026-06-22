# Application Design

## Summary
Este documento consolida los artefactos de Application Design para el marketplace conversacional con IA y geolocalización.

## Key Artifacts
- `components.md` — Componentes principales y sus responsabilidades.
- `component-methods.md` — Métodos clave y firmas de los componentes.
- `services.md` — Servicios y patrones de orquestación.
- `component-dependency.md` — Relaciones de dependencia y flujo de datos.

## Design Highlights
- El diseño se basa en componentes independientes para chat IA, pedidos, comprobantes, suscripciones y administración.
- El Chat Service actúa como orquestador principal para las intenciones extraídas por el AI Intent Engine.
- El Search Service y Location Provider habilitan la experiencia geoespacial del mapa.
- El Order Service y Receipt Service mantienen la separación entre estados de pedido y pago.
- El Admin Service cubre la gestión administrativa sin mezclarla con los flujos de usuario estándar.
- El User Service centraliza autenticación y autorización.
- El Notification Service y Analytics Service soportan comunicaciones y métricas operativas.

## Component Structure
Para una implementación futura, se recomiendan capas separadas de UI, aplicación, dominio y persistencia, donde cada componente expone interfaces claras y depende de servicios mediante inyección de dependencias.

## Next Steps
- Avanzar hacia Functional Design para definir los detalles de negocios y las reglas de cada componente.
- Usar los componentes y servicios definidos como base para la generación de código.
- Validar con stakeholders si algún componente requiere refinamiento antes de entrar en la implementación.
