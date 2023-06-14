<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import MainLayout from "../src/components/MainLayout.vue";

defineComponent({
  name: "App",
  components: {
    MainLayout,
  },
});
</script>
