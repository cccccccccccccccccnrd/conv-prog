<template>
  <div
    class="border-b border-gray-800 opacity-80 hover:opacity-100"
    :class="`${ message.type === 'computer' ? '' : ''}`"
  >
    <div v-if="message.type === 'human'" class="py-2 px-3 ">
      <p class="text-2xl">{{ message.content }}</p>
    </div>
    <div v-else class="group/message flex flex-col">
      <div class="">
        <p class="text-2xl py-2 px-3">{{ message.content.choices[0].message.content }}</p>
      </div>
      <div class="group/infos flex gap-2 p-0 h-0 invisible group-hover/message:h-auto group-hover/message:visible group-hover/message:px-3 group-hover/message:py-2">
        <p class="text-xs font-mono">{{ message.content.llmodel }}</p>
        <p class="text-xs font-mono">{{ message.content.usage.completion_tokens }}</p>
        <p class="text-xs font-mono">{{ message.content.usage.prompt_tokens }}</p>
        <p class="text-xs font-mono">{{ message.content.usage.total_tokens }}</p>
      </div>
    </div>
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
