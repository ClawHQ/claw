import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_vJilpAfn.mjs';
import { g as $$Aside } from './Code_fK6YVkYD.mjs';
import { c as config } from './config_CxZMLiNA.mjs';

const frontmatter = {
  "title": "Pixel ML OpenRouter",
  "description": "Single gateway to all AI models with intelligent routing."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-pioneer-ishi-intent-engine-v10",
    "text": "The Pioneer: Ishi Intent Engine v1.0"
  }, {
    "depth": 3,
    "slug": "how-it-works",
    "text": "How It Works"
  }, {
    "depth": 3,
    "slug": "cost-savings-example",
    "text": "Cost Savings Example"
  }, {
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting Started"
  }, {
    "depth": 2,
    "slug": "api-endpoint",
    "text": "API Endpoint"
  }, {
    "depth": 3,
    "slug": "example-request",
    "text": "Example Request"
  }, {
    "depth": 2,
    "slug": "available-models",
    "text": "Available Models"
  }, {
    "depth": 2,
    "slug": "pricing",
    "text": "Pricing"
  }, {
    "depth": 3,
    "slug": "free-credit",
    "text": "Free Credit"
  }, {
    "depth": 3,
    "slug": "top-up",
    "text": "Top Up"
  }, {
    "depth": 2,
    "slug": "why-pixel-ml-openrouter",
    "text": "Why Pixel ML OpenRouter?"
  }, {
    "depth": 3,
    "slug": "single-gateway",
    "text": "Single Gateway"
  }, {
    "depth": 3,
    "slug": "intelligent-routing",
    "text": "Intelligent Routing"
  }, {
    "depth": 3,
    "slug": "no-markup",
    "text": "No Markup"
  }, {
    "depth": 3,
    "slug": "openai-compatible",
    "text": "OpenAI Compatible"
  }, {
    "depth": 2,
    "slug": "for-teams",
    "text": "For Teams"
  }, {
    "depth": 2,
    "slug": "using-your-own-keys",
    "text": "Using Your Own Keys"
  }];
}
const console = config.console;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p><strong>Pixel ML OpenRouter</strong> is your unified gateway to access all major AI models through a single API. No need to manage multiple API keys or billing accounts—connect once and access everything.</p>\n"
    }), createVNode($$Aside, {
      type: "tip",
      title: "$1 Free Credit",
      "set:html": "<p>Every Ishi customer gets <strong>$1 free credit</strong> to try Pixel ML OpenRouter. Once you’ve used your credit, top up at\n<a href=\"https://platform.pixelml.com/\">platform.pixelml.com</a>.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"the-pioneer-ishi-intent-engine-v10\"><a href=\"#the-pioneer-ishi-intent-engine-v10\">The Pioneer: Ishi Intent Engine v1.0</a></h2>\n<p>Our flagship model, <strong>Ishi Intent Engine</strong>, is the implementation of the <a href=\"https://arxiv.org/abs/2506.16655\">Semantic Router</a> research paper. It intelligently routes your requests to the most cost-effective model while maintaining quality.</p>\n<h3 id=\"how-it-works\"><a href=\"#how-it-works\">How It Works</a></h3>\n<p>Instead of always using the most expensive model:</p>\n<ol>\n<li><strong>Ishi analyzes your prompt</strong> — Understands the complexity of your request</li>\n<li><strong>Routes to optimal model</strong> — Simple tasks use cheaper models, complex tasks use premium ones</li>\n<li><strong>You save money</strong> — Pay for what you need, not what you don’t</li>\n</ol>\n<h3 id=\"cost-savings-example\"><a href=\"#cost-savings-example\">Cost Savings Example</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Task</th><th>Traditional (GPT-4)</th><th>With Ishi</th><th>Savings</th></tr></thead><tbody><tr><td>”Rename this file”</td><td>$0.03</td><td>$0.001</td><td>97%</td></tr><tr><td>“Write a basic email”</td><td>$0.05</td><td>$0.003</td><td>94%</td></tr><tr><td>“Analyze this complex code”</td><td>$0.08</td><td>$0.08</td><td>0% (uses premium)</td></tr></tbody></table>\n<p>Ishi is smart—it uses premium models only when the task requires it.</p>\n<hr>\n<h2 id=\"getting-started\"><a href=\"#getting-started\">Getting Started</a></h2>\n<ol>\n<li><strong>Sign in</strong> at <a href=\"https://ishi.so/auth\">ishi.so/auth</a></li>\n<li><strong>Your $1 credit</strong> is automatically applied</li>\n<li><strong>Connect in Ishi</strong> — Run <code dir=\"auto\">/connect</code> and select <strong>Pixel ML</strong></li>\n<li><strong>Start using</strong> — Ishi handles model selection automatically</li>\n</ol>\n<hr>\n<h2 id=\"api-endpoint\"><a href=\"#api-endpoint\">API Endpoint</a></h2>\n<p>All requests go through our OpenAI-compatible endpoint:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">https://ishi.pixelml.com/v1/chat/completions</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"https://ishi.pixelml.com/v1/chat/completions\"><div></div></button></div></figure></div>\n<p>The API follows the OpenAI specification, so existing tools work out of the box.</p>\n<h3 id=\"example-request\"><a href=\"#example-request\">Example Request</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">curl</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">https://ishi.pixelml.com/v1/chat/completions</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">\\</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">-H</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Authorization: Bearer YOUR_API_KEY\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">\\</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">-H</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Content-Type: application/json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">\\</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">-d</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">'{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#032F62;--1:#9ECBFF\">    </span></span><span style=\"--0:#032F62;--1:#9ECBFF\">\"model\": \"semantic-routed-model\",</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#032F62;--1:#9ECBFF\">    </span></span><span style=\"--0:#032F62;--1:#9ECBFF\">\"messages\": [{\"role\": \"user\", \"content\": \"Hello!\"}]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#032F62;--1:#9ECBFF\">  </span></span><span style=\"--0:#032F62;--1:#9ECBFF\">}'</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"curl https://ishi.pixelml.com/v1/chat/completions \\  -H &#x22;Authorization: Bearer YOUR_API_KEY&#x22; \\  -H &#x22;Content-Type: application/json&#x22; \\  -d &#x27;{    &#x22;model&#x22;: &#x22;semantic-routed-model&#x22;,    &#x22;messages&#x22;: [{&#x22;role&#x22;: &#x22;user&#x22;, &#x22;content&#x22;: &#x22;Hello!&#x22;}]  }&#x27;\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"available-models\"><a href=\"#available-models\">Available Models</a></h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Model</th><th>ID</th><th>Type</th><th>Best For</th></tr></thead><tbody><tr><td><strong>Ishi Intent Engine v1</strong></td><td><code dir=\"auto\">semantic-routed-model</code></td><td>Intelligent Router</td><td>Cost savings with quality</td></tr><tr><td>Claude Sonnet 4</td><td><code dir=\"auto\">claude-sonnet-4</code></td><td>Premium</td><td>Complex reasoning</td></tr><tr><td>Claude Haiku 3.5</td><td><code dir=\"auto\">claude-3-5-haiku</code></td><td>Fast</td><td>Quick responses</td></tr><tr><td>GPT-4o</td><td><code dir=\"auto\">gpt-4o</code></td><td>Premium</td><td>General tasks</td></tr><tr><td>GPT-4o Mini</td><td><code dir=\"auto\">gpt-4o-mini</code></td><td>Budget</td><td>Simple tasks</td></tr><tr><td>Gemini 2.0 Flash</td><td><code dir=\"auto\">gemini-2-flash</code></td><td>Fast</td><td>Quick responses</td></tr></tbody></table>\n"
    }), createVNode($$Aside, {
      type: "note",
      "set:html": "<p>We recommend using <strong>semantic-routed-model</strong> as your default model. It automatically routes to the best model for each\ntask.</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"pricing\"><a href=\"#pricing\">Pricing</a></h2>\n<p>Pixel ML OpenRouter uses <strong>pay-as-you-go</strong> pricing. You only pay for the tokens you use.</p>\n<h3 id=\"free-credit\"><a href=\"#free-credit\">Free Credit</a></h3>\n<p>Every Ishi customer receives <strong>$1 free credit</strong> upon signup. This is enough for:</p>\n<ul>\n<li>~100 simple tasks with Ishi routing</li>\n<li>~50 medium complexity tasks</li>\n<li>~20 complex coding tasks</li>\n</ul>\n<h3 id=\"top-up\"><a href=\"#top-up\">Top Up</a></h3>\n<p>When your credit runs out:</p>\n<ol>\n<li>Visit <a href=\"https://platform.pixelml.com/\">platform.pixelml.com</a></li>\n<li>Sign in with your Ishi account</li>\n<li>Add funds via credit card</li>\n</ol>\n<p>No subscriptions required—pay only for what you use.</p>\n<hr>\n<h2 id=\"why-pixel-ml-openrouter\"><a href=\"#why-pixel-ml-openrouter\">Why Pixel ML OpenRouter?</a></h2>\n<h3 id=\"single-gateway\"><a href=\"#single-gateway\">Single Gateway</a></h3>\n<p>One API key. One billing account. Access to Claude, GPT, Gemini, and more.</p>\n<h3 id=\"intelligent-routing\"><a href=\"#intelligent-routing\">Intelligent Routing</a></h3>\n<p>Ishi Intent Engine saves you money by routing simple tasks to cheaper models.</p>\n<h3 id=\"no-markup\"><a href=\"#no-markup\">No Markup</a></h3>\n<p>We pass through model costs at the same price as direct providers.</p>\n<h3 id=\"openai-compatible\"><a href=\"#openai-compatible\">OpenAI Compatible</a></h3>\n<p>Works with any tool that supports the OpenAI API format.</p>\n<hr>\n<h2 id=\"for-teams\"><a href=\"#for-teams\">For Teams</a></h2>\n<p>Pixel ML OpenRouter supports team features:</p>\n<ul>\n<li><strong>Shared billing</strong> — One account for your whole team</li>\n<li><strong>Usage tracking</strong> — See who’s using what</li>\n<li><strong>Spending limits</strong> — Set monthly caps per user</li>\n</ul>\n<p>Manage your team at <a href=\"https://platform.pixelml.com/\">platform.pixelml.com</a>.</p>\n<hr>\n<h2 id=\"using-your-own-keys\"><a href=\"#using-your-own-keys\">Using Your Own Keys</a></h2>\n<p>Already have API keys from OpenAI or Anthropic? You can use them directly in Ishi instead of Pixel ML OpenRouter.</p>\n<p>See the <a href=\"/docs/providers\">Providers</a> page for setup instructions.</p>"
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

const url = "src/content/docs/pixelml.mdx/";
const file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/pixelml.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/pixelml.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, console, Content as default, file, frontmatter, getHeadings, url };
