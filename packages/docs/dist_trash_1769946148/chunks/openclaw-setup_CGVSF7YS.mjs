import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "OpenClaw Setup",
  "description": "Set up your OpenClaw instance to use with Claw Desktop."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-is-openclaw",
    "text": "What is OpenClaw?"
  }, {
    "depth": 2,
    "slug": "deployment-options",
    "text": "Deployment Options"
  }, {
    "depth": 3,
    "slug": "digitalocean",
    "text": "DigitalOcean"
  }, {
    "depth": 3,
    "slug": "cloudflare-workers",
    "text": "Cloudflare Workers"
  }, {
    "depth": 3,
    "slug": "self-hosted",
    "text": "Self-Hosted"
  }, {
    "depth": 2,
    "slug": "quick-start",
    "text": "Quick Start"
  }, {
    "depth": 2,
    "slug": "configuration",
    "text": "Configuration"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>OpenClaw is the remote agent that Claw Desktop connects to. This guide covers setting up your own OpenClaw instance.</p>\n<h2 id=\"what-is-openclaw\"><a href=\"#what-is-openclaw\">What is OpenClaw?</a></h2>\n<p>OpenClaw is an AI agent that runs on your server and executes tasks autonomously. It:</p>\n<ul>\n<li>Runs 24/7 on your infrastructure</li>\n<li>Connects to Slack for conversational interaction</li>\n<li>Exposes a WebSocket API for Claw Desktop</li>\n</ul>\n<h2 id=\"deployment-options\"><a href=\"#deployment-options\">Deployment Options</a></h2>\n<h3 id=\"digitalocean\"><a href=\"#digitalocean\">DigitalOcean</a></h3>\n<p>One-click deployment via Docker Compose.</p>\n<h3 id=\"cloudflare-workers\"><a href=\"#cloudflare-workers\">Cloudflare Workers</a></h3>\n<p>Serverless deployment using Cloudflare Sandbox.</p>\n<h3 id=\"self-hosted\"><a href=\"#self-hosted\">Self-Hosted</a></h3>\n<p>Docker Compose on any Linux server with Docker installed.</p>\n<h2 id=\"quick-start\"><a href=\"#quick-start\">Quick Start</a></h2>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Clone the OpenClaw repo</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">git</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">clone</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">https://github.com/openclaw/openclaw</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Configure environment</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">cp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">.env.example</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">.env</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Edit .env with your settings</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start the agent</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">docker</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">compose</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">up</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">-d</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"git clone https://github.com/openclaw/openclawcp .env.example .envdocker compose up -d\"><div></div></button></div></figure></div>\n<p>Your OpenClaw instance will be available at <code dir=\"auto\">ws://your-server:8080</code>.</p>\n<h2 id=\"configuration\"><a href=\"#configuration\">Configuration</a></h2>\n<p>See the <a href=\"https://github.com/openclaw\">OpenClaw documentation</a> for full configuration options.</p>"
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
const url = "src/content/docs/openclaw-setup.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/openclaw-setup.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/openclaw-setup.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
