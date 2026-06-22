# Application Design - Components

## Overview
Este documento define los componentes de alto nivel para el marketplace conversacional con IA y geolocalización. Cada componente representa un área funcional con responsabilidades claras.

## Components

### 1. Web Application UI
**Propósito:** Proveer la experiencia web responsive para compradores, vendedores, supervisores y administradores.

**Responsabilidades:**
- Mostrar el chat conversacional, mapa y paneles administrativos.
- Gestionar la navegación y los estados de la interfaz.
- Presentar datos de pedidos, comprobantes y transacciones.
- Invocar APIs de backend para acciones del usuario.

### 2. Conversational Chat Component
**Propósito:** Gestionar la interacción conversacional entre usuarios y la plataforma.

**Responsabilidades:**
- Recibir mensajes de usuario y mostrar respuestas.
- Coordinar la interpretación de intenciones con el motor de IA.
- Ejecutar acciones de negocio solicitadas por la conversación.
- Mantener el contexto de diálogo para la sesión actual.

### 3. AI Intent Engine
**Propósito:** Interpretar intenciones, extraer entidades y sugerir acciones para el chat.

**Responsabilidades:**
- Procesar texto de entrada y clasificar intención.
- Extraer parámetros relevantes (producto, ubicación, cantidad, fecha).
- Proveer recomendaciones de flujo de conversación.
- Enlazar con servicios de negocio según la intención.

### 4. Search and Location Component
**Propósito:** Resolver búsquedas geoespaciales y resultados de catálogo basados en ubicación.

**Responsabilidades:**
- Consultar proveedores de mapas y geocodificación.
- Filtrar vendedores y productos cercanos.
- Suministrar datos de distancia, ubicación y calificación.
- Actualizar resultados dinámicos en el mapa.

### 5. Order Management Component
**Propósito:** Administrar pedidos, solicitudes de servicio y agendamientos.

**Responsabilidades:**
- Crear, actualizar y consultar transacciones.
- Mantener estados separados para pedido y pago.
- Coordinar flujos de confirmación, preparación y entrega.
- Registrar historial de pedidos y eventos.

### 6. Receipt Validation Component
**Propósito:** Validar comprobantes de pago adjuntos en el flujo de pedidos.

**Responsabilidades:**
- Verificar legibilidad y formatos permitidos.
- Clasificar comprobantes válidos/inválidos.
- Asociar comprobantes a pedidos y estados de pago.
- Enviar resultados de validación al vendedor.

### 7. Subscription Management Component
**Propósito:** Gestionar la inscripción, activación y estado de suscripción de vendedores.

**Responsabilidades:**
- Registrar datos de suscripción y plan del vendedor.
- Validar el estado de suscripción antes de habilitar el perfil público.
- Coordinar con mecanismos de cobro externo.
- Mantener el estado de activación del vendedor.

### 8. Admin Panel Component
**Propósito:** Proporcionar herramientas administrativas para el equipo de soporte.

**Responsabilidades:**
- Gestionar usuarios, vendedores, categorías y disputas.
- Visualizar incidencias y su estado.
- Autorizar, suspender y editar cuentas.
- Revisar métricas operativas y eventos críticos.

### 9. Notification Component
**Propósito:** Enviar notificaciones a usuarios y vendedores.

**Responsabilidades:**
- Disparar alertas de nuevos pedidos y cambios de estado.
- Enviar mensajes por email, push o canales configurados.
- Integrar con proveedores externos de notificaciones.

### 10. Storage Component
**Propósito:** Almacenar archivos y soportes de comprobantes.

**Responsabilidades:**
- Guardar PDFs e imágenes de comprobantes.
- Proveer URL seguras para descarga y visualización.
- Gestionar eliminación y retención mínima.

### 11. User Management Component
**Propósito:** Controlar la identidad, autenticación y roles.

**Responsabilidades:**
- Registrar y autenticar compradores, vendedores, supervisores y administradores.
- Asignar roles y permisos.
- Administrar sesiones y seguridad de acceso.

### 12. Analytics Component
**Propósito:** Recopilar eventos de uso y métricas operativas.

**Responsabilidades:**
- Registrar eventos de búsqueda, pedidos y validación.
- Proveer datos para monitoreo y mejora.
- Alimentar dashboards de rendimiento.
