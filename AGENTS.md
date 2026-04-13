# Agent / contributor notes

## Git: push to both GitHub remotes

This project is mirrored on two GitHub repositories. Use **one local commit**, then push **`origin`** so **both** remotes update:

1. `https://github.com/Reidblaine/Respire-Breathwork.git`
2. `https://github.com/AaronOverstreet/Respire.git`

After commits, run `git push origin <branch>` (usually `main`). Do not push to only one remote unless explicitly requested.

### Restore dual push (e.g. after a fresh clone)

If `git remote -v` shows only one push URL:

```bash
git remote set-url --add --push origin https://github.com/Reidblaine/Respire-Breathwork.git
git remote set-url --add --push origin https://github.com/AaronOverstreet/Respire.git
```

Fetch continues to use the primary `origin` URL; both entries receive pushes.
