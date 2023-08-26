<template>
  <div class="h-full flex flex-col items-center">
    <select class="w-[50vw]" name="models" v-model="model">
      <option v-for="model in models" :value="model">{{ model }}</option>
    </select>
    <input
      v-model="prompt"
      @keydown.enter="handleCompletion"
      ref="input"
      type="text"
      class="c w-full h-full p-5 mt-2 bg-transparent text-4xl outline-none border-none"
      placeholder="Type something..."
    />
  </div>
</template>

<script setup lang="ts">
const input = ref('input')
const conversation = useState('conversation')
const isLoading = useState('isLoading')
const prompt = ref('')

const { data: models } = await useFetch('/models')
const model = ref(models.value[0])

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
      model: model.value
    }
  })

  conversation.value.push({
    type: 'computer',
    content: completion.data.value.data
  })

  isLoading.value = false
}
</script>
