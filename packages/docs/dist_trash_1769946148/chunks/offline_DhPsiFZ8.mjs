import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Offline Mode",
  "description": "Using Claw Desktop when disconnected."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "offline-detection",
    "text": "Offline Detection"
  }, {
    "depth": 2,
    "slug": "offline-behavior",
    "text": "Offline Behavior"
  }, {
    "depth": 2,
    "slug": "what-still-works",
    "text": "What Still Works"
  }, {
    "depth": 2,
    "slug": "what-doesnt-work",
    "text": "What Doesn’t Work"
  }, {
    "depth": 2,
    "slug": "reconnection",
    "text": "Reconnection"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Claw Desktop gracefully degrades when you lose connection to your OpenClaw instance.</p>\n<h2 id=\"offline-detection\"><a href=\"#offline-detection\">Offline Detection</a></h2>\n<p>The app detects offline state when:</p>\n<ul>\n<li>WebSocket connection fails</li>\n<li>Connection times out</li>\n<li>Network becomes unavailable</li>\n</ul>\n<h2 id=\"offline-behavior\"><a href=\"#offline-behavior\">Offline Behavior</a></h2>\n<p>When offline:</p>\n<ul>\n<li><strong>“Offline” banner</strong> appears at the top of the app</li>\n<li><strong>Cached runs</strong> are displayed from local storage</li>\n<li><strong>Timeline events</strong> show previously synced data</li>\n<li><strong>Approve/Reject buttons</strong> are disabled</li>\n</ul>\n<h2 id=\"what-still-works\"><a href=\"#what-still-works\">What Still Works</a></h2>\n<p>Even offline, you can:</p>\n<ul>\n<li>Browse run history from cache</li>\n<li>Read message timelines</li>\n<li>View artifacts stored locally</li>\n<li>Review file diffs</li>\n</ul>\n<h2 id=\"what-doesnt-work\"><a href=\"#what-doesnt-work\">What Doesn’t Work</a></h2>\n<p>When offline, you cannot:</p>\n<ul>\n<li>Approve or reject blocked actions</li>\n<li>Resume runs</li>\n<li>See new events from the agent</li>\n<li>Start new runs</li>\n</ul>\n<h2 id=\"reconnection\"><a href=\"#reconnection\">Reconnection</a></h2>\n<p>Claw Desktop automatically reconnects with exponential backoff (1s, 2s, 4s, up to 10s max). Once reconnected, sync resumes automatically.</p>"
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
const url = "src/content/docs/offline.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/offline.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/offline.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
