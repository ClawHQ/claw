import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Deploy on Railway"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "quick-checklist-new-users",
    "text": "Quick checklist (new users)"
  }, {
    "depth": 2,
    "slug": "one-click-deploy",
    "text": "One-click deploy"
  }, {
    "depth": 2,
    "slug": "what-you-get",
    "text": "What you get"
  }, {
    "depth": 2,
    "slug": "required-railway-settings",
    "text": "Required Railway settings"
  }, {
    "depth": 3,
    "slug": "public-networking",
    "text": "Public Networking"
  }, {
    "depth": 3,
    "slug": "volume-required",
    "text": "Volume (required)"
  }, {
    "depth": 3,
    "slug": "variables",
    "text": "Variables"
  }, {
    "depth": 2,
    "slug": "setup-flow",
    "text": "Setup flow"
  }, {
    "depth": 2,
    "slug": "getting-chat-tokens",
    "text": "Getting chat tokens"
  }, {
    "depth": 3,
    "slug": "telegram-bot-token",
    "text": "Telegram bot token"
  }, {
    "depth": 3,
    "slug": "discord-bot-token",
    "text": "Discord bot token"
  }, {
    "depth": 2,
    "slug": "backups--migration",
    "text": "Backups & migration"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Deploy OpenClaw on Railway with a one-click template and finish setup in your browser.\nThis is the easiest “no terminal on the server” path: Railway runs the Gateway for you,\nand you configure everything via the <code dir=\"auto\">/setup</code> web wizard.</p>\n<h2 id=\"quick-checklist-new-users\"><a href=\"#quick-checklist-new-users\">Quick checklist (new users)</a></h2>\n<ol>\n<li>Click <strong>Deploy on Railway</strong> (below).</li>\n<li>Add a <strong>Volume</strong> mounted at <code dir=\"auto\">/data</code>.</li>\n<li>Set the required <strong>Variables</strong> (at least <code dir=\"auto\">SETUP_PASSWORD</code>).</li>\n<li>Enable <strong>HTTP Proxy</strong> on port <code dir=\"auto\">8080</code>.</li>\n<li>Open <code dir=\"auto\">https://&#x3C;your-railway-domain>/setup</code> and finish the wizard.</li>\n</ol>\n<h2 id=\"one-click-deploy\"><a href=\"#one-click-deploy\">One-click deploy</a></h2>\n"
    }), createVNode("a", {
      href: "https://railway.com/deploy/clawdbot-railway-template",
      target: "_blank",
      rel: "noreferrer",
      "set:html": "<p>Deploy on Railway</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>After deploy, find your public URL in <strong>Railway → your service → Settings → Domains</strong>.</p>\n<p>Railway will either:</p>\n<ul>\n<li>give you a generated domain (often <code dir=\"auto\">https://&#x3C;something>.up.railway.app</code>), or</li>\n<li>use your custom domain if you attached one.</li>\n</ul>\n<p>Then open:</p>\n<ul>\n<li><code dir=\"auto\">https://&#x3C;your-railway-domain>/setup</code> — setup wizard (password protected)</li>\n<li><code dir=\"auto\">https://&#x3C;your-railway-domain>/openclaw</code> — Control UI</li>\n</ul>\n<h2 id=\"what-you-get\"><a href=\"#what-you-get\">What you get</a></h2>\n<ul>\n<li>Hosted OpenClaw Gateway + Control UI</li>\n<li>Web setup wizard at <code dir=\"auto\">/setup</code> (no terminal commands)</li>\n<li>Persistent storage via Railway Volume (<code dir=\"auto\">/data</code>) so config/credentials/workspace survive redeploys</li>\n<li>Backup export at <code dir=\"auto\">/setup/export</code> to migrate off Railway later</li>\n</ul>\n<h2 id=\"required-railway-settings\"><a href=\"#required-railway-settings\">Required Railway settings</a></h2>\n<h3 id=\"public-networking\"><a href=\"#public-networking\">Public Networking</a></h3>\n<p>Enable <strong>HTTP Proxy</strong> for the service.</p>\n<ul>\n<li>Port: <code dir=\"auto\">8080</code></li>\n</ul>\n<h3 id=\"volume-required\"><a href=\"#volume-required\">Volume (required)</a></h3>\n<p>Attach a volume mounted at:</p>\n<ul>\n<li><code dir=\"auto\">/data</code></li>\n</ul>\n<h3 id=\"variables\"><a href=\"#variables\">Variables</a></h3>\n<p>Set these variables on the service:</p>\n<ul>\n<li><code dir=\"auto\">SETUP_PASSWORD</code> (required)</li>\n<li><code dir=\"auto\">PORT=8080</code> (required — must match the port in Public Networking)</li>\n<li><code dir=\"auto\">OPENCLAW_STATE_DIR=/data/.openclaw</code> (recommended)</li>\n<li><code dir=\"auto\">OPENCLAW_WORKSPACE_DIR=/data/workspace</code> (recommended)</li>\n<li><code dir=\"auto\">OPENCLAW_GATEWAY_TOKEN</code> (recommended; treat as an admin secret)</li>\n</ul>\n<h2 id=\"setup-flow\"><a href=\"#setup-flow\">Setup flow</a></h2>\n<ol>\n<li>Visit <code dir=\"auto\">https://&#x3C;your-railway-domain>/setup</code> and enter your <code dir=\"auto\">SETUP_PASSWORD</code>.</li>\n<li>Choose a model/auth provider and paste your key.</li>\n<li>(Optional) Add Telegram/Discord/Slack tokens.</li>\n<li>Click <strong>Run setup</strong>.</li>\n</ol>\n<p>If Telegram DMs are set to pairing, the setup wizard can approve the pairing code.</p>\n<h2 id=\"getting-chat-tokens\"><a href=\"#getting-chat-tokens\">Getting chat tokens</a></h2>\n<h3 id=\"telegram-bot-token\"><a href=\"#telegram-bot-token\">Telegram bot token</a></h3>\n<ol>\n<li>Message <code dir=\"auto\">@BotFather</code> in Telegram</li>\n<li>Run <code dir=\"auto\">/newbot</code></li>\n<li>Copy the token (looks like <code dir=\"auto\">123456789:AA...</code>)</li>\n<li>Paste it into <code dir=\"auto\">/setup</code></li>\n</ol>\n<h3 id=\"discord-bot-token\"><a href=\"#discord-bot-token\">Discord bot token</a></h3>\n<ol>\n<li>Go to <a href=\"https://discord.com/developers/applications\">https://discord.com/developers/applications</a></li>\n<li><strong>New Application</strong> → choose a name</li>\n<li><strong>Bot</strong> → <strong>Add Bot</strong></li>\n<li><strong>Enable MESSAGE CONTENT INTENT</strong> under Bot → Privileged Gateway Intents (required or the bot will crash on startup)</li>\n<li>Copy the <strong>Bot Token</strong> and paste into <code dir=\"auto\">/setup</code></li>\n<li>Invite the bot to your server (OAuth2 URL Generator; scopes: <code dir=\"auto\">bot</code>, <code dir=\"auto\">applications.commands</code>)</li>\n</ol>\n<h2 id=\"backups--migration\"><a href=\"#backups--migration\">Backups &#x26; migration</a></h2>\n<p>Download a backup at:</p>\n<ul>\n<li><code dir=\"auto\">https://&#x3C;your-railway-domain>/setup/export</code></li>\n</ul>\n<p>This exports your OpenClaw state + workspace so you can migrate to another host without losing config or memory.</p>"
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

const url = "src/content/docs/engine/railway.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/engine/railway.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/engine/railway.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
