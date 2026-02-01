# Deploy Web Package to Vercel

This guide will help you deploy the `@pixelml/web` package (Astro docs site) to Vercel, accessible at `ishi.so/docs`.

## 📋 Architecture

```
ishi.so          → Next.js Landing (github.com/PixelML/ishi-web)
ishi.so/docs/*   → Astro Docs (this package)
```

The Next.js landing page will use **rewrites** (not redirects) to proxy `/docs` requests to the Vercel-hosted Astro site, keeping the domain as `ishi.so` in the browser.

---

## 🚀 Part 1: Deploy Astro Docs to Vercel

### For Team Members (Quick Start)

If you're a team member who just pulled the repo:

1. **Install dependencies:**

```bash
cd /path/to/claw-core
bun install
```

2. **Link to Vercel (first time only):**

```bash
cd packages/web
vercel login
vercel link
# Choose: Link to existing project → claw-docs
```

3. **Deploy:**

```bash
cd packages/web
./deploy.sh
```

The `deploy.sh` script handles everything automatically. Make sure it's executable:

```bash
chmod +x packages/web/deploy.sh
```

---

### Step 1: Install Dependencies

From the project root:

```bash
cd /path/to/claw-core
bun install
```

**Important:** Always run `bun install` from the monorepo root to ensure all workspace dependencies are properly installed.

### Step 2: Link to Vercel Project

**For team members:** Link to the existing project:

```bash
cd packages/web
vercel login
vercel link
```

Follow prompts:

