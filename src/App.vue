<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" class="bg-lime-200 justify-center">
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/messages">Go to Messages</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
