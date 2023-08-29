import { createCompletion, loadModel } from 'gpt4all'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const completion = await handleCompletion(body)
  return {
    data: completion
  }
})

async function handleCompletion (body: any) {
  console.log(body)

  const model = await loadModel(body.model, {
    modelPath: useRuntimeConfig().defaultDirectory,
    verbose: true
  })

  console.log('options', body.options)

  return await createCompletion(
    model,
    [{ role: 'user', content: body.prompt }],
    { verbose: true, ...body.options }
  )
}
