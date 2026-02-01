import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Extract Data from PDFs",
  "description": "Pull invoice data, contract deliverables, and more into spreadsheets."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-youll-accomplish",
    "text": "What You’ll Accomplish"
  }, {
    "depth": 2,
    "slug": "step-1-point-ishi-to-your-pdfs",
    "text": "Step 1: Point Ishi to Your PDFs"
  }, {
    "depth": 2,
    "slug": "step-2-preview-the-extraction",
    "text": "Step 2: Preview the Extraction"
  }, {
    "depth": 2,
    "slug": "step-3-process-all-files",
    "text": "Step 3: Process All Files"
  }, {
    "depth": 2,
    "slug": "step-4-review--export",
    "text": "Step 4: Review & Export"
  }, {
    "depth": 2,
    "slug": "example-use-cases",
    "text": "Example Use Cases"
  }, {
    "depth": 3,
    "slug": "invoices",
    "text": "Invoices"
  }, {
    "depth": 3,
    "slug": "contracts",
    "text": "Contracts"
  }, {
    "depth": 3,
    "slug": "receipts",
    "text": "Receipts"
  }, {
    "depth": 3,
    "slug": "statements",
    "text": "Statements"
  }, {
    "depth": 2,
    "slug": "working-with-scanned-pdfs",
    "text": "Working with Scanned PDFs"
  }, {
    "depth": 2,
    "slug": "connecting-to-cloud-apps",
    "text": "Connecting to Cloud Apps"
  }, {
    "depth": 2,
    "slug": "safety-features",
    "text": "Safety Features"
  }, {
    "depth": 3,
    "slug": "preview-before-commit",
    "text": "Preview Before Commit"
  }, {
    "depth": 3,
    "slug": "no-guessing",
    "text": "No Guessing"
  }, {
    "depth": 3,
    "slug": "local-processing",
    "text": "Local Processing"
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
    "set:html": "<p>You have 50 PDF invoices. You need the amounts, dates, and vendor names in a spreadsheet. Doing this manually takes hours. Ishi does it in minutes.</p>\n<hr>\n<h2 id=\"what-youll-accomplish\"><a href=\"#what-youll-accomplish\">What You’ll Accomplish</a></h2>\n<p>By the end of this guide, you’ll know how to:</p>\n<ul>\n<li>📄 Extract structured data from PDFs</li>\n<li>📊 Export to CSV, Excel, or directly to apps like Notion/Airtable</li>\n<li>🔍 Parse contracts for key terms and deliverables</li>\n<li>✅ Verify extracted data before committing</li>\n</ul>\n<hr>\n<h2 id=\"step-1-point-ishi-to-your-pdfs\"><a href=\"#step-1-point-ishi-to-your-pdfs\">Step 1: Point Ishi to Your PDFs</a></h2>\n<p>Open Ishi and describe what you need:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">I have 50 invoices in my Documents/Invoices folder.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Extract the vendor name, invoice number, date, and total amount from each.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Export to a CSV file.</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"I have 50 invoices in my Documents/Invoices folder.Extract the vendor name, invoice number, date, and total amount from each.Export to a CSV file.\"><div></div></button></div></figure></div>\n<p>Ishi will read your request and ask any clarifying questions.</p>\n<hr>\n<h2 id=\"step-2-preview-the-extraction\"><a href=\"#step-2-preview-the-extraction\">Step 2: Preview the Extraction</a></h2>\n<p>Before processing all files, Ishi shows a <strong>sample extraction</strong>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">📄 Sample: Acme-Corp-Invoice-001.pdf</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Extracted Fields:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">┌─────────────┬─────────────────────────┐</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ Vendor      │ Acme Corporation        │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ Invoice #   │ INV-2025-0042           │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ Date        │ 2025-01-02              │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ Amount      │ $1,250.00               │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│ Due Date    │ 2025-02-01              │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">└─────────────┴─────────────────────────┘</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Does this look correct? [Yes, proceed with all] [Adjust fields] [Cancel]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"📄 Sample: Acme-Corp-Invoice-001.pdf━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━Extracted Fields:┌─────────────┬─────────────────────────┐│ Vendor      │ Acme Corporation        ││ Invoice #   │ INV-2025-0042           ││ Date        │ 2025-01-02              ││ Amount      │ $1,250.00               ││ Due Date    │ 2025-02-01              │└─────────────┴─────────────────────────┘Does this look correct? [Yes, proceed with all] [Adjust fields] [Cancel]\"><div></div></button></div></figure></div>\n<p>This preview ensures Ishi understood your document structure correctly.</p>\n<hr>\n<h2 id=\"step-3-process-all-files\"><a href=\"#step-3-process-all-files\">Step 3: Process All Files</a></h2>\n<p>Once you approve the sample, Ishi processes all PDFs:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Processing invoices...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">✅ 48/50 extracted successfully</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">⚠️ 2 need review (unclear vendor name)</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">[Review flagged items] [Download CSV]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Processing invoices...━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━✅ 48/50 extracted successfully⚠️ 2 need review (unclear vendor name)[Review flagged items] [Download CSV]\"><div></div></button></div></figure></div>\n<p>Files that couldn’t be parsed confidently are flagged for manual review—Ishi never guesses.</p>\n<hr>\n<h2 id=\"step-4-review--export\"><a href=\"#step-4-review--export\">Step 4: Review &#x26; Export</a></h2>\n<p>Ishi shows you the complete dataset before creating any files:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Vendor</th><th>Invoice #</th><th>Date</th><th>Amount</th></tr></thead><tbody><tr><td>Acme Corp</td><td>INV-2025-0042</td><td>2025-01-02</td><td>$1,250.00</td></tr><tr><td>Beta LLC</td><td>INV-8821</td><td>2025-01-03</td><td>$840.00</td></tr><tr><td>…</td><td>…</td><td>…</td><td>…</td></tr></tbody></table>\n<p>Then choose your export format:</p>\n<ul>\n<li><strong>CSV</strong> — Universal spreadsheet format</li>\n<li><strong>Excel (.xlsx)</strong> — With formatting</li>\n<li><strong>Direct to Notion</strong> — Via MCP integration</li>\n<li><strong>Direct to Airtable</strong> — Via MCP integration</li>\n</ul>\n<hr>\n<h2 id=\"example-use-cases\"><a href=\"#example-use-cases\">Example Use Cases</a></h2>\n<h3 id=\"invoices\"><a href=\"#invoices\">Invoices</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Extract vendor, invoice number, date, amount, and due date</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">from all PDFs in Downloads/Invoices</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Extract vendor, invoice number, date, amount, and due datefrom all PDFs in Downloads/Invoices\"><div></div></button></div></figure></div>\n<h3 id=\"contracts\"><a href=\"#contracts\">Contracts</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Read this contract and create a list of all deliverables,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">deadlines, and payment milestones</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Read this contract and create a list of all deliverables,deadlines, and payment milestones\"><div></div></button></div></figure></div>\n<h3 id=\"receipts\"><a href=\"#receipts\">Receipts</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Parse these expense receipts and create an expense report</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">with categories, dates, and amounts</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Parse these expense receipts and create an expense reportwith categories, dates, and amounts\"><div></div></button></div></figure></div>\n<h3 id=\"statements\"><a href=\"#statements\">Statements</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Extract all transactions from this bank statement PDF</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">and export to Excel</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Extract all transactions from this bank statement PDFand export to Excel\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"working-with-scanned-pdfs\"><a href=\"#working-with-scanned-pdfs\">Working with Scanned PDFs</a></h2>\n<p>For scanned documents (images, not text), Ishi uses OCR:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">These are scanned invoices. Use OCR to extract the text first,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">then parse the vendor and amounts.</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"These are scanned invoices. Use OCR to extract the text first,then parse the vendor and amounts.\"><div></div></button></div></figure></div>\n<p>Scanned documents take longer but work with the same workflow.</p>\n<hr>\n<h2 id=\"connecting-to-cloud-apps\"><a href=\"#connecting-to-cloud-apps\">Connecting to Cloud Apps</a></h2>\n<p>Want data to go directly to Notion, Airtable, or Google Sheets?</p>\n<ol>\n<li>Set up the <a href=\"/docs/advanced/integrations\">MCP integration</a> for your app</li>\n<li>Ask Ishi to export directly:</li>\n</ol>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">Extract invoice data and add each row to my Airtable \"Invoices\" table</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Extract invoice data and add each row to my Airtable &#x22;Invoices&#x22; table\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"safety-features\"><a href=\"#safety-features\">Safety Features</a></h2>\n<h3 id=\"preview-before-commit\"><a href=\"#preview-before-commit\">Preview Before Commit</a></h3>\n<p>Every extraction is previewed before any files are created.</p>\n<h3 id=\"no-guessing\"><a href=\"#no-guessing\">No Guessing</a></h3>\n<p>If Ishi can’t confidently parse a field, it flags it for review.</p>\n<h3 id=\"local-processing\"><a href=\"#local-processing\">Local Processing</a></h3>\n<p>Your PDFs never leave your computer. Extraction happens locally.</p>\n<hr>\n<h2 id=\"tips-for-best-results\"><a href=\"#tips-for-best-results\">Tips for Best Results</a></h2>\n<ol>\n<li><strong>Be specific about field names</strong> — “Extract ‘Total Due’ not ‘Subtotal’”</li>\n<li><strong>Provide a sample</strong> — “The vendor name is usually in the top-left header”</li>\n<li><strong>Start with one file</strong> — Test the extraction before running on hundreds</li>\n</ol>\n<hr>\n<h2 id=\"next-steps\"><a href=\"#next-steps\">Next Steps</a></h2>\n<ul>\n<li><a href=\"/docs/use-cases/organize-downloads\">Organize Downloads</a> — Auto-sort files as they arrive</li>\n<li><a href=\"/docs/advanced/integrations\">Cloud Integrations</a> — Connect to Notion, Airtable, etc.</li>\n<li><a href=\"/docs/capabilities/file-operations\">Batch Processing</a> — Work with hundreds of files</li>\n</ul>"
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
const url = "src/content/docs/use-cases/extract-pdf-data.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/use-cases/extract-pdf-data.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/use-cases/extract-pdf-data.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
