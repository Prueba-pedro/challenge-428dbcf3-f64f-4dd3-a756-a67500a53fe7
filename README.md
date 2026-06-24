# Implementación de componentes standalone con señales y nuevo control de flujo en Angular

La empresa necesita actualizar su aplicación de banca digital para mejorar la experiencia del usuario y la eficiencia del código. Se requiere implementar componentes standalone utilizando las nuevas señales y el control de flujo en Angular. Los componentes deben manejar la interacción del usuario de manera eficiente y proporcionar una retroalimentación visual clara. Los componentes interactuarán con un servicio de backend que proporciona datos de transacciones en tiempo real.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | angular-l2 |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Creación de componente standalone básico

**Objetivo:** Desarrollar un componente standalone que muestre una lista de transacciones.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar las propiedades y eventos necesarios para el componente.
- Definir la estructura y el estilo del componente utilizando las nuevas señales de Angular.
- Implementar la lógica para mostrar la lista de transacciones.

**Entregable:** Componente standalone que muestra una lista de transacciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo las nuevas señales pueden mejorar la reactividad del componente.
- Piensa en la mejor manera de estructurar el componente para que sea reutilizable.

</details>

### Fase 2: Integración con servicio de backend

**Objetivo:** Conectar el componente con un servicio de backend para obtener datos de transacciones en tiempo real.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear un servicio que se comunique con el backend para obtener los datos de transacciones.
- Integrar el servicio con el componente standalone para mostrar los datos recibidos.
- Manejar posibles errores de comunicación con el backend.

**Entregable:** Componente standalone integrado con servicio de backend que muestra datos de transacciones en tiempo real.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar la asincronía al obtener datos del backend.
- Piensa en la mejor manera de manejar errores de comunicación.

</details>

### Fase 3: Mejora de la experiencia del usuario

**Objetivo:** Agregar funcionalidades adicionales para mejorar la experiencia del usuario, como la posibilidad de filtrar y ordenar las transacciones.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar funcionalidades de filtro y ordenamiento en el componente.
- Actualizar la interfaz de usuario para permitir al usuario interactuar con estas funcionalidades.
- Asegurar que el componente siga siendo reutilizable y mantenible.

**Entregable:** Componente standalone mejorado con funcionalidades de filtro y ordenamiento.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo mantener la reutilización y mantenibilidad del componente al agregar nuevas funcionalidades.
- Piensa en la mejor manera de actualizar la interfaz de usuario para que sea intuitiva y fácil de usar.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente standalone en Angular y cómo se diferencia de un componente regular?
- **paraQueSirve**: ¿Para qué sirve utilizar las nuevas señales y el control de flujo en Angular en este componente?
- **comoSeUsa**: ¿Cómo se usa un servicio de backend para obtener datos de transacciones en tiempo real en este componente?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al integrar un componente con un servicio de backend y cómo se pueden manejar?
- **queDecisionesImplica**: ¿Qué decisiones implica agregar funcionalidades de filtro y ordenamiento al componente y cómo afectan la experiencia del usuario?

## Criterios de Evaluacion

- Implementación correcta de un componente standalone utilizando las nuevas señales y el control de flujo en Angular.
- Integración exitosa con un servicio de backend para obtener datos de transacciones en tiempo real.
- Adición de funcionalidades de filtro y ordenamiento que mejoren la experiencia del usuario.
- Manejo adecuado de errores de comunicación con el backend.
- Componente reutilizable y mantenible.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
