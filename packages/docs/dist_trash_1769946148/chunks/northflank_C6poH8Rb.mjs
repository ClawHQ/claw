import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Deploy on Northflank"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-get-started",
    "text": "How to get started"
  }, {
    "depth": 2,
    "slug": "what-you-get",
    "text": "What you get"
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
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Deploy OpenClaw on Northflank with a one-click template and finish setup in your browser.\nThis is the easiest “no terminal on the server” path: Northflank runs the Gateway for you,\nand you configure everything via the <code dir=\"auto\">/setup</code> web wizard.</p>\n<h2 id=\"how-to-get-started\"><a href=\"#how-to-get-started\">How to get started</a></h2>\n<ol>\n<li>Click <a href=\"https://northflank.com/stacks/deploy-openclaw\">Deploy OpenClaw</a> to open the template.</li>\n<li>Create an <a href=\"https://app.northflank.com/signup\">account on Northflank</a> if you don’t already have one.</li>\n<li>Click <strong>Deploy OpenClaw now</strong>.</li>\n<li>Set the required environment variable: <code dir=\"auto\">SETUP_PASSWORD</code>.</li>\n<li>Click <strong>Deploy stack</strong> to build and run the OpenClaw template.</li>\n<li>Wait for the deployment to complete, then click <strong>View resources</strong>.</li>\n<li>Open the OpenClaw service.</li>\n<li>Open the public OpenClaw URL and complete setup at <code dir=\"auto\">/setup</code>.</li>\n<li>Open the Control UI at <code dir=\"auto\">/openclaw</code>.</li>\n</ol>\n<h2 id=\"what-you-get\"><a href=\"#what-you-get\">What you get</a></h2>\n<ul>\n<li>Hosted OpenClaw Gateway + Control UI</li>\n<li>Web setup wizard at <code dir=\"auto\">/setup</code> (no terminal commands)</li>\n<li>Persistent storage via Northflank Volume (<code dir=\"auto\">/data</code>) so config/credentials/workspace survive redeploys</li>\n</ul>\n<h2 id=\"setup-flow\"><a href=\"#setup-flow\">Setup flow</a></h2>\n<ol>\n<li>Visit <code dir=\"auto\">https://&#x3C;your-northflank-domain>/setup</code> and enter your <code dir=\"auto\">SETUP_PASSWORD</code>.</li>\n<li>Choose a model/auth provider and paste your key.</li>\n<li>(Optional) Add Telegram/Discord/Slack tokens.</li>\n<li>Click <strong>Run setup</strong>.</li>\n<li>Open the Control UI at <code dir=\"auto\">https://&#x3C;your-northflank-domain>/openclaw</code></li>\n</ol>\n<p>If Telegram DMs are set to pairing, the setup wizard can approve the pairing code.</p>\n<h2 id=\"getting-chat-tokens\"><a href=\"#getting-chat-tokens\">Getting chat tokens</a></h2>\n<h3 id=\"telegram-bot-token\"><a href=\"#telegram-bot-token\">Telegram bot token</a></h3>\n<ol>\n<li>Message <code dir=\"auto\">@BotFather</code> in Telegram</li>\n<li>Run <code dir=\"auto\">/newbot</code></li>\n<li>Copy the token (looks like <code dir=\"auto\">123456789:AA...</code>)</li>\n<li>Paste it into <code dir=\"auto\">/setup</code></li>\n</ol>\n<h3 id=\"discord-bot-token\"><a href=\"#discord-bot-token\">Discord bot token</a></h3>\n<ol>\n<li>Go to <a href=\"https://discord.com/developers/applications\">https://discord.com/developers/applications</a></li>\n<li><strong>New Application</strong> → choose a name</li>\n<li><strong>Bot</strong> → <strong>Add Bot</strong></li>\n<li><strong>Enable MESSAGE CONTENT INTENT</strong> under Bot → Privileged Gateway Intents (required or the bot will crash on startup)</li>\n<li>Copy the <strong>Bot Token</strong> and paste into <code dir=\"auto\">/setup</code></li>\n<li>Invite the bot to your server (OAuth2 URL Generator; scopes: <code dir=\"auto\">bot</code>, <code dir=\"auto\">applications.commands</code>)</li>\n</ol>"
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
const url = "src/content/docs/engine/northflank.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/engine/northflank.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/engine/northflank.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
