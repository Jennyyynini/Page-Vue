# Data Table Management & Cat Display

A Vue 3 project demonstrating interactive UI features including dynamic data tables, filtering, sorting, pagination, state management with Pinia, routing with navigation guards, and component-based design. This project also includes a fun multi-route “Cats” section showcasing nested routes and route protection logic, and you get to see my cats!

---
## Want to Access All the Cat Photos?
If you’d like to unlock every cat profile and learn more about them, here are the answers:

**Cat Access Answers:**
- **Huihui**: Question-based access  
  Correct answer: **eat**

- **Macchiato**: Token-based access  
  Add the following to `localStorage`:
  - Key: `macchiato-token`
  - Value: `skinny-cat`

- **Huahua**: Multiple-choice access  
  Correct option: **2**

- **Chris**: Question-based access  
  Correct answer: **No**

## Features

### Data Table Module
- Load mock data via API
- Filter data by:
  - Name
  - Address
  - Gender
  - Date range
- Sort columns (ascending / descending)
- Pagination with configurable page size
- Add, edit, and delete rows
- Notifications and confirmation dialogs
- Centralized state management using **Pinia**

### State Management (Pinia)
- Stores table data, loading state, and edit state
- Encapsulates:
  - Filtering logic
  - Sorting logic
  - Pagination logic
- Demonstrates clean separation of state, actions, and getters

### Routing & Navigation
- Built with **Vue Router**, including nested routes
- Demonstrates multiple **route-guard strategies** for accessing detailed cat pages:
  - Question-based verification
  - Token-based access control
  - Multiple-choice validation
- Access state is persisted using `localStorage`

---


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
