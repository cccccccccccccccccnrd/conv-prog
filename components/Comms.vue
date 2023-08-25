<template>
  <div
    class="c text-2xl p-2"
    :class="`${ message.type === 'computer' ? 'bg-black text-white' : ''}`"
  >
    <p v-if="message.type === 'human'">{{ message.content }}</p>
    <p v-else>{{ message.content.choices[0].message.content }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  message: {
    type: Object,
    required: true
  }
})

console.log(props.message)
</script>
