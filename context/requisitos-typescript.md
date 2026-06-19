Te dejo un prompt listo para usar. Ajusté una condición importante: para cumplir SOLID, no conviene usar herencia solo para reutilizar métodos privados; es mejor extraer colaboradores, servicios pequeños o funciones puras en archivos separados. La herencia solo debe usarse cuando exista una relación real **“es un”**.

Actúa como un arquitecto senior de software experto en TypeScript.

Necesito que generes código TypeScript aplicando estrictamente buenas prácticas de programación, respetando al 100% los principios SOLID, Clean Code y KISS — Keep It Simple, Stupid.

Reglas obligatorias de diseño:

1. Una sola responsabilidad por archivo.
2. Una sola clase por archivo.
3. Si un archivo contiene una clase, ese archivo no puede contener ningún otro artefacto adicional.
4. En el mismo archivo de una clase no se deben declarar:

   * variables globales
   * funciones externas
   * tipos
   * enumeraciones
   * constantes
   * interfaces
   * helpers
   * utilidades
   * cualquier otro artefacto que no sea la clase principal
5. Si una clase necesita una interfaz, esa interfaz debe estar en su propio archivo.
6. Si una clase necesita tipos, cada tipo debe estar en su propio archivo o agrupado únicamente si pertenece a un mismo contexto y no rompe la responsabilidad única.
7. Si una clase necesita constantes, estas deben estar en un archivo separado.
8. Si una clase necesita enumeraciones, cada enum debe estar en su propio archivo.
9. Si una clase necesita funciones auxiliares, estas deben estar en archivos separados como funciones puras o servicios especializados.
10. Evita métodos privados extensos. Si un método privado contiene lógica relevante, extrae esa lógica a otra clase, servicio, estrategia o función independiente.
11. No uses herencia para reutilizar código. Usa composición, inyección de dependencias o funciones puras.
12. Usa herencia únicamente cuando exista una relación real de tipo “es un”.
13. No mezcles lógica de negocio con infraestructura, persistencia, controladores, validaciones externas o detalles técnicos.
14. Usa nombres claros, expresivos y orientados al dominio.
15. Mantén las clases pequeñas, simples y fáciles de probar.
16. Evita sobreingeniería.
17. Evita abstracciones innecesarias.
18. Prioriza código legible sobre código “ingenioso”.
19. Todo código debe ser fácilmente testeable.
20. No generes código duplicado.

Estructura esperada:

* Cada clase debe estar en su propio archivo.
* Cada interfaz debe estar en su propio archivo.
* Cada tipo debe estar en su propio archivo cuando represente un concepto independiente.
* Cada enum debe estar en su propio archivo.
* Cada constante debe estar en su propio archivo o en un archivo de constantes propio del contexto.
* Cada función auxiliar debe estar en su propio archivo.
* Las dependencias deben inyectarse por constructor cuando aplique.
* Los nombres de archivos deben reflejar claramente el artefacto que contienen.

Ejemplos de lo que NO debes hacer:

No crear una clase junto con interfaces en el mismo archivo:

```ts
// user.service.ts

interface UserRepository {
  findById(id: string): Promise<User>;
}

export class UserService {
  constructor(private readonly repository: UserRepository) {}
}
```

Esto está prohibido porque el archivo contiene una clase y una interfaz.

No crear una clase junto con constantes en el mismo archivo:

```ts
// payment.service.ts

const MAX_PAYMENT_AMOUNT = 1000000;

export class PaymentService {
  validate(amount: number): boolean {
    return amount <= MAX_PAYMENT_AMOUNT;
  }
}
```

Esto está prohibido porque el archivo contiene una clase y una constante.

No crear una clase junto con funciones auxiliares en el mismo archivo:

```ts
// order.service.ts

function calculateTotal(items: Item[]): number {
  return items.reduce((total, item) => total + item.price, 0);
}

export class OrderService {
  createOrder(items: Item[]): Order {
    const total = calculateTotal(items);
    return new Order(items, total);
  }
}
```

Esto está prohibido porque el archivo contiene una clase y una función externa.

No crear tipos o enums dentro del mismo archivo de una clase:

```ts
// notification.service.ts

type NotificationChannel = 'email' | 'sms';

enum NotificationStatus {
  Pending = 'pending',
  Sent = 'sent'
}

export class NotificationService {
  send(channel: NotificationChannel): void {
    // lógica
  }
}
```

Esto está prohibido porque el archivo contiene una clase, un type y un enum.

No usar métodos privados complejos dentro de una clase:

```ts
export class InvoiceService {
  generateInvoice(order: Order): Invoice {
    const taxes = this.calculateTaxes(order);
    return new Invoice(order, taxes);
  }

  private calculateTaxes(order: Order): number {
    // lógica compleja de impuestos
    return 0;
  }
}
```

Esto debe evitarse. La lógica de impuestos debe extraerse a otra clase o función especializada.

Ejemplo correcto:

```ts
// invoice.service.ts

export class InvoiceService {
  constructor(private readonly taxCalculator: TaxCalculator) {}

  generateInvoice(order: Order): Invoice {
    const taxes = this.taxCalculator.calculate(order);
    return new Invoice(order, taxes);
  }
}
```

```ts
// tax-calculator.ts

export class TaxCalculator {
  calculate(order: Order): number {
    return 0;
  }
}
```

```ts
// tax-calculator.interface.ts

export interface TaxCalculator {
  calculate(order: Order): number;
}
```

Criterios de calidad que debes aplicar:

* SOLID estricto.
* Clean Code estricto.
* KISS estricto.
* Bajo acoplamiento.
* Alta cohesión.
* Código claro y mantenible.
* Separación explícita de responsabilidades.
* Evitar archivos con múltiples responsabilidades.
* Evitar clases grandes.
* Evitar métodos largos.
* Evitar lógica oculta en métodos privados complejos.
* Evitar dependencias concretas cuando corresponda usar interfaces.
* Evitar herencia innecesaria.
* Usar composición antes que herencia.

Cuando generes código, entrega también la estructura de carpetas sugerida.

Antes de entregar la solución, valida internamente que:

1. Ningún archivo con clase tenga interfaces, types, enums, constantes, funciones auxiliares o variables globales.
2. Ningún archivo tenga más de una clase.
3. Cada artefacto esté en su propio archivo.
4. La solución respete SOLID, Clean Code y KISS.
5. La solución sea simple, mantenible y testeable.

Ahora genera la solución TypeScript siguiendo estrictamente estas reglas.
