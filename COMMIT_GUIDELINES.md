---

## ✅ Types

| Type     | Description                            | Example                             |
|----------|----------------------------------------|-------------------------------------|
| `feat`   | New feature                            | `feat(auth): add login button`      |
| `fix`    | Bug fix                                | `fix(dashboard): correct data load` |
| `chore`  | Maintenance (no logic change)          | `chore: update dependencies`        |
| `refactor` | Code restructure (no behavior change) | `refactor(ui): simplify header`     |
| `style`  | Format/style only (e.g. Prettier)      | `style: run prettier on files`      |
| `test`   | Add or update tests                    | `test(api): add login tests`        |
| `docs`   | Add or update documentation            | `docs(readme): fix typo`            |
| `perf`   | Performance improvement                | `perf(image): optimize hero image`  |
| `ci`     | CI/CD config or script changes         | `ci: add Netlify build script`      |

---

## 📌 Tips

- Use **imperative tone**: "add", not "added" or "adds"
- Keep the summary under **72 characters**
- Use body/footer for:
  - Breaking changes: `BREAKING CHANGE: ...`
  - Closes issues: `Closes #123`

---

## 💡 Examples

```bash
# Feature
git commit -m "feat(auth): implement login logic"

# Bug fix
git commit -m "fix(api): handle 401 error"

# Refactor
git commit -m "refactor(app): cleanup unused hooks"

# Lint/style
git commit -m "style: run prettier on all files"

# Chore
git commit -m "chore: update ESLint config"

# Docs
git commit -m "docs: add commit guidelines"
```
