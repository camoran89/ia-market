# Requisitos Mínimos del Producto — Marketplace Conversacional con IA y Geolocalización

**Versión**: 1.1  
**Fecha**: 2026-06-19
**Estado**: Sin ambigüedades: compra, pedido, pago manual, suscripción y alcance logístico delimitados

---

## 1. Descripción del Producto

La aplicación es un **marketplace conversacional** que combina inteligencia artificial, geolocalización y mapas para conectar compradores con vendedores o prestadores de servicios cercanos a su ubicación. El canal principal de interacción no es la búsqueda escrita tradicional, ni tablas, ni formularios convencionales, sino una conversación natural con una IA que guía al usuario hacia lo que necesita en pocos pasos.

El producto debe contemplar experiencia **web y mobile** como visión general de plataforma. Sin embargo, el **MVP será únicamente web**, con diseño responsive y mobile-first para permitir acceso desde navegadores móviles sin desarrollar inicialmente aplicaciones nativas.

El producto tiene dos experiencias diferenciadas:

- **Comprador**: Abre la aplicación web, conversa con la IA y recibe resultados, recomendaciones, tarjetas, opciones de compra, solicitudes de servicio y estados del pedido dentro del chat. El comprador no debe interactuar con buscadores tradicionales, tablas de resultados ni formularios convencionales; el chat debe ser el canal principal para pedir, ver, comparar, seleccionar, confirmar y hacer seguimiento.
- **Vendedor / Empresa**: Gestiona su negocio desde un chat de IA y configuraciones asistidas: productos, servicios, inventario, ventas, pedidos, medios de pago manuales o externos, entregas, reportes y atención de solicitudes.

La plataforma está enfocada en **pequeñas y medianas empresas**, facilitando que sus productos y servicios sean encontrados por compradores cercanos sin exigirles una infraestructura digital compleja.

La plataforma opera bajo un modelo freemium para compradores y suscripción mensual para vendedores. El producto **no procesará pagos de compras entre compradores y vendedores**, ni emitirá documentos legales externos. El cierre de compra dentro de la plataforma significa que el comprador puede **crear y confirmar un pedido trazable desde el chat**, seleccionando producto o servicio, cantidad, vendedor, modalidad de entrega o atención, datos mínimos, medio de pago manual o externo configurado por el vendedor, y seguimiento de estados hasta entrega, retiro, atención o cancelación.

La plataforma sí podrá integrar un mecanismo de cobro para la **suscripción mensual del vendedor**, separado del flujo de compra del marketplace. Esta integración no habilita pagos de compras dentro de la plataforma ni implica que la plataforma recaude dinero de las transacciones entre compradores y vendedores.

Cuando el pago de una compra se realice por un medio externo o manual —por ejemplo transferencia, consignación, pago contra entrega, pago en punto, efectivo o acuerdo directo— la plataforma registrará el medio seleccionado y mostrará instrucciones claras del vendedor. El comprobante de pago será obligatorio únicamente para medios que el vendedor configure como “requiere comprobante”, como transferencia, consignación o depósito. No será obligatorio para pago contra entrega, pago en punto, efectivo o acuerdo directo, salvo que el vendedor lo configure explícitamente.

Cuando aplique comprobante, el comprador podrá adjuntarlo en **PDF o imagen** desde el chat. La IA debe validar automáticamente que el archivo sea legible antes de enviarlo al vendedor; si está borroso, incompleto, cortado, protegido, dañado, vacío o no permite identificar información mínima del pago, no será válido y el comprador deberá cargar un nuevo soporte.

## 2. Objetivo Principal

Reducir la fricción entre la necesidad de un comprador y la oferta disponible más cercana, usando IA conversacional como puente, de modo que el usuario encuentre lo que necesita más rápido que con cualquier buscador o marketplace tradicional.

---

## 3. Tipos de Usuarios y Roles

| Rol | Descripción | Acceso |
|---|---|---|
| **Comprador** | Persona que busca productos o servicios cercanos y crea pedidos, solicitudes o agendamientos desde el chat | Gratuito |
| **Vendedor / Empresa** | Persona o empresa que ofrece productos o servicios y gestiona pedidos desde la plataforma | Suscripción mensual obligatoria |
| **Administrador de Plataforma** | Equipo operativo que gestiona la plataforma | Acceso interno completo |

### 3.1 Sub-roles incluidos en el MVP
- Supervisor de tienda o empleado del vendedor
- Soporte al cliente

### 3.2 Roles fuera del MVP
- Repartidor / mensajero propio de la plataforma
- Operador logístico con rastreo en tiempo real

En el MVP, la entrega será gestionada directamente por el vendedor o por el tercero logístico que el vendedor coordine por fuera de la plataforma. La plataforma solo registrará estados manuales de entrega o atención.

## 4. Problema que Resuelve

| Problema | Descripción |
|---|---|
| **Búsqueda ineficiente** | Los compradores pierden tiempo en buscadores, redes sociales o llamadas para encontrar productos y servicios locales disponibles ahora. |
| **Falta de visibilidad local** | Los vendedores pequeños y medianos no tienen cómo aparecer ante compradores que están físicamente cerca de ellos. |
| **Gestión manual del negocio** | Los vendedores pequeños no tienen herramientas accesibles para manejar inventario, ventas y reportes sin conocimientos técnicos. |
| **Desconexión entre oferta y demanda en tiempo real** | No existe un canal que muestre disponibilidad real y actualizada de productos o servicios locales mientras el usuario define lo que necesita. |
| **Fricción en el proceso de compra** | Los marketplaces tradicionales requieren muchos pasos, formularios y navegación para concretar una compra. |

---

## 5. Propuesta de Valor

### Para el Comprador
> "Dime qué necesitas y te muestro en segundos quién lo tiene cerca de ti."

- Sin búsquedas escritas complejas.
- Sin navegar por categorías y filtros.
- Resultados en tiempo real ajustados por cercanía, disponibilidad y calificación.
- Experiencia conversacional fluida y personalizada.

### Para el Vendedor
> "Gestiona tu negocio hablando, no llenando formularios."

- Visibilidad ante compradores locales activos.
- Gestión completa del negocio desde el chat de IA.
- Herramientas de ventas, inventario, reportes y entregas integradas.
- Sin necesidad de conocimientos técnicos avanzados.

---

## 6. Alcance Mínimo del MVP

El MVP debe validar el core del negocio: que la IA conversacional conecte compradores con pequeñas y medianas empresas locales y que se pueda concretar un **pedido, solicitud de servicio o agendamiento trazable desde el chat**, sin procesar pagos de compra dentro de la plataforma.

El **MVP será una aplicación web responsive**, priorizada para uso móvil desde navegador, pero sin desarrollo inicial de aplicaciones nativas iOS o Android.

### Incluido en MVP

| Área | Capacidad mínima |
|---|---|
| Chat IA comprador | Conversación guiada para identificar necesidad, refinar intención, mostrar resultados y permitir acciones desde el chat |
| Experiencia 100% conversacional comprador | El comprador no usa buscadores convencionales, tablas de resultados ni formularios tradicionales; solicita, visualiza, compara, selecciona, confirma y consulta estados desde el chat |
| Mapa dinámico | Visualización de vendedores cercanos con actualización durante conversación, como apoyo visual al chat |
| Chat IA vendedor | Alta de productos o servicios, consulta de ventas, actualización de inventario y gestión básica de pedidos por chat |
| Registro de vendedor | Flujo de inscripción asistido; la suscripción mensual del vendedor se mantiene como requisito de activación |
| Registro de comprador | Flujo de registro gratuito |
| Catálogo básico | Productos o servicios con nombre, descripción, precio, disponibilidad, foto y ubicación |
| Compra completa desde el chat | El comprador puede crear un pedido, solicitud o agendamiento trazable desde el chat; el pago de la compra se registra como medio manual o externo, pero no se procesa dentro de la plataforma |
| Medios de pago manuales o externos | El vendedor configura medios permitidos: transferencia, consignación, pago contra entrega, pago en punto, efectivo o acuerdo directo |
| Reglas por medio de pago | Cada medio debe indicar si requiere comprobante, instrucciones para el comprador, tiempo de validación y condición para avanzar el pedido |
| Comprobantes cuando aplique | Si el medio de pago requiere soporte, el comprador puede adjuntar comprobante desde el chat en PDF o imagen |
| Validación de legibilidad del comprobante | La IA valida que el comprobante adjunto sea legible antes de enviarlo al vendedor; si no es legible, se rechaza y se solicita uno nuevo |
| Validación manual de pago | El vendedor recibe notificación con el comprobante legible, verifica el pago y permite continuar el flujo normal del pedido |
| Estados separados | El sistema manejará por separado estado del pedido y estado del pago para evitar ambigüedades operativas |
| Calificaciones | Calificación de vendedor y producto/servicio al finalizar una compra o atención |
| Suscripción vendedor | Cobro mensual para mantener activo el perfil del vendedor; este cobro es independiente del flujo de compra entre comprador y vendedor |
| Panel administrativo básico | Gestión de vendedores, usuarios, categorías, monitoreo general y configuración operativa |
| Roles operativos mínimos | Administrador de plataforma, soporte al cliente y supervisor/empleado del vendedor |
| IA open source para MVP | Uso de modelos o frameworks open source para diálogo y acciones del MVP, con arquitectura preparada para escalar a IA paga |
| Web responsive | Aplicación web mobile-first como canal del MVP |

