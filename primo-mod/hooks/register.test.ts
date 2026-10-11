import { expect, test } from 'claude-code/testing'

test('blocca le modifiche ai file .env', async ($, on) => {
  on('tool.call', () => ({ result: 'modificato' }))
  const ran = await $.tool.call({
    tool: 'Edit',
    file_path: 'app/.env',
    old_string: 'a',
    new_string: 'b',
  })
  expect(ran.deny ?? ran.text).toContain('protetti')
})

test('/ciao conta gli strumenti usati', async ($, on) => {
  on('tool.call', () => ({ result: 'ok' }))
  await $.tool.call({ tool: 'Read', file_path: 'a.md' })
  await $.tool.call({ tool: 'Read', file_path: 'b.md' })
  const { text } = await $.command.run({ command: 'ciao' })
  expect(text).toContain('2 strumenti')
})
