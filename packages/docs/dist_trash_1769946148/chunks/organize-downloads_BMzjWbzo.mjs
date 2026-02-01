import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Organize Downloads Automatically",
  "description": "Have Ishi watch your Downloads folder and intelligently sort files."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-youll-accomplish",
    "text": "What You’ll Accomplish"
  }, {
    "depth": 2,
    "slug": "step-1-open-a-conversation",
    "text": "Step 1: Open a Conversation"
  }, {
    "depth": 2,
    "slug": "step-2-review-the-plan",
    "text": "Step 2: Review the Plan"
  }, {
    "depth": 2,
    "slug": "step-3-see-ghost-files",
    "text": "Step 3: See Ghost Files"
  }, {
    "depth": 2,
    "slug": "step-4-approve-or-reject",
    "text": "Step 4: Approve or Reject"
  }, {
    "depth": 2,
    "slug": "step-5-set-up-auto-organize-optional",
    "text": "Step 5: Set Up Auto-Organize (Optional)"
  }, {
    "depth": 2,
    "slug": "safety-features",
    "text": "Safety Features"
  }, {
    "depth": 3,
    "slug": "nothing-happens-without-approval",
    "text": "Nothing Happens Without Approval"
  }, {
    "depth": 3,
    "slug": "full-undo-history",
    "text": "Full Undo History"
  }, {
    "depth": 3,
    "slug": "files-stay-local",
    "text": "Files Stay Local"
  }, {
    "depth": 2,
    "slug": "example-prompts",
    "text": "Example Prompts"
  }, {
    "depth": 2,
    "slug": "tips-for-best-results",
    "text": "Tips for Best Results"
  }, {
    "depth": 2,
    "slug": "next-steps",
    "text": "Next Steps"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Your Downloads folder is chaos. PDFs from last year, screenshots named “IMG_4832.png”, and invoices buried under random files. Let’s fix that in 5 minutes.</p>\n<hr>\n<h2 id=\"what-youll-accomplish\"><a href=\"#what-youll-accomplish\">What You’ll Accomplish</a></h2>\n<p>By the end of this guide, Ishi will:</p>\n<ul>\n<li>📂 Watch your Downloads folder for new files</li>\n<li>🏷️ Rename files intelligently (e.g., <code dir=\"auto\">Scan001.pdf</code> → <code dir=\"auto\">2025-01-Invoice-Acme.pdf</code>)</li>\n<li>📁 Sort files into organized folders by type and date</li>\n<li>👻 Show you a preview before making any changes</li>\n</ul>\n<hr>\n<h2 id=\"step-1-open-a-conversation\"><a href=\"#step-1-open-a-conversation\">Step 1: Open a Conversation</a></h2>\n<p>Launch Ishi and start a new conversation. Type:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Watch my Downloads folder and organize files as they arrive</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Watch my Downloads folder and organize files as they arrive\"><div></div></button></div></figure></div>\n<p>Ishi will ask a few clarifying questions:</p>\n<ul>\n<li>What types of files should I organize?</li>\n<li>How should I sort them (by date, by type, by vendor)?</li>\n<li>Should I rename files based on their content?</li>\n</ul>\n<p>Answer naturally—Ishi understands plain English.</p>\n<hr>\n<h2 id=\"step-2-review-the-plan\"><a href=\"#step-2-review-the-plan\">Step 2: Review the Plan</a></h2>\n<p>Before touching any files, Ishi shows you a <strong>plan preview</strong>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">📋 Proposed Organization Plan</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">📂 Downloads/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├── 📁 Invoices/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│   ├── 2025-01/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│   └── 2024-12/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├── 📁 Screenshots/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├── 📁 Documents/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">└── 📁 Other/</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">🔄 Proposed Renames:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">• Scan001.pdf → Acme-Corp-Invoice-2025-01-03.pdf</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">• IMG_4832.png → Dashboard-Screenshot-2025-01-02.png</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">• doc(1).docx → Project-Proposal-Draft.docx</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">[Approve] [Modify] [Cancel]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"📋 Proposed Organization Plan━━━━━━━━━━━━━━━━━━━━━━━━━━━━━📂 Downloads/├── 📁 Invoices/│   ├── 2025-01/│   └── 2024-12/├── 📁 Screenshots/├── 📁 Documents/└── 📁 Other/🔄 Proposed Renames:• Scan001.pdf → Acme-Corp-Invoice-2025-01-03.pdf• IMG_4832.png → Dashboard-Screenshot-2025-01-02.png• doc(1).docx → Project-Proposal-Draft.docx[Approve] [Modify] [Cancel]\"><div></div></button></div></figure></div>\n<p>This is the <strong>Glass Box</strong> philosophy in action—you see exactly what will happen.</p>\n<hr>\n<h2 id=\"step-3-see-ghost-files\"><a href=\"#step-3-see-ghost-files\">Step 3: See Ghost Files</a></h2>\n<p>Before any file is renamed or moved, Ishi shows you a <strong>Ghost File Preview</strong>:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Current</th><th>Proposed</th></tr></thead><tbody><tr><td><code dir=\"auto\">Scan001.pdf</code></td><td><code dir=\"auto\">Acme-Corp-Invoice-2025-01-03.pdf</code></td></tr><tr><td>Location: Downloads/</td><td>Location: Downloads/Invoices/2025-01/</td></tr></tbody></table>\n<p>The “ghost” file appears translucent until you approve. Nothing changes until you say so.</p>\n<hr>\n<h2 id=\"step-4-approve-or-reject\"><a href=\"#step-4-approve-or-reject\">Step 4: Approve or Reject</a></h2>\n<p>For each file, you can:</p>\n<ul>\n<li>✅ <strong>Approve</strong> — Move and rename as proposed</li>\n<li>✏️ <strong>Edit</strong> — Modify the proposed name or location</li>\n<li>❌ <strong>Skip</strong> — Leave this file alone</li>\n<li>✅ <strong>Approve All</strong> — Accept all remaining proposals</li>\n</ul>\n<hr>\n<h2 id=\"step-5-set-up-auto-organize-optional\"><a href=\"#step-5-set-up-auto-organize-optional\">Step 5: Set Up Auto-Organize (Optional)</a></h2>\n<p>Want Ishi to do this automatically going forward? Ask:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">From now on, automatically organize new downloads using this pattern</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"From now on, automatically organize new downloads using this pattern\"><div></div></button></div></figure></div>\n<p>Ishi will create a <strong>watcher</strong> that:</p>\n<ul>\n<li>Monitors your Downloads folder</li>\n<li>Proposes organization for new files</li>\n<li>Notifies you with a summary (you still approve batches)</li>\n</ul>\n<hr>\n<h2 id=\"safety-features\"><a href=\"#safety-features\">Safety Features</a></h2>\n<h3 id=\"nothing-happens-without-approval\"><a href=\"#nothing-happens-without-approval\">Nothing Happens Without Approval</a></h3>\n<p>Every file operation shows a preview first. You’re always in control.</p>\n<h3 id=\"full-undo-history\"><a href=\"#full-undo-history\">Full Undo History</a></h3>\n<p>Made a mistake? Every action is logged. Go to <strong>History</strong> and undo any operation.</p>\n<h3 id=\"files-stay-local\"><a href=\"#files-stay-local\">Files Stay Local</a></h3>\n<p>Your files never leave your computer. Ishi processes everything locally.</p>\n<hr>\n<h2 id=\"example-prompts\"><a href=\"#example-prompts\">Example Prompts</a></h2>\n<p>Try these variations based on your preference:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Goal</th><th>What to Say</th></tr></thead><tbody><tr><td>Sort by type</td><td>”Organize downloads into folders by file type”</td></tr><tr><td>Sort by date</td><td>”Sort downloads by month and year”</td></tr><tr><td>Invoices only</td><td>”Find all invoices in Downloads and organize by vendor”</td></tr><tr><td>Screenshots</td><td>”Rename screenshots based on what’s in the image”</td></tr><tr><td>Aggressive cleanup</td><td>”Archive anything older than 30 days”</td></tr></tbody></table>\n<hr>\n<h2 id=\"tips-for-best-results\"><a href=\"#tips-for-best-results\">Tips for Best Results</a></h2>\n<ol>\n<li><strong>Be specific about your preferences</strong> — “Sort invoices by vendor name, not by date”</li>\n<li><strong>Start with a small batch</strong> — Test with 10 files before running on everything</li>\n<li><strong>Use the Safety Slider</strong> — Start at “Ask for everything” until you’re comfortable</li>\n</ol>\n<hr>\n<h2 id=\"next-steps\"><a href=\"#next-steps\">Next Steps</a></h2>\n<ul>\n<li><a href=\"/docs/use-cases/extract-pdf-data\">Extract Data from PDFs</a> — Pull invoice data into spreadsheets</li>\n<li><a href=\"/docs/permissions\">Safety &#x26; Control</a> — Adjust how much autonomy Ishi has</li>\n<li><a href=\"/docs/trust-safety/undo-history\">Undo History</a> — Learn about the transaction log</li>\n</ul>"
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
const url = "src/content/docs/use-cases/organize-downloads.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/use-cases/organize-downloads.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/use-cases/organize-downloads.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
