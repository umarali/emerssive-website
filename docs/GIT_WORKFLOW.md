# Git Workflow

Git practices and conventions for the Emerssive website repository.

---

## Branch Strategy

### Main Branch
- **Branch:** `main`
- **Purpose:** Production-ready code
- **Deploys to:** Production (Vercel)
- **Protection:** Direct commits allowed (small team)

### Feature Branches
For larger features or experiments:
```bash
git checkout -b feature/add-blog-section
git checkout -b feature/testimonial-carousel
```

### Bugfix Branches
For bug fixes:
```bash
git checkout -b fix/navigation-scroll
git checkout -b fix/mobile-menu-close
```

---

## Branch Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/<description>` | `feature/add-pricing-page` |
| Bugfix | `fix/<description>` | `fix/hero-animation` |
| Hotfix | `hotfix/<description>` | `hotfix/broken-link` |
| Refactor | `refactor/<description>` | `refactor/testimonials-component` |
| Docs | `docs/<description>` | `docs/update-readme` |

Use lowercase with hyphens. Keep names short but descriptive.

---

## Commit Messages

### Format
```
<type>: <description>

[optional body]
```

### Types
| Type | Usage |
|------|-------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, missing semi-colons (no code change) |
| `refactor` | Code restructuring (no feature change) |
| `perf` | Performance improvements |
| `test` | Adding tests |
| `chore` | Maintenance tasks |

### Examples
```bash
# Feature
git commit -m "feat: Add customer logos carousel"

# Fix
git commit -m "fix: Correct mobile navigation close behavior"

# Multiple changes
git commit -m "Update CaseStudies, CustomerLogos, Hero, and Services components with new content and improvements"

# Content update
git commit -m "Update KPI text under Hero section"

# Style fix
git commit -m "Fix ESLint build errors"
```

### Guidelines
- Use present tense ("Add feature" not "Added feature")
- Keep first line under 72 characters
- Reference issues if applicable: `fix: Resolve menu bug (#123)`

---

## Workflow

### Standard Development Flow
```bash
# 1. Ensure you're on main and up to date
git checkout main
git pull origin main

# 2. Make changes
# ... edit files ...

# 3. Stage and commit
git add .
git commit -m "feat: Add new testimonial"

# 4. Push to main
git push origin main
```

### Feature Branch Flow
```bash
# 1. Create feature branch
git checkout -b feature/new-section

# 2. Make changes and commit
git add .
git commit -m "feat: Add initial structure for new section"

# 3. Continue development with multiple commits
git commit -m "feat: Add styling to new section"
git commit -m "feat: Add responsive layout"

# 4. Push branch
git push origin feature/new-section

# 5. Create PR or merge locally
git checkout main
git merge feature/new-section
git push origin main

# 6. Clean up
git branch -d feature/new-section
```

---

## Common Operations

### View Status
```bash
git status
```

### View Recent Commits
```bash
git log --oneline -10
```

### Undo Last Commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Discard Local Changes
```bash
git checkout -- <file>
# or discard all
git checkout -- .
```

### Stash Changes
```bash
git stash
git stash pop
```

---

## Pre-commit Checklist

Before committing, ensure:

1. **Lint passes:**
   ```bash
   npm run lint
   ```

2. **Build succeeds:**
   ```bash
   npm run build
   ```

3. **No console.log statements** left in code

4. **No hardcoded test data** in production code

5. **Images optimized** (use next/image)

---

## Git Ignore

Key items in `.gitignore`:
```
# Dependencies
node_modules/

# Next.js
.next/
out/

# Environment
.env*.local

# IDE
.idea/
.vscode/

# OS
.DS_Store
```

---

## Recovery

### Accidentally Committed to Wrong Branch
```bash
# Save the commit hash
git log -1

# Reset main
git reset --hard HEAD~1

# Create correct branch with the commit
git checkout -b feature/correct-branch
git cherry-pick <commit-hash>
```

### Need to Revert a Pushed Commit
```bash
git revert <commit-hash>
git push origin main
```

---

## Repository Info

- **Remote:** GitHub
- **Main Branch:** `main`
- **Deployment:** Auto-deploys to Vercel on push to `main`
