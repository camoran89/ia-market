# Application Design - Component Methods

## Overview
Este documento describe los métodos clave de cada componente, incluyendo la firma de entrada y salida esperada a nivel de diseño.

## Conversational Chat Component
- `startConversation(userId: string): ConversationSession`
  - Inicia una sesión de chat para el usuario.
- `processUserMessage(sessionId: string, message: string): ChatResponse`
  - Envía el mensaje al motor de IA y devuelve la respuesta.
- `executeChatAction(sessionId: string, action: ChatActionRequest): ActionResult`
  - Realiza una acción de negocio derivada del chat (por ejemplo, crear pedido).

## AI Intent Engine
- `interpretIntent(message: string): IntentResult`
  - Devuelve la intención identificada y entidades extraídas.
- `suggestFollowUp(intentResult: IntentResult): FollowUpPrompt`
  - Genera la siguiente pregunta o acción para el chat.
- `resolveAction(intentResult: IntentResult): BusinessAction`
  - Traduce la intención en una acción de negocio concreta.

## Search and Location Component
- `findNearbyVendors(location: Location, query: SearchQuery): SearchResults`
  - Retorna vendedores y productos cercanos que coinciden con la consulta.
- `getMapMarkers(results: SearchResults): MapMarker[]`
  - Construye los datos de los pins para el mapa.
- `resolveAddress(input: string): Location`
  - Convierte texto de ubicación en coordenadas.

## Order Management Component
- `createTransaction(request: TransactionRequest): TransactionSummary`
  - Crea un pedido, solicitud de servicio o agendamiento.
- `updateTransactionStatus(transactionId: string, status: TransactionStatus): TransactionSummary`
  - Actualiza el estado operativo del pedido.
- `getTransaction(transactionId: string): TransactionDetails`
  - Recupera información completa de la transacción.
- `listTransactionsForUser(userId: string, filter: TransactionFilter): TransactionSummary[]`
  - Lista transacciones del usuario con filtros.

## Receipt Validation Component
- `validateReceipt(fileReference: FileReference): ValidationResult`
  - Verifica legibilidad y formato del comprobante.
- `attachReceiptToTransaction(transactionId: string, fileReference: FileReference): ReceiptLink`
  - Asocia el comprobante al pedido correspondiente.
- `getReceiptStatus(transactionId: string): ReceiptStatus`
  - Consulta el estado de validación del comprobante.

## Subscription Management Component
- `registerSubscription(vendorId: string, subscriptionRequest: SubscriptionRequest): SubscriptionStatus`
  - Registra o actualiza la suscripción del vendedor.
- `verifySubscriptionStatus(vendorId: string): SubscriptionStatus`
  - Retorna el estado de activación de la suscripción.
- `requireSubscriptionForActivation(vendorId: string): ActivationResult`
  - Valida que el perfil público pueda habilitarse.

## Admin Panel Component
- `listUsers(filter: AdminUserFilter): AdminUserSummary[]`
  - Lista usuarios con filtros administrativos.
- `manageVendorStatus(vendorId: string, action: VendorAdminAction): AdminActionResult`
  - Activa, suspende o desactiva perfiles.
- `resolveDispute(disputeId: string, resolution: DisputeResolutionRequest): DisputeResult`
  - Cierra o actualiza disputas.

## Notification Component
- `sendNotification(notificationRequest: NotificationRequest): NotificationResult`
  - Envía una notificación a un destinatario.
- `queueNotification(notificationRequest: NotificationRequest): NotificationReceipt`
  - Programación de notificaciones para eventos.

## Storage Component
- `storeFile(fileUpload: FileUploadRequest): FileReference`
  - Guarda un archivo y retorna una referencia segura.
- `getFileUrl(fileReference: FileReference): string`
  - Genera URL de acceso temporal.
- `deleteFile(fileReference: FileReference): DeletionResult`
  - Elimina un archivo según políticas de retención.

## User Management Component
- `registerUser(userRegistration: UserRegistrationRequest): UserProfile`
  - Crea un nuevo usuario o vendedor.
- `authenticate(credentials: AuthenticationRequest): AuthResult`
  - Verifica credenciales y crea sesión.
- `authorize(userId: string, role: UserRole, resource: string): AuthorizationResult`
  - Valida permisos de acceso.

## Analytics Component
- `recordEvent(event: AnalyticsEvent): AnalyticsResult`
  - Registra métrica o evento de usuario.
- `queryMetrics(filter: AnalyticsQueryFilter): AnalyticsMetrics`
  - Retorna métricas agregadas para monitoreo.
