# Agent / contributor notes

## Git: one shared repo

The shared copy of this project is **`https://github.com/AaronOverstreet/Respire.git`** (`origin`). Vercel publishes the live site from it, and both Aaron and Reid pull from and push to it.

- Start every session with `git pull` so you have the other person's latest changes.
- After committing, `git push origin main`.
- If a push is rejected, `git pull` first, then push again. Never force-push.

### Reid's machine only: private mirror

Reid's clone also mirrors every push to a private backup, `https://github.com/Reidblaine/Respire-Breathwork.git`, using two push URLs on `origin`:

```bash
git remote set-url origin https://github.com/AaronOverstreet/Respire.git
git remote set-url --add --push origin https://github.com/AaronOverstreet/Respire.git
git remote set-url --add --push origin https://github.com/Reidblaine/Respire-Breathwork.git
```

Confirm with `git config --get-all remote.origin.pushurl` (expect two lines). On any other machine, including Aaron's, do **not** add the mirror; a plain clone of `AaronOverstreet/Respire` is all that's needed.
