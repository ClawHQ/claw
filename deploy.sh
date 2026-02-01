#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "🔨 Step 1: Building production..."
NODE_ENV=production SST_STAGE=production bun run build

echo ""
echo "🔧 Step 1.5: Fixing runtime in .vc-config.json..."
# Fix runtime to nodejs20.x in the generated function config
if [ -f ".vercel/output/functions/_render.func/.vc-config.json" ]; then
  # Use a temporary file to update JSON
  node -e "
    const fs = require('fs');
    const path = '.vercel/output/functions/_render.func/.vc-config.json';
    const config = JSON.parse(fs.readFileSync(path, 'utf8'));
    config.runtime = 'nodejs20.x';
    fs.writeFileSync(path, JSON.stringify(config, null, '\t') + '\n');
  "
  echo "✅ Updated runtime to nodejs20.x"
else
  echo "⚠️  Warning: .vc-config.json not found, skipping runtime fix"
fi

echo ""
echo "☁️  Step 2: Deploying to Vercel (claw-docs @ Pixel ML)..."
vercel --prebuilt --prod --yes

echo ""
echo "✅ Deployment complete!"

