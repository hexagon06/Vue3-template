<script setup lang="ts">
import { onMounted } from 'vue'
import MessageDisplay from './MessageDisplay.vue'
import MessageCreate from './MessageCreate.vue'
import { storeToRefs } from 'pinia';
import { useMessageStore } from '../../stores/messages';

const { messages, initialized } = storeToRefs(useMessageStore())
const { fetch } = useMessageStore()

onMounted(async () => {
    if (!initialized) {
        await fetch()
    }
})
</script>

<template>
    <h1>Messages</h1>
    <message-create />
    <message-display v-for="(message, index) in messages" :key="index" :message="message" />
</template>

<style scoped>
</style>
