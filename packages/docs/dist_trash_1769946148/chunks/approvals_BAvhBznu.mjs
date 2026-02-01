import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Human-in-the-Loop Approvals",
  "description": "Approve or reject blocked agent actions."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-it-works",
    "text": "How It Works"
  }, {
    "depth": 2,
    "slug": "approval-interface",
    "text": "Approval Interface"
  }, {
    "depth": 2,
    "slug": "approvereject",
    "text": "Approve/Reject"
  }, {
    "depth": 2,
    "slug": "offline-behavior",
    "text": "Offline Behavior"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>When your OpenClaw agent encounters an action that requires approval, it pauses and waits for your decision in Claw Desktop.</p>\n<h2 id=\"how-it-works\"><a href=\"#how-it-works\">How It Works</a></h2>\n<ol>\n<li>Agent reaches a blocked action (e.g., destructive file operation, external API call)</li>\n<li>Run status changes to <strong>Blocked</strong> (yellow)</li>\n<li>You see the blocked action in the Run Timeline</li>\n<li>Click <strong>Approve</strong> or <strong>Reject</strong> inline</li>\n<li>Agent resumes automatically after your decision</li>\n</ol>\n<h2 id=\"approval-interface\"><a href=\"#approval-interface\">Approval Interface</a></h2>\n<p>Blocked actions appear as highlighted cards in the timeline showing:</p>\n<ul>\n<li><strong>Action Type</strong> — What the agent wants to do</li>\n<li><strong>Parameters</strong> — Details of the action</li>\n<li><strong>Context</strong> — Why the agent wants to do this</li>\n</ul>\n<h2 id=\"approvereject\"><a href=\"#approvereject\">Approve/Reject</a></h2>\n<ul>\n<li><strong>Approve</strong> — Agent proceeds with the action</li>\n<li><strong>Reject</strong> — Agent skips the action and may try an alternative</li>\n</ul>\n<p>Your decision is sent to OpenClaw and the run continues immediately.</p>\n<h2 id=\"offline-behavior\"><a href=\"#offline-behavior\">Offline Behavior</a></h2>\n<p>When offline, approval buttons are disabled with a tooltip explaining you need to reconnect to take action.</p>"
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
const url = "src/content/docs/approvals.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/approvals.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/approvals.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
