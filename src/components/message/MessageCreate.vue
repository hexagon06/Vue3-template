<script setup lang="ts">
import { computed, ref } from 'vue';
import { useMessageStore } from '../../stores/messages';

const title=ref('')
const text=ref('')
const isValid = computed(() => title.value.length > 0)
const { addMessage } = useMessageStore()

async function create() {
  if(text.value.length > 0 ){
    await addMessage({
      title: title.value,
      text: text.value,
    })
    title.value = text.value = '';
  }
}
</script>

<template>
  <div>
    <input v-model="title">
    <input v-model="text">
    <button @click="create" :disabled="!isValid">Add</button>
  </div>
</template>

<style scoped>

</style>