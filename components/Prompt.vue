<template>
  <input 
    v-model="prompt"
    @keydown.enter="handleCompletion"
    ref="input"
    type="text"
    class="c w-full h-full p-5 bg-transparent text-4xl outline-none border-none"
    placeholder="Type something..."
  />
</template>

<script setup lang="ts">
const input = ref('input')
const conversation = useState('conversation')
const isLoading = useState('isLoading')
const prompt = ref('')

onMounted(() => {
  input.value.focus()
})

async function handleCompletion() {
  conversation.value.push({
    type: 'human',
    content: prompt.value
  })

  const promptt = prompt.value
  prompt.value = ''

  isLoading.value = true

  const completion: any = await useFetch('/completion', {
    method: 'POST',
    body: {
      prompt: promptt,
      model: 'llama-2-7b-chat.ggmlv3.q4_0'
    }
  })

  console.log(completion.data.value)
  
  conversation.value.push({
    type: 'computer',
    content: completion.data.value.data
  })

  isLoading.value = false
}
</script>
