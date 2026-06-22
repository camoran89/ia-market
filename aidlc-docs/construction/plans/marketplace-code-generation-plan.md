# Code Generation Plan - Marketplace

## Overview
Este plan describe los pasos necesarios para generar el código del marketplace conversacional con IA y geolocalización en un proyecto Greenfield.

## Unit Context
- **Unit Name**: marketplace
- **Project Type**: Greenfield
- **Stories Implementadas**: Comprador, vendedor, supervisor, administrador, servicios, pagos manuales, comprobantes, geolocalización, suscripciones.
- **Dependencias**:
  - Chat Service
  - Order Service
  - Receipt Service
  - Search Service
  - Subscription Service
  - Admin Service
  - Notification Service
  - User Service
  - Analytics Service
  - Storage Component
  - AI Intent Engine
  - Location Provider

## Part 1 - Planning

### Step 1: Read workspace state
- [x] Leer `aidlc-docs/aidlc-state.md`
- [x] Confirmar que el proyecto es Greenfield
- [x] Confirmar que no hay código fuente existente en la raíz

### Step 2: Determine code structure
- [ ] Establecer estructura de carpetas para el proyecto
- [ ] Definir ubicación de backend: `src/` en raíz
- [ ] Definir ubicación de pruebas: `tests/` en raíz
- [ ] Definir configuración: `config/` en raíz

### Step 3: Generate application layers
- [ ] Crear capas: `src/domain/`, `src/services/`, `src/controllers/`, `src/infrastructure/`, `src/interfaces/`, `src/app/`
- [ ] Crear archivo de entrada: `src/index.ts`
- [ ] Crear configuración base de TS y build: `tsconfig.json`, `package.json`

### Step 4: Generate domain and service artifacts
- [ ] Crear dominio de usuario y autenticación
- [ ] Crear dominio de pedido y transacción
- [ ] Crear dominio de comprobantes y validación
- [ ] Crear dominio de búsqueda y geolocalización
- [ ] Crear dominio de suscripción de vendedor
- [ ] Crear servicios orquestadores para chat y pedidos

### Step 5: Generate API layer
- [ ] Crear controladores de buyer, seller, admin, auth, search, receipt, subscription
- [ ] Crear routers de Express o equivalente para cada área
- [ ] Generar middlewares de seguridad y autorización

### Step 6: Generate infrastructure and persistence
- [ ] Crear adaptadores de almacenamiento de archivos
- [ ] Crear adaptadores de notificaciones
- [ ] Crear adaptadores de IA e integraciones externas
- [ ] Definir interfaces de repositorio para persistencia

### Step 7: Generate tests
- [ ] Crear pruebas unitarias para servicios del dominio
- [ ] Crear pruebas de integración para APIs críticas
- [ ] Crear pruebas de validación de comprobantes y flujo de pedidos

### Step 8: Generate documentation artifacts
- [ ] Crear resumen de generación en `aidlc-docs/construction/marketplace/code/`
- [ ] Documentar archivos creados y rutas principales

### Step 9: Finalize plan
- [ ] Revisar el plan completo
- [ ] Registrar pasos en el plan
- [ ] Preparar para aprobación de generación

## Part 2 - Generation
- [ ] Generar archivos del plan en orden
- [ ] Crear solo en raíz el código de aplicación
- [ ] Respetar reglas de TypeScript de una sola responsabilidad por archivo
- [ ] No crear archivos duplicados ni auxiliares genéricos globales

## Story Traceability
- Comprador: historias 1-5, 13-15
- Vendedor: historias 6-9
- Supervisor: historia 10
- Administrador: historias 11-12

## Notes
- Este plan usa una arquitectura monolítica Greenfield con separación clara de dominios y servicios.
- No se generarán pruebas de front-end completas, solo el backend y APIs necesarias para la lógica del MVP.
- El trabajo de UI se dejará como una capa de cliente simple en `src/app/` con componentes básicos si procede.
