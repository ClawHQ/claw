import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';

const frontmatter = {
  "title": "Migrating to 1.0",
  "description": "What's new in Ishi 1.0."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "upgrading",
    "text": "Upgrading"
  }, {
    "depth": 2,
    "slug": "ux-changes",
    "text": "UX changes"
  }, {
    "depth": 2,
    "slug": "breaking-changes",
    "text": "Breaking changes"
  }, {
    "depth": 3,
    "slug": "keybinds-renamed",
    "text": "Keybinds renamed"
  }, {
    "depth": 3,
    "slug": "keybinds-removed",
    "text": "Keybinds removed"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Ishi 1.0 is a complete rewrite of the TUI.</p>\n<p>We moved from the go+bubbletea based TUI which had performance and capability issues to an in-house framework (OpenTUI) written in zig+solidjs.</p>\n<p>The new TUI works like the old one since it connects to the same ishi server.</p>\n<hr>\n<h2 id=\"upgrading\"><a href=\"#upgrading\">Upgrading</a></h2>\n<p>You should not be autoupgraded to 1.0 if you are currently using a previous\nversion. However some older versions of Ishi always grab latest.</p>\n<p>To upgrade manually, run</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">$</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ishi</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">1.0.0</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"$ ishi upgrade 1.0.0\"><div></div></button></div></figure></div>\n<p>To downgrade back to 0.x, run</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">$</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ishi</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">0.15.31</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"$ ishi upgrade 0.15.31\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"ux-changes\"><a href=\"#ux-changes\">UX changes</a></h2>\n<p>The session history is more compressed, only showing full details of the edit and bash tool.</p>\n<p>We added a command bar which almost everything flows through. Press ctrl+p to bring it up in any context and see everything you can do.</p>\n<p>Added a session sidebar (can be toggled) with useful information.</p>\n<p>We removed some functionality that we weren’t sure anyone actually used. If something important is missing please open an issue and we’ll add it back quickly.</p>\n<hr>\n<h2 id=\"breaking-changes\"><a href=\"#breaking-changes\">Breaking changes</a></h2>\n<h3 id=\"keybinds-renamed\"><a href=\"#keybinds-renamed\">Keybinds renamed</a></h3>\n<ul>\n<li>messages_revert -> messages_undo</li>\n<li>switch_agent -> agent_cycle</li>\n<li>switch_agent_reverse -> agent_cycle_reverse</li>\n<li>switch_mode -> agent_cycle</li>\n<li>switch_mode_reverse -> agent_cycle_reverse</li>\n</ul>\n<h3 id=\"keybinds-removed\"><a href=\"#keybinds-removed\">Keybinds removed</a></h3>\n<ul>\n<li>messages_layout_toggle</li>\n<li>messages_next</li>\n<li>messages_previous</li>\n<li>file_diff_toggle</li>\n<li>file_search</li>\n<li>file_close</li>\n<li>file_list</li>\n<li>app_help</li>\n<li>project_init</li>\n<li>tool_details</li>\n<li>thinking_blocks</li>\n</ul>"
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
const url = "src/content/docs/1-0.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/1-0.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/1-0.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
