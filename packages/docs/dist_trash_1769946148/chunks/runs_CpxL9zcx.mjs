import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Runs Inbox",
  "description": "View and manage your OpenClaw agent runs."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "run-status",
    "text": "Run Status"
  }, {
    "depth": 3,
    "slug": "status-colors",
    "text": "Status Colors"
  }, {
    "depth": 2,
    "slug": "filtering-runs",
    "text": "Filtering Runs"
  }, {
    "depth": 2,
    "slug": "slack-indicator",
    "text": "Slack Indicator"
  }, {
    "depth": 2,
    "slug": "run-details",
    "text": "Run Details"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>The Runs Inbox shows all your agent runs at a glance.</p>\n<h2 id=\"run-status\"><a href=\"#run-status\">Run Status</a></h2>\n<p>Each run displays:</p>\n<ul>\n<li><strong>Title</strong> — Generated from the first message or task description</li>\n<li><strong>Status Chip</strong> — Color-coded status indicator</li>\n<li><strong>Last Update</strong> — When the run was last active</li>\n</ul>\n<h3 id=\"status-colors\"><a href=\"#status-colors\">Status Colors</a></h3>\n<ul>\n<li>🔵 <strong>Running</strong> — Agent is actively working</li>\n<li>🟡 <strong>Blocked</strong> — Waiting for your approval</li>\n<li>🟢 <strong>Done</strong> — Completed successfully</li>\n<li>🔴 <strong>Failed</strong> — Encountered an error</li>\n</ul>\n<h2 id=\"filtering-runs\"><a href=\"#filtering-runs\">Filtering Runs</a></h2>\n<p>Use the tabs at the top to filter:</p>\n<ul>\n<li><strong>All</strong> — Show all runs</li>\n<li><strong>Running</strong> — Only active runs</li>\n<li><strong>Blocked</strong> — Runs waiting for approval</li>\n<li><strong>Done</strong> — Completed runs</li>\n</ul>\n<h2 id=\"slack-indicator\"><a href=\"#slack-indicator\">Slack Indicator</a></h2>\n<p>Runs started from Slack show a Slack icon. Click the icon to open the original thread.</p>\n<h2 id=\"run-details\"><a href=\"#run-details\">Run Details</a></h2>\n<p>Click any run to open the Run Timeline view with full message history, tool calls, and artifacts.</p>"
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
const url = "src/content/docs/runs.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/runs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/runs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
