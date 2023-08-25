import { createCompletion, loadModel } from 'gpt4all'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const completion = await handleCompletion(body)
  return {
    data: completion
  }
})

async function handleCompletion (body: any) {
  console.log(body)

  const model = await loadModel(body.model, { modelPath: runtimeConfig.modelPath, verbose: true })

  return await createCompletion(model, [
    { role: 'user', content: body.prompt }
  ])
}