import { readdirSync } from 'fs'

export default defineEventHandler(async event => {
  const models = await handleModels()
  return models
})

async function handleModels () {
  return readdirSync(useRuntimeConfig().defaultDirectory, {
    withFileTypes: true
  })
    .filter(item => !item.isDirectory())
    .filter(item => item.name.endsWith('.bin'))
    .map(item => item.name.replace('.bin', ''))
}
