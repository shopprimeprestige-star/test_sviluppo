# test_sviluppo

## primo-mod — mod di esempio per Claude Code

Una *mod* cambia l'interfaccia o il comportamento di Claude Code stesso.
Questa mod di esempio:

- aggiunge il comando `/ciao`, che dice quanti strumenti Claude ha usato nella sessione;
- mostra nella status line il contatore `strumenti usati: N`;
- blocca le modifiche (Edit) ai file `.env`;
- mostra un avviso (toast) "primo-mod caricato!" all'avvio.

### Struttura

```
primo-mod/
  .claude-plugin/plugin.json   # nome, versione, descrizione
  hooks/hooks.json             # indica il modulo da caricare
  hooks/register.ts            # gli hook della mod
  hooks/register.test.ts       # test
```

### Usarla in locale

```sh
claude --plugin-dir ./primo-mod
```

### Verificarla

```sh
claude plugin validate ./primo-mod
claude plugin test ./primo-mod
```
