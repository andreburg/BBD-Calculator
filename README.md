# SPA Calculator Website

This is a Single Page Application (SPA) calculator website built using vanilla JavaScript. The application includes a custom rendering engine and a custom router for managing different pages within the SPA.

## Components

The application uses a component-based architecture for building and managing UI elements. The `Components` class is responsible for managing and rendering components, and the `Component` class serves as the base class for creating individual components.

### Component Class

The `Component` class includes methods for side effects, rendering, and retrieving HTML content. It also provides a method `buildComponent` for creating HTML elements dynamically.

### Components Class

The `Components` class is a container for managing different components. It includes methods for adding, rendering, and getting components.

## Routing

The routing in this SPA is handled by a custom router implemented in the `Router` and `Route` classes. The `Router` class is responsible for loading routes based on the URL, and the `Route` class represents an individual route with an associated component.

### Router Class

The `Router` class takes an array of routes during initialization. It includes a method `LoadRoute` for loading a specific route based on the current URL.

### Route Class

The `Route` class represents a route in the SPA, associating a URL path with a specific component.

## State Management

The application uses a simple state management system implemented in the `State` class. It allows the storage and retrieval of application state, notifying listeners on state changes.

### State Class

The `State` class includes methods for notifying and silently changing state, ensuring that state changes trigger events for rendering.

## How to Install and Run

1. Ensure you have Node.js installed on your machine. If not, download and install it from [Node.js website](https://nodejs.org/).
2. Clone the repository.
3. Open a terminal or command prompt in the project directory.
4. Run the following commands:

   ```bash
   npm install
   node index.js
