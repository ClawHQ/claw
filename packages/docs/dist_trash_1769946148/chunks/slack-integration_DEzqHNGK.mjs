import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Slack Integration",
  "description": "Connect OpenClaw to Slack for conversational agent control."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-it-works",
    "text": "How It Works"
  }, {
    "depth": 2,
    "slug": "setting-up-slack",
    "text": "Setting Up Slack"
  }, {
    "depth": 3,
    "slug": "create-a-slack-app",
    "text": "Create a Slack App"
  }, {
    "depth": 3,
    "slug": "configure-openclaw",
    "text": "Configure OpenClaw"
  }, {
    "depth": 2,
    "slug": "using-slack",
    "text": "Using Slack"
  }, {
    "depth": 2,
    "slug": "claw-desktop-integration",
    "text": "Claw Desktop Integration"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>OpenClaw integrates with Slack so you can chat with your agent from anywhere.</p>\n<h2 id=\"how-it-works\"><a href=\"#how-it-works\">How It Works</a></h2>\n<ol>\n<li>Add the OpenClaw Slack app to your workspace</li>\n<li>Mention <code dir=\"auto\">@claw</code> in any channel to start a run</li>\n<li>The agent responds in a thread with progress updates</li>\n<li>Open Claw Desktop later to review and resume</li>\n</ol>\n<h2 id=\"setting-up-slack\"><a href=\"#setting-up-slack\">Setting Up Slack</a></h2>\n<h3 id=\"create-a-slack-app\"><a href=\"#create-a-slack-app\">Create a Slack App</a></h3>\n<ol>\n<li>Go to <a href=\"https://api.slack.com\">api.slack.com</a></li>\n<li>Create a new app with Bot Token Scopes:\n<ul>\n<li><code dir=\"auto\">app_mentions:read</code></li>\n<li><code dir=\"auto\">chat:write</code></li>\n<li><code dir=\"auto\">channels:history</code></li>\n<li><code dir=\"auto\">groups:history</code></li>\n</ul>\n</li>\n<li>Install to your workspace</li>\n<li>Copy the Bot Token</li>\n</ol>\n<h3 id=\"configure-openclaw\"><a href=\"#configure-openclaw\">Configure OpenClaw</a></h3>\n<p>Add to your OpenClaw <code dir=\"auto\">.env</code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">SLACK_BOT_TOKEN=xoxb-your-token</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">SLACK_SIGNING_SECRET=your-signing-secret</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"SLACK_BOT_TOKEN=xoxb-your-tokenSLACK_SIGNING_SECRET=your-signing-secret\"><div></div></button></div></figure></div>\n<h2 id=\"using-slack\"><a href=\"#using-slack\">Using Slack</a></h2>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">@claw refactor the auth module</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"@claw refactor the auth module\"><div></div></button></div></figure></div>\n<p>The agent will:</p>\n<ol>\n<li>Acknowledge your request</li>\n<li>Start working in a thread</li>\n<li>Update you with progress</li>\n<li>Ask for approval if needed (you can approve in Slack or Desktop)</li>\n</ol>\n<h2 id=\"claw-desktop-integration\"><a href=\"#claw-desktop-integration\">Claw Desktop Integration</a></h2>\n<p>Runs started from Slack show a Slack icon in Claw Desktop. Your <code dir=\"auto\">run_id</code> is consistent across both interfaces.</p>"
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
const url = "src/content/docs/slack-integration.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/slack-integration.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/slack-integration.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
