# layouts

In Vue 3, layouts are used to define a common wrapper around multiple components or views in your application. They provide a way to encapsulate shared functionality, such as navigation, authentication, or page structure, and apply it consistently across different pages or components.

Here's an example of a complete Vue 3 application that includes a layout component and other components:

## MainLayout.vue (Layout Component):

```vue
<template>
  <div>
    <header>
      <h1>My App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <p>© 2023 My App</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'MainLayout',
});
</script>
```

## HomeComponent.vue (Component):

```vue
<template>
  <div>
    <h2>Welcome to the Home page!</h2>
    <p>This is the home page content.</p>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'Home',
});
</script>
```

## AboutComponent.vue (Component):

```vue
<template>
  <div>
    <h2>About Us</h2>
    <p>This is the About Us page.</p>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'About',
});
</script>
```

## router.ts (Vue Router configuration):

```typescript
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './HomeComponent.vue';
import AboutComponent from './AboutComponent.vue';

const routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/about',
    component: AboutComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

## main.ts (Entry point of the application):

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

## App.vue (Root component):

```vue
<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import MainLayout from './MainLayout.vue';

defineComponent({
  name: 'App',
  components: {
    MainLayout,
  },
});
</script>
```

To run this application, make sure you have Vue and Vue Router installed. Create the files with the provided content, and then run your application using a build tool like Vue CLI or a bundler like webpack.

The MainLayout component acts as the common layout wrapper for the other components. The router.ts file sets up the routes for the application, mapping paths to the respective components. The App.vue component defines the root component and includes the <router-view> tag, which renders the appropriate component based on the current route.

This example demonstrates a simple application structure with a layout and multiple components. You can expand on it by adding more components, nested routes, and additional functionality based on your requirements.
  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
