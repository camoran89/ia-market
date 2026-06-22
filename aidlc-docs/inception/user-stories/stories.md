# User Stories

## Introducción
Este conjunto de historias de usuario sigue un enfoque basado en flujos y roles, con historias de tamaño pequeño y criterios de aceptación claros.

## 1. Comprador

### Historia 1: Descubrir productos o servicios cercanos por chat
**Como** comprador explorador local
**quiero** describir lo que necesito en lenguaje natural al chat de IA
**para** recibir opciones relevantes de vendedores cercanos sin usar buscadores tradicionales.

**Criterios de aceptación**:
- La IA solicita detalles básicos si la intención es ambigua.
- El sistema presenta opciones de productos/servicios y vendedores cercanos en tarjetas.
- El resultado incluye información de distancia, categoría y calificación.
- El comprador puede seleccionar una opción desde el chat.

### Historia 2: Crear un pedido o solicitud desde el chat
**Como** comprador explorador local
**quiero** confirmar una opción y crear un pedido/solicitud/agendamiento desde el chat
**para** concretar la transacción sin abandonar la conversación.

**Criterios de aceptación**:
- El chat muestra un resumen con vendedor, producto/servicio, cantidad, modalidad y medio de pago.
- El comprador puede confirmar o cancelar antes de crear la transacción.
- El pedido se crea con estado inicial de pedido y estado de pago separados.

### Historia 3: Adjuntar comprobante cuando el medio lo requiera
**Como** comprador explorador local
**quiero** adjuntar un comprobante en PDF o imagen desde el chat
**para** que el vendedor pueda verificar un pago manual o externalizado.

**Criterios de aceptación**:
- El sistema permite cargar PDF o imagen dentro del chat.
- La IA valida automáticamente la legibilidad antes de enviar al vendedor.
- Si el comprobante no es legible, se muestra un mensaje de rechazo y se pide nuevo archivo.
- Si es legible, el pedido cambia a estado de pago "pendiente de verificación manual".

### Historia 4: Consultar el estado del pedido y pago desde el chat
**Como** comprador explorador local
**quiero** consultar el estado actual de mi pedido y el estado de pago desde el chat
**para** saber exactamente qué sigue en el proceso.

**Criterios de aceptación**:
- El chat responde con el estado del pedido y el pago por separado.
- Se muestran mensajes claros sobre si el pedido está confirmado, en preparación, listo para retiro o entregado.
- Si el comprobante fue rechazado, el chat indica el motivo.

### Historia 5: Calificar la experiencia al finalizar
**Como** comprador explorador local
**quiero** calificar al vendedor y al producto/servicio después de cerrar el pedido
**para** brindar retroalimentación y mejorar la confianza en la plataforma.

**Criterios de aceptación**:
- La opción de calificación aparece al completar la transacción.
- La calificación incluye vendedor y producto/servicio por separado.
- El comprador puede enviar comentarios breves.

## 2. Vendedor

### Historia 6: Registrar el negocio y activar la suscripción
**Como** vendedor emprendedor digital
**quiero** registrarme y activar mi perfil mediante suscripción
**para** poder publicar productos y recibir pedidos en la plataforma.

**Criterios de aceptación**:
- El vendedor puede ingresar datos clave y seleccionar la categoría y ubicación.
- El flujo incluye activación de suscripción como paso requerido para publicar el perfil.
- El perfil no se habilita públicamente hasta que la suscripción esté activa.

### Historia 7: Publicar y actualizar productos o servicios por chat
**Como** vendedor emprendedor digital
**quiero** crear y actualizar mi catálogo desde el chat de IA
**para** mantener mi oferta visible y actualizada sin usar formularios complejos.

**Criterios de aceptación**:
- El vendedor puede añadir nombre, descripción, precio, fotos y disponibilidad.
- El vendedor puede modificar la disponibilidad y precios desde el chat.
- El sistema confirma los cambios al vendedor en la misma conversación.

