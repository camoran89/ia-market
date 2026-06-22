# Requirements Document

## 1. Intent Analysis

**User Request**: Continuar el flujo AI-DLC con el contexto definido y avanzar hacia la generación de requisitos y diseño de producto.

**Request Type**: New Project / Greenfield.

**Scope Estimate**: System-wide. El proyecto abarca múltiples componentes: interfaz web, chat conversacional IA, motor de búsqueda geoespacial, gestión de pedidos, administración de vendedores, panel administrativo y soporte de comprobantes.

**Complexity Estimate**: Complejo. Se requiere integración de IA conversacional, geolocalización dinámica, gestión de roles múltiples, separación de estados de pedido y pago, y manejo de validación de comprobantes.

## 2. Project Overview

El producto es un **marketplace conversacional web responsive** con IA y geolocalización. El MVP debe permitir que compradores y vendedores interactúen principalmente a través de chat, mientras que la plataforma ofrece soporte visual de mapa, manejo de pedidos y validación de pagos manuales/externalizados.

El MVP incluirá además:
- Panel administrativo completo para gestión de usuarios, vendedores, categorías, incidencias y disputas.
- Flujo de suscripción de vendedores independiente del flujo de compra.
- Gestión de comprobantes con validación automática de legibilidad.
- Roles operativos: administrador, vendedor, supervisor/empleado y comprador.

## 3. Functional Requirements

### 3.1 Comprador
- RF-C01: El comprador inicia sesión o se registra en la aplicación web responsive.
- RF-C02: El canal principal es un chat conversacional IA.
- RF-C03: El comprador describe su necesidad y la IA guía la búsqueda sin formularios tradicionales.
- RF-C04: La IA identifica intención, muestra opciones y permite seleccionar productos, servicios o agendamientos.
- RF-C05: El comprador puede crear un pedido, solicitud de servicio o agendamiento directamente desde el chat.
- RF-C06: La plataforma registra el medio de pago manual/externalizado seleccionado sin procesar dinero.
- RF-C07: Si el medio requiere comprobante, el comprador puede adjuntarlo en PDF o imagen desde el chat.
- RF-C08: El comprobante se valida automáticamente por legibilidad antes de enviarlo al vendedor.
- RF-C09: El pedido debe mostrar estados separados de pedido y de pago.
- RF-C10: El comprador puede consultar estados y ver historial de transacciones dentro del chat.
- RF-C11: El mapa debe actualizarse dinámicamente con resultados cercanos durante la conversación.

### 3.2 Vendedor
- RF-V01: El vendedor se registra y activa su perfil mediante suscripción mensual.
- RF-V02: La suscripción del vendedor es independiente del flujo de compra.
- RF-V03: El vendedor gestiona productos, servicios y disponibilidad mediante chat IA.
- RF-V04: El vendedor puede actualizar precios, inventario, horarios y medios de pago desde el chat.
- RF-V05: El vendedor recibe notificaciones de nuevos pedidos o solicitudes.
- RF-V06: El vendedor gestiona estados operativos del pedido y estados de pago.
- RF-V07: El vendedor revisa comprobantes legibles enviados por el comprador.
- RF-V08: El vendedor gestiona pedidos en estado pendiente, confirmado, en preparación, listo para retiro, entregado o cancelado.

### 3.3 Supervisor / Empleado
- RF-S01: El supervisor/empleado puede operar en nombre del vendedor según permisos definidos.
- RF-S02: El supervisor gestiona pedidos y atención operativa sin requerir acceso administrativo completo.

### 3.4 Administrador
- RF-A01: El administrador accede a un panel de administración.
- RF-A02: El administrador gestiona usuarios, vendedores, categorías y disputas.
- RF-A03: El administrador monitoriza incidencias y estados operativos generales.

### 3.5 Comprobantes y pagos
- RF-P01: La plataforma registra el medio de pago manual/externalizado seleccionado por el comprador.
- RF-P02: El pago permanece fuera de la plataforma; la plataforma no custodia ni procesa dinero de compra.
- RF-P03: El comprobante se valida automáticamente como filtro inicial de legibilidad.
- RF-P04: Si el comprobante es inválido, la IA rechaza la carga y solicita un nuevo archivo.
- RF-P05: La revisión manual posterior del comprobante corre a cargo del vendedor.
- RF-P06: El flujo de pago reconoce estados como pendiente de comprobante, pendiente de verificación manual, verificado y rechazado.

### 3.6 Geolocalización y mapas
- RF-G01: El mapa es parte integral del chat y presenta resultados cercanos con pins.
- RF-G02: Los resultados del mapa muestran nombre del vendedor, categoría, distancia y calificación.
- RF-G03: El mapa se actualiza dinámicamente conforme la conversación avanza.

### 3.7 Suscripción de vendedor
- RF-SU01: El vendedor no puede activar su perfil público sin una suscripción activa.
- RF-SU02: El proceso de suscripción se gestiona como flujo separado del pedido.
- RF-SU03: La suscripción puede incluir cobro mensual mediante un proveedor o mecanismo externo.

## 4. Non-Functional Requirements

### 4.1 Seguridad
- NFR-SEC01: Se aplican reglas de seguridad estrictas como línea base para producción.
- NFR-SEC02: Control de acceso por roles (comprador, vendedor, supervisor, administrador).
- NFR-SEC03: Protección de datos sensibles y archivos de comprobantes.
- NFR-SEC04: Definición de autenticación segura y manejo de sesiones.

### 4.2 Resiliencia
- NFR-RES01: La plataforma debe diseñarse con prácticas de resiliencia progresiva.
- NFR-RES02: Manejo de fallas en servicios externos (IA, mapas, almacenamiento, notificaciones) con degradación controlada.
- NFR-RES03: Observabilidad básica para eventos de uso, errores y transacciones.

### 4.3 Calidad del software
- NFR-QA01: Código modular, mantenible y testeable.
- NFR-QA02: Arquitectura de separación de responsabilidades entre lógica de negocio, infraestructura y persistencia.
- NFR-QA03: Uso parcial de property-based testing para funciones puras y serialización.
- NFR-QA04: Evitar sobreingeniería y mantener KISS.

### 4.4 Usabilidad y rendimiento
- NFR-UX01: Interfaz web responsive mobile-first.
- NFR-UX02: El chat debe ser fluido y comprensible en dispositivos móviles.
- NFR-PERF01: El sistema debe responder a interacciones de chat y actualizaciones de mapa en tiempos razonables.
- NFR-PERF02: El motor de búsqueda geoespacial debe entregar resultados relevantes y rápidos.

## 5. Extension Configuration

| Extension | Enabled | Decided At |
|---|---|---|
| Security Baseline | Yes | Requirements Analysis |
| Resiliency Baseline | Yes | Requirements Analysis |
| Property-Based Testing | Partial | Requirements Analysis |

## 6. Key Decisions
- El MVP incluirá comprador, vendedor, supervisor y administrador.
- El MVP incluirá panel administrativo completo y flujo de comprobantes.
- El mapa será integrado de forma dinámica junto con el chat.
- Los pagos de compra serán manuales/externalizados; la plataforma no procesará dinero.
- El flujo de suscripción de vendedor será independiente del flujo de compra.
- Se aplicará seguridad y resiliencia como requisitos de diseño.
- Se usará property-based testing de forma parcial: funciones puras y serialización.

## 7. Next Step
El siguiente paso recomendado es **User Stories** para los roles identificados, seguido de **Workflow Planning**.
