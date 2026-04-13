# Agent / contributor notes

## Git: push to both GitHub remotes

This project is mirrored on two GitHub repositories. Use **one local commit**, then push **`origin`** so **both** remotes update:

1. `https://github.com/Reidblaine/Respire-Breathwork.git`
2. `https://github.com/AaronOverstreet/Respire.git`

After commits, run `git push origin <branch>` (usually `main`). Do not push to only one remote unless explicitly requested.

### Restore dual push (e.g. after a fresh clone)

Run **both** commands so two push URLs are registered (adding only one can leave a single push target):

```bash
git remote set-url --add --push origin https://github.com/Reidblaine/Respire-Breathwork.git
git remote set-url --add --push origin https://github.com/AaronOverstreet/Respire.git
```

Confirm with `git config --get-all remote.origin.pushurl` (expect two lines). Fetch still uses `remote.origin.url` (typically Reidblaine); both push URLs receive `git push origin`.
