# Application Design - Services

## Overview
Este documento describe los servicios de orquestación y su responsabilidad en la arquitectura. Los servicios integran componentes y coordinan flujos de negocio.

## Service Definitions

### 1. Chat Service
**Responsabilidad:** Coordinar la interacción conversacional entre el chat y los servicios de backend.

**Funciones principales:**
- Enviar los mensajes del usuario al AI Intent Engine.
- Interpretar la intención y determinar el flujo de acción.
- Invocar servicios de negocio para crear pedidos, solicitudes o agendamientos.
- Mantener el contexto de conversación y manejar sesiones.

### 2. Order Service
**Responsabilidad:** Gestionar la creación, actualización y consulta de transacciones.

**Funciones principales:**
- Crear pedidos, solicitudes de servicio y agendamientos.
- Actualizar estados de pedido y pago.
- Recuperar transacciones para usuarios y vendedores.
- Coordinar con Receipt Validation y Notification Service.

### 3. Receipt Service
**Responsabilidad:** Validar y administrar comprobantes asociados a transacciones.

**Funciones principales:**
- Validar legibilidad de comprobantes.
- Guardar archivos de comprobantes en Storage Component.
- Asociar recibos a transacciones y actualizar el estado de pago.
- Notificar al vendedor sobre comprobantes pendientes o rechazados.

### 4. Subscription Service
**Responsabilidad:** Gestionar el ciclo de vida de suscripciones de vendedores.

**Funciones principales:**
- Registrar y activar suscripciones.
- Verificar el estado de suscripción antes de habilitar perfiles.
- Coordinar con proveedores de cobro externos.
- Mantener la persistencia del estado de suscripción.

### 5. Search Service
**Responsabilidad:** Resolver búsquedas de catálogo y geolocalización.

**Funciones principales:**
- Buscar vendedores y productos según criterios de ubicación y disponibilidad.
- Construir datos de mapa para la UI.
- Consultar calificaciones y distancias.
- Proveer resultados actualizados conforme avanza la conversación.

### 6. Admin Service
**Responsabilidad:** Exponer la lógica de gestión administrativa y resolución de disputas.

**Funciones principales:**
- Gestionar usuarios, vendedores y roles.
- Administrar incidencias y disputas.
- Proveer auditoría de acciones administrativas.

### 7. Notification Service
**Responsabilidad:** Entregar notificaciones a participantes del sistema.

**Funciones principales:**
- Enviar alertas de nuevos pedidos, cambios de estado y comprobantes.
- Gestionar canales y plantillas de notificación.
- Registrar entregas y errores en notificaciones.

### 8. User Service
**Responsabilidad:** Controlar identidad, autenticación y autorización.

**Funciones principales:**
- Registrar usuarios con distintos roles.
- Autenticar usuarios y generar tokens.
- Verificar permisos para acceder a recursos.

### 9. Analytics Service
**Responsabilidad:** Registrar eventos y métricas de uso para monitoreo.

**Funciones principales:**
- Grabar eventos de interacción y transacciones.
- Exponer métricas para observabilidad.
- Proveer datos de uso para análisis operativo.

## Orchestration Patterns
- El **Chat Service** es el principal orquestador del flujo conversacional y delega a Order Service, Search Service, Receipt Service y Subscription Service según la intención.
- El **Order Service** coordina con Receipt Service para pagos manuales y con Notification Service para cambios de estado.
- El **Search Service** alimenta al Chat Service y a la interfaz de mapa con resultados geoespaciales.
- El **Admin Service** actúa como puerta central para el panel administrativo, separando lógica de administración de la experiencia de usuario estándar.
- El **User Service** provee autenticación/autoriza a todos los demás servicios en cada llamada.
- El **Storage Component** es utilizado por Receipt Service y, potencialmente, por el componente de administración para archivos.
