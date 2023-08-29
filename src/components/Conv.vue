<template>
  <div class="relative h-screen w-full flex flex-col gap-2 px-2 pt-2">
    <div
      v-if="isLoading"
      class="absolute w-full h-screen flex justify-center items-center z-[100]"
      style="backdrop-filter: blur(2px)"
    >
      <p class="text-4xl">🔗</p>
    </div>
    <div class="c flex-grow border border-black overflow-y-scroll">
      <div class="w-full" v-for="message in conversation">
        <Comms :message="message" />
      </div>
    </div>
    <div class="h-[10vh] w-full flex flex-col overflow-hidden">
      <div class="flex gap-2 font-mono text-xs grow">
        <select class="w-[50vw] text-center" name="models" v-model="model">
          <option v-for="model in models" :value="model">{{ model }}</option>
        </select>
        <input class="w-[10vw] text-center" type="text" v-model="temp" />
      </div>
      <input
        v-model="prompt"
        @keydown.enter="handleCompletion"
        ref="input"
        type="text"
        class="w-full p-5 bg-transparent text-4xl"
        placeholder="Ignore prev..."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const input = ref('input')
const conversation = ref([])
const isLoading = ref(false)
const prompt = ref('')
const temp = ref('0.7')

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
      model: model.value,
      options: {
        temp: Number(temp.value)
      }
    }
  })

  conversation.value.push({
    type: 'computer',
    content: completion.data.value.data
  })

  isLoading.value = false
}
</script>
