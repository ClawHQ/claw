import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Deployment",
  "description": "Deploy OpenClaw to production."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "deployment-options",
    "text": "Deployment Options"
  }, {
    "depth": 2,
    "slug": "digitalocean-droplet",
    "text": "DigitalOcean Droplet"
  }, {
    "depth": 3,
    "slug": "setup",
    "text": "Setup"
  }, {
    "depth": 3,
    "slug": "networking",
    "text": "Networking"
  }, {
    "depth": 2,
    "slug": "cloudflare-workers",
    "text": "Cloudflare Workers"
  }, {
    "depth": 2,
    "slug": "self-hosted",
    "text": "Self-Hosted"
  }, {
    "depth": 3,
    "slug": "requirements",
    "text": "Requirements"
  }, {
    "depth": 3,
    "slug": "security",
    "text": "Security"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>This guide covers deploying OpenClaw to various platforms.</p>\n<h2 id=\"deployment-options\"><a href=\"#deployment-options\">Deployment Options</a></h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Platform</th><th>Pros</th><th>Cons</th></tr></thead><tbody><tr><td>DigitalOcean</td><td>Simple, affordable</td><td>Manual scaling</td></tr><tr><td>Cloudflare</td><td>Serverless, global</td><td>Sandbox limitations</td></tr><tr><td>Self-hosted</td><td>Full control</td><td>Maintenance burden</td></tr></tbody></table>\n<h2 id=\"digitalocean-droplet\"><a href=\"#digitalocean-droplet\">DigitalOcean Droplet</a></h2>\n<h3 id=\"setup\"><a href=\"#setup\">Setup</a></h3>\n<ol>\n<li>Create a Droplet (2GB+ RAM recommended)</li>\n<li>SSH into your droplet</li>\n<li>Install Docker and Docker Compose</li>\n<li>Clone and configure OpenClaw</li>\n<li>Run <code dir=\"auto\">docker compose up -d</code></li>\n</ol>\n<h3 id=\"networking\"><a href=\"#networking\">Networking</a></h3>\n<ul>\n<li>Enable firewall (UFW)</li>\n<li>Allow ports 22 (SSH), 8080 (WebSocket)</li>\n<li>Consider adding a reverse proxy (Caddy/Nginx) for HTTPS</li>\n</ul>\n<h2 id=\"cloudflare-workers\"><a href=\"#cloudflare-workers\">Cloudflare Workers</a></h2>\n<p>See <a href=\"https://github.com/openclaw/moltworker\">Moltworker documentation</a> for serverless deployment.</p>\n<h2 id=\"self-hosted\"><a href=\"#self-hosted\">Self-Hosted</a></h2>\n<h3 id=\"requirements\"><a href=\"#requirements\">Requirements</a></h3>\n<ul>\n<li>Linux server (Ubuntu 22.04+ recommended)</li>\n<li>Docker 24.0+</li>\n<li>Docker Compose V2</li>\n<li>2GB+ RAM</li>\n<li>Public IP or VPN access</li>\n</ul>\n<h3 id=\"security\"><a href=\"#security\">Security</a></h3>\n<ul>\n<li>Use strong API tokens</li>\n<li>Enable HTTPS via reverse proxy</li>\n<li>Consider Tailscale for private network access</li>\n</ul>"
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
const url = "src/content/docs/deployment.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/deployment.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/deployment.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