### No incluido en MVP inicial ni en el alcance del producto

| Área | Motivo |
|---|---|
| App nativa iOS / Android | La visión de producto contempla web y mobile, pero el MVP se limita a web responsive |
| Pasarelas de pago para compras | No se implementarán; el cierre de compra se hará con medios manuales o externos definidos por cada vendedor |
| Recaudo de dinero de compras | La plataforma no custodiará ni transferirá dinero entre comprador y vendedor |
| Emisión de documentos legales externos | No se implementará; la plataforma generará confirmaciones de pedido y soportes internos |
| Módulo de repartidores propios | Queda fuera del MVP; la entrega será gestionada por el vendedor y solo se registrarán estados manuales |
| Rastreo en tiempo real de repartidores | Queda fuera del MVP |
| Reportes contables avanzados | Se deja fuera del MVP |
| Sucursales avanzadas | Se deja fuera del MVP, salvo registro básico de ubicación principal |
| Fidelización | Se deja para crecimiento |
| Multiidioma | El MVP se concentra en español colombiano |
| Suscripción premium comprador | Se deja para monetización posterior |

## 7. Requisitos Funcionales para Compradores

### 7.1 Registro y Autenticación
- RF-C01: El comprador puede registrarse con correo electrónico, número de teléfono o cuenta de red social (Google, Apple).
- RF-C02: El comprador puede iniciar sesión en cualquier momento con sus credenciales.
- RF-C03: El sistema debe solicitar permiso de geolocalización al primer acceso.
- RF-C04: Si el comprador niega la geolocalización, puede ingresar su ubicación manualmente mediante una conversación guiada con la IA.

### 7.2 Chat con IA como canal principal
- RF-C05: Al abrir la aplicación, el comprador ve directamente el chat de IA como pantalla principal.
- RF-C06: El chat de IA debe iniciar la conversación con una pregunta abierta ("¿Qué necesitas hoy?").
- RF-C07: La IA debe guiar al comprador con preguntas cerradas, de sí/no o de selección para refinar su necesidad.
- RF-C08: La IA debe identificar el tipo de necesidad: producto físico, servicio, comida, urgencia, presupuesto, ubicación, disponibilidad, instalación o entrega.
- RF-C09: La IA debe poder manejar intenciones ambiguas y pedir aclaración en lenguaje natural.
- RF-C10: La IA debe confirmar la comprensión de la necesidad antes de recomendar una opción final.
- RF-C11: El comprador no debe necesitar buscadores convencionales, tablas, filtros manuales ni formularios tradicionales para encontrar, comparar o seleccionar una opción.
- RF-C12: La IA debe poder mostrar dentro del chat tarjetas, opciones comparativas, resúmenes, acciones directas, recomendaciones y confirmaciones.
- RF-C13: Toda acción crítica del comprador debe poder iniciarse desde el chat: buscar, ver opciones, comparar, pedir detalle, seleccionar, comprar, agendar, consultar estado y calificar.

### 7.3 Visualización en Mapa como apoyo al chat
- RF-C14: El mapa debe mostrarse en la misma pantalla que el chat o en una vista dividida accesible.
- RF-C15: Al inicio de la conversación, el mapa puede mostrar vendedores activos cercanos de forma genérica.
- RF-C16: A medida que la conversación avanza, el mapa debe actualizarse con resultados más precisos.
- RF-C17: Cada resultado en el mapa debe mostrar: nombre del vendedor, categoría, distancia y calificación promedio.
- RF-C18: Al tocar un pin del mapa, el comprador puede ver una tarjeta resumida; sin embargo, la interacción principal debe mantenerse en el chat.

### 7.4 Ficha Conversacional de Vendedor y Producto
- RF-C19: La ficha del vendedor debe poder mostrarse como tarjeta conversacional con: nombre, foto, categorías, horario, distancia, calificación y productos/servicios destacados.
- RF-C20: La ficha del producto o servicio debe poder mostrarse como tarjeta conversacional con: nombre, foto, descripción, precio, disponibilidad, condiciones de entrega o instalación y acción recomendada.

### 7.5 Definiciones del Flujo de Compra
- RF-C21: Para el MVP, **compra completa desde el chat** significa crear un pedido, solicitud de servicio o agendamiento trazable sin salir del chat. No significa que la plataforma procese el dinero de la compra.
- RF-C22: Se considera **pedido** la compra de un producto físico.
- RF-C23: Se considera **solicitud de servicio** el requerimiento de un servicio sin fecha/hora cerrada.
- RF-C24: Se considera **agendamiento** la solicitud de un servicio con fecha/hora definida.
- RF-C25: Se considera **transacción** el concepto general que agrupa pedido, solicitud de servicio o agendamiento.
- RF-C26: Se considera **paso del comprador** cada acción explícita requerida después de confirmar su intención: selección de opción, confirmación de datos y confirmación final. Los mensajes informativos de la IA no cuentan como pasos.

### 7.6 Compra o Solicitud desde el Chat
- RF-C27: El comprador puede iniciar una compra, solicitud de servicio, agendamiento o contacto desde el chat.
- RF-C28: El flujo debe requerir el mínimo de pasos posible; desde la intención confirmada hasta la creación de la transacción no debe superar 3 pasos del comprador, salvo que falten datos obligatorios.
- RF-C29: El comprador puede completar el flujo desde el chat sin buscadores, tablas ni formularios tradicionales.
- RF-C30: La IA debe permitir confirmar producto o servicio, cantidad, precio estimado, vendedor seleccionado, modalidad de entrega o atención, ubicación y datos mínimos necesarios para crear la transacción.
- RF-C31: Antes de confirmar, la IA debe mostrar un resumen con: vendedor, producto o servicio, cantidad, valor estimado, modalidad de entrega o atención, medio de pago seleccionado, estado inicial del pedido y condiciones relevantes.
- RF-C32: La IA debe informar claramente los medios de pago definidos por el vendedor: transferencia externa, consignación bancaria, pago en punto, pago contra entrega, efectivo o acuerdo directo.
- RF-C33: El comprador debe seleccionar uno de los medios de pago activos configurados por el vendedor.
- RF-C34: Si el medio requiere coordinación adicional con el vendedor, la transacción debe quedar en estado de pago "por acordar" hasta que el vendedor confirme las condiciones.
- RF-C35: Si el medio de pago requiere comprobante, el comprador debe poder adjuntarlo desde el chat en formato PDF o imagen.
- RF-C36: El comprobante será obligatorio para transferencia, consignación o depósito cuando el vendedor los configure como medios con soporte requerido.
- RF-C37: El comprobante no será obligatorio para pago contra entrega, pago en punto, efectivo o acuerdo directo, salvo que el vendedor lo configure explícitamente.
- RF-C38: La IA debe validar automáticamente que el comprobante adjunto sea legible antes de enviarlo al vendedor para revisión manual.
- RF-C39: El comprobante se considera no válido si está borroso, incompleto, cortado, con baja resolución, protegido por contraseña, dañado, vacío, no corresponde a un soporte de pago o no permite identificar información mínima del pago.
- RF-C40: Si el comprobante no es legible o no cumple el formato permitido, la IA debe rechazarlo desde el chat, explicar el motivo al comprador y solicitar un nuevo archivo.
- RF-C41: Solo cuando el comprobante pase la validación de legibilidad, el estado del pago debe quedar en "pendiente de verificación manual" y el comprador debe recibir confirmación de que el soporte fue enviado al vendedor.
- RF-C42: Si la compra se acuerda como pago contra entrega, pago en punto o pago por acordar, el pedido debe quedar creado con el estado de pago correspondiente y el vendedor debe recibir notificación inmediata para continuar el flujo operativo.
- RF-C43: Cuando el vendedor confirme el pedido o verifique manualmente el pago, el comprador debe recibir una notificación indicando el siguiente estado operativo: confirmado, en preparación, listo para retiro, en camino, entregado, servicio agendado o atención cerrada.
- RF-C44: Si el vendedor rechaza el comprobante o no puede verificar el pago, el comprador debe recibir una notificación clara desde el chat con el motivo y las instrucciones para corregir, reenviar el soporte, cambiar medio de pago o cancelar la transacción.
- RF-C45: El comprador puede consultar su historial de transacciones, comprobantes enviados, estados del pedido y estados del pago desde el chat.

### 7.7 Calificaciones
- RF-C46: Al finalizar una compra o recibir un servicio, el comprador puede calificar al vendedor y al producto o servicio.

### 7.8 Suscripción Premium
- RF-C47: La suscripción premium del comprador no hace parte del MVP inicial; debe considerarse para fases posteriores de monetización.

## 8. Requisitos Funcionales para Vendedores

### 8.1 Registro e Inscripción
- RF-V01: El vendedor puede registrarse con correo electrónico o cuenta empresarial.
- RF-V02: El proceso de inscripción debe solicitar: nombre del negocio, categoría, ubicación, datos de contacto y datos mínimos para activar su suscripción mensual.
- RF-V03: La activación del perfil público del vendedor está condicionada a una suscripción activa.
- RF-V04: El vendedor debe poder completar su inscripción a través del chat de IA, sin formularios tradicionales como experiencia principal.
- RF-V05: El vendedor debe poder indicar desde la aplicación si ofrece productos, servicios o ambos.