- Set up and deploy? **N** (we'll configure first)
- Link to existing project? **Y** (link to existing)
- What’s the name of your existing project? `claw-docs`
- Directory: `.`

**For new projects:** Create a new Vercel project:

```bash
cd packages/web
vercel login
vercel link
```

Follow prompts:

- Set up and deploy? **N** (we'll configure first)
- Link to existing project? **N** (create new)
- Project name: `claw-docs` (or your preferred name)
- Directory: `.`

### Step 3: Configure Vercel Project

#### 3.1 Vercel Dashboard Settings

In Vercel Dashboard (https://vercel.com/dashboard):

1. **Go to Project Settings → General:**
   - Framework Preset: `Astro`
   - Root Directory: `packages/web`
   - Build Command: `NODE_ENV=production SST_STAGE=production bun run build`
   - Output Directory: `dist`
   - Install Command: `bun install`

2. **Environment Variables → Add:**

   ```
   SST_STAGE=production
   VITE_API_URL=https://api.ishi.so
   VERCEL_ENV=production
   NODE_ENV=production
   ```

3. **Git → Connect Repository (Optional):**
   - Connect to `PixelML/ishi` repository
   - Set Ignored Build Step: `git diff HEAD^ HEAD --quiet . ../claw/`
   - This ensures it only builds when `packages/web/` or `packages/claw/` changes

#### 3.2 Verify `vercel.json` Configuration

The `vercel.json` file should be configured with:

```json
{
  "buildCommand": "NODE_ENV=production npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "astro",
  "regions": ["sin1"],
  "env": {
    "NODE_ENV": "production",
    "VITE_API_URL": "https://api.clawdev.com"
  },
  "git": {
    "deploymentEnabled": true
  },
  "rewrites": [{ "source": "/(.*)", "destination": "/" }],
  "functions": {
    "**": {
      "runtime": "nodejs20.x"
    }
  }
}
```

**Key points:**

- `functions.**.runtime` is set to `nodejs20.x` to avoid runtime errors
- This must be in `vercel.json`, not in `astro.config.mjs`

### Step 4: Build Locally (Optional but Recommended)

Before deploying, test the build locally:

```bash
cd packages/web
NODE_ENV=production SST_STAGE=production bun run build
```

This will:

- Build the Astro site in server mode
- Generate static assets
- Create serverless functions
- Output to `dist/` directory

### Step 5: Deploy

**Option A: Prebuilt Deployment (Recommended)**

If you've built locally, use prebuilt deployment:

```bash
cd packages/web
NODE_ENV=production SST_STAGE=production bun run build
vercel --prebuilt --prod --yes
```

**Option B: Standard Deployment**

Let Vercel build for you:

```bash
cd packages/web

# Preview deploy
vercel

# Production deploy
vercel --prod
```

**Option C: Git Push (if connected)**

Workflow `.github/workflows/deploy-web-vercel.yml` will automatically deploy on push to `main` or `dev`.

### Step 6: Get Deployment URL

After deployment, note your Vercel project URL, e.g.:

```
https://claw-docs-xyz123.vercel.app
```

---

## 🔗 Part 2: Configure Next.js Landing Page Rewrites

In your `claw-web` repository (Next.js landing page):

### Step 1: Update `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "https://claw-docs-xyz123.vercel.app/docs",
      },
      {
        source: "/docs/:path*",
        destination: "https://claw-docs-xyz123.vercel.app/docs/:path*",
      },
    ]
  },

  // Optional: Better caching for docs
  async headers() {
    return [
      {
        source: "/docs/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

**Important:** Replace `claw-docs-xyz123.vercel.app` with your actual Vercel deployment URL from Step 6.

### Step 2: Deploy Next.js Landing

```bash
cd /path/to/claw-web
git add next.config.js
git commit -m "Add docs rewrites"
git push
```

---

## ✅ Verify Deployment

After both deployments are complete:

1. **Test the docs site directly:**

   ```bash
   curl -I https://claw-docs-xyz123.vercel.app/docs/
   # Should return 200 OK
   ```

2. **Test through main domain:**

   ```bash
   curl -I https://ishi.so/docs/
   # Should return 200 OK (no redirect!)
   ```

3. **Check in browser:**
   - Visit: `https://ishi.so/docs/`
   - URL should stay as `ishi.so/docs/` (not redirect to vercel domain)
   - Landing page should load correctly

4. **Test navigation:**
   - Click links in docs (e.g., "Config", "Providers")
   - All should stay on `ishi.so/docs/*`

---

## 🔐 GitHub Actions Secrets

To enable automatic deployment via GitHub Actions, add these secrets to your repository:

**Repository: PixelML/ishi**

1. Go to Settings → Secrets and variables → Actions
2. Add the following secrets:

```
VERCEL_TOKEN
  → Get from: https://vercel.com/account/tokens
  → Create new token with "Full Account" scope

VERCEL_ORG_ID
  → Get from: Settings in Vercel project
  → Or run: vercel project ls (in packages/web)

VERCEL_PROJECT_ID
  → Get from: Settings → General in Vercel project
  → Or from .vercel/project.json after running `vercel link`
```

To find your IDs after linking:

```bash
cd packages/web
cat .vercel/project.json
```

---

## 📝 Environment Variables Reference

### For Vercel Deployment (Astro)

<<<<<<< HEAD
| Variable | Value | Description |
| -------------- | ------------------------- | ------------------------------ |
| `SST_STAGE` | `production` | Deployment stage |
| `VITE_API_URL` | `https://api.clawdev.com` | API endpoint for share feature |
| `VERCEL_ENV` | `production` | Vercel environment |
| `NODE_ENV` | `production` | Node.js environment |
=======
| Variable | Value | Description |
| -------------- | --------------------- | ------------------------------ |
| `SST_STAGE` | `production` | Deployment stage |
| `VITE_API_URL` | `https://api.ishi.so` | API endpoint for share feature |
| `VERCEL_ENV` | `production` | Vercel environment |

> > > > > > > feature/desktop-pivot

### For Local Development

```bash
cd packages/web

# Local mode (no API)
bun run dev

# Remote API mode
bun run dev:remote
```

---

## 🔄 CI/CD Flow

### Automatic Deployment

The workflow `.github/workflows/deploy-web-vercel.yml` will:

1. Trigger on:
   - Push to `main` → Production deploy
   - Push to `dev` → Preview deploy
   - Changes in `packages/web/**`
   - Manual workflow dispatch

2. Build and deploy:
   - Install dependencies (monorepo aware)
   - Build Astro site with production env vars
   - Deploy to Vercel
   - Comment deployment URL on commit

### Manual Deployment

Trigger manually from GitHub:

1. Go to Actions → "Deploy Web to Vercel"
2. Click "Run workflow"
3. Choose branch and environment (preview/production)
4. Click "Run workflow"

---

## 🐛 Troubleshooting

### Issue: `astro: command not found`

**Problem:** Build fails with `/bin/bash: astro: command not found`

**Solution:** Dependencies are not installed. Run from monorepo root:

```bash
cd /path/to/claw-core
bun install
```

### Issue: Invalid runtime `nodejs18.x`

**Problem:** Deployment fails with error:

```
Error: The following Serverless Functions contain an invalid "runtime":
  - _render (nodejs18.x)
```

**Solution:** This is a known issue with `@astrojs/vercel` adapter in monorepo workspaces. The adapter doesn't always read `engines.node` correctly. Use the automated fix script:

**Option 1: Use the deploy script (RECOMMENDED)**

The `deploy.sh` script automatically fixes the runtime after build:

```bash
cd packages/web
./deploy.sh
```

The script will:

1. Build the project
2. Automatically fix `.vc-config.json` to use `nodejs20.x`
3. Deploy to Vercel

**Option 2: Manual fix after build**

If building manually, fix the runtime config after build:

```bash
cd packages/web
NODE_ENV=production SST_STAGE=production bun run build

# Fix runtime
node -e "const fs = require('fs'); const path = '.vercel/output/functions/_render.func/.vc-config.json'; const config = JSON.parse(fs.readFileSync(path, 'utf8')); config.runtime = 'nodejs20.x'; fs.writeFileSync(path, JSON.stringify(config, null, '\t') + '\n');"

# Deploy
vercel --prebuilt --prod --yes
```

**Configuration (still recommended):**

1. **Add `engines.node` to `package.json`**:

```json
{
  "engines": {
    "node": "20.x"
  }
}
```

2. **Add `functions` config to `vercel.json`**:

```json
{
  "functions": {
    "**": {
      "runtime": "nodejs20.x"
    }
  }
}
```

**Note:** Do NOT add `runtime` to `astro.config.mjs` - it's not a valid option for the Vercel adapter.

**Why this happens:** The Astro Vercel adapter generates `.vc-config.json` with `nodejs18.x` by default, and in monorepo workspaces, it may not properly read `engines.node` from the workspace package. The script workaround ensures the correct runtime is set before deployment.

### Issue: Local Node.js version warning

**Problem:** Build shows warning:

```
[WARN] [@astrojs/vercel]
The local Node.js version (23) is not supported by Vercel Serverless Functions.
Your project will use Node.js 18 as the runtime instead.
```

**Solution:** This is just a warning. The actual runtime is controlled by `vercel.json`. Ensure `vercel.json` specifies `nodejs20.x` as shown above.

### Issue: 404 on landing page

**Problem:** Accessing `http://localhost:4321/` returns 404.

**Solution:** The site uses `base: "/"` for production. In development, ensure you're accessing the correct path. The site should work at the root path.

### Issue: Build hook fails

**Problem:** Build fails with error about `../claw/script/schema.ts`.

**Solution:** This hook generates config schema. If it fails:

1. Ensure `@pixelml/ishi` workspace dependency is built
2. Or temporarily comment out the `configSchema()` integration in `astro.config.mjs`

### Issue: Images not loading

**Problem:** Images return 404 on deployed site.

**Solution:** Ensure Vercel adapter has `imageService: true`:

```javascript
adapter: vercel({
  imageService: true, // ✅
})
```

### Issue: Redirects instead of rewrites

**Problem:** URL changes to Vercel domain when accessing docs.

**Solution:** Verify you're using `rewrites()` not `redirects()` in `next.config.js`.

### Issue: Build fails with workspace dependency error

**Problem:** `@pixelml/ishi` workspace:\* cannot resolve.

**Solution:**

Option 1 - Build from monorepo root:

```bash
cd ../..  # to root
bun install
cd packages/web
NODE_ENV=production SST_STAGE=production bun run build
```

Option 2 - Remove if not needed:

```json
// package.json
"devDependencies": {
  // "@pixelml/ishi": "workspace:*",  // Comment out if not used
}
```

### Issue: TypeScript error about `runtime` in adapter config

**Problem:** TypeScript error:

```
'runtime' does not exist in type 'VercelServerlessConfig'
```

**Solution:** Remove `runtime` from `astro.config.mjs`. Runtime must be configured in `vercel.json` instead:

```json
// vercel.json
{
  "functions": {
    "**": {
      "runtime": "nodejs20.x"
    }
  }
}
```

---

## 📚 Additional Resources

- [Astro Vercel Adapter Docs](https://docs.astro.build/en/guides/deploy/vercel/)
- [Vercel Functions Runtime](https://vercel.com/docs/functions/runtimes)
- [Next.js Rewrites Documentation](https://nextjs.org/docs/app/api-reference/next-config-js/rewrites)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vercel GitHub Integration](https://vercel.com/docs/deployments/git)

---

## 🎉 Success!

You should now have:

- ✅ Astro docs deployed to Vercel
- ✅ Accessible at `ishi.so/docs`
- ✅ URLs stay on `ishi.so` domain
- ✅ Automatic deployments on git push
- ✅ Correct Node.js runtime (20.x) configured

Questions? Check troubleshooting or open an issue!
