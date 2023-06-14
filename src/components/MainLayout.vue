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
import { defineComponent } from "vue";

defineComponent({
  name: "MainLayout",
});
</script>