### 8.2 Chat con IA para Gestión del Negocio
- RF-V06: El vendedor accede a un chat de IA especializado en gestión de negocio.
- RF-V07: La IA debe permitir al vendedor crear productos o servicios mediante conversación: nombre, descripción, precio, disponibilidad, fotos, condiciones de entrega o instalación.
- RF-V08: La IA debe permitir actualizar el inventario o disponibilidad de un producto/servicio de forma conversacional.
- RF-V09: La IA debe permitir consultar ventas, solicitudes o pedidos del día, semana o mes en lenguaje natural.
- RF-V10: La IA debe permitir gestionar el estado operativo de los pedidos: pendiente de confirmación, confirmado, en preparación, listo para retiro, en camino, entregado, atención cerrada o cancelado.
- RF-V11: La IA debe permitir gestionar el estado del pago cuando aplique: por acordar, contra entrega, en punto, pendiente de comprobante, pendiente de verificación manual, verificado, rechazado o cancelado.
- RF-V12: La IA debe poder generar reportes básicos de ventas, ingresos estimados y productos/servicios más solicitados desde el chat. Los ingresos son informativos porque la plataforma no procesa pagos de compra.
- RF-V13: La IA debe permitir actualizar el horario de atención o disponibilidad del negocio.
- RF-V14: La IA debe notificar al vendedor sobre nuevos pedidos o solicitudes recibidas.
- RF-V15: La IA debe confirmar siempre las acciones críticas antes de ejecutarlas: crear, editar, eliminar, desactivar, cambiar precios, modificar medios de pago, confirmar pedidos, rechazar comprobantes o cambiar condiciones del negocio.

### 8.3 Configuración de Medios de Pago del Vendedor
- RF-V16: El vendedor puede configurar los medios de pago manuales o externos que acepta para las compras creadas desde la plataforma.
- RF-V17: Los medios permitidos pueden incluir transferencia cuenta a cuenta, consignación bancaria, pago contra entrega, pago en punto, efectivo, acuerdo directo u otro medio operativo definido por el negocio.
- RF-V18: Cada medio de pago debe tener una configuración explícita: nombre del canal, instrucciones para el comprador, si requiere comprobante, tiempo esperado de validación, condiciones para avanzar el pedido y observaciones.
- RF-V19: El vendedor debe definir al menos un medio de pago activo para aparecer como disponible para compras.
- RF-V20: El comprador solo puede seleccionar medios de pago previamente configurados y activos por el vendedor.
- RF-V21: Si el vendedor permite "acuerdo directo", debe indicar instrucciones mínimas de coordinación para evitar que el comprador quede sin guía.
- RF-V22: El vendedor puede activar, desactivar o modificar sus medios de pago desde la aplicación y, cuando sea posible, desde el chat.
- RF-V23: Si el vendedor opera con comprobantes, debe recibir una notificación cuando el comprador adjunte un comprobante que haya pasado la validación automática de legibilidad de la IA.
- RF-V24: La notificación al vendedor debe incluir el resumen de la compra, datos del pedido, valor, comprador, medio de pago informado, comprobante adjunto y resultado de validación de legibilidad.
- RF-V25: El vendedor no debe recibir como solicitud válida un comprobante que la IA marque como ilegible; en ese caso, el comprador debe cargar nuevamente el soporte antes de iniciar la verificación manual del vendedor.
- RF-V26: El vendedor debe poder marcar desde el chat o panel el pago como verificado, rechazado, pendiente de revisión, pago contra entrega, pago en punto o pago por acordar.
- RF-V27: Para pago contra entrega, pago en punto o pago por acordar, el pedido puede avanzar a confirmado cuando el vendedor acepte la solicitud.
- RF-V28: Para transferencia, consignación o depósito con comprobante requerido, el pedido solo puede avanzar a confirmado cuando el vendedor marque el pago como verificado.
- RF-V29: Si el comprobante es rechazado por el vendedor, la plataforma debe notificar al comprador y permitir adjuntar un nuevo soporte, cambiar medio de pago o cancelar la transacción según las reglas definidas.

### 8.4 Panel de Gestión como complemento al chat
- RF-V30: Además del chat, el vendedor puede tener acceso a vistas estructuradas para: catálogo de productos, historial de ventas, pedidos activos, calificaciones recibidas y configuración del negocio.
- RF-V31: Las vistas estructuradas son complementarias; toda acción principal debe ser también posible desde el chat de IA.

### 8.5 Catálogo de Productos y Servicios
- RF-V32: El vendedor puede crear, editar y desactivar productos o servicios.
- RF-V33: Cada producto o servicio debe tener: nombre, descripción, categoría, precio, stock o disponibilidad, fotos, estado activo/inactivo y tiempo estimado de entrega, atención o preparación.
- RF-V34: El vendedor puede marcar un producto como "agotado" o un servicio como "no disponible" temporal o permanentemente.

### 8.6 Entregas o Atención
- RF-V35: El vendedor puede indicar si ofrece entrega a domicilio, retiro en punto, instalación, atención en sitio o atención en el local.
- RF-V36: El vendedor puede actualizar manualmente el estado de una entrega, servicio o solicitud.
- RF-V37: En el MVP no existirá asignación automática de repartidores ni rastreo en tiempo real. La logística será responsabilidad del vendedor o de terceros coordinados por él.

### 8.7 Suscripción
- RF-V38: El vendedor paga una suscripción mensual para mantenerse activo en la plataforma.
- RF-V39: El cobro de la suscripción del vendedor es independiente del pago de compras entre compradores y vendedores.
- RF-V40: Si la suscripción vence sin renovación, el perfil del vendedor se desactiva automáticamente y deja de aparecer en el mapa.
- RF-V41: El vendedor debe recibir alertas antes del vencimiento de su suscripción: 7 días, 3 días y 1 día antes.

## 9. Requisitos Funcionales para Administración de la Plataforma

- RF-A01: El administrador puede ver un dashboard general con métricas clave: compradores activos, vendedores activos, transacciones del día, ingresos de suscripciones e incidencias.
- RF-A02: El administrador puede aprobar, suspender o eliminar cuentas de vendedores.
- RF-A03: El administrador puede ver y auditar transacciones realizadas en la plataforma.
- RF-A04: El administrador puede configurar los parámetros del modelo de suscripción (precios, períodos, beneficios).
- RF-A05: El administrador puede revisar y moderar calificaciones reportadas como inapropiadas.
- RF-A06: El administrador puede gestionar categorías de productos y servicios disponibles en la plataforma.
- RF-A07: El administrador puede ver logs de conversaciones de IA (anonimizados) para mejora del modelo.
- RF-A08: El administrador puede enviar notificaciones masivas a compradores o vendedores.
- RF-A09: El administrador puede configurar zonas geográficas de operación de la plataforma.
- RF-A10: El administrador puede acceder a reportes financieros de la plataforma: ingresos por suscripciones, volumen de transacciones y comisiones (si aplica).

---

## 10. Requisitos del Chat de IA

### 10.1 Motor de Conversación
- RF-IA01: El chat debe procesar lenguaje natural en español colombiano como idioma principal.
- RF-IA02: La IA debe mantener el contexto de la conversación completa, no solo el último mensaje.
- RF-IA03: La IA debe identificar la intención del usuario: buscar producto, comparar opciones, hacer pedido, consultar disponibilidad, agendar servicio, gestionar negocio, configurar medios de pago manuales, consultar estados de compra, gestionar pedidos, entre otros.
- RF-IA04: La IA debe ser capaz de pedir aclaraciones cuando la intención es ambigua, sin frustrar al usuario.
- RF-IA05: La IA debe poder responder en forma de texto, listas de opciones, tarjetas de producto, tarjetas de vendedor, resúmenes comparativos y acciones directas.
- RF-IA06: Para el MVP se priorizará el uso de modelos, frameworks o componentes open source de IA para generar el diálogo, interpretar intenciones y ejecutar acciones.
- RF-IA07: La arquitectura de IA debe estar desacoplada para permitir escalar posteriormente a modelos pagos como OpenAI, Anthropic, Google u otros, sin rehacer la experiencia principal.

### 10.2 Experiencia Conversacional sin Buscadores Convencionales
- RF-IA08: El comprador no debe usar buscadores convencionales, tablas de resultados ni formularios tradicionales como mecanismo principal de interacción.
- RF-IA09: Todo lo que el comprador pida debe poder expresarlo al chat y recibirlo como respuesta conversacional: opciones, mapas, tarjetas, detalles, comparaciones, confirmaciones y estados.
- RF-IA10: El chat debe poder mostrar lo que el usuario pida sin obligarlo a navegar categorías, filtros manuales o pantallas transaccionales complejas.
- RF-IA11: Cuando se requiera seleccionar una opción, la IA debe presentar alternativas accionables dentro del chat.

### 10.3 Flujo Socrático para Compradores
- RF-IA12: La IA debe aplicar una estrategia de preguntas progresivas: primero entender la necesidad general, luego refinar por tipo, urgencia, presupuesto, ubicación y condiciones especiales.
- RF-IA13: La IA no debe hacer más de 3 preguntas seguidas sin mostrar algún resultado intermedio.
- RF-IA14: La IA debe poder recuperar una conversación si el usuario cambia de tema o pregunta algo diferente.

