import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';
import { g as $$Aside } from './Code_fK6YVkYD.mjs';

const frontmatter = {
  "title": "Ghost Files",
  "description": "See exactly what will happen before any file is changed."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-are-ghost-files",
    "text": "What Are Ghost Files?"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How It Works"
  }, {
    "depth": 3,
    "slug": "1-you-make-a-request",
    "text": "1. You Make a Request"
  }, {
    "depth": 3,
    "slug": "2-ishi-simulates-the-changes",
    "text": "2. Ishi Simulates the Changes"
  }, {
    "depth": 3,
    "slug": "3-you-see-the-ghost-preview",
    "text": "3. You See the Ghost Preview"
  }, {
    "depth": 3,
    "slug": "4-you-approve-or-reject",
    "text": "4. You Approve or Reject"
  }, {
    "depth": 2,
    "slug": "the-diff-view",
    "text": "The Diff View"
  }, {
    "depth": 2,
    "slug": "why-this-matters",
    "text": "Why This Matters"
  }, {
    "depth": 2,
    "slug": "batch-previews",
    "text": "Batch Previews"
  }, {
    "depth": 2,
    "slug": "ghost-files--undo",
    "text": "Ghost Files + Undo"
  }, {
    "depth": 2,
    "slug": "related",
    "text": "Related"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Other AI tools are “magic boxes”—you ask for something, and <em>something happens</em>. You cross your fingers and hope.</p>\n<p><strong>Ishi is a Glass Box.</strong> You see everything before it happens.</p>\n<hr>\n<h2 id=\"what-are-ghost-files\"><a href=\"#what-are-ghost-files\">What Are Ghost Files?</a></h2>\n<p>When Ishi proposes a change to your files, it shows a <strong>Ghost File</strong>—a translucent preview of what the result will look like.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">┌─────────────────────────────────────────────────────┐</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│                                                     │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  📂 Downloads/                                      │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  ├── 📄 Scan001.pdf                                │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  │                                                  │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  │   👻 ─────────────────────────────────          │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  │   │ 📄 Acme-Invoice-2025-01-03.pdf  │          │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  │   └─────────────────────────────────            │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  │        ↑ Ghost Preview (not yet real)           │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  │                                                  │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  └── 📄 Document.docx                              │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│                                                     │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">└─────────────────────────────────────────────────────┘</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"┌─────────────────────────────────────────────────────┐│                                                     ││  📂 Downloads/                                      ││  ├── 📄 Scan001.pdf                                ││  │                                                  ││  │   👻 ─────────────────────────────────          ││  │   │ 📄 Acme-Invoice-2025-01-03.pdf  │          ││  │   └─────────────────────────────────            ││  │        ↑ Ghost Preview (not yet real)           ││  │                                                  ││  └── 📄 Document.docx                              ││                                                     │└─────────────────────────────────────────────────────┘\"><div></div></button></div></figure></div>\n<p>The ghost shows you the <strong>exact outcome</strong> at <strong>zero risk</strong>.</p>\n<hr>\n<h2 id=\"how-it-works\"><a href=\"#how-it-works\">How It Works</a></h2>\n<h3 id=\"1-you-make-a-request\"><a href=\"#1-you-make-a-request\">1. You Make a Request</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Rename all invoices to include the vendor name and date</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Rename all invoices to include the vendor name and date\"><div></div></button></div></figure></div>\n<h3 id=\"2-ishi-simulates-the-changes\"><a href=\"#2-ishi-simulates-the-changes\">2. Ishi Simulates the Changes</a></h3>\n<p>Ishi analyzes your files and calculates what would happen—but <strong>doesn’t execute anything yet</strong>.</p>\n<h3 id=\"3-you-see-the-ghost-preview\"><a href=\"#3-you-see-the-ghost-preview\">3. You See the Ghost Preview</a></h3>\n<p>Every file that would be affected shows:</p>\n<ul>\n<li><strong>Current state</strong> — What exists now</li>\n<li><strong>Ghost state</strong> — What it would become</li>\n<li><strong>The difference</strong> — What’s changing</li>\n</ul>\n<h3 id=\"4-you-approve-or-reject\"><a href=\"#4-you-approve-or-reject\">4. You Approve or Reject</a></h3>\n<ul>\n<li>✅ <strong>Approve</strong> — The ghost becomes real</li>\n<li>❌ <strong>Reject</strong> — Nothing happens, file untouched</li>\n</ul>\n<hr>\n<h2 id=\"the-diff-view\"><a href=\"#the-diff-view\">The Diff View</a></h2>\n<p>For file modifications (not just renames), you see a full diff:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"diff\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">Contract between Acme Corp and Client</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">Payment due: NET 30</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">Payment due: NET 15</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">Deliverables:</span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span style=\"--0:#971822;--1:#FDAEB7\">- Phase 1: Design (March 1)</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#9a1922;--1:#FDAEB7\">- Phase 1: Design (February 15)</span></div></div><div class=\"ec-line highlight del\"><div class=\"code\"><span style=\"--0:#971822;--1:#FDAEB7\">- Phase 2: Development (April 1)</span></div></div><div class=\"ec-line highlight ins\"><div class=\"code\"><span style=\"--0:#9a1922;--1:#FDAEB7\">- Phase 2: Development (March 15)</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Contract between Acme Corp and ClientPayment due: NET 30Payment due: NET 15Deliverables:- Phase 1: Design (March 1)- Phase 1: Design (February 15)- Phase 2: Development (April 1)- Phase 2: Development (March 15)\"><div></div></button></div></figure></div>\n<p>Red lines show what’s being removed. Green lines show what’s being added.</p>\n<hr>\n<h2 id=\"why-this-matters\"><a href=\"#why-this-matters\">Why This Matters</a></h2>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "The Problem with \"Magic\" AI",
      "set:html": "<p>Most AI tools hide what they’re doing. You type a command and hope for the best. Then you discover it renamed your\nimportant files incorrectly, or worse—deleted something.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Ishi’s Glass Box approach means:</p>\n<ul>\n<li><strong>No surprises</strong> — You see exactly what will happen</li>\n<li><strong>No accidents</strong> — Nothing executes without your approval</li>\n<li><strong>No anxiety</strong> — You’re always in control</li>\n</ul>\n<hr>\n<h2 id=\"batch-previews\"><a href=\"#batch-previews\">Batch Previews</a></h2>\n<p>When working with many files, Ishi groups the previews:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">📋 Batch Preview: 47 files to rename</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Sample changes:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">• IMG_001.png → Dashboard-Chart.png</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">• IMG_002.png → Login-Screen.png</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">• IMG_003.png → Settings-Panel.png</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">[See All 47] [Approve All] [Review One-by-One]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"📋 Batch Preview: 47 files to rename━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━Sample changes:• IMG_001.png → Dashboard-Chart.png• IMG_002.png → Login-Screen.png• IMG_003.png → Settings-Panel.png[See All 47] [Approve All] [Review One-by-One]\"><div></div></button></div></figure></div>\n<p>You can review everything or trust the pattern after checking samples.</p>\n<hr>\n<h2 id=\"ghost-files--undo\"><a href=\"#ghost-files--undo\">Ghost Files + Undo</a></h2>\n<p>Even after you approve, every action is logged. If the result isn’t what you expected:</p>\n<ol>\n<li>Open <strong>History</strong></li>\n<li>Find the operation</li>\n<li>Click <strong>Undo</strong></li>\n</ol>\n<p>The ghost becomes real, but you can always revert.</p>\n<hr>\n<h2 id=\"related\"><a href=\"#related\">Related</a></h2>\n<ul>\n<li><a href=\"/docs/permissions\">Safety &#x26; Control</a> — Set approval levels</li>\n<li><a href=\"/docs/trust-safety/undo-history\">Undo History</a> — Revert any change</li>\n<li><a href=\"/docs/trust-safety/privacy\">Privacy</a> — How your data stays local</li>\n</ul>"
    })]
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

const url = "src/content/docs/trust-safety/ghost-files.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/trust-safety/ghost-files.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/trust-safety/ghost-files.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
