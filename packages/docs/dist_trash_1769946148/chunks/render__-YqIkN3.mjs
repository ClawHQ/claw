import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Deploy on Render"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "deploy-with-a-render-blueprint",
    "text": "Deploy with a Render Blueprint"
  }, {
    "depth": 2,
    "slug": "understanding-the-blueprint",
    "text": "Understanding the Blueprint"
  }, {
    "depth": 2,
    "slug": "choosing-a-plan",
    "text": "Choosing a plan"
  }, {
    "depth": 2,
    "slug": "after-deployment",
    "text": "After deployment"
  }, {
    "depth": 3,
    "slug": "complete-the-setup-wizard",
    "text": "Complete the setup wizard"
  }, {
    "depth": 3,
    "slug": "access-the-control-ui",
    "text": "Access the Control UI"
  }, {
    "depth": 2,
    "slug": "render-dashboard-features",
    "text": "Render Dashboard features"
  }, {
    "depth": 3,
    "slug": "logs",
    "text": "Logs"
  }, {
    "depth": 3,
    "slug": "shell-access",
    "text": "Shell access"
  }, {
    "depth": 3,
    "slug": "environment-variables",
    "text": "Environment variables"
  }, {
    "depth": 3,
    "slug": "auto-deploy",
    "text": "Auto-deploy"
  }, {
    "depth": 2,
    "slug": "custom-domain",
    "text": "Custom domain"
  }, {
    "depth": 2,
    "slug": "scaling",
    "text": "Scaling"
  }, {
    "depth": 2,
    "slug": "backups-and-migration",
    "text": "Backups and migration"
  }, {
    "depth": 2,
    "slug": "troubleshooting",
    "text": "Troubleshooting"
  }, {
    "depth": 3,
    "slug": "service-wont-start",
    "text": "Service won’t start"
  }, {
    "depth": 3,
    "slug": "slow-cold-starts-free-tier",
    "text": "Slow cold starts (free tier)"
  }, {
    "depth": 3,
    "slug": "data-loss-after-redeploy",
    "text": "Data loss after redeploy"
  }, {
    "depth": 3,
    "slug": "health-check-failures",
    "text": "Health check failures"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Deploy OpenClaw on Render using Infrastructure as Code. The included <code dir=\"auto\">render.yaml</code> Blueprint defines your entire stack declaratively, service, disk, environment variables, so you can deploy with a single click and version your infrastructure alongside your code.</p>\n<h2 id=\"prerequisites\"><a href=\"#prerequisites\">Prerequisites</a></h2>\n<ul>\n<li>A <a href=\"https://render.com\">Render account</a> (free tier available)</li>\n<li>An API key from your preferred <a href=\"/providers\">model provider</a></li>\n</ul>\n<h2 id=\"deploy-with-a-render-blueprint\"><a href=\"#deploy-with-a-render-blueprint\">Deploy with a Render Blueprint</a></h2>\n"
    }), createVNode("a", {
      href: "https://render.com/deploy?repo=https://github.com/openclaw/openclaw",
      target: "_blank",
      rel: "noreferrer",
      "set:html": "<p>Deploy to Render</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Clicking this link will:</p>\n<ol>\n<li>Create a new Render service from the <code dir=\"auto\">render.yaml</code> Blueprint at the root of this repo.</li>\n<li>Prompt you to set <code dir=\"auto\">SETUP_PASSWORD</code></li>\n<li>Build the Docker image and deploy</li>\n</ol>\n<p>Once deployed, your service URL follows the pattern <code dir=\"auto\">https://&#x3C;service-name>.onrender.com</code>.</p>\n<h2 id=\"understanding-the-blueprint\"><a href=\"#understanding-the-blueprint\">Understanding the Blueprint</a></h2>\n<p>Render Blueprints are YAML files that define your infrastructure. The <code dir=\"auto\">render.yaml</code> in this\nrepository configures everything needed to run OpenClaw:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"yaml\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#1E7734;--1:#85E89D\">services</span><span style=\"--0:#24292E;--1:#E1E4E8\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">- </span><span style=\"--0:#1E7734;--1:#85E89D\">type</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#1E7734;--1:#85E89D\">name</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">openclaw</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#1E7734;--1:#85E89D\">runtime</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">docker</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#1E7734;--1:#85E89D\">plan</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">starter</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#1E7734;--1:#85E89D\">healthCheckPath</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">/health</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#1E7734;--1:#85E89D\">envVars</span><span style=\"--0:#24292E;--1:#E1E4E8\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">- </span><span style=\"--0:#1E7734;--1:#85E89D\">key</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">PORT</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#1E7734;--1:#85E89D\">value</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"8080\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">- </span><span style=\"--0:#1E7734;--1:#85E89D\">key</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">SETUP_PASSWORD</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#1E7734;--1:#85E89D\">sync</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#005CC5;--1:#79B8FF\">false</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#616972;--1:#99A0A6\"># prompts during deploy</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">- </span><span style=\"--0:#1E7734;--1:#85E89D\">key</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">OPENCLAW_STATE_DIR</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#1E7734;--1:#85E89D\">value</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">/data/.openclaw</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">- </span><span style=\"--0:#1E7734;--1:#85E89D\">key</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">OPENCLAW_WORKSPACE_DIR</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#1E7734;--1:#85E89D\">value</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">/data/workspace</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">- </span><span style=\"--0:#1E7734;--1:#85E89D\">key</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">OPENCLAW_GATEWAY_TOKEN</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#1E7734;--1:#85E89D\">generateValue</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#005CC5;--1:#79B8FF\">true</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#616972;--1:#99A0A6\"># auto-generates a secure token</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#1E7734;--1:#85E89D\">disk</span><span style=\"--0:#24292E;--1:#E1E4E8\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#1E7734;--1:#85E89D\">name</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">openclaw-data</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#1E7734;--1:#85E89D\">mountPath</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">/data</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#1E7734;--1:#85E89D\">sizeGB</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#005CC5;--1:#79B8FF\">1</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"services:  - type: web    name: openclaw    runtime: docker    plan: starter    healthCheckPath: /health    envVars:      - key: PORT        value: &#x22;8080&#x22;      - key: SETUP_PASSWORD        sync: false # prompts during deploy      - key: OPENCLAW_STATE_DIR        value: /data/.openclaw      - key: OPENCLAW_WORKSPACE_DIR        value: /data/workspace      - key: OPENCLAW_GATEWAY_TOKEN        generateValue: true # auto-generates a secure token    disk:      name: openclaw-data      mountPath: /data      sizeGB: 1\"><div></div></button></div></figure></div>\n<p>Key Blueprint features used:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Feature</th><th>Purpose</th></tr></thead><tbody><tr><td><code dir=\"auto\">runtime: docker</code></td><td>Builds from the repo’s Dockerfile</td></tr><tr><td><code dir=\"auto\">healthCheckPath</code></td><td>Render monitors <code dir=\"auto\">/health</code> and restarts unhealthy instances</td></tr><tr><td><code dir=\"auto\">sync: false</code></td><td>Prompts for value during deploy (secrets)</td></tr><tr><td><code dir=\"auto\">generateValue: true</code></td><td>Auto-generates a cryptographically secure value</td></tr><tr><td><code dir=\"auto\">disk</code></td><td>Persistent storage that survives redeploys</td></tr></tbody></table>\n<h2 id=\"choosing-a-plan\"><a href=\"#choosing-a-plan\">Choosing a plan</a></h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Plan</th><th>Spin-down</th><th>Disk</th><th>Best for</th></tr></thead><tbody><tr><td>Free</td><td>After 15 min idle</td><td>Not available</td><td>Testing, demos</td></tr><tr><td>Starter</td><td>Never</td><td>1GB+</td><td>Personal use, small teams</td></tr><tr><td>Standard+</td><td>Never</td><td>1GB+</td><td>Production, multiple channels</td></tr></tbody></table>\n<p>The Blueprint defaults to <code dir=\"auto\">starter</code>. To use free tier, change <code dir=\"auto\">plan: free</code> in your fork’s\n<code dir=\"auto\">render.yaml</code> (but note: no persistent disk means config resets on each deploy).</p>\n<h2 id=\"after-deployment\"><a href=\"#after-deployment\">After deployment</a></h2>\n<h3 id=\"complete-the-setup-wizard\"><a href=\"#complete-the-setup-wizard\">Complete the setup wizard</a></h3>\n<ol>\n<li>Navigate to <code dir=\"auto\">https://&#x3C;your-service>.onrender.com/setup</code></li>\n<li>Enter your <code dir=\"auto\">SETUP_PASSWORD</code></li>\n<li>Select a model provider and paste your API key</li>\n<li>Optionally configure messaging channels (Telegram, Discord, Slack)</li>\n<li>Click <strong>Run setup</strong></li>\n</ol>\n<h3 id=\"access-the-control-ui\"><a href=\"#access-the-control-ui\">Access the Control UI</a></h3>\n<p>The web dashboard is available at <code dir=\"auto\">https://&#x3C;your-service>.onrender.com/openclaw</code>.</p>\n<h2 id=\"render-dashboard-features\"><a href=\"#render-dashboard-features\">Render Dashboard features</a></h2>\n<h3 id=\"logs\"><a href=\"#logs\">Logs</a></h3>\n<p>View real-time logs in <strong>Dashboard → your service → Logs</strong>. Filter by:</p>\n<ul>\n<li>Build logs (Docker image creation)</li>\n<li>Deploy logs (service startup)</li>\n<li>Runtime logs (application output)</li>\n</ul>\n<h3 id=\"shell-access\"><a href=\"#shell-access\">Shell access</a></h3>\n<p>For debugging, open a shell session via <strong>Dashboard → your service → Shell</strong>. The persistent disk is mounted at <code dir=\"auto\">/data</code>.</p>\n<h3 id=\"environment-variables\"><a href=\"#environment-variables\">Environment variables</a></h3>\n<p>Modify variables in <strong>Dashboard → your service → Environment</strong>. Changes trigger an automatic redeploy.</p>\n<h3 id=\"auto-deploy\"><a href=\"#auto-deploy\">Auto-deploy</a></h3>\n<p>If you use the original OpenClaw repository, Render will not auto-deploy your OpenClaw. To update it, run a manual Blueprint sync from the dashboard.</p>\n<h2 id=\"custom-domain\"><a href=\"#custom-domain\">Custom domain</a></h2>\n<ol>\n<li>Go to <strong>Dashboard → your service → Settings → Custom Domains</strong></li>\n<li>Add your domain</li>\n<li>Configure DNS as instructed (CNAME to <code dir=\"auto\">*.onrender.com</code>)</li>\n<li>Render provisions a TLS certificate automatically</li>\n</ol>\n<h2 id=\"scaling\"><a href=\"#scaling\">Scaling</a></h2>\n<p>Render supports horizontal and vertical scaling:</p>\n<ul>\n<li><strong>Vertical</strong>: Change the plan to get more CPU/RAM</li>\n<li><strong>Horizontal</strong>: Increase instance count (Standard plan and above)</li>\n</ul>\n<p>For OpenClaw, vertical scaling is usually sufficient. Horizontal scaling requires sticky sessions or external state management.</p>\n<h2 id=\"backups-and-migration\"><a href=\"#backups-and-migration\">Backups and migration</a></h2>\n<p>Export your configuration and workspace at any time:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">https://&#x3C;your-service>.onrender.com/setup/export</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"https://<your-service>.onrender.com/setup/export\"><div></div></button></div></figure></div>\n<p>This downloads a portable backup you can restore on any OpenClaw host.</p>\n<h2 id=\"troubleshooting\"><a href=\"#troubleshooting\">Troubleshooting</a></h2>\n<h3 id=\"service-wont-start\"><a href=\"#service-wont-start\">Service won’t start</a></h3>\n<p>Check the deploy logs in the Render Dashboard. Common issues:</p>\n<ul>\n<li>Missing <code dir=\"auto\">SETUP_PASSWORD</code> — the Blueprint prompts for this, but verify it’s set</li>\n<li>Port mismatch — ensure <code dir=\"auto\">PORT=8080</code> matches the Dockerfile’s exposed port</li>\n</ul>\n<h3 id=\"slow-cold-starts-free-tier\"><a href=\"#slow-cold-starts-free-tier\">Slow cold starts (free tier)</a></h3>\n<p>Free tier services spin down after 15 minutes of inactivity. The first request after spin-down takes a few seconds while the container starts. Upgrade to Starter plan for always-on.</p>\n<h3 id=\"data-loss-after-redeploy\"><a href=\"#data-loss-after-redeploy\">Data loss after redeploy</a></h3>\n<p>This happens on free tier (no persistent disk). Upgrade to a paid plan, or\nregularly export your config via <code dir=\"auto\">/setup/export</code>.</p>\n<h3 id=\"health-check-failures\"><a href=\"#health-check-failures\">Health check failures</a></h3>\n<p>Render expects a 200 response from <code dir=\"auto\">/health</code> within 30 seconds. If builds succeed but deploys fail, the service may be taking too long to start. Check:</p>\n<ul>\n<li>Build logs for errors</li>\n<li>Whether the container runs locally with <code dir=\"auto\">docker build &#x26;&#x26; docker run</code></li>\n</ul>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/engine/render.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/engine/render.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/engine/render.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