### 10.4 Integración con el Mapa y el Catálogo
- RF-IA15: La IA debe enviar señales al módulo de mapa cada vez que identifique o refine una intención de búsqueda.
- RF-IA16: La IA debe poder mostrar resultados de vendedores, productos o servicios directamente en el chat como tarjetas.
- RF-IA17: La IA debe poder iniciar el flujo de compra, solicitud o agendamiento desde el chat sin necesidad de salir a otra pantalla.
- RF-IA18: El mapa y las vistas visuales son apoyo de la conversación, no sustituyen al chat como canal principal.

### 10.5 Chat del Vendedor
- RF-IA19: El chat del vendedor debe tener un contexto especializado: gestión de negocio, no búsqueda de productos.
- RF-IA20: La IA debe entender comandos de negocio como: "agrega un producto", "¿cuánto vendí hoy?", "actualiza el stock de X", "muéstrame los pedidos pendientes", "actualiza mis medios de pago", "marca este pedido como verificado".
- RF-IA21: La IA debe confirmar siempre las acciones antes de ejecutarlas.
- RF-IA22: La IA debe poder generar confirmaciones de pedido, soportes internos o resúmenes de compra desde el chat.

### 10.6 Validación de Comprobantes de Pago por IA
- RF-IA23: Cuando el comprador adjunte un comprobante de pago externo/manual, la IA debe validar automáticamente que el archivo sea de tipo permitido: PDF o imagen.
- RF-IA24: Antes de aplicar validación de legibilidad, la plataforma debe validar tamaño máximo, extensión, tipo MIME, archivo dañado, contraseña, contenido vacío y amenazas de seguridad.
- RF-IA25: La IA debe evaluar la legibilidad del comprobante considerando nitidez, resolución, orientación, recorte, páginas visibles y posibilidad de leer información principal.
- RF-IA26: Para considerar un comprobante como legible, la IA debe identificar al menos dos de los siguientes datos cuando estén presentes visualmente: valor, fecha, entidad o canal de pago, referencia/transacción, nombre parcial de origen o destino, o confirmación de operación.
- RF-IA27: Si la IA no puede determinar la legibilidad con confianza suficiente, debe rechazar el soporte y pedir uno nuevo, evitando enviar al vendedor comprobantes dudosos como válidos.
- RF-IA28: Si el comprobante no es legible, está incompleto, dañado, protegido por contraseña o no parece corresponder a un soporte de pago, la IA debe rechazarlo como no válido y pedir al comprador un nuevo archivo.
- RF-IA29: La validación de legibilidad de la IA no reemplaza la verificación manual del vendedor sobre la existencia real del pago; solo evita enviar soportes ilegibles o inválidos para revisión.

### 10.7 Seguridad y Privacidad en el Chat
- RF-IA28: Las conversaciones de los usuarios no deben almacenarse con datos personales identificables sin consentimiento explícito.
- RF-IA29: La IA no debe revelar datos de un vendedor a un comprador más allá de la información pública del perfil.
- RF-IA30: Las acciones transaccionales deben registrar auditoría técnica: usuario, intención, acción ejecutada, fecha, resultado y trazabilidad mínima.

## 11. Requisitos de Geolocalización y Mapa

- RF-GEO01: La aplicación debe solicitar permiso de geolocalización al dispositivo del usuario.
- RF-GEO02: Si el usuario no da permiso, puede ingresar su ubicación manualmente (dirección o código postal).
- RF-GEO03: El mapa debe mostrar la posición del usuario como punto de referencia central.
- RF-GEO04: El mapa debe mostrar pins o marcadores de vendedores activos dentro de un radio configurable (por defecto: 5 km, ajustable).
- RF-GEO05: Cada pin debe representar visualmente al vendedor con al menos: categoría icono y calificación visual.
- RF-GEO06: El mapa debe soportar zoom, desplazamiento y agrupación de pins (clustering) cuando hay muchos vendedores cercanos.
- RF-GEO07: El mapa debe distinguir visualmente vendedores por categoría de producto o servicio.
- RF-GEO08: Al tocar un pin, el usuario debe ver una tarjeta resumen del vendedor con opción de ver detalle o iniciar compra.
- RF-GEO09: Los vendedores deben registrar su ubicación geográfica (coordenadas) al inscribirse.
- RF-GEO10: La ubicación del vendedor puede ser un punto fijo (tienda) o un área de cobertura (servicios a domicilio).
- RF-GEO11: La plataforma debe calcular y mostrar la distancia entre el comprador y cada vendedor.
- RF-GEO12: El mapa debe actualizarse con nuevos resultados sin requerir recarga completa de la pantalla.

---

## 12. Requisitos de Actualización Dinámica de Resultados en el Mapa Durante la Conversación

Este es un differentiator clave del producto y requiere especificación detallada.

### 12.1 Flujo de Actualización

- RF-MAP01: Cada vez que la IA identifica o refina una intención de búsqueda, debe disparar una consulta al motor de búsqueda de vendedores/productos.
- RF-MAP02: Los resultados de esa consulta deben reflejarse en el mapa en tiempo real (o near real-time, máximo 2 segundos de latencia).
- RF-MAP03: El mapa debe mostrar los cambios de forma progresiva: los pins nuevos aparecen, los no relevantes se atenúan o desaparecen.
- RF-MAP04: La actualización del mapa no debe interrumpir la conversación del usuario en el chat.

### 12.2 Criterios de Filtrado Dinámico

La IA debe ser capaz de activar filtros dinámicos sobre el mapa basados en lo que entiende de la conversación:

| Variable conversacional | Efecto en el mapa |
|---|---|
| Tipo de producto o servicio | Filtra por categoría |
| Presupuesto mencionado | Filtra vendedores cuyos precios están en el rango |
| Urgencia ("lo necesito ya") | Prioriza vendedores con disponibilidad inmediata |
| Calificación ("el mejor") | Ordena o filtra por calificación mínima |
| Cercanía ("cerca de mí") | Reduce radio de búsqueda |
| Disponibilidad horaria | Filtra vendedores abiertos en este momento |

- RF-MAP05: La IA debe pasar parámetros de búsqueda estructurados al motor de mapa en cada actualización (no texto libre).
- RF-MAP06: El usuario debe percibir visualmente que el mapa está "respondiendo" a la conversación (animación o indicador de actualización).
- RF-MAP07: Si no hay resultados para los filtros aplicados, la IA debe informarlo en el chat y sugerir alternativas (ampliar radio, cambiar categoría, etc.).

### 12.3 Estado del Mapa por Fase de Conversación

| Fase de la conversación | Estado del mapa |
|---|---|
| Inicio (sin intención clara) | Muestra todos los vendedores activos cercanos sin filtro |
| Intención identificada (general) | Filtra por categoría principal |
| Intención refinada (específica) | Filtra por producto, precio, disponibilidad y calificación |
| Resultado confirmado | Destaca el vendedor o producto recomendado por la IA |

---

## 13. Requisitos de Compra, Medios de Pago Manuales y Suscripciones

### 13.1 Compra Completa desde el Chat
- RF-COMP01: La plataforma debe permitir que el comprador complete el proceso de creación de una transacción desde el chat una vez encuentre el producto o servicio que necesita.
- RF-COMP02: La transacción puede ser de tres tipos: pedido de producto, solicitud de servicio o agendamiento.
- RF-COMP03: El flujo conversacional debe permitir seleccionar vendedor, producto o servicio, cantidad, precio, modalidad de entrega o atención, ubicación, horario cuando aplique y datos mínimos de contacto.
- RF-COMP04: La IA debe mostrar un resumen antes de confirmar la transacción: vendedor, producto o servicio, valor, modalidad de entrega o atención, medio de pago seleccionado, si requiere comprobante y estado inicial.
- RF-COMP05: Toda transacción debe generar un registro trazable, aunque el pago se realice por fuera de la plataforma o sea contra entrega.
- RF-COMP06: La plataforma no debe afirmar que una compra está pagada si el pago no ha sido verificado por el vendedor o si corresponde a un medio contra entrega, en punto o por acordar.
- RF-COMP07: El comprador debe recibir confirmación inmediata del estado del pedido y del estado del pago.
- RF-COMP08: El vendedor debe recibir una notificación automática con el resumen de la transacción y las acciones disponibles: confirmar, rechazar, solicitar información, verificar comprobante, preparar, despachar, marcar listo para retiro, marcar en camino o cerrar atención.
- RF-COMP09: El comprador debe poder consultar el estado del pedido y el estado del pago desde el chat sin navegar a una sección diferente.

### 13.2 Medios de Pago Manuales o Externos
- RF-PAG01: La plataforma no procesará pagos de compra dentro del producto.
- RF-PAG02: Cada vendedor debe configurar los medios de pago que acepta para concretar las transacciones creadas desde el chat.
- RF-PAG03: Los medios de pago permitidos pueden incluir transferencia externa, consignación bancaria, pago contra entrega, pago en punto, efectivo, acuerdo directo u otro medio autorizado por el vendedor.
- RF-PAG04: El vendedor debe registrar instrucciones claras y visibles para el comprador sobre cómo usar cada medio de pago.
- RF-PAG05: Cada medio de pago debe indicar si requiere comprobante obligatorio.
- RF-PAG06: El comprador puede confirmar la transacción aunque el pago se realice por fuera de la plataforma, siempre que el vendedor tenga al menos un medio de pago activo.
- RF-PAG07: La plataforma debe registrar el medio de pago seleccionado o acordado para trazabilidad.
- RF-PAG08: La plataforma debe dejar claro al comprador cuándo el pedido depende de validación manual del vendedor.
- RF-PAG09: La plataforma debe evitar mensajes que hagan creer que el pago fue procesado por el sistema cuando en realidad fue externo o manual.
- RF-PAG10: La plataforma debe permitir configurar pago contra entrega, pago en punto y efectivo como medios que no requieren comprobante, salvo configuración explícita del vendedor.
- RF-PAG11: La plataforma debe permitir configurar transferencia, consignación o depósito como medios que normalmente requieren comprobante antes de verificación manual.

