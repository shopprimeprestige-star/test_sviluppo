import type { Register } from 'claude-code'

const PROTECTED = /(^|\/)\.env(\.|$)/

export const register: Register = on => {
  let count = 0

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'ciao',
      description: 'Saluta e mostra quanti strumenti ha usato Claude',
    })
    $.ui.toast('primo-mod caricato!')

    return next(e)
  })

  on('command.run', { command: 'ciao' }, async () => ({
    text: `Ciao! In questa sessione Claude ha usato ${count} strumenti.`,
  }))

  on('tool.call', { tool: 'Edit' }, ($, e, next) =>
    PROTECTED.test(e.file_path)
      ? { deny: `${$.plugin.name}: i file .env sono protetti.` }
      : next(e),
  ).catch(($, e, next) =>
    next.called ? next(e) : { deny: `${$.plugin.name}: il controllo è fallito.` },
  )

  on('tool.call', async ($, e, next) => {
    count += 1
    $.ui.status(`strumenti usati: ${count}`)

    return next(e)
  }).catch(($, e, next) => next(e))
}
