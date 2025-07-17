# Aplicación de Navegación React Native

## Descripción
Esta aplicación React Native cumple con los requisitos del módulo 3.5 "Desarrollo de componentes para dispositivos móviles" del grupo 2A, bajo la supervisión del docente Wilfredo Granados.

## Características Implementadas

### 1. Pantalla Principal (HomeScreen)
- Muestra información básica del módulo
- Nombre del módulo: "Navegación en React Native"
- Descripción del módulo y detalles académicos
- Botón para navegar a la segunda pantalla
- Diseño atractivo con gradientes y iconos

### 2. Segunda Pantalla (StudentScreen)
- Contiene una card personalizada con información del estudiante
- Botón para regresar a la pantalla principal
- Información del estudiante: Fernando de Jesus Hernandez Morales

### 3. Componente StudentCard Reutilizable
- Componente que recibe información como props
- Muestra:
  - Nombre completo: Fernando de Jesus Hernandez Morales
  - Edad: 18 años
  - ID de estudiante: 20200335
  - Imagen del estudiante
  - Información adicional (email, curso, grupo)

### 4. Navegación
- Implementada con React Navigation
- Stack Navigator para navegar entre pantallas
- Botones funcionales de navegación

## Tecnologías Utilizadas
- React Native
- React Navigation
- Expo Linear Gradient
- React Native Vector Icons
- Expo

## Requisitos Previos
- Node.js (versión 16 o superior)
- Expo CLI
- Expo Go app en tu dispositivo móvil (opcional)

## Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/fernand0dejesus/AppTwoScreenFernando2.git

```

### 2. Instalar Expo CLI (si no lo tienes instalado)
```bash
npm install -g @expo/cli
```

### 3. Instalar dependencias del proyecto
```bash
npm install
```

### 4. Instalar librerías específicas requeridas
```bash
# Instalar React Navigation
npm install @react-navigation/native @react-navigation/stack

# Instalar dependencias de Expo para React Navigation
npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view

# Instalar otras dependencias
npx expo install expo-linear-gradient
npm install react-native-vector-icons
```

### 5. Ejecutar la aplicación
```bash
npx expo start
```

### 6. Visualizar la aplicación
- Escanea el código QR con la app Expo Go en tu dispositivo móvil
- O presiona `i` para abrir en el simulador de iOS
- O presiona `a` para abrir en el emulador de Android

## Estructura del Proyecto
```
├── App.js                 # Componente principal y configuración de navegación
├── screens/
│   ├── HomeScreen.js      # Pantalla principal
│   └── StudentScreen.js   # Segunda pantalla
├── components/
│   └── StudentCard.js     # Componente reutilizable de tarjeta
├── package.json
└── README.md
```

## Funcionalidades Implementadas
- ✅ Navegación entre pantallas
- ✅ Componente reutilizable (StudentCard)
- ✅ Diseño responsive y atractivo
- ✅ Uso de gradientes y iconos
- ✅ Información detallada del estudiante
- ✅ Navegación fluida entre pantallas

## Capturas de Pantalla
<!-- Agregar capturas de pantalla aquí -->

## Información del Estudiante
**Fernando de Jesus Hernandez Morales**
- ID: 20200335
- Edad: 18 años
- Grupo: 2A
- Módulo: 3.5 - Desarrollo de componentes para dispositivos móviles
- Docente: Wilfredo Granados

## Dependencias Principales
```json
{
  "@react-navigation/native": "^6.x.x",
  "@react-navigation/stack": "^6.x.x",
  "expo": "~50.x.x",
  "expo-linear-gradient": "~12.x.x",
  "react": "18.x.x",
  "react-native": "0.73.x",
  "react-native-vector-icons": "^10.x.x"
}
```

## Solución de Problemas Comunes

### Error de módulos no encontrados
```bash
# Limpiar cache y reinstalar
npm start -- --reset-cache
# o
npx expo start --clear
```

### Error con react-native-vector-icons
Asegúrate de tener la fuente de iconos correctamente vinculada. En Expo, esto se maneja automáticamente.

## Licencia
Este proyecto es desarrollado con fines educativos para el módulo 3.5 del programa académico.

## Contacto
Fernando de Jesus Hernandez Morales - 20200335@ricaldone.edu.sv