### 13.3 Comprobantes de Pago
- RF-PAG12: Cuando el medio de pago requiera soporte, el comprador debe poder adjuntar desde el chat un comprobante únicamente en formato PDF o imagen.
- RF-PAG13: La IA debe validar automáticamente la legibilidad del comprobante antes de asociarlo como soporte válido de la transacción y antes de notificar al vendedor.
- RF-PAG14: El comprobante debe considerarse ilegible o inválido cuando esté borroso, cortado, incompleto, con baja resolución, dañado, protegido por contraseña, vacío, no corresponda a un soporte de pago o no permita leer información mínima.
- RF-PAG15: Si el comprobante es ilegible o inválido, la plataforma debe rechazarlo desde el chat, mantener el estado de pago en "pendiente de comprobante" y solicitar al comprador cargar un nuevo PDF o imagen legible.
- RF-PAG16: Solo los comprobantes que pasen la validación de legibilidad deben quedar asociados a la transacción y almacenarse de forma segura, con trazabilidad de fecha, hora, usuario que lo cargó, tipo de archivo, resultado de validación y estado de revisión.
- RF-PAG17: Al cargar un comprobante legible, el estado del pago debe pasar a "pendiente de verificación manual" y el vendedor debe recibir una notificación con el resumen de la compra y el soporte adjunto.
- RF-PAG18: El vendedor debe poder verificar manualmente el comprobante desde el chat o panel y marcarlo como verificado, rechazado o pendiente de revisión.
- RF-PAG19: Cuando el vendedor marque el pago como verificado, la plataforma debe notificar al comprador y permitir continuar el flujo normal del pedido: preparación, envío, entrega o atención.
- RF-PAG20: Si el vendedor rechaza el comprobante, la plataforma debe notificar al comprador el motivo y permitir reenviar soporte, cambiar medio de pago o cancelar la transacción según reglas de negocio.

### 13.4 Estados Separados de Pedido y Pago
- RF-EST01: La plataforma debe manejar el estado del pedido y el estado del pago como campos separados.
- RF-EST02: El estado del pedido describe el avance operativo de la transacción.
- RF-EST03: El estado del pago describe la condición del medio de pago manual o externo.
- RF-EST04: Los estados mínimos del pedido son: creado, pendiente de confirmación del vendedor, confirmado, en preparación, listo para retiro, en camino, entregado, atención cerrada, cancelado y rechazado.
- RF-EST05: Los estados mínimos del pago son: no requerido todavía, por acordar, contra entrega, pago en punto, efectivo, pendiente de comprobante, comprobante ilegible, pendiente de verificación manual, verificado, rechazado y cancelado.
- RF-EST06: Para pago contra entrega, pago en punto o pago por acordar, el pedido puede avanzar a "confirmado" cuando el vendedor acepte la solicitud.
- RF-EST07: Para transferencia, consignación o depósito con comprobante requerido, el pedido solo puede avanzar a "confirmado" cuando el vendedor marque el pago como verificado.
- RF-EST08: La plataforma debe mostrar ambos estados al comprador en lenguaje claro, evitando términos internos o técnicos.

### 13.5 Suscripción de Vendedores
- RF-SUS01: La suscripción mensual del vendedor es un flujo independiente del proceso de compra entre compradores y vendedores.
- RF-SUS02: El mecanismo de cobro de la suscripción podrá usar un proveedor de recaudo o método administrativo definido por la plataforma.
- RF-SUS03: Si se implementa cobro automático de la suscripción, este solo aplicará a la relación plataforma-vendedor y no al pago de compras.
- RF-SUS04: Si el cobro de la suscripción falla, el sistema debe reintentar o notificar al vendedor según la regla definida.
- RF-SUS05: Si el pago no se regulariza en un período de gracia definido, el perfil del vendedor se desactiva automáticamente.
- RF-SUS06: El vendedor puede actualizar su método de pago de suscripción cuando el modelo de cobro lo permita.
- RF-SUS07: El vendedor puede cancelar su suscripción y su perfil se mantiene activo hasta el fin del período pagado.

### 13.6 Suscripción Premium del Comprador
- RF-SUS08: La suscripción premium del comprador queda fuera del MVP inicial y debe evaluarse en fases posteriores.
- RF-SUS09: Cuando se implemente, debe ser opcional y orientada a beneficios claros, como mejores recomendaciones, prioridad o descuentos.

## 14. Requisitos de Entregas y Trazabilidad

### 14.1 Modalidades de Entrega o Atención
- RF-ENT01: La plataforma debe soportar al menos dos modalidades para productos: retiro en punto y entrega a domicilio gestionada por el vendedor.
- RF-ENT02: Para servicios, la plataforma debe soportar al menos: atención en sitio del comprador, atención en local del vendedor o agendamiento.
- RF-ENT03: El vendedor define qué modalidades ofrece para cada producto o servicio, o de forma general para su negocio.
- RF-ENT04: El comprador selecciona la modalidad preferida al momento de confirmar la transacción.

### 14.2 Gestión de Estado del Pedido
- RF-ENT05: El estado del pedido debe manejarse separado del estado del pago.
- RF-ENT06: Flujo mínimo de pedido para producto con entrega: creado → pendiente de confirmación del vendedor → confirmado → en preparación → en camino → entregado.
- RF-ENT07: Flujo mínimo de pedido para retiro en punto: creado → pendiente de confirmación del vendedor → confirmado → en preparación → listo para retiro → entregado/cerrado.
- RF-ENT08: Flujo mínimo para servicio o agendamiento: creado → pendiente de confirmación del vendedor → confirmado/agendado → en atención → atención cerrada.
- RF-ENT09: Para pagos contra entrega, pago en punto o pago por acordar, el pedido puede avanzar a confirmado cuando el vendedor acepte la solicitud.
- RF-ENT10: Para pagos externos/manuales con comprobante requerido, el pedido solo puede avanzar a confirmado cuando el vendedor marque el pago como verificado.
- RF-ENT11: El comprador y el vendedor deben recibir notificaciones en cada cambio relevante de estado del pedido o del pago.
- RF-ENT12: El vendedor puede actualizar el estado del pedido desde el chat de IA o desde el panel.

### 14.3 Trazabilidad
- RF-ENT13: Cada transacción debe registrar: fecha y hora de creación, vendedor, comprador, producto o servicio, precio, medio de pago, estado del pago, comprobante cuando aplique, resultado de legibilidad del comprobante, modalidad de entrega o atención, estado del pedido y estado final.
- RF-ENT14: Cada cambio de estado debe registrar timestamp, usuario o sistema que lo ejecutó, estado anterior, estado nuevo y motivo cuando aplique.
- RF-ENT15: El comprador puede consultar el estado actual y el historial de sus transacciones.
- RF-ENT16: El vendedor puede consultar el historial completo de pedidos, solicitudes y agendamientos recibidos.
- RF-ENT17: El administrador puede auditar cualquier transacción en caso de disputa.

### 14.4 Alcance Logístico del MVP
- RF-ENT18: En el MVP no habrá módulo de repartidores propios de la plataforma.
- RF-ENT19: En el MVP no habrá asignación automática de mensajeros ni rastreo en tiempo real de repartidores.
- RF-ENT20: La entrega será responsabilidad del vendedor o de terceros logísticos coordinados por el vendedor por fuera de la plataforma.
- RF-ENT21: La plataforma solo registrará estados manuales de entrega, retiro o atención para mantener informado al comprador.

## 15. Requisitos de Calificaciones y Reputación

- RF-CAL01: Al finalizar una compra o servicio, el comprador recibe una invitación a calificar la experiencia.
- RF-CAL02: La calificación debe ser simple: estrellas del 1 al 5 más un comentario opcional.
- RF-CAL03: La calificación es por: (a) el vendedor / negocio y (b) el producto o servicio específico.
- RF-CAL04: El puntaje promedio del vendedor debe mostrarse en el mapa y en su ficha pública.
- RF-CAL05: El vendedor puede ver todas las calificaciones recibidas y responder públicamente a los comentarios.
- RF-CAL06: Las calificaciones no pueden editarse ni eliminarse por el comprador una vez enviadas (solo el administrador puede moderarlas).
- RF-CAL07: La IA debe considerar la calificación del vendedor como uno de los criterios de ordenamiento y recomendación.
- RF-CAL08: Los vendedores con calificaciones muy bajas (p. ej. < 2.5 estrellas durante 30 días) deben generar una alerta para el administrador.
- RF-CAL09: Los compradores que no hayan realizado ninguna compra no pueden calificar un vendedor.

---

## 16. Requisitos No Funcionales

### 16.1 Rendimiento
- RNF-01: El tiempo de respuesta del chat de IA no debe superar 3 segundos por mensaje en condiciones normales de carga.
- RNF-02: La actualización del mapa debe ocurrir en menos de 2 segundos tras un cambio en los filtros de búsqueda.
- RNF-03: La aplicación debe soportar al menos 1.000 usuarios concurrentes en la fase inicial de lanzamiento.
- RNF-04: La experiencia conversacional debe mantener bajos tiempos de respuesta incluso con múltiples usuarios conectados simultáneamente.
- RNF-05: Las acciones transaccionales desde el chat deben responder con confirmación visible al usuario en el menor tiempo posible y sin bloquear la conversación.

