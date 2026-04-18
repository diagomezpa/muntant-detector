# 🧬 Mutant Detector

Una aplicación web desarrollada en Angular 17 que detecta si una secuencia de ADN pertenece a un mutante basándose en el análisis de patrones genéticos.

![Mutant Detector Preview](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)

## 📋 Descripción del Problema

El proyecto resuelve la necesidad de detectar si un humano es mutante basándose en su secuencia de ADN. Un mutante se identifica cuando se encuentran **más de una secuencia de cuatro letras iguales** de forma oblicua, horizontal o vertical en una matriz NxN.

### Criterios de Detección
- **Matriz NxN**: El ADN debe representarse como una tabla cuadrada
- **Caracteres válidos**: Solo se permiten A, T, C, G (bases nitrogenadas)
- **Patrones mutantes**: Secuencias de 4+ caracteres idénticos en línea
- **Direcciones**: Horizontal, vertical, diagonal y diagonal inversa

## ✨ Características

- ✅ **Interfaz moderna** con Tailwind CSS
- ✅ **Formularios reactivos** con validación en tiempo real
- ✅ **Ejemplos precargados** para pruebas rápidas
- ✅ **Diseño responsive** para móvil, tablet y desktop
- ✅ **Resultados visuales** con códigos de color
- ✅ **Validación robusta** de entrada de datos
- ✅ **Arquitectura escalable** con servicios separados

## 🚀 Instalación

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn
- Angular CLI

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/mutant-detector.git
cd mutant-detector

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm start

# 4. Abrir en el navegador
# http://localhost:4200
```

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Angular | 17.0.0 | Framework principal |
| TypeScript | 5.2.0 | Lenguaje de desarrollo |
| Tailwind CSS | 3.4.19 | Estilos y diseño |
| RxJS | 7.8.0 | Programación reactiva |
| Angular Forms | 17.0.0 | Formularios reactivos |

## 📱 Funcionalidades

### 🔍 Validación de ADN
```typescript
// Ejemplo de secuencia mutante
const dna = [
  "ATGCGA",
  "CAGTGC", 
  "TTATGT",
  "AGAAGG",
  "CCCCTA",  // ← Secuencia horizontal de C's
  "TCACTG"
];

isMutant(dna); // → true
```

### 🎯 Casos de Uso

| Tipo | Entrada | Resultado | Descripción |
|------|---------|-----------|-------------|
| **Mutante** | `ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG` | ✅ `true` | Múltiples secuencias detectadas |
| **Humano** | `ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACTG` | ❌ `false` | Una sola secuencia encontrada |
| **Inválido** | `ATGCGA,CAGTGC,TTATHT` | ⚠️ Error | Caracteres no válidos (H) |

### 🖥️ Interfaz de Usuario

#### Pantalla Principal
- **Header atractivo** con gradiente púrpura
- **Área de texto** para entrada de secuencias ADN
- **Botones de ejemplo** para carga rápida de datos
- **Validación en tiempo real** con mensajes descriptivos

#### Resultados
- 🟢 **Verde**: Mutante detectado
- 🔵 **Azul**: Humano confirmado  
- 🔴 **Rojo**: Error de validación

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       └── mutant.service.ts      # Lógica de detección
│   ├── features/
│   │   └── mutant/
│   │       ├── components/
│   │       │   └── mutant-checker/    # Componente principal
│   │       └── mutant.module.ts       # Módulo de funcionalidad
│   ├── shared/                        # Componentes compartidos
│   ├── app.component.*               # Componente raíz
│   └── app.module.ts                 # Módulo principal
├── styles.css                        # Estilos globales + Tailwind
└── index.html                       # Página principal
```

## 🧪 Algoritmo de Detección

### Proceso de Validación

1. **Validación de formato**: Verificar matriz NxN
2. **Validación de caracteres**: Solo A, T, C, G permitidos
3. **Búsqueda de patrones**: En 4 direcciones
4. **Conteo de secuencias**: Más de 1 = mutante

### Complejidad
- **Tiempo**: O(n²) - donde n es el tamaño de la matriz
- **Espacio**: O(n²) - para almacenar la matriz

## 🎨 Diseño Responsivo

La aplicación se adapta automáticamente a diferentes dispositivos:

- **📱 Móvil** (< 768px): Layout vertical, botones apilados
- **📊 Tablet** (768px - 1024px): Layout optimizado 
- **🖥️ Desktop** (> 1024px): Layout horizontal completo

## 🚦 Scripts Disponibles

```bash
# Desarrollo
npm start          # Servidor de desarrollo
npm run build      # Build de producción
npm test           # Ejecutar tests
npm run lint       # Linting del código

# Tailwind CSS
npx tailwindcss init  # Inicializar configuración
```

## 📊 Ejemplos de Uso

### Ejemplo 1: Mutante Detectado ✅
```
Entrada: ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG
Resultado: "¡Es un mutante! Se detectaron múltiples secuencias idénticas 🧬"
```

### Ejemplo 2: Humano Confirmado ❌  
```
Entrada: ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACTG
Resultado: "Es humano. No se detectaron suficientes secuencias mutantes."
```

### Ejemplo 3: Error de Validación ⚠️
```
Entrada: ATGCGA,CAGTGC,TTATHT
Resultado: "ADN inválido: debe ser una matriz NxN con solo caracteres A, T, C y G."
```

## 🔧 Configuración de Desarrollo

### Tailwind CSS Setup
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Angular Environment
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como ejercicio práctico de Angular en **2 horas**.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!