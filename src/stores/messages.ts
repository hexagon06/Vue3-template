import { defineStore } from 'pinia';
import { messageApi } from '../api/firestore-by-type/messageApi';
import { Message } from '../types';

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: [] as Message[],
    loading: false,
    initialized: false,
  }),
  actions: {
    async fetch() {
      this.$state.loading = true;
      const messages = await messageApi.getAll()
      this.$patch((state) => {
        state.messages = messages
        state.loading = false;
        this.initialized = true;
      })
    },
    async addMessage(message: Message) {
      const id = await messageApi.create(message)
      message.id = id;
      this.$patch(state => {
        state.messages = [...state.messages, message]
      })
    }
  }
})
