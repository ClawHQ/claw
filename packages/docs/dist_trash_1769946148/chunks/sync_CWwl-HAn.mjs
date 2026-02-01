import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Sync Engine",
  "description": "How Claw Desktop keeps your runs up to date."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-sync-works",
    "text": "How Sync Works"
  }, {
    "depth": 2,
    "slug": "sync-modes",
    "text": "Sync Modes"
  }, {
    "depth": 3,
    "slug": "global-inbox-sync",
    "text": "Global Inbox Sync"
  }, {
    "depth": 3,
    "slug": "per-run-sync",
    "text": "Per-Run Sync"
  }, {
    "depth": 2,
    "slug": "while-you-were-away",
    "text": "While You Were Away"
  }, {
    "depth": 2,
    "slug": "file-system-storage",
    "text": "File-System Storage"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Claw Desktop continuously syncs with your OpenClaw instance to keep you up to date.</p>\n<h2 id=\"how-sync-works\"><a href=\"#how-sync-works\">How Sync Works</a></h2>\n<ul>\n<li><strong>Polling</strong> — App polls OpenClaw every 5 seconds for new events</li>\n<li><strong>Cursor-based</strong> — Only fetches events after your last known cursor (incremental)</li>\n<li><strong>Reactive</strong> — New events appear in the timeline without page refresh</li>\n</ul>\n<h2 id=\"sync-modes\"><a href=\"#sync-modes\">Sync Modes</a></h2>\n<h3 id=\"global-inbox-sync\"><a href=\"#global-inbox-sync\">Global Inbox Sync</a></h3>\n<p>On app start, Claw Desktop syncs all run statuses in the background. This powers the “While You Were Away” feature.</p>\n<h3 id=\"per-run-sync\"><a href=\"#per-run-sync\">Per-Run Sync</a></h3>\n<p>When you open a run detail view, a focused sync fetches the full event history for that run.</p>\n<h2 id=\"while-you-were-away\"><a href=\"#while-you-were-away\">While You Were Away</a></h2>\n<p>When you reopen Claw Desktop, you’ll see a summary of what changed since your last session:</p>\n<ul>\n<li>Runs that became blocked</li>\n<li>Runs that completed</li>\n<li>Runs that failed</li>\n</ul>\n<p>Updates are sorted newest first, with blocked runs prioritized.</p>\n<h2 id=\"file-system-storage\"><a href=\"#file-system-storage\">File-System Storage</a></h2>\n<p>All synced data is stored locally in <code dir=\"auto\">~/Documents/ClawWorkspace/RUNS/&#x3C;run_id>/</code>:</p>\n<ul>\n<li><code dir=\"auto\">meta.json</code> — Run metadata and sync cursor</li>\n<li><code dir=\"auto\">events.jsonl</code> — Append-only event log</li>\n<li><code dir=\"auto\">ARTIFACTS/</code> — Downloaded artifacts</li>\n</ul>"
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
const url = "src/content/docs/sync.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/sync.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/sync.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
