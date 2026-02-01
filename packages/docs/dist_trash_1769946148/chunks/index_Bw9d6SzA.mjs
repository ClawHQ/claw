import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';
import './Code_fK6YVkYD.mjs';

const frontmatter = {
  "title": "Getting Started",
  "description": "Get your operator cockpit connected to OpenClaw in 5 minutes."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-claw-desktop",
    "text": "Why Claw Desktop?"
  }, {
    "depth": 2,
    "slug": "download",
    "text": "Download"
  }, {
    "depth": 2,
    "slug": "connect-to-your-openclaw-instance",
    "text": "Connect to Your OpenClaw Instance"
  }, {
    "depth": 3,
    "slug": "setup-steps",
    "text": "Setup Steps"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How It Works"
  }, {
    "depth": 2,
    "slug": "core-features",
    "text": "Core Features"
  }, {
    "depth": 3,
    "slug": "runs-inbox",
    "text": "Runs Inbox"
  }, {
    "depth": 3,
    "slug": "run-timeline",
    "text": "Run Timeline"
  }, {
    "depth": 3,
    "slug": "artifact-panel",
    "text": "Artifact Panel"
  }, {
    "depth": 3,
    "slug": "human-in-the-loop",
    "text": "Human-in-the-Loop"
  }, {
    "depth": 2,
    "slug": "architecture",
    "text": "Architecture"
  }, {
    "depth": 3,
    "slug": "file-system-persistence",
    "text": "File-System Persistence"
  }, {
    "depth": 2,
    "slug": "get-help",
    "text": "Get Help"
  }, {
    "depth": 2,
    "slug": "whats-next",
    "text": "What’s Next?"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p><strong>Claw Desktop</strong> is the operator cockpit for <a href=\"https://github.com/openclaw\">OpenClaw</a> agents. Your agent runs remotely—on DigitalOcean, Cloudflare, or your own server—working overnight while you chat via Slack. When you’re back at your desk, open Claw Desktop to review what happened, check the diffs, and resume exactly where your agent left off.</p>\n<h2 id=\"why-claw-desktop\"><a href=\"#why-claw-desktop\">Why Claw Desktop?</a></h2>\n<p>Stop scrolling through Slack history to find what your agent did overnight. Claw Desktop gives you:</p>\n<ul>\n<li><strong>While-You-Were-Away Sync</strong> — See exactly what changed since you last opened the app</li>\n<li><strong>Artifact Review</strong> — Diffs, outputs, and verification checklists in one place</li>\n<li><strong>One-Click Resume</strong> — Continue the same <code dir=\"auto\">run_id</code> across Slack and Desktop</li>\n<li><strong>Human-in-the-Loop Approvals</strong> — Approve or reject blocked actions inline</li>\n</ul>\n<hr>\n<h2 id=\"download\"><a href=\"#download\">Download</a></h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Platform</th><th>Download</th></tr></thead><tbody><tr><td>macOS (Apple Silicon)</td><td><a href=\"https://claw.so/download?platform=darwin-arm64\">Download .dmg</a></td></tr><tr><td>macOS (Intel)</td><td><a href=\"https://claw.so/download?platform=darwin-x64\">Download .dmg</a></td></tr><tr><td>Windows</td><td><a href=\"https://claw.so/download?platform=win-x64\">Download .exe</a></td></tr></tbody></table>\n<p>Or grab it from the <a href=\"https://github.com/ClawHQ/claw/releases\">releases page</a>.</p>\n<hr>\n<h2 id=\"connect-to-your-openclaw-instance\"><a href=\"#connect-to-your-openclaw-instance\">Connect to Your OpenClaw Instance</a></h2>\n<p>Claw Desktop connects to your OpenClaw instance via WebSocket. You’ll need:</p>\n<ol>\n<li><strong>Host URL</strong> — Where your OpenClaw is running (e.g., <code dir=\"auto\">ws://your-server:8080</code>)</li>\n<li><strong>API Token</strong> — Your OpenClaw API token for authentication</li>\n</ol>\n<h3 id=\"setup-steps\"><a href=\"#setup-steps\">Setup Steps</a></h3>\n<ol>\n<li>Launch Claw Desktop</li>\n<li>Enter your Host URL and API Token</li>\n<li>Click <strong>Test Connection</strong> to verify</li>\n<li>Save your connection settings</li>\n</ol>\n<p>You can add multiple OpenClaw hosts and switch between them.</p>\n<hr>\n<h2 id=\"how-it-works\"><a href=\"#how-it-works\">How It Works</a></h2>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│   Your Slack    │◄────►│    OpenClaw      │◄────►│  Claw Desktop   │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│  (Chat while    │      │  (Runs 24/7 on   │      │  (Review when   │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│   you sleep)    │      │   your server)   │      │   you're back)  │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">└─────────────────┘      └──────────────────┘      └─────────────────┘</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐│   Your Slack    │◄────►│    OpenClaw      │◄────►│  Claw Desktop   ││  (Chat while    │      │  (Runs 24/7 on   │      │  (Review when   ││   you sleep)    │      │   your server)   │      │   you&#x27;re back)  │└─────────────────┘      └──────────────────┘      └─────────────────┘\"><div></div></button></div></figure></div>\n<ol>\n<li><strong>Deploy OpenClaw</strong> on DigitalOcean, Cloudflare, or your infrastructure</li>\n<li><strong>Chat via Slack</strong> to kick off runs and monitor progress</li>\n<li><strong>Open Claw Desktop</strong> to review artifacts, approve blocked actions, and resume</li>\n</ol>\n<p>Your <code dir=\"auto\">run_id</code> stays consistent across all interfaces. Context is never lost.</p>\n<hr>\n<h2 id=\"core-features\"><a href=\"#core-features\">Core Features</a></h2>\n<h3 id=\"runs-inbox\"><a href=\"#runs-inbox\">Runs Inbox</a></h3>\n<p>See all your runs at a glance:</p>\n<ul>\n<li><strong>Status chips</strong> — Running (blue), Blocked (yellow), Done (green), Failed (red)</li>\n<li><strong>Filter tabs</strong> — All, Running, Blocked, Done</li>\n<li><strong>While You Were Away</strong> — Updates since your last session, newest first</li>\n</ul>\n<h3 id=\"run-timeline\"><a href=\"#run-timeline\">Run Timeline</a></h3>\n<p>Chronological view of everything that happened:</p>\n<ul>\n<li><strong>Messages</strong> — User and assistant messages with timestamps</li>\n<li><strong>Tool Calls</strong> — Collapsed cards showing tool name, expandable for params/results</li>\n<li><strong>File Diffs</strong> — Syntax-highlighted patches showing exactly what changed</li>\n</ul>\n<h3 id=\"artifact-panel\"><a href=\"#artifact-panel\">Artifact Panel</a></h3>\n<p>Right panel with three tabs:</p>\n<ul>\n<li><strong>Plan</strong> — The agent’s plan (PLAN.md)</li>\n<li><strong>Summary</strong> — What was accomplished (SUMMARY.md)</li>\n<li><strong>Verify</strong> — Verification checklist (VERIFICATION.md)</li>\n</ul>\n<h3 id=\"human-in-the-loop\"><a href=\"#human-in-the-loop\">Human-in-the-Loop</a></h3>\n<p>When your agent is blocked on an action:</p>\n<ul>\n<li>See the blocked action in the timeline</li>\n<li>Click <strong>Approve</strong> or <strong>Reject</strong> inline</li>\n<li>Run continues automatically after your decision</li>\n</ul>\n<hr>\n<h2 id=\"architecture\"><a href=\"#architecture\">Architecture</a></h2>\n<p>Claw Desktop follows a 4-tier architecture:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">┌───────────────────────────────────────────────────────────┐</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│                         UI Layer                          │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│            (SolidJS Components + Reactive Stores)         │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├───────────────────────────────────────────────────────────┤</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│                     Sync Engine                           │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│          (Cursor-based polling every 5 seconds)           │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├───────────────────────────────────────────────────────────┤</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│                     Persistence                           │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│   (File-system: ~/Documents/ClawWorkspace/RUNS/&#x3C;id>/)     │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">├───────────────────────────────────────────────────────────┤</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│                   OpenClaw Adapter                        │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">│           (WebSocket V3 Protocol Translation)             │</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">└───────────────────────────────────────────────────────────┘</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"┌───────────────────────────────────────────────────────────┐│                         UI Layer                          ││            (SolidJS Components + Reactive Stores)         │├───────────────────────────────────────────────────────────┤│                     Sync Engine                           ││          (Cursor-based polling every 5 seconds)           │├───────────────────────────────────────────────────────────┤│                     Persistence                           ││   (File-system: ~/Documents/ClawWorkspace/RUNS/<id>/)     │├───────────────────────────────────────────────────────────┤│                   OpenClaw Adapter                        ││           (WebSocket V3 Protocol Translation)             │└───────────────────────────────────────────────────────────┘\"><div></div></button></div></figure></div>\n<h3 id=\"file-system-persistence\"><a href=\"#file-system-persistence\">File-System Persistence</a></h3>\n<p>All run data is stored locally in <code dir=\"auto\">~/Documents/ClawWorkspace/</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">ClawWorkspace/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">└── RUNS/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292e;--1:#e1e4e8\">    </span></span><span style=\"--0:#24292e;--1:#e1e4e8\">└── &#x3C;run_id>/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292e;--1:#e1e4e8\">        </span></span><span style=\"--0:#24292e;--1:#e1e4e8\">├── meta.json       # Run metadata</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292e;--1:#e1e4e8\">        </span></span><span style=\"--0:#24292e;--1:#e1e4e8\">├── events.jsonl    # Append-only event log</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292e;--1:#e1e4e8\">        </span></span><span style=\"--0:#24292e;--1:#e1e4e8\">└── ARTIFACTS/      # Downloaded artifacts</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"ClawWorkspace/└── RUNS/    └── <run_id>/        ├── meta.json       # Run metadata        ├── events.jsonl    # Append-only event log        └── ARTIFACTS/      # Downloaded artifacts\"><div></div></button></div></figure></div>\n<p>You can browse this workspace in Finder without the app.</p>\n<hr>\n<h2 id=\"get-help\"><a href=\"#get-help\">Get Help</a></h2>\n<ul>\n<li><strong>Documentation</strong> — Browse the sidebar for detailed guides</li>\n<li><strong>Discord</strong> — <a href=\"https://discord.gg/claw\">Join the community</a></li>\n<li><strong>GitHub</strong> — <a href=\"https://github.com/ClawHQ/claw\">ClawHQ/claw</a></li>\n</ul>\n<hr>\n<h2 id=\"whats-next\"><a href=\"#whats-next\">What’s Next?</a></h2>\n<ul>\n<li><a href=\"/docs/connection\">Connecting to OpenClaw</a> — Detailed connection setup</li>\n<li><a href=\"/docs/runs\">Runs Inbox</a> — Managing your runs</li>\n<li><a href=\"/docs/approvals\">Human-in-the-Loop</a> — Approval workflows</li>\n</ul>"
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
const url = "src/content/docs/index.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
