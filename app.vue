<template>
  <div
    v-if="isLoading"
    class="absolute w-screen h-screen flex justify-center items-center z-[100]"
    style="backdrop-filter: blur(2px)"
  >
    <p class="text-4xl">...</p>
  </div>
  <div class="h-screen flex flex-col gap-2 px-2 pt-2">
    <div class="c flex-grow border border-black">
      <div class="w-full" v-for="message in conversation">
        <Comms :message="message" />
      </div>
    </div>
    <div class="h-[10vh] w-full overflow-hidden">
      <Prompt/>
    </div>
  </div>
</template>

<script setup lang="ts">
const conversation = useState('conversation', () => [])
const isLoading = useState('isLoading')
</script>

<style>
body {
  background: rgba(239, 239, 239, 1);
  background: black;
  color: rgba(239, 239, 239, 1);
}

p {
  line-height: 1 !important;
}

.c {
  border-radius: 10px;
  background: rgba(255, 255, 255 0.5);
  backdrop-filter: blur(1rem);
  box-shadow: 0 0 5em blue;
}
</style>