### Historia 8: Revisar y gestionar pedidos entrantes
**Como** vendedor emprendedor digital
**quiero** ver los pedidos recibidos y cambiar su estado operativo
**para** coordinar la preparación, entrega o atención del servicio.

**Criterios de aceptación**:
- El vendedor puede ver los pedidos pendientes y confirmarlos.
- El vendedor puede actualizar el estado a preparado, listo para retiro, entregado, cancelado, etc.
- El vendedor recibe notificaciones de nuevos pedidos.

### Historia 9: Revisar comprobantes y confirmar pagos manuales
**Como** vendedor emprendedor digital
**quiero** revisar el comprobante adjuntado por el comprador
**para** verificar el pago y avanzar el pedido en el proceso.

**Criterios de aceptación**:
- El vendedor puede ver el comprobante en PDF o imagen asociado al pedido.
- El vendedor acepta o rechaza el comprobante con una razón breve.
- El sistema actualiza el estado de pago según la decisión.

## 3. Supervisor

### Historia 10: Gestionar pedidos en nombre del vendedor
**Como** supervisor operativo
**quiero** ver y actualizar pedidos autorizados por el vendedor
**para** ayudar en la operación diaria sin acceder a toda la configuración.

**Criterios de aceptación**:
- El supervisor puede acceder solo a pedidos y tareas operativas.
- El supervisor puede actualizar estados operativos y añadir notas relevantes.
- El supervisor no puede cambiar datos sensibles de usuario o configuraciones administrativas.

## 4. Administrador

### Historia 11: Administrar usuarios y vendedores desde un panel
**Como** administrador de plataforma
**quiero** gestionar usuarios y vendedores desde el panel administrativo
**para** mantener la plataforma segura y ordenada.

**Criterios de aceptación**:
- El administrador puede ver y buscar usuarios y vendedores.
- El administrador puede activar, desactivar y suspender cuentas.
- El administrador puede editar categorías y datos de vendedores.

### Historia 12: Resolver incidencias y disputas
**Como** administrador de plataforma
**quiero** ver y gestionar incidencias y disputas desde el panel administrativo
**para** responder a problemas críticos con claridad.

**Criterios de aceptación**:
- El panel muestra incidencias y disputas abiertas.
- El administrador puede asignar, actualizar estado y cerrar casos.
- El administrador puede revisar el historial de disputas.

## 5. Flujos de servicio y agendamiento

### Historia 13: Crear una solicitud de servicio independiente
**Como** comprador explorador local
**quiero** solicitar un servicio sin fecha fija desde el chat
**para** que el vendedor pueda cotizar y atender mi requerimiento.

**Criterios de aceptación**:
- El chat permite crear una solicitud de servicio separada de un pedido físico.
- La solicitud incluye descripción, categoría y datos de contacto.
- El vendedor recibe la solicitud como una transacción distinta.

### Historia 14: Agendar un servicio con fecha y hora
**Como** comprador explorador local
**quiero** agendar un servicio con fecha y hora desde el chat
**para** asegurar una cita de atención en el momento correcto.

**Criterios de aceptación**:
- El comprador puede seleccionar fecha y hora dentro del chat.
- El sistema confirma la agenda y notifica al vendedor.
- El estado se muestra como agendado en el seguimiento.

## 6. Mapa y geolocalización

### Historia 15: Ver vendedores cercanos en el mapa
**Como** comprador explorador local
**quiero** ver los resultados en un mapa integrado mientras interactúo con el chat
**para** comprender la cercanía y disponibilidad de los vendedores.

**Criterios de aceptación**:
- El mapa se actualiza con resultados cercanos según la conversación.
- Cada pin muestra información básica: nombre, categoría, distancia y calificación.
- El comprador puede ver detalles resumidos al seleccionar un pin.

## Personas a Historias
- Comprador explorador local: Historias 1-5, 13-15
- Vendedor emprendedor digital: Historias 6-9
- Supervisor operativo: Historia 10
- Administrador de plataforma: Historias 11-12
