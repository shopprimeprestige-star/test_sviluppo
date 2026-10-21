# test_sviluppo

Repo di prova per sviluppare estensioni di Claude Code. I testi (README, commenti, commit) sono in italiano.

## Contenuto

- `primo-mod/` — mod di esempio per Claude Code (plugin con hook):
  - `.claude-plugin/plugin.json`: nome, versione, descrizione;
  - `hooks/hooks.json`: indica il modulo da caricare;
  - `hooks/register.ts`: gli hook (comando `/ciao`, contatore strumenti nella status line,
    blocco degli Edit sui file `.env`, toast all'avvio);
  - `hooks/register.test.ts`: test.

## Comandi

```sh
claude --plugin-dir ./primo-mod      # usa la mod in locale
claude plugin validate ./primo-mod   # controlla la struttura
claude plugin test ./primo-mod       # lancia i test
```

## Regole

- Non leggere né modificare file `.env*`.
- Dopo ogni modifica a `primo-mod/` lancia `validate` e `test` prima di fare commit.
- Le cose da fare stanno in `TODO.md` (caselle markdown `- [ ]`).
