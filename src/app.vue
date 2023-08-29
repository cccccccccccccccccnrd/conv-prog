<template>
  <div class="h-screen w-full overflow-hidden flex">
    <Conv class="max-w-[1200px] min-w-[100px]" v-for="conv in c" />
  </div>
</template>

<script setup lang="ts">
const c = ref(1)

onMounted(() => {
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
      left()
    } else if (e.key === 'ArrowRight') {
      right()
    }
  })
})

function left () {
  if (c.value <= 1) {
    return
  }
  c.value--
}

function right () {
  if (c.value >= 10) {
    return
  }
  c.value++
}
</script>

<style>
::-webkit-scrollbar {
    display: none;
}

select, input {
  appearance: none;
  background-color: transparent;
  border: none;
  outline: 0;
  padding: 0 1em 0 0;
  margin: 0;
}

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
