import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Artifacts",
  "description": "View and review agent-generated artifacts."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "artifact-panel",
    "text": "Artifact Panel"
  }, {
    "depth": 3,
    "slug": "plan",
    "text": "Plan"
  }, {
    "depth": 3,
    "slug": "summary",
    "text": "Summary"
  }, {
    "depth": 3,
    "slug": "verify",
    "text": "Verify"
  }, {
    "depth": 2,
    "slug": "file-diffs",
    "text": "File Diffs"
  }, {
    "depth": 2,
    "slug": "local-storage",
    "text": "Local Storage"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Claw Desktop provides a dedicated panel for reviewing artifacts your agent created during a run.</p>\n<h2 id=\"artifact-panel\"><a href=\"#artifact-panel\">Artifact Panel</a></h2>\n<p>The right panel in Run Detail view shows three tabs:</p>\n<h3 id=\"plan\"><a href=\"#plan\">Plan</a></h3>\n<p>The agent’s plan for the task (PLAN.md). Shows what the agent intends to do before starting work.</p>\n<h3 id=\"summary\"><a href=\"#summary\">Summary</a></h3>\n<p>What the agent accomplished (SUMMARY.md). Updated as the agent completes steps.</p>\n<h3 id=\"verify\"><a href=\"#verify\">Verify</a></h3>\n<p>Verification checklist (VERIFICATION.md). A list of items to check to confirm the work is correct.</p>\n<h2 id=\"file-diffs\"><a href=\"#file-diffs\">File Diffs</a></h2>\n<p>In the timeline, file changes appear as diff cards with:</p>\n<ul>\n<li><strong>File path</strong> — Which file was modified</li>\n<li><strong>Syntax highlighting</strong> — Language-aware diff rendering</li>\n<li><strong>Expand/Collapse</strong> — Click to see full diff content</li>\n</ul>\n<h2 id=\"local-storage\"><a href=\"#local-storage\">Local Storage</a></h2>\n<p>All artifacts are saved to your local workspace at:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">~/Documents/ClawWorkspace/RUNS/&#x3C;run_id>/ARTIFACTS/</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"~/Documents/ClawWorkspace/RUNS/<run_id>/ARTIFACTS/\"><div></div></button></div></figure></div>\n<p>You can browse these files in Finder even when Claw Desktop isn’t running.</p>"
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
const url = "src/content/docs/artifacts.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/artifacts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/artifacts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