### 16.2 Disponibilidad
- RNF-06: La plataforma debe tener una disponibilidad mínima del 99.5% mensual.
- RNF-07: Los módulos críticos de conversación, búsqueda y visualización de resultados deben diseñarse con tolerancia a fallos.
- RNF-08: Los módulos críticos de pedidos, notificaciones y trazabilidad deben manejar estados pendientes o fallidos sin perder información.

### 16.3 Seguridad
- RNF-09: Toda la comunicación entre cliente y servidor debe estar cifrada con TLS 1.2 o superior.
- RNF-10: La plataforma no debe almacenar ni procesar datos financieros sensibles del comprador.
- RNF-11: Los datos personales de usuarios deben gestionarse conforme a la Ley 1581 de 2012 (Ley de Protección de Datos de Colombia).
- RNF-12: Las contraseñas deben almacenarse con hashing seguro (bcrypt o equivalente).
- RNF-13: El sistema debe implementar límites de tasa (rate limiting) en las APIs para prevenir abuso.
- RNF-14: Las configuraciones de medios de pago del vendedor deben contar con auditoría y control de cambios.

### 16.4 Usabilidad
- RNF-15: La experiencia del comprador debe permitir llegar a una recomendación relevante en no más de 5 intercambios con la IA.
- RNF-16: La experiencia del vendedor debe permitir crear un producto o servicio en no más de una conversación de 10 mensajes.
- RNF-17: El MVP debe ser una aplicación web responsive con enfoque mobile-first.
- RNF-18: La experiencia del comprador debe evitar buscadores convencionales, tablas de resultados y formularios tradicionales como canal principal.
- RNF-19: El chat debe ser suficientemente claro para que pequeñas y medianas empresas puedan publicar y gestionar su oferta sin conocimientos técnicos avanzados.

### 16.5 Escalabilidad
- RNF-20: La arquitectura debe permitir escalar horizontalmente los servicios de IA, búsqueda y mapa de forma independiente.
- RNF-21: El sistema de base de datos debe soportar búsquedas geoespaciales eficientes.
- RNF-22: La capa de IA debe permitir iniciar con tecnologías open source y migrar o combinarse posteriormente con IAs pagas sin rediseñar todo el producto.

### 16.6 Mantenibilidad
- RNF-23: El sistema de prompts de la IA debe ser configurable sin necesidad de redespliegue de código.
- RNF-24: El sistema debe tener logs de errores y métricas de uso accesibles para el equipo de operaciones.
- RNF-25: Las integraciones con IA, mapas, almacenamiento, comprobantes y notificaciones deben implementarse mediante abstracciones para permitir cambio de proveedor.

### 16.7 Gestión de Adjuntos y Legibilidad
- RNF-26: Los comprobantes de pago adjuntos por compradores solo deben aceptarse en formatos permitidos: PDF o imagen.
- RNF-27: La plataforma debe validar los archivos adjuntos contra tamaño máximo, tipo MIME, extensión permitida, archivo dañado y amenazas de seguridad antes de procesarlos.
- RNF-28: La IA o componente de visión/OCR debe validar la legibilidad del comprobante antes de enviarlo al vendedor para revisión manual.
- RNF-29: Los comprobantes de pago adjuntos por compradores deben almacenarse de forma segura, con acceso restringido al comprador, vendedor correspondiente y administrador autorizado.

## 17. Integraciones Necesarias

| Integración | Propósito | Prioridad |
|---|---|---|
| **Google Maps, Mapbox u opción equivalente** | Visualización de mapa, geolocalización y cálculo de distancias | Alta (MVP) |
| **Motor IA open source** | Motor principal para diálogo, identificación de intenciones y ejecución de acciones del MVP | Alta (MVP) |
| **Componente OCR / visión para comprobantes** | Validar que PDFs o imágenes de comprobantes sean legibles antes de enviarlos al vendedor | Alta (MVP) |
| **Abstracción para IAs pagas** | Permitir escalamiento futuro a OpenAI, Anthropic, Google u otros modelos pagos | Media (diseño desde MVP) |
| **Proveedor de notificaciones web / push** | Alertas a compradores y vendedores | Alta (MVP) |
| **Proveedor de SMS o WhatsApp** | Notificaciones críticas como pedido recibido, confirmación o coordinación con vendedor | Media (MVP) |
| **Proveedor de correo electrónico transaccional** | Confirmaciones, soportes, comprobantes, alertas y estados de pedido | Alta (MVP) |
| **Proveedor de almacenamiento de archivos** | Fotos de productos, servicios y comprobantes adjuntos cuando aplique | Alta (MVP) |
| **Sistema de analíticas** | Monitoreo del comportamiento de usuarios y conversiones | Alta (MVP) |
| **Plataforma de repartidores o logística** | Integración con terceros logísticos para entregas, opcional según fase | Media (post-MVP o piloto) |

## 17.1 Escenario Prioritario de Intención de Compra Urgente (Batería de Carro)

Este escenario debe considerarse obligatorio dentro del MVP para validar la promesa de valor del producto: resolver una necesidad urgente mediante conversación, cercanía y disponibilidad real.

### 17.1.1 Frase de referencia del usuario

> "Necesito comprar una batería para mi carro hoy, cerca de mí, máximo $300.000, que me la instalen."

### 17.1.2 Requisitos funcionales end-to-end del escenario

- RF-ESC01: La IA debe extraer en el primer ciclo conversacional la intención principal (compra de batería), el nivel de urgencia (hoy), la restricción geográfica (cerca de mí), el presupuesto máximo ($300.000) y la necesidad de instalación.
- RF-ESC02: La IA debe consultar y priorizar vendedores o técnicos dentro de un radio cercano configurable, privilegiando disponibilidad inmediata.
- RF-ESC03: Antes de recomendar una opción final, la plataforma debe validar para cada candidato: stock o disponibilidad del servicio, precio final estimado, horario real de atención y reputación mínima.
- RF-ESC04: La IA debe generar una recomendación principal y hasta 2 alternativas, explicando de forma breve por qué cada una cumple o no cumple totalmente presupuesto, cercanía, urgencia e instalación.
- RF-ESC05: La IA debe permitir cerrar la transacción desde el chat coordinando modalidad: domicilio gestionado por el vendedor, cita, instalación en sitio o retiro.
- RF-ESC06: La IA debe permitir confirmar la solicitud desde el chat y dejar claro el medio de pago manual o externo configurado por el vendedor.
- RF-ESC07: Si el medio de pago requiere comprobante, la IA debe permitir adjuntarlo únicamente en PDF o imagen y validar que sea legible antes de enviarlo al vendedor.
- RF-ESC08: Si el comprobante no es legible, la IA debe rechazarlo, explicar el motivo y pedir un nuevo soporte antes de pasar a verificación manual del vendedor.
- RF-ESC09: La transacción debe generar una confirmación de pedido o soporte interno.
- RF-ESC10: Al confirmarse la selección, el sistema debe notificar automáticamente al vendedor o prestador con el resumen de la solicitud, estado del pedido y estado del pago.

### 17.1.3 Criterios de aceptación

- CA-ESC01: En no más de 5 intercambios, el usuario debe recibir al menos una opción válida con instalación y dentro del presupuesto o una explicación clara de por qué no existe.
- CA-ESC02: Si no hay opciones dentro de $300.000, la IA debe sugerir alternativas controladas: aumentar presupuesto, ampliar radio, cambiar marca/tipo o aceptar instalación en otro horario, sin perder el contexto de urgencia.
- CA-ESC03: La recomendación principal debe incluir al menos: nombre del proveedor, distancia estimada, precio estimado, tiempo estimado de atención, calificación, modalidad de atención y medio de pago disponible.
- CA-ESC04: Al confirmar compra, cita o solicitud, el vendedor/prestador debe recibir notificación en menos de 10 segundos por el canal configurado: app, web, push, WhatsApp o correo.
- CA-ESC05: El comprador debe recibir confirmación inmediata del estado: pedido creado, cita agendada, solicitud enviada, pago pendiente de comprobante, comprobante ilegible, pago pendiente de verificación manual, pago acordado, pago en punto, pago contra entrega o pedido confirmado.
- CA-ESC06: En pagos externos/manuales que requieran comprobante, un PDF o imagen ilegible no debe llegar al vendedor como soporte válido; la IA debe pedir al comprador que cargue uno nuevo.
- CA-ESC07: El comprador no debe usar buscador, tabla ni formulario para resolver este escenario; toda la interacción debe poder completarse desde el chat.

## 18. Reglas de Negocio

### Vendedores
- RN-01: Un vendedor no puede aparecer en el mapa si su suscripción está vencida.
- RN-02: Un vendedor con suscripción activa puede tener máximo 50 productos o servicios activos en el plan inicial del MVP. Este límite podrá cambiar cuando existan planes diferenciados.
- RN-03: Un vendedor puede tener múltiples categorías de productos o servicios, pero debe tener al menos una categoría principal.
- RN-04: Los productos con stock en cero no deben aparecer como disponibles en las búsquedas del comprador.
- RN-05: Un vendedor suspendido por el administrador no puede reactivarse automáticamente; requiere revisión manual.
- RN-06: El vendedor debe configurar al menos un medio de pago manual o externo para que el comprador pueda concretar transacciones.
- RN-07: Los medios de pago y sus instrucciones deben ser visibles y comprensibles para el comprador antes de confirmar la transacción.
- RN-08: Cada medio de pago debe indicar si requiere comprobante.
- RN-09: Los cambios en configuración de medios de pago deben quedar auditados.

