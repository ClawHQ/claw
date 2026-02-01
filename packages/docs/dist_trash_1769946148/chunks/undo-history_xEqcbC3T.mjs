import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Undo History",
  "description": "Every action is logged. Undo any change, anytime."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-it-works",
    "text": "How It Works"
  }, {
    "depth": 3,
    "slug": "automatic-transaction-log",
    "text": "Automatic Transaction Log"
  }, {
    "depth": 2,
    "slug": "viewing-your-history",
    "text": "Viewing Your History"
  }, {
    "depth": 3,
    "slug": "open-the-history-panel",
    "text": "Open the History Panel"
  }, {
    "depth": 3,
    "slug": "what-youll-see",
    "text": "What You’ll See"
  }, {
    "depth": 2,
    "slug": "undoing-an-operation",
    "text": "Undoing an Operation"
  }, {
    "depth": 3,
    "slug": "single-file-undo",
    "text": "Single File Undo"
  }, {
    "depth": 3,
    "slug": "batch-undo",
    "text": "Batch Undo"
  }, {
    "depth": 2,
    "slug": "what-can-be-undone",
    "text": "What Can Be Undone"
  }, {
    "depth": 2,
    "slug": "how-long-is-history-kept",
    "text": "How Long Is History Kept?"
  }, {
    "depth": 2,
    "slug": "viewing-operation-details",
    "text": "Viewing Operation Details"
  }, {
    "depth": 2,
    "slug": "technical-details",
    "text": "Technical Details"
  }, {
    "depth": 3,
    "slug": "where-is-history-stored",
    "text": "Where Is History Stored?"
  }, {
    "depth": 3,
    "slug": "privacy",
    "text": "Privacy"
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
      "set:html": "<p>Made a mistake? Approved something you shouldn’t have? No problem.</p>\n<p><strong>Every file operation in Ishi is logged.</strong> You can undo any change at any time.</p>\n<hr>\n<h2 id=\"how-it-works\"><a href=\"#how-it-works\">How It Works</a></h2>\n<h3 id=\"automatic-transaction-log\"><a href=\"#automatic-transaction-log\">Automatic Transaction Log</a></h3>\n<p>Every time Ishi modifies, renames, or moves a file, it records:</p>\n<ul>\n<li><strong>What changed</strong> — The exact operation performed</li>\n<li><strong>When</strong> — Timestamp of the action</li>\n<li><strong>Before state</strong> — What the file looked like before</li>\n<li><strong>After state</strong> — What it became</li>\n</ul>\n<p>This log is stored locally on your machine.</p>\n<hr>\n<h2 id=\"viewing-your-history\"><a href=\"#viewing-your-history\">Viewing Your History</a></h2>\n<h3 id=\"open-the-history-panel\"><a href=\"#open-the-history-panel\">Open the History Panel</a></h3>\n<p>In Ishi, access your history through:</p>\n<ul>\n<li>The <strong>History</strong> tab in the sidebar</li>\n<li>Keyboard shortcut (customizable in <a href=\"/docs/keybinds\">Settings</a>)</li>\n</ul>\n<h3 id=\"what-youll-see\"><a href=\"#what-youll-see\">What You’ll See</a></h3>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">📜 Recent Operations</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Today, 10:32 AM</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├── ✏️ Renamed 23 files in Documents/Invoices</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│   └── [Undo] [View Details]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├── 📁 Moved 5 files to Archive/2024</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│   └── [Undo] [View Details]</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Yesterday, 4:15 PM</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├── 📄 Created summary.csv from 12 PDFs</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│   └── [Undo] [View Details]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"📜 Recent Operations━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━Today, 10:32 AM├── ✏️ Renamed 23 files in Documents/Invoices│   └── [Undo] [View Details]│├── 📁 Moved 5 files to Archive/2024│   └── [Undo] [View Details]Yesterday, 4:15 PM├── 📄 Created summary.csv from 12 PDFs│   └── [Undo] [View Details]\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"undoing-an-operation\"><a href=\"#undoing-an-operation\">Undoing an Operation</a></h2>\n<h3 id=\"single-file-undo\"><a href=\"#single-file-undo\">Single File Undo</a></h3>\n<ol>\n<li>Find the operation in History</li>\n<li>Click <strong>Undo</strong></li>\n<li>Confirm the revert</li>\n</ol>\n<p>The file returns to its previous state instantly.</p>\n<h3 id=\"batch-undo\"><a href=\"#batch-undo\">Batch Undo</a></h3>\n<p>If you renamed 50 files and want to undo all of them:</p>\n<ol>\n<li>Find the batch operation</li>\n<li>Click <strong>Undo All</strong></li>\n<li>Confirm</li>\n</ol>\n<p>All 50 files revert to their original names.</p>\n<hr>\n<h2 id=\"what-can-be-undone\"><a href=\"#what-can-be-undone\">What Can Be Undone</a></h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Operation</th><th>Undoable?</th><th>What Happens</th></tr></thead><tbody><tr><td>File rename</td><td>✅ Yes</td><td>Original name restored</td></tr><tr><td>File move</td><td>✅ Yes</td><td>File returns to original location</td></tr><tr><td>File edit</td><td>✅ Yes</td><td>Previous content restored</td></tr><tr><td>File creation</td><td>✅ Yes</td><td>Created file is deleted</td></tr><tr><td>File deletion</td><td>⚠️ Limited</td><td>If sent to Trash, can be restored</td></tr></tbody></table>\n"
    }), createVNode("aside", {
      type: "caution",
      "set:html": "<p><strong>Important:</strong> If a file was permanently deleted (bypassing Trash), it cannot be recovered through Undo. This is why\nIshi defaults to moving files to Trash rather than permanent deletion.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"how-long-is-history-kept\"><a href=\"#how-long-is-history-kept\">How Long Is History Kept?</a></h2>\n<p>By default, Ishi keeps your operation history for <strong>30 days</strong>.</p>\n<p>To change this:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">ishi.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"history\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"retention_days\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#005CC5;--1:#79B8FF\">90</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;history&#x22;: {    &#x22;retention_days&#x22;: 90  }}\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"viewing-operation-details\"><a href=\"#viewing-operation-details\">Viewing Operation Details</a></h2>\n<p>Click <strong>View Details</strong> on any operation to see exactly what changed:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">📋 Operation Details</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Type: Rename</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Time: January 3, 2025 at 10:32 AM</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Files affected: 23</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Changes:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">┌────────────────────────────────────────────┐</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ Before              │ After               │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├────────────────────────────────────────────┤</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ IMG_001.png         │ Chart-Revenue.png   │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ IMG_002.png         │ Chart-Users.png     │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ ...                 │ ...                 │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">└────────────────────────────────────────────┘</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">[Undo This Operation]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"📋 Operation Details━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━Type: RenameTime: January 3, 2025 at 10:32 AMFiles affected: 23Changes:┌────────────────────────────────────────────┐│ Before              │ After               │├────────────────────────────────────────────┤│ IMG_001.png         │ Chart-Revenue.png   ││ IMG_002.png         │ Chart-Users.png     ││ ...                 │ ...                 │└────────────────────────────────────────────┘[Undo This Operation]\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"technical-details\"><a href=\"#technical-details\">Technical Details</a></h2>\n<h3 id=\"where-is-history-stored\"><a href=\"#where-is-history-stored\">Where Is History Stored?</a></h3>\n<p>The transaction log is stored in SQLite at:</p>\n<ul>\n<li><strong>macOS:</strong> <code dir=\"auto\">~/Library/Application Support/ishi/history.db</code></li>\n<li><strong>Windows:</strong> <code dir=\"auto\">%APPDATA%\\ishi\\history.db</code></li>\n</ul>\n<h3 id=\"privacy\"><a href=\"#privacy\">Privacy</a></h3>\n<p>Your history never leaves your computer. It’s stored locally and never synced to any cloud service.</p>\n<hr>\n<h2 id=\"related\"><a href=\"#related\">Related</a></h2>\n<ul>\n<li><a href=\"/docs/trust-safety/ghost-files\">Ghost Files</a> — Preview changes before they happen</li>\n<li><a href=\"/docs/permissions\">Safety &#x26; Control</a> — Set approval requirements</li>\n<li><a href=\"/docs/trust-safety/privacy\">Privacy</a> — How your data stays local</li>\n</ul>"
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

const url = "src/content/docs/trust-safety/undo-history.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/trust-safety/undo-history.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/trust-safety/undo-history.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
