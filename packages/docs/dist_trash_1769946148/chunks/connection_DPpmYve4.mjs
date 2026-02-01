import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Connection",
  "description": "Connect Claw Desktop to your OpenClaw instance."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "connection-setup",
    "text": "Connection Setup"
  }, {
    "depth": 2,
    "slug": "multiple-hosts",
    "text": "Multiple Hosts"
  }, {
    "depth": 2,
    "slug": "troubleshooting",
    "text": "Troubleshooting"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Connect Claw Desktop to your OpenClaw instance to start reviewing and resuming agent runs.</p>\n<h2 id=\"prerequisites\"><a href=\"#prerequisites\">Prerequisites</a></h2>\n<ul>\n<li>An OpenClaw instance running and accessible</li>\n<li>Your OpenClaw API token</li>\n</ul>\n<h2 id=\"connection-setup\"><a href=\"#connection-setup\">Connection Setup</a></h2>\n<ol>\n<li>Open Claw Desktop</li>\n<li>Enter your <strong>Host URL</strong> (e.g., <code dir=\"auto\">wss://your-server.com:8080</code>)</li>\n<li>Enter your <strong>API Token</strong></li>\n<li>Click <strong>Test Connection</strong> to verify</li>\n</ol>\n<p>Once connected, Claw Desktop will perform a V3 WebSocket handshake and receive a device token for persistent authentication.</p>\n<h2 id=\"multiple-hosts\"><a href=\"#multiple-hosts\">Multiple Hosts</a></h2>\n<p>You can add and manage multiple OpenClaw hosts. Switch between them from the connection dropdown in the sidebar.</p>\n<h2 id=\"troubleshooting\"><a href=\"#troubleshooting\">Troubleshooting</a></h2>\n<p>If connection fails:</p>\n<ul>\n<li>Ensure your OpenClaw instance is running</li>\n<li>Check that the Host URL is correct (include <code dir=\"auto\">wss://</code> for secure connections)</li>\n<li>Verify your API token hasn’t expired</li>\n<li>Check network connectivity (firewall, VPN, etc.)</li>\n</ul>"
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
const url = "src/content/docs/connection.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/connection.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/connection.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