### Compradores
- RN-10: Un comprador solo puede ver vendedores inscritos, activos y con suscripción vigente.
- RN-11: Un comprador puede completar una transacción desde el chat siempre que el vendedor tenga disponibilidad y al menos un medio de pago activo.
- RN-12: Un comprador solo puede calificar un vendedor o producto/servicio si tiene una transacción completada con ese vendedor.
- RN-13: El comprador debe interactuar principalmente con el chat para buscar, ver, comparar, confirmar, comprar y consultar estados.

### Transacciones
- RN-14: Toda transacción debe clasificarse como pedido de producto, solicitud de servicio o agendamiento.
- RN-15: Toda transacción debe tener estado del pedido y estado del pago como campos separados.
- RN-16: Toda transacción debe tener trazabilidad del medio de pago: contra entrega, en punto, transferencia externa, consignación bancaria, efectivo, acuerdo directo u otro medio configurado.
- RN-17: La plataforma no confirma pagos de forma automática; los pagos externos/manuales dependen de confirmación o verificación del vendedor.
- RN-18: Para pago contra entrega, pago en punto o pago por acordar, el pedido puede avanzar a confirmado cuando el vendedor acepte la solicitud.
- RN-19: Para transferencia, consignación o depósito con comprobante requerido, el pedido no debe avanzar a confirmado, preparación, envío o entrega hasta que el vendedor verifique el comprobante de pago.
- RN-20: Todo comprobante adjunto por el comprador debe estar en formato PDF o imagen.
- RN-21: Todo comprobante debe pasar primero por validación automática de legibilidad de la IA antes de llegar al vendedor como soporte válido para revisión manual.
- RN-22: Si la IA determina que el comprobante es ilegible o inválido, el estado del pago debe permanecer en "pendiente de comprobante" y el comprador debe cargar un nuevo soporte.
- RN-23: Todo comprobante legible adjunto por el comprador debe quedar asociado a la transacción, con estado de revisión: pendiente, verificado, rechazado o reemplazado.
- RN-24: Si el vendedor rechaza un comprobante, debe registrar un motivo visible para el comprador.
- RN-25: Toda transacción debe generar una confirmación de pedido o soporte interno.
- RN-26: La plataforma no custodiará dinero ni transferirá pagos de compras entre comprador y vendedor.
- RN-27: Para el MVP no se cobrará comisión por pedido gestionado. El único ingreso inicial será la suscripción del vendedor.

### Cancelaciones y Disputas
- RN-28: El comprador puede cancelar una transacción antes de que el vendedor la confirme.
- RN-29: El comprador puede solicitar cancelación después de la confirmación, pero el vendedor debe aceptarla si el pedido ya está en preparación, en camino o en atención.
- RN-30: El vendedor puede rechazar una transacción antes de confirmarla, registrando un motivo visible para el comprador.
- RN-31: Si el comprador no carga comprobante dentro del tiempo definido para medios que lo requieren, la transacción puede quedar vencida o cancelada automáticamente según configuración.
- RN-32: Si el vendedor no responde una transacción en el tiempo definido, la plataforma debe notificar al comprador y permitir cancelar o intentar con otro vendedor.
- RN-33: Si hay disputa porque el comprador afirma haber pagado y el vendedor no puede verificar el pago, la transacción debe quedar en estado de disputa para revisión de soporte o cierre manual.
- RN-34: Las reglas detalladas de tiempos máximos de respuesta, vencimiento y disputa deben configurarse por operación de la plataforma antes de producción.

### Calificaciones
- RN-35: Una calificación solo puede dejarse una vez por transacción completada.
- RN-36: El puntaje de reputación del vendedor se calcula como promedio ponderado de las últimas 90 calificaciones recibidas.

### Geolocalización
- RN-37: El radio de búsqueda predeterminado es de 5 km desde la ubicación del comprador.
- RN-38: Si no hay resultados en 5 km, la IA debe sugerir ampliar el radio y esperar confirmación del usuario antes de hacerlo.

## 19. Modelo Básico de Monetización

| Fuente de ingreso | Descripción | Frecuencia | Alcance MVP |
|---|---|---|---|
| **Suscripción vendedor** | Tarifa mensual fija por mantener perfil activo en la plataforma | Mensual | Incluido |
| **Planes premium de vendedor** | Niveles de suscripción con mayor visibilidad, más productos activos o estadísticas avanzadas | Mensual | Post-MVP |
| **Publicidad / destacados** | Opción para que vendedores paguen por aparecer primero en resultados del mapa o del chat | A definir | Post-MVP |
| **Suscripción premium comprador** | Tarifa opcional para compradores con beneficios adicionales | A definir | Post-MVP |
| **Comisión por pedido gestionado** | Cargo por pedido creado o gestionado desde la plataforma, sin procesamiento de pago interno | A evaluar | Fuera del MVP |

### Consideraciones del modelo
- El ingreso inicial del MVP será la suscripción mensual del vendedor.
- Para el MVP no se cobrará comisión por pedido gestionado.
- Cualquier comisión futura por pedido gestionado debe ser transparente y conocida por el vendedor antes de inscribirse o aceptar el plan.
- El precio de la suscripción mensual del vendedor debe ser competitivo con alternativas como Rappi, Mercado Libre, Instagram Ads u otros canales de adquisición local.
- El modelo freemium para compradores maximiza la adopción inicial; la suscripción premium se evaluará solo si ofrece beneficios claros y tangibles.

## 20. Datos Mínimos que Debe Manejar la Plataforma

### Usuario Comprador
- ID único, nombre completo, correo, teléfono, fecha de registro
- Ubicación actual temporal por sesión o ubicación manual ingresada
- Historial de pedidos, compras, solicitudes o agendamientos
- Calificaciones emitidas
- Estado de suscripción premium cuando esta funcionalidad exista

### Usuario Vendedor
- ID único, nombre del negocio, nombre del propietario, documento de identificación cuando aplique, correo, teléfono
- Ubicación geográfica: coordenadas, dirección y área de cobertura cuando aplique
- Categorías del negocio, horario de atención
- Estado de suscripción: activo, inactivo, vencido o suspendido
- Método o mecanismo de pago de suscripción, si aplica
- Configuración de medios de pago al comprador: transferencia externa, consignación, pago contra entrega, pago en punto, efectivo, acuerdo directo u otro medio permitido
- Configuración por cada medio de pago: instrucciones, si requiere comprobante, tiempo esperado de validación y condiciones
- Calificación promedio y número de calificaciones
- Fecha de registro y última actividad

### Producto / Servicio
- ID único, ID del vendedor, nombre, descripción, categoría
- Precio, stock disponible o disponibilidad del servicio, estado activo/inactivo/agotado/no disponible
- Fotos, tiempo estimado de entrega, instalación, atención o preparación
- Modalidades disponibles: entrega, retiro, instalación, atención en sitio, atención en local o agendamiento
- Calificación promedio del producto o servicio

### Transacción
- ID único, tipo de transacción: pedido de producto, solicitud de servicio o agendamiento
- ID del comprador, ID del vendedor, lista de productos o servicios
- Precio total estimado o acordado
- Medio de pago manual o externo seleccionado
- Estado del pedido: creado, pendiente de confirmación del vendedor, confirmado, en preparación, listo para retiro, en camino, entregado, atención cerrada, cancelado o rechazado
- Estado del pago: no requerido todavía, por acordar, contra entrega, pago en punto, efectivo, pendiente de comprobante, comprobante ilegible, pendiente de verificación manual, verificado, rechazado o cancelado
- Comprobante de pago asociado cuando aplique: URL segura, tipo de archivo, fecha de carga, estado de legibilidad, resultado de validación IA, estado de revisión manual y motivo de rechazo cuando aplique
- Modalidad de entrega, instalación, atención o retiro
- Dirección de entrega o ubicación de atención cuando aplique
- Timestamps de cada cambio de estado
- Confirmación de pedido o soporte interno asociado

### Confirmación / Soporte Interno
- ID único, ID de transacción
- Tipo de documento: confirmación de pedido, soporte interno o comprobante de pago externo adjunto en PDF/imagen
- Descripción de ítems, subtotal, total, modalidad, medio de pago seleccionado y condiciones acordadas
- Fecha de emisión y estado del documento

### Conversación de IA
- ID de sesión, ID del usuario, timestamps
- Intenciones identificadas, filtros aplicados al mapa
- Acciones solicitadas y confirmadas
- Adjuntos cargados desde el chat asociados a transacciones, especialmente comprobantes de pago cuando aplique, incluyendo tipo de archivo, resultado de legibilidad y estado de validación
- Nota: el contenido de los mensajes puede no almacenarse permanentemente por privacidad

### Calificación
- ID único, ID del comprador, ID del vendedor, ID del producto o servicio, ID de transacción
- Puntaje de 1 a 5, comentario, fecha, respuesta del vendedor

## 21. Riesgos, Dependencias y Preguntas Abiertas

### Riesgos

