import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Rename Files Intelligently",
  "description": "Automatically rename files based on their content, dates, or patterns."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-youll-accomplish",
    "text": "What You’ll Accomplish"
  }, {
    "depth": 2,
    "slug": "step-1-select-files-to-rename",
    "text": "Step 1: Select Files to Rename"
  }, {
    "depth": 2,
    "slug": "step-2-review-the-proposals",
    "text": "Step 2: Review the Proposals"
  }, {
    "depth": 2,
    "slug": "step-3-approve-edit-or-skip",
    "text": "Step 3: Approve, Edit, or Skip"
  }, {
    "depth": 2,
    "slug": "naming-patterns",
    "text": "Naming Patterns"
  }, {
    "depth": 3,
    "slug": "by-content-ai-powered",
    "text": "By Content (AI-Powered)"
  }, {
    "depth": 3,
    "slug": "by-date",
    "text": "By Date"
  }, {
    "depth": 3,
    "slug": "by-pattern",
    "text": "By Pattern"
  }, {
    "depth": 3,
    "slug": "by-metadata",
    "text": "By Metadata"
  }, {
    "depth": 2,
    "slug": "bulk-renaming-examples",
    "text": "Bulk Renaming Examples"
  }, {
    "depth": 2,
    "slug": "safety-the-ghost-file-preview",
    "text": "Safety: The Ghost File Preview"
  }, {
    "depth": 2,
    "slug": "undo-any-rename",
    "text": "Undo Any Rename"
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
    "set:html": "<p><code dir=\"auto\">IMG_4832.png</code>. <code dir=\"auto\">Document (1).docx</code>. <code dir=\"auto\">Untitled-23.pdf</code>.</p>\n<p>Your files deserve better names. Ishi analyzes content and proposes intelligent renames.</p>\n<hr>\n<h2 id=\"what-youll-accomplish\"><a href=\"#what-youll-accomplish\">What You’ll Accomplish</a></h2>\n<ul>\n<li>🏷️ Rename files based on their actual content</li>\n<li>📅 Add dates to file names automatically</li>\n<li>🔄 Apply consistent naming patterns across folders</li>\n<li>👻 Preview all renames before they happen</li>\n</ul>\n<hr>\n<h2 id=\"step-1-select-files-to-rename\"><a href=\"#step-1-select-files-to-rename\">Step 1: Select Files to Rename</a></h2>\n<p>Open Ishi and describe what you need:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">I have 100 screenshots in my Desktop folder.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Rename them based on what's shown in each image.</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"I have 100 screenshots in my Desktop folder.Rename them based on what&#x27;s shown in each image.\"><div></div></button></div></figure></div>\n<p>Or be more specific:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Rename all PDFs in Documents to include the document date</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">in the format: YYYY-MM-DD-OriginalName.pdf</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Rename all PDFs in Documents to include the document datein the format: YYYY-MM-DD-OriginalName.pdf\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"step-2-review-the-proposals\"><a href=\"#step-2-review-the-proposals\">Step 2: Review the Proposals</a></h2>\n<p>Ishi shows you every proposed rename side-by-side:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">📝 Proposed Renames</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Current Name              →  Proposed Name</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">──────────────────────────────────────────</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">IMG_4832.png              →  Dashboard-Analytics-Chart.png</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Screenshot 2025-01-03.png →  Login-Page-Redesign-v2.png</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Untitled.docx             →  Q4-Budget-Proposal.docx</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">scan001.pdf               →  2025-01-02-Acme-Invoice.pdf</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">[Approve All] [Review One-by-One] [Cancel]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"📝 Proposed Renames━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━Current Name              →  Proposed Name──────────────────────────────────────────IMG_4832.png              →  Dashboard-Analytics-Chart.pngScreenshot 2025-01-03.png →  Login-Page-Redesign-v2.pngUntitled.docx             →  Q4-Budget-Proposal.docxscan001.pdf               →  2025-01-02-Acme-Invoice.pdf[Approve All] [Review One-by-One] [Cancel]\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"step-3-approve-edit-or-skip\"><a href=\"#step-3-approve-edit-or-skip\">Step 3: Approve, Edit, or Skip</a></h2>\n<p>For each file, you can:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Action</th><th>What Happens</th></tr></thead><tbody><tr><td>✅ <strong>Approve</strong></td><td>Rename as proposed</td></tr><tr><td>✏️ <strong>Edit</strong></td><td>Modify the proposed name</td></tr><tr><td>⏭️ <strong>Skip</strong></td><td>Leave unchanged</td></tr><tr><td>✅ <strong>Approve All</strong></td><td>Accept all remaining</td></tr></tbody></table>\n<hr>\n<h2 id=\"naming-patterns\"><a href=\"#naming-patterns\">Naming Patterns</a></h2>\n<h3 id=\"by-content-ai-powered\"><a href=\"#by-content-ai-powered\">By Content (AI-Powered)</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Rename screenshots based on what's visible in the image</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Rename screenshots based on what&#x27;s visible in the image\"><div></div></button></div></figure></div>\n<p><em>Uses AI vision to understand image content</em></p>\n<h3 id=\"by-date\"><a href=\"#by-date\">By Date</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Add the file creation date to all PDFs: YYYY-MM-DD-filename.pdf</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Add the file creation date to all PDFs: YYYY-MM-DD-filename.pdf\"><div></div></button></div></figure></div>\n<h3 id=\"by-pattern\"><a href=\"#by-pattern\">By Pattern</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Rename invoice PDFs to: Vendor-InvoiceNumber-Date.pdf</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Rename invoice PDFs to: Vendor-InvoiceNumber-Date.pdf\"><div></div></button></div></figure></div>\n<h3 id=\"by-metadata\"><a href=\"#by-metadata\">By Metadata</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Rename photos using their EXIF date: 2025-01-03-IMG_4832.jpg</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Rename photos using their EXIF date: 2025-01-03-IMG_4832.jpg\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"bulk-renaming-examples\"><a href=\"#bulk-renaming-examples\">Bulk Renaming Examples</a></h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Goal</th><th>What to Say</th></tr></thead><tbody><tr><td>Screenshots</td><td>”Rename screenshots based on their visual content”</td></tr><tr><td>Invoices</td><td>”Rename to Vendor-Amount-Date format”</td></tr><tr><td>Photos</td><td>”Use photo date from metadata”</td></tr><tr><td>Documents</td><td>”Add creation date prefix”</td></tr><tr><td>Clean up</td><td>”Remove spaces and special characters from all filenames”</td></tr></tbody></table>\n<hr>\n<h2 id=\"safety-the-ghost-file-preview\"><a href=\"#safety-the-ghost-file-preview\">Safety: The Ghost File Preview</a></h2>\n<p>Before any file is renamed, you see a <strong>Ghost Preview</strong>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">┌─────────────────────────────────────────┐</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  📄 Current: IMG_4832.png               │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  👻 Proposed: Dashboard-Chart.png       │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│                                         │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  The ghost file shows you exactly what  │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  the new name will be before commit.    │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│                                         │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  [Approve] [Edit Name] [Skip]           │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">└─────────────────────────────────────────┘</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"┌─────────────────────────────────────────┐│  📄 Current: IMG_4832.png               ││  👻 Proposed: Dashboard-Chart.png       ││                                         ││  The ghost file shows you exactly what  ││  the new name will be before commit.    ││                                         ││  [Approve] [Edit Name] [Skip]           │└─────────────────────────────────────────┘\"><div></div></button></div></figure></div>\n<p>Nothing changes until you approve.</p>\n<hr>\n<h2 id=\"undo-any-rename\"><a href=\"#undo-any-rename\">Undo Any Rename</a></h2>\n<p>Made a mistake? Every rename is logged:</p>\n<ol>\n<li>Open <strong>History</strong> in Ishi</li>\n<li>Find the rename operation</li>\n<li>Click <strong>Undo</strong></li>\n</ol>\n<p>The file reverts to its original name instantly.</p>\n<hr>\n<h2 id=\"tips-for-best-results\"><a href=\"#tips-for-best-results\">Tips for Best Results</a></h2>\n<ol>\n<li><strong>Start with a test batch</strong> — Try 5-10 files before processing hundreds</li>\n<li><strong>Be specific about format</strong> — “Use hyphens, no spaces, lowercase”</li>\n<li><strong>Include examples</strong> — “Like: Acme-INV001-2025-01-03.pdf”</li>\n</ol>\n<hr>\n<h2 id=\"next-steps\"><a href=\"#next-steps\">Next Steps</a></h2>\n<ul>\n<li><a href=\"/docs/use-cases/organize-downloads\">Organize Downloads</a> — Sort files into folders</li>\n<li><a href=\"/docs/use-cases/extract-pdf-data\">Extract PDF Data</a> — Pull data from documents</li>\n<li><a href=\"/docs/trust-safety/undo-history\">Undo History</a> — Learn about the transaction log</li>\n</ul>"
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
const url = "src/content/docs/use-cases/rename-files.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/use-cases/rename-files.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/use-cases/rename-files.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
