# Requirement Verification Questions

## Context
El proyecto es un marketplace conversacional con IA y geolocalización enfocado en MVP web. El usuario ya proporcionó requisitos de producto y criterios de diseño TypeScript.

## 1. Clarificación del alcance del MVP
A) El MVP debe incluir solo la experiencia de comprador y vendedor con chat conversacional de IA y medios de pago manuales/externalizados.
B) El MVP debe incluir además un panel administrativo completo con gestión de incidencias y disputas.
C) El MVP debe incluir un flujo completo de suscripción de vendedor y manejo de comprobantes, pero no un panel administrativo.
D) Otra (describir con detalle).

[Answer]: D. Debe incluir la experiencia de comprador y vendedor con chat conversacional de IA y medios de pago manuales/externalizados, además un panel administrativo completo con gestión de incidencias y disputas y un flujo completo de suscripción de vendedor y manejo de comprobantes

## 2. Necesidad de User Stories
A) Sí — generar historias de usuario para comprador, vendedor, supervisor y administrador
B) No — continuar directamente a Workflow Planning con los requisitos actuales
C) Solo para roles principales (comprador y vendedor)
D) Otra (describir con detalle)

[Answer]: D. Debe generar historias de usuario para comprador, vendedor, supervisor y administrador y despues continuar directamente a Workflow Planning con los requisitos actuales

## 3. Prioridad de no funcionales
A) La prioridad principal es velocidad de entrega y experiencia conversacional; seguridad y resiliencia pueden ser livianas
B) La prioridad principal es seguridad y resiliencia del sistema, aunque la entrega tome más tiempo
C) Balancear igual funcionalidad conversacional, seguridad y resiliencia
D) Otra (describir con detalle)

[Answer]: C

## 4. Alcance de la gestión de comprobantes
A) Validación automática de legibilidad como filtro inicial, con revisión manual posterior por el vendedor
B) Validación automática suficiente para aceptar o rechazar comprobantes sin revisión manual adicional
C) Validación automática solo para detectar archivos inválidos, con todo lo demás revisado manualmente
D) Otra (describir con detalle)

[Answer]: A

## 5. Geolocalización y mapas
A) El mapa debe ser parte integral del chat y actualizarse dinámicamente con resultados cercanos
B) El mapa es opcional y se muestra solo como apoyo visual en un segundo plano
C) El MVP puede omitir el mapa y entregar resultados basados en ubicación sin visualización de pins
D) Otra (describir con detalle)

[Answer]: A

## 6. Experiencia de pagos y pedidos
A) El pedido debe crearse y confirmarse desde el chat, registrando medio de pago manual/externalizado sin procesar dinero
B) El pedido puede crearse desde el chat, pero la confirmación final puede requerir pantalla de detalles adicional fuera del chat
C) El MVP debe soportar solo pedidos y no solicitudes de servicio/agendamientos
D) Otra (describir con detalle)

[Answer]: A

## 7. Opt-In: Security Baseline
A) Yes — enforce all SECURITY rules as blocking constraints (recommended for production-grade applications)
B) No — skip all SECURITY rules (suitable for PoCs, prototypes, and experimental projects)
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## 8. Opt-In: Resiliency Baseline
A) Yes — apply the resiliency baseline as directional best practices and design-time guidance
B) No — skip the resiliency baseline
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## 9. Opt-In: Property-Based Testing
A) Yes — enforce all PBT rules as blocking constraints
B) Partial — enforce PBT rules only for pure functions and serialization round-trips
C) No — skip all PBT rules
X) Other (please describe after [Answer]: tag below)

[Answer]: B