| Riesgo | Impacto | Probabilidad | Mitigación sugerida |
|---|---|---|---|
| Baja adopción inicial de vendedores (cold start) | Alto | Alta | Estrategia de onboarding activo; primeros vendedores con período de prueba gratuito |
| Calidad inconsistente de las respuestas de la IA open source | Alto | Media | Evaluación continua del modelo; prompt engineering cuidadoso; fallback a flujos controlados |
| Latencia en la actualización del mapa afecta la experiencia | Alto | Media | Optimización de queries geoespaciales; caché de resultados frecuentes |
| Fraude en transacciones o perfiles falsos de vendedores | Alto | Media | Verificación de identidad en inscripción; monitoreo de comportamiento anómalo |
| Comprobantes de pago falsos o ilegibles en pagos externos | Alto | Media | Validación de legibilidad por IA, validación manual del vendedor, trazabilidad del adjunto, estados de rechazo y monitoreo de disputas |
| Falsos positivos o falsos negativos en validación de legibilidad | Medio | Media | Umbrales conservadores, opción de reintento, auditoría y revisión manual en casos de disputa |
| Confusión del comprador frente a medios de pago externos | Medio | Media | Mensajes claros en el chat sobre instrucciones de pago, carga de comprobante y estado de verificación manual |
| Confusión entre estado de pedido y estado de pago | Alto | Media | Modelo de datos y UX con estados separados y mensajes claros |
| Reglas incompletas de cancelación o disputa | Alto | Media | Definir tiempos máximos, responsables y causales antes de producción |
| Vendedores con información desactualizada (stock, horario o medios de pago) | Medio | Alta | Recordatorios proactivos de IA, penalización de reputación y alertas al administrador |
| Dependencia futura de APIs pagas de IA | Medio | Media | Abstraer el motor de IA desde el MVP para permitir cambio o combinación de proveedores |

### Dependencias Externas
- Disponibilidad, costos y capacidades del motor open source de IA seleccionado.
- Posibilidad de escalar posteriormente a proveedores de IA pagados.
- Términos de uso de Google Maps, Mapbox u otro proveedor de mapas y costos por volumen.
- Canales de notificación: correo, WhatsApp, SMS o push web.
- Proveedor de almacenamiento seguro para fotos, soportes y comprobantes.
- Componente OCR / visión para validar legibilidad de comprobantes.
- Mecanismo de cobro de suscripción del vendedor, si se decide automatizarlo.

### Decisiones Cerradas para el MVP
1. No se procesarán pagos de compras dentro de la plataforma.
2. No habrá emisión de documentos legales externos.
3. La compra completa desde el chat significa creación y seguimiento de una transacción trazable, no recaudo del dinero.
4. El estado del pedido y el estado del pago se manejarán por separado.
5. Los repartidores propios y el rastreo en tiempo real quedan fuera del MVP.
6. Para el MVP no se cobrará comisión por pedido gestionado.
7. El ingreso inicial del MVP será la suscripción mensual del vendedor.
8. Los comprobantes serán obligatorios solo para medios configurados como “requiere comprobante”.

### Preguntas Abiertas
1. **¿Cuál es el precio de la suscripción mensual del vendedor?** ¿Habrá un solo plan inicial o varios niveles desde el lanzamiento?
2. **¿La plataforma opera solo en Colombia?** ¿O se planea expansión regional desde el inicio?
3. **¿Qué motor open source de IA se usará para el MVP?** ¿Llama, Mistral, Phi, Rasa, LangChain, Semantic Kernel, Ollama u otra combinación?
4. **¿Qué proveedor de IA paga se contemplará como opción futura de escalamiento?**
5. **¿Cuáles medios de pago manuales o externos estarán permitidos inicialmente?** Se sugieren: transferencia, consignación, pago contra entrega, pago en punto, efectivo y acuerdo directo.
6. **¿Cuáles serán los tiempos máximos de respuesta del vendedor?** Por ejemplo: confirmar pedido, verificar comprobante o rechazar solicitud.
7. **¿Cuál será el tiempo máximo para que el comprador cargue comprobante cuando el medio lo requiere?**
8. **¿Cómo se manejarán disputas cuando el comprador afirme haber pagado y el vendedor no pueda verificar el pago?**
9. **¿Los vendedores pueden tener múltiples sedes o sucursales?** ¿Cada sede será un perfil independiente o una ubicación secundaria?
10. **¿Los vendedores pueden ofrecer servicios además de productos físicos desde el MVP?** El documento lo contempla, pero se debe priorizar qué categorías entran primero.
11. **¿Habrá moderación humana de contenido o será completamente automatizada?**

## 22. Recomendación de Fases para Construir el Producto

### Fase 0 — Validación de Negocio (pre-desarrollo)
**Duración estimada**: 4-6 semanas  
**Objetivo**: Validar supuestos críticos antes de invertir en desarrollo.

- Entrevistar a 20-30 vendedores potenciales para validar disposición de pago por suscripción y casos de uso.
- Validar con vendedores cuáles medios de pago manuales o externos desean ofrecer.
- Validar qué medios requieren comprobante y qué instrucciones mínimas necesita el comprador.
- Validar con compradores si aceptan cerrar compras desde chat con pago contra entrega, pago en punto, transferencia externa o comprobante.
- Entrevistar a 30-50 compradores para validar el modelo conversacional vs. búsqueda tradicional.
- Definir precio de suscripción del vendedor.
- Definir reglas iniciales de cancelación, vencimiento, disputa y tiempos máximos de respuesta.
- Definir stack tecnológico web, motor IA open source, mapas, comprobantes, almacenamiento y notificaciones.
- Validar que el MVP será web responsive, no app nativa.

---

### Fase 1 — MVP Core Web Conversacional
**Duración estimada**: 3-4 meses  
**Objetivo**: Probar el ciclo completo: conversación → mapa → recomendación → transacción → confirmación → seguimiento.

**Entregables**:
- Aplicación web responsive mobile-first.
- Registro de compradores y vendedores.
- Chat de IA básico para compradores: identificación de necesidad, resultados, recomendaciones y acciones.
- Experiencia comprador sin buscador convencional, tablas ni formularios como canal principal.
- Mapa con vendedores activos y actualización dinámica básica.
- Catálogo de productos y servicios, creado por chat o configuración asistida.
- Flujo completo de pedido, solicitud o agendamiento desde el chat.
- Modelo separado de estado del pedido y estado del pago.
- Medios de pago manuales o externos configurables por vendedor.
- Carga de comprobante de pago desde el chat cuando el medio lo requiera, únicamente en PDF o imagen.
- Validación automática de legibilidad del comprobante por IA antes de enviarlo al vendedor.
- Notificación al vendedor con comprobante legible y validación manual del pago cuando aplique.
- Confirmación de pedido o soporte interno.
- Reglas básicas de cancelación, vencimiento y disputa.
- Calificación post-compra o post-atención simple.
- Suscripción mensual de vendedores.
- Panel de administración mínimo.
- Motor IA open source para diálogo e intenciones, con capa de abstracción para migrar a IA paga.

---

### Fase 2 — Gestión Conversacional del Vendedor
**Duración estimada**: 2-3 meses  
**Objetivo**: Hacer que el vendedor pueda gestionar todo su negocio desde el chat.

**Entregables**:
- Chat de IA del vendedor con gestión completa de productos, servicios, inventario y pedidos.
- Configuración conversacional de medios de pago manuales o externos.
- Gestión conversacional de confirmaciones, rechazos, comprobantes y estados.
- Reportes conversacionales: ventas estimadas, ingresos informativos, productos/servicios más solicitados.
- Notificaciones inteligentes de la IA al vendedor.
- Mejoras en el flujo socrático del comprador.
- Planes de suscripción diferenciados para vendedores.

---

### Fase 3 — Entregas, Trazabilidad y Mobile
**Duración estimada**: 2-3 meses  
**Objetivo**: Completar el ciclo logístico y preparar la experiencia mobile avanzada.

**Entregables**:
- Mejoras en gestión de entregas a domicilio gestionadas por el vendedor.
- Seguimiento avanzado del estado del pedido.
- Integración opcional con operadores logísticos terceros.
- Evaluación de módulo de repartidores propios si el modelo lo justifica.
- Evaluación de app nativa iOS/Android o PWA avanzada.

---

### Fase 4 — Crecimiento, IA Paga y Monetización Avanzada
**Duración estimada**: Continuo  
**Objetivo**: Optimizar la plataforma para escala, calidad de IA y maximización de ingresos.

**Entregables**:
- Integración o migración parcial a IAs pagas si mejora calidad, latencia o escalabilidad.
- Suscripción premium para compradores.
- Funcionalidad de destacados y publicidad para vendedores.
- Analíticas avanzadas para vendedores.
- Evaluación de comisión por pedido gestionado, sin procesamiento interno del pago.
- Programa de fidelización para compradores.
- Soporte multi-sede para vendedores.
- Expansión geográfica.
- Aplicaciones nativas si la adopción lo justifica.

*Fin del documento de requisitos mínimos del producto.*

---

**Próximos pasos sugeridos**:
1. Revisar y validar esta versión 1.1 con los stakeholders clave del negocio.
2. Resolver las preguntas abiertas de la Sección 21 antes de iniciar el diseño técnico.
3. Ejecutar la Fase 0 de validación con usuarios reales.
4. Con las preguntas abiertas resueltas, iniciar la definición de arquitectura técnica.
