##

** **La página actualmente sólo tiene versión móvil** **

<p align="center">
  <a href="https://github.com/AngelFranco719/Spotify-Roadmap-API-CEnter">
    <img src="https://img.shields.io/badge/Ver%20Repositorio%20Backend-181717?style=for-the-badge&logo=github&logoColor=white" alt="Ver Repositorio Backend">
  </a>
  <a href="https://musical-recommender-frontend.vercel.app/">
    <img src="https://img.shields.io/badge/Ver%20Página-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Ver Página">
  </a>
</p>

# 🎵 Musical Recommender System

Un sistema inteligente de recomendación musical que genera playlists personalizadas basadas en el análisis de relaciones entre artistas y algoritmos de búsqueda tabú.


# 🌌 Musical Recommender Frontend

Una aplicación web interactiva para crear playlists personalizadas de Spotify basadas en "estaciones musicales" que explores durante diferentes períodos de tiempo.

## ✨ Características

-   **Búsqueda de canciones**: Busca tus canciones favoritas en el catálogo de Spotify
-   **Estaciones musicales**: Crea "estaciones" con canciones que definen tu viaje musical
-   **Duración personalizada**: Asigna tiempo específico (15-120 minutos) a cada estación
-   **Generación de playlist**: El sistema genera automáticamente una playlist completa basada en tus estaciones
-   **Visualización en tiempo real**: Observa el progreso de generación con efectos visuales estelares
-   **Integración con Spotify**: Obtén tu playlist directamente en tu cuenta de Spotify

## 🚀 Tecnologías

-   **React 19** con TypeScript
-   **Vite** - Build tool y dev server
-   **Tailwind CSS v4** - Estilos
-   **Framer Motion** - Animaciones
-   **SignalR** - WebSocket para actualizaciones en tiempo real
-   **Lucide React** - Iconos

## 📦 Instalación

bash

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Scripts disponibles

bash

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Compila el proyecto para producción
npm run lint     # Ejecuta el linter
npm run preview  # Previsualiza la build de producción
```

## 🎨 Estructura del proyecto
```
src/
├── Components/
│   ├── ConfirmStations/        # Diálogo de confirmación
│   ├── ConfirmTrackDialog/     # Confirmar agregar estación
│   ├── LoadingComponents/      # Pantalla de carga y efectos
│   ├── PlaylistResult/         # Resultado final de la playlist
│   ├── Results/                # Resultados de búsqueda
│   ├── SearchResultsMenu/      # Menú de resultados
│   ├── SearchTrackBar/         # Barra de búsqueda
│   ├── Stations/               # Componentes de estaciones
│   └── StationsVisualizer/     # Visualizador de estaciones
├── Definitions/                # Tipos TypeScript
├── useFetch.tsx               # Custom hook para fetch
└── useProgressSocket.tsx      # Hook para WebSocket
```

## 🎯 Flujo de la aplicación

1.  **Búsqueda**: El usuario busca canciones en Spotify
2.  **Selección**: Elige canciones y define duración para cada "estación"
3.  **Visualización**: Las estaciones se muestran con gradientes de colores únicos
4.  **Generación**: Al confirmar, se genera la playlist en tiempo real
5.  **Resultado**: Se muestra la playlist completa con enlace a Spotify

## 🌐 Backend

Esta aplicación requiere un backend compatible que implemente:

-   API REST para búsqueda de canciones
-   SignalR hub para actualizaciones en tiempo real
-   Generación de playlists de Spotify

URL del backend: `https://spotify-backend.agreeablemushroom-8c2dff51.westus2.azurecontainerapps.io`

## 🎨 Temas visuales

La aplicación usa un tema espacial/estelar con:

-   Gradientes dinámicos para cada estación
-   Efectos de partículas (estrellas)
-   Animaciones suaves con Framer Motion
-   Paleta de colores oscura con acentos brillantes

## 📱 Características de UI/UX

-   **Animaciones fluidas**: Transiciones suaves entre estados
-   **Feedback visual**: Indicadores de carga y progreso en tiempo real
-   **Confirmaciones**: Diálogos de confirmación para acciones importantes

## 🔧 Configuración

El proyecto usa Tailwind CSS v4 con configuración personalizada:

css

```css
@theme {
  --color-carbonite-gray: #181717;
  --color-light-blue: #1A97E8;
  --font-Roboto: 'Roboto', sans-serif;
  --font-MPLUSRounded1c: 'M PLUS Rounded 1c', sans-serif;
  --font-BalsamiqSans: 'Balsamiq Sans';
  --font-Quicksand: 'Quicksand', sans-serif;
}
```
