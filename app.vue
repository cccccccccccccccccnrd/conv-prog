<template>
  <div v-if="isLoading" class="absolute w-screen h-screen flex justify-center items-center z-[100]" style="backdrop-filter: blur(2px);">
    <p class="text-4xl">...</p>
  </div>
  <div class="h-[85vh]">
    <div class="w-full p-2" v-for="message in conversation">
      <Comms
        :message="message"
      />
    </div>
  </div>
  <div class="h-[15vh] w-full p-2">
    <Prompt />
  </div>
</template>

<script setup lang="ts">
const conversation = useState('conversation', () => [])
const isLoading = useState('isLoading')
</script>

<style>
body {
  background: rgba(239, 239, 239, 1);
}

.c {
  border-radius: 10px;
  background: rgba(255, 255, 255 0.5);
  backdrop-filter: blur(1rem);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}
</style>
