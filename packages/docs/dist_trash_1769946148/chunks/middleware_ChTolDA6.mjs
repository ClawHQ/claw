import { d as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate, e as renderSlot, r as renderComponent, f as addAttribute, g as renderScript, s as spreadAttributes, h as Fragment, i as defineStyleVars, a as AstroUserError, j as renderHead } from './astro/server_vJilpAfn.mjs';
import { p as printHref } from './_id_.d03980ee_D1-OqWeo.mjs';
import { $ as $$Icon, c as $$LinkButton, d as $$Badge } from './Code_fK6YVkYD.mjs';
import { a as starlightConfig, b as stripTrailingSlash, c as stripLeadingSlash, e as ensureHtmlExtension, d as stripHtmlExtension, f as ensureTrailingSlash, p as project, B as BuiltInDefaultLocale, g as getCollectionPathFromRoot, h as pickLang, s as stripLeadingAndTrailingSlashes, i as ensureLeadingSlash, j as stripExtension, u as useTranslations } from './translations_Ctymldb-.mjs';
import { Base64 } from 'js-base64';
import { c as config } from './config_CxZMLiNA.mjs';
import { $ as $$Image } from './_astro_assets_C0XvONxo.mjs';
import { g as getCollection, a as getEntry } from './_astro_content_B-blkXYm.mjs';
import { f as arrayType, o as objectType, s as stringType, r as recordType, u as unionType, b as booleanType, a as undefinedType, e as enumType } from './types_DZQNl0rU.mjs';

const $$Astro$z = createAstro("https://dev.docs.claw.so");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.locals.starlightRoute.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-e7rmtanb">${unescapeHTML(banner.content)}</div>`}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-3ouzhmq3"> <div class="sl-container astro-3ouzhmq3">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const $$Astro$y = createAstro("https://dev.docs.claw.so");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { icon, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-uzh3xg45"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-uzh3xg45" })} <span class="astro-uzh3xg45">${label}</span> </p> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/ContentNotice.astro", void 0);

const $$Astro$x = createAstro("https://dev.docs.claw.so");
const $$FallbackContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("i18n.untranslatedContent") })}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$w = createAstro("https://dev.docs.claw.so");
const $$DraftContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$DraftContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("page.draft") })}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/DraftContentNotice.astro", void 0);

const $$Astro$v = createAstro("https://dev.docs.claw.so");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl } = Astro2.locals.starlightRoute;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")} class="sl-flex print:hidden astro-siarciop">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-siarciop" })}${Astro2.locals.t("page.editLink")}</a>`}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/EditLink.astro", void 0);

const $$Astro$u = createAstro("https://dev.docs.claw.so");
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lang, lastUpdated } = Astro2.locals.starlightRoute;
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>${Astro2.locals.t("page.lastUpdated")}${" "}<time${addAttribute(lastUpdated.toISOString(), "datetime")}>${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}</time></p>`}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);

const $$Astro$t = createAstro("https://dev.docs.claw.so");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { dir, pagination } = Astro2.locals.starlightRoute;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links print:hidden astro-bx66xive"${addAttribute(dir, "dir")}> ${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-bx66xive"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-bx66xive" })} <span class="astro-bx66xive"> ${Astro2.locals.t("page.previousLink")} <br class="astro-bx66xive"> <span class="link-title astro-bx66xive">${prev.label}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-bx66xive"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-bx66xive" })} <span class="astro-bx66xive"> ${Astro2.locals.t("page.nextLink")} <br class="astro-bx66xive"> <span class="link-title astro-bx66xive">${next.label}</span> </span> </a>`} </div> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);

const $$Astro$s = createAstro("https://dev.docs.claw.so");
const $$Footer$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Footer$1;
  return renderTemplate`${maybeRenderHead()}<footer class="sl-flex astro-etugcjmg"> <div class="meta sl-flex astro-etugcjmg"> ${renderComponent($$result, "EditLink", $$EditLink, { "class": "astro-etugcjmg" })} ${renderComponent($$result, "LastUpdated", $$LastUpdated, { "class": "astro-etugcjmg" })} </div> ${renderComponent($$result, "Pagination", $$Pagination, { "class": "astro-etugcjmg" })} ${starlightConfig.credits} </footer> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Footer.astro", void 0);

const $$Astro$r = createAstro("https://dev.docs.claw.so");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${renderComponent($$result, "Default", $$Footer$1, { ...Astro2.props, "class": "astro-sz7xmlte" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}  ${maybeRenderHead()}<div class="custom-footer astro-sz7xmlte"> <p class="astro-sz7xmlte">© 2026 ISHI TECHNOLOGIES PTE. LTD. All rights reserved.</p> <div class="footer-links astro-sz7xmlte"> <a href="https://ishi.so/legal/terms-of-service" class="astro-sz7xmlte">Terms</a> <a href="https://ishi.so/legal/privacy-policy" class="astro-sz7xmlte">Privacy</a> <a href="https://qra.ai/discord" class="astro-sz7xmlte">Discord</a> </div> </div> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/components/Footer.astro", void 0);

const $$Astro$q = createAstro("https://dev.docs.claw.so");
const $$Head$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Head$1;
  const { head } = Astro2.locals.starlightRoute;
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const $$Astro$p = createAstro("https://dev.docs.claw.so");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Head;
  const base = "/docs/".slice(1);
  const slug = Astro2.url.pathname.replace(/^\//, "").replace(/\/$/, "");
  const {
    entry: {
      data: { title, description }
    }
  } = Astro2.locals.starlightRoute;
  const isDocs = slug.startsWith("docs");
  let encodedTitle = "";
  let ogImage = `${config.url}/social-share.png`;
  let truncatedDesc = "";
  if (isDocs) {
    encodedTitle = encodeURIComponent(
      Base64.encode(
        // Convert to ASCII
        encodeURIComponent(
          // Truncate to fit S3's max key size
          title.substring(0, 700)
        )
      )
    );
    if (description) {
      truncatedDesc = encodeURIComponent(description.substring(0, 400));
    }
    ogImage = `${config.socialCard}/ishi-docs/${encodedTitle}.png?desc=${truncatedDesc}`;
  }
  return renderTemplate`${slug === "" && renderTemplate`<title>${title} | AI coding agent built for the terminal</title>`}${renderComponent($$result, "Default", $$Head$1, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}${!slug.startsWith(`${base}/s`) && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>
  <meta property="twitter:image"${addAttribute(ogImage, "content")}>`}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/components/Head.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$o = createAstro("https://dev.docs.claw.so");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Search;
  const pagefindTranslations = {
    placeholder: Astro2.locals.t("search.label"),
    ...Object.fromEntries(
      Object.entries(Astro2.locals.t.all()).filter(([key]) => key.startsWith("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  const dataAttributes = { "data-translations": JSON.stringify(pagefindTranslations) };
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "  <script>\n	(() => {\n		const openBtn = document.querySelector('button[data-open-modal]');\n		const shortcut = openBtn?.querySelector('kbd');\n		if (!openBtn || !(shortcut instanceof HTMLElement)) return;\n		const platformKey = shortcut.querySelector('kbd');\n		if (platformKey && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {\n			platformKey.textContent = '⌘';\n			openBtn.setAttribute('aria-keyshortcuts', 'Meta+K');\n		}\n		shortcut.style.display = '';\n	})();\n</script> ", "  "])), renderComponent($$result, "site-search", "site-search", { "class": (Astro2.props.class ?? "") + " astro-dvfcxcen", ...dataAttributes }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled${addAttribute(Astro2.locals.t("search.label"), "aria-label")} aria-keyshortcuts="Control+K" class="astro-dvfcxcen"> ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "class": "astro-dvfcxcen" })} <span class="sl-hidden md:sl-block astro-dvfcxcen" aria-hidden="true">${Astro2.locals.t("search.label")}</span> <kbd class="sl-hidden md:sl-flex astro-dvfcxcen" style="display: none;"> <kbd class="astro-dvfcxcen">${Astro2.locals.t("search.ctrlKey")}</kbd><kbd class="astro-dvfcxcen">K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(Astro2.locals.t("search.label"), "aria-label")} class="astro-dvfcxcen"> <div class="dialog-frame sl-flex astro-dvfcxcen">  <button data-close-modal class="sl-flex md:sl-hidden astro-dvfcxcen"> ${Astro2.locals.t("search.cancelLabel")} </button> ${renderTemplate`<div class="search-container astro-dvfcxcen"> <div id="starlight__search" class="astro-dvfcxcen"></div> </div>`} </div> </dialog> ` }), renderScript($$result, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Search.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const dark = createSvgComponent({"meta":{"src":"/docs/_astro/logo-dark.zjnLfCzL.svg","width":640,"height":100,"format":"svg"},"attributes":{"width":"640","height":"100","viewBox":"0 0 640 100","fill":"none"},"children":"\n<g><!-- C - Block style -->\n<path d=\"M10 10H100V25H25V75H100V90H10V10Z\" fill=\"white\" /><!-- L - Block style -->\n<path d=\"M120 10H135V75H190V90H120V10Z\" fill=\"white\" /><!-- A - Block style with hole -->\n<path d=\"M210 90V10H310V90H295V55H225V90H210ZM225 25V40H295V25H225Z\" fill=\"white\" /><!-- W - Perfect W from ASCII art -->\n<path d=\"M330 10H345V60H360V10H375V60H390V10H405V60H420V10H435V75H405V90H375V75H360V90H330V75H330V10Z\" fill=\"white\" />\n</g>\n"});

const light = createSvgComponent({"meta":{"src":"/docs/_astro/logo-light.CDAoSHc5.svg","width":640,"height":100,"format":"svg"},"attributes":{"width":"640","height":"100","viewBox":"0 0 640 100","fill":"none"},"children":"\n<g><!-- C - Block style -->\n<path d=\"M10 10H100V25H25V75H100V90H10V10Z\" fill=\"black\" /><!-- L - Block style -->\n<path d=\"M120 10H135V75H190V90H120V10Z\" fill=\"black\" /><!-- A - Block style with hole -->\n<path d=\"M210 90V10H310V90H295V55H225V90H210ZM225 25V40H295V25H225Z\" fill=\"black\" /><!-- W - Perfect W from ASCII art -->\n<path d=\"M330 10H345V60H360V10H375V60H390V10H405V60H420V10H435V75H405V90H375V75H360V90H330V75H330V10Z\" fill=\"black\" />\n</g>\n"});

const logos = { dark, light };

const $$Astro$n = createAstro("https://dev.docs.claw.so");
const $$SiteTitle$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$SiteTitle$1;
  const { siteTitle, siteTitleHref } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="site-title sl-flex astro-idrpryed"> ${starlightConfig.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-idrpryed" }, { "default": ($$result2) => renderTemplate` <img${addAttribute([{ "light:sl-hidden print:hidden": !("src" in starlightConfig.logo) }, "astro-idrpryed"], "class:list")}${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}> ${!("src" in starlightConfig.logo) && renderTemplate`<img class="dark:sl-hidden print:block astro-idrpryed"${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`} <span${addAttribute([{ "sr-only": starlightConfig.logo?.replacesTitle }, "astro-idrpryed"], "class:list")} translate="no"> ${siteTitle} </span> </a> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/components/SiteTitle.astro", void 0);

const $$HeaderLinks = createComponent(($$result, $$props, $$slots) => {
  const { headerLinks } = globalThis.toolbeamDocsThemeConfig ?? {};
  return renderTemplate`${headerLinks?.map(({ name, url }) => renderTemplate`${maybeRenderHead()}<a class="links astro-h75vv4tz"${addAttribute(url, "href")}>${name}</a>`)}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/toolbeam-docs-theme@0.4.8_@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_ro_30fbc049bc9d4aaa6d3a5d5461639f6a/node_modules/toolbeam-docs-theme/src/components/HeaderLinks.astro", void 0);

const $$Astro$m = createAstro("https://dev.docs.claw.so");
const $$Header$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Header$1;
  const shouldRenderSearch = starlightConfig.pagefind || starlightConfig.components.Search !== "@astrojs/starlight/components/Search.astro";
  const links = starlightConfig.social || [];
  return renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-a65l5u6j"> <div class="title-wrapper sl-flex astro-a65l5u6j"> ${renderComponent($$result, "SiteTitle", $$SiteTitle$1, { ...Astro2.props, "class": "astro-a65l5u6j" })} </div> <div class="middle-group sl-flex astro-a65l5u6j"> ${renderComponent($$result, "HeaderLinks", $$HeaderLinks, { ...Astro2.props, "class": "astro-a65l5u6j" })} </div> <div class="sl-hidden md:sl-flex right-group astro-a65l5u6j"> ${links.length > 0 && renderTemplate`<div class="sl-flex social-icons astro-a65l5u6j"> ${links.map(({ href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" target="_blank" class="astro-a65l5u6j"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1rem", "class": "astro-a65l5u6j" })} </a>`)} </div>`} ${shouldRenderSearch && renderTemplate`${renderComponent($$result, "Search", $$Search, { ...Astro2.props, "class": "astro-a65l5u6j" })}`} </div> </div> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/toolbeam-docs-theme@0.4.8_@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_ro_30fbc049bc9d4aaa6d3a5d5461639f6a/node_modules/toolbeam-docs-theme/src/overrides/Header.astro", void 0);

const $$Astro$l = createAstro("https://dev.docs.claw.so");
const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const { siteTitle, siteTitleHref } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(siteTitleHref, "href")} class="site-title sl-flex astro-dluftrkq"> ${starlightConfig.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-dluftrkq" }, { "default": ($$result2) => renderTemplate` <img${addAttribute([{ "light:sl-hidden print:hidden": !("src" in starlightConfig.logo) }, "astro-dluftrkq"], "class:list")}${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}> ${!("src" in starlightConfig.logo) && renderTemplate`<img class="dark:sl-hidden print:block astro-dluftrkq"${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`} <span${addAttribute([{ "sr-only": starlightConfig.logo?.replacesTitle }, "astro-dluftrkq"], "class:list")} translate="no"> ${siteTitle} </span> </a> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/SiteTitle.astro", void 0);

const $$Astro$k = createAstro("https://dev.docs.claw.so");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Header;
  const path = Astro2.url.pathname;
  const links = starlightConfig.social || [];
  const headerLinks = config.headerLinks;
  return renderTemplate`${path.startsWith("/s") ? renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-3ef6ksr2"><div class="title-wrapper sl-flex astro-3ef6ksr2">${renderComponent($$result, "SiteTitle", $$SiteTitle, { ...Astro2.props, "class": "astro-3ef6ksr2" })}</div><div class="middle-group sl-flex astro-3ef6ksr2">${headerLinks?.map(({ name, url }) => renderTemplate`<a class="links astro-3ef6ksr2"${addAttribute(url, "href")}>${name}</a>`)}</div><div class="sl-hidden md:sl-flex right-group astro-3ef6ksr2">${links.length > 0 && renderTemplate`<div class="sl-flex social-icons astro-3ef6ksr2">${links.map(({ href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" target="_blank" class="astro-3ef6ksr2">${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1rem", "class": "astro-3ef6ksr2" })}</a>`)}</div>`}</div></div>` : renderTemplate`${renderComponent($$result, "Default", $$Header$1, { ...Astro2.props, "class": "astro-3ef6ksr2" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/components/Header.astro", void 0);

const PAGE_TITLE_ID = "_top";

const $$Astro$j = createAstro("https://dev.docs.claw.so");
const $$Hero$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Hero$1;
  const { data } = Astro2.locals.starlightRoute.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-v2yurhjg"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-v2yurhjg"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-v2yurhjg" })}`} ${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-v2yurhjg">${unescapeHTML(rawHtml)}</div>`} <div class="sl-flex stack astro-v2yurhjg"> <div class="sl-flex copy astro-v2yurhjg"> <h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-v2yurhjg">${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="tagline astro-v2yurhjg">${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-v2yurhjg"> ${actions.map(
    ({ attrs: { class: className, ...attrs } = {}, icon, link: href, text, variant }) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": href, "variant": variant, "icon": icon?.name, "class:list": [[className], "astro-v2yurhjg"], ...attrs }, { "default": ($$result2) => renderTemplate`${text}${icon?.html && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon.html)}` })}`}` })}`
  )} </div>`} </div> </div> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Hero.astro", void 0);

const CopyIcon = createSvgComponent({"meta":{"src":"/docs/_astro/copy.Bh8cKImQ.svg","width":32,"height":32,"format":"svg"},"attributes":{"width":"32","height":"32","viewBox":"0 0 512 512"},"children":"<rect width=\"336\" height=\"336\" x=\"128\" y=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" rx=\"57\" ry=\"57\" /><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24\" />"});

const CheckIcon = createSvgComponent({"meta":{"src":"/docs/_astro/check.BCIIkoau.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"<path fill=\"currentColor\" d=\"M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z\" />"});

const TuiScreenshot = new Proxy({"src":"/docs/_astro/screenshot-splash.Br7Db4P4.png","width":1952,"height":1464,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/assets/lander/screenshot-splash.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/assets/lander/screenshot-splash.png");
							return target[name];
						}
					});

const VscodeScreenshot = new Proxy({"src":"/docs/_astro/screenshot-vscode.ErS25NLc.png","width":2690,"height":1790,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/assets/lander/screenshot-vscode.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/assets/lander/screenshot-vscode.png");
							return target[name];
						}
					});

const GithubScreenshot = new Proxy({"src":"/docs/_astro/screenshot-github.9kn9Fspv.png","width":2614,"height":1784,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/assets/lander/screenshot-github.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/assets/lander/screenshot-github.png");
							return target[name];
						}
					});

const $$Astro$i = createAstro("https://dev.docs.claw.so");
const $$Lander = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Lander;
  const { data } = Astro2.locals.starlightRoute.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    alt: image?.alt || ""
  };
  const github = starlightConfig.social.filter((s) => s.icon === "github")[0];
  const discord = starlightConfig.social.filter((s) => s.icon === "discord")[0];
  const command = "curl -fsSL";
  const protocol = "https://";
  const url = "ishi.so/install";
  const bash = "| bash";
  let darkImage;
  let lightImage;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-holooh5h"> <section class="top astro-holooh5h"> <div class="logo astro-holooh5h"> ${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-holooh5h"] })} ${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-holooh5h" })} </div> <h1 class="astro-holooh5h">Your On-Site AI Architect. The Chief of Staff.</h1> </section> <section class="cta astro-holooh5h"> <div class="col1 astro-holooh5h"> <a href="https://ishi.so/download" class="astro-holooh5h">Download Desktop</a> </div> <div class="col2 astro-holooh5h"> <button class="command astro-holooh5h"${addAttribute(`${command} ${protocol}${url} ${bash}`, "data-command")}> <code class="astro-holooh5h"> <span class="astro-holooh5h">${command}&nbsp;</span><span class="protocol astro-holooh5h">${protocol}</span><span class="highlight astro-holooh5h">${url}</span>&nbsp;${bash} </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> </section> <section class="content astro-holooh5h"> <ul class="astro-holooh5h"> <li class="astro-holooh5h"><b class="astro-holooh5h">Smart File Watcher</b>: Monitors ~/Downloads and proposes intelligent renames and organization.</li> <li class="astro-holooh5h"><b class="astro-holooh5h">Simulation Mode</b>: See proposed changes before they happen. Approve or reject with a Diff View.</li> <li class="astro-holooh5h"><b class="astro-holooh5h">Undo Everything</b>: Full transaction log with SQLite. Nothing is permanent until you say so.</li> <li class="astro-holooh5h"><b class="astro-holooh5h">Cloud Bridge</b>: Drag files to trigger AgenticFlow workflows. Bridge local and cloud.</li> <li class="astro-holooh5h"><b class="astro-holooh5h">Human-in-the-Loop</b>: Ishi never touches files without your approval. Your files, your rules.</li> <li class="astro-holooh5h"><b class="astro-holooh5h">Chief of Staff Persona</b>: Professional, organized, slightly witty. Jarvis meets Marie Kondo.</li> </ul> </section> <section class="alternatives astro-holooh5h"> <div class="col1 astro-holooh5h"> <h3 class="astro-holooh5h">npm</h3> <button class="command astro-holooh5h" data-command="npm install -g ishi-ai"> <code class="astro-holooh5h"> <span class="astro-holooh5h">npm install -g</span> <span class="highlight astro-holooh5h">ishi-ai</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> <div class="col2 astro-holooh5h"> <h3 class="astro-holooh5h">Bun</h3> <button class="command astro-holooh5h" data-command="bun install -g ishi-ai"> <code class="astro-holooh5h"> <span class="astro-holooh5h">bun install -g</span> <span class="highlight astro-holooh5h">ishi-ai</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> <div class="col3 astro-holooh5h"> <h3 class="astro-holooh5h">Homebrew</h3> <button class="command astro-holooh5h" data-command="brew install ishi"> <code class="astro-holooh5h"> <span class="astro-holooh5h">brew install</span> <span class="highlight astro-holooh5h">claw</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> <div class="col4 astro-holooh5h"> <h3 class="astro-holooh5h">Paru</h3> <button class="command astro-holooh5h" data-command="paru -S ishi-bin"> <code class="astro-holooh5h"> <span class="astro-holooh5h">paru -S</span> <span class="highlight astro-holooh5h">ishi-bin</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> <div class="col4 astro-holooh5h"> <h3 class="astro-holooh5h">Mise</h3> <button class="command astro-holooh5h" data-command="mise use -g github:PixelML/ishi"> <code class="astro-holooh5h"> <span class="astro-holooh5h">mise use -g</span> <span class="highlight astro-holooh5h">github:PixelML/ishi</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> </section> <section class="images astro-holooh5h"> <div class="left astro-holooh5h"> <figure class="astro-holooh5h"> <figcaption class="astro-holooh5h">Ishi TUI with the tokyonight theme</figcaption> <a href="/docs/cli" class="astro-holooh5h"> ${renderComponent($$result, "Image", $$Image, { "src": TuiScreenshot, "alt": "Ishi TUI with the tokyonight theme", "class": "astro-holooh5h" })} </a> </figure> </div> <div class="right astro-holooh5h"> <div class="row1 astro-holooh5h"> <figure class="astro-holooh5h"> <figcaption class="astro-holooh5h">Ishi in VS Code</figcaption> <a href="/docs/ide" class="astro-holooh5h"> ${renderComponent($$result, "Image", $$Image, { "src": VscodeScreenshot, "alt": "Ishi in VS Code", "class": "astro-holooh5h" })} </a> </figure> </div> <div class="row2 astro-holooh5h"> <figure class="astro-holooh5h"> <figcaption class="astro-holooh5h">Ishi in GitHub</figcaption> <a href="/docs/github" class="astro-holooh5h"> ${renderComponent($$result, "Image", $$Image, { "src": GithubScreenshot, "alt": "Ishi in GitHub", "class": "astro-holooh5h" })} </a> </figure> </div> </div> </section> <section class="footer astro-holooh5h"> <div class="col1 astro-holooh5h"> <a${addAttribute(github.href, "href")} target="_blank" rel="noopener noreferrer" class="astro-holooh5h">GitHub</a> </div> <div class="col2 astro-holooh5h"> <a${addAttribute(discord.href, "href")} target="_blank" rel="noopener noreferrer" class="astro-holooh5h">Discord</a> </div> <div class="col3 astro-holooh5h"> <span class="astro-holooh5h">&copy;2026 <a href="https://ishilabs.com" target="_blank" rel="noopener noreferrer" class="astro-holooh5h">Ishi Technologies</a></span> </div> </section> </div>   ${renderScript($$result, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/components/Lander.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/components/Lander.astro", void 0);

const $$Astro$h = createAstro("https://dev.docs.claw.so");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Hero;
  const { slug } = Astro2.locals.starlightRoute.entry;
  return renderTemplate`${slug === "" ? renderTemplate`${renderComponent($$result, "Lander", $$Lander, { ...Astro2.props })}` : renderTemplate`${renderComponent($$result, "Default", $$Hero$1, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/components/Hero.astro", void 0);

const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);

const $$Astro$g = createAstro("https://dev.docs.claw.so");
const $$MobileMenuToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "print:hidden astro-wkwxx2na" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button aria-expanded="false"${addAttribute(Astro2.locals.t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-wkwxx2na"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "open-menu astro-wkwxx2na" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "class": "close-menu astro-wkwxx2na" })} </button> ` })} ${renderScript($$result, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts")}  `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$f = createAstro("https://dev.docs.claw.so");
const $$PageFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-b2vfxcem"> <header class="header astro-b2vfxcem">${renderSlot($$result, $$slots["header"])}</header> ${hasSidebar && renderTemplate`<nav class="sidebar print:hidden astro-b2vfxcem"${addAttribute(Astro2.locals.t("sidebarNav.accessibleLabel"), "aria-label")}> ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { "class": "astro-b2vfxcem" })} <div id="starlight__sidebar" class="sidebar-pane astro-b2vfxcem"> <div class="sidebar-content sl-flex astro-b2vfxcem"> ${renderSlot($$result, $$slots["sidebar"])} </div> </div> </nav>`} <div class="main-frame astro-b2vfxcem">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$e = createAstro("https://dev.docs.claw.so");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-pxbvacsv"], "class:list")}${addAttribute($$definedVars, "style")}> ${toc.map((heading) => renderTemplate`<li class="astro-pxbvacsv"${addAttribute($$definedVars, "style")}> <a${addAttribute("#" + heading.slug, "href")} class="astro-pxbvacsv"${addAttribute($$definedVars, "style")}> <span class="astro-pxbvacsv"${addAttribute($$definedVars, "style")}>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-pxbvacsv" })}`} </li>`)} </ul> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$d = createAstro("https://dev.docs.claw.so");
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-ubv76tb4" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-ubv76tb4"><details id="starlight__mobile-toc" class="astro-ubv76tb4"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-ubv76tb4"><div class="toggle sl-flex astro-ubv76tb4">${Astro2.locals.t("tableOfContents.onThisPage")}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-ubv76tb4", "size": "1rem" })}</div><span class="display-current astro-ubv76tb4"></span></summary><div class="dropdown astro-ubv76tb4">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-ubv76tb4" })}</div></details></nav>` })}`}${renderScript($$result, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);

const $$Astro$c = createAstro("https://dev.docs.claw.so");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${Astro2.locals.t("tableOfContents.onThisPage")}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}${renderScript($$result, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);

const $$Astro$b = createAstro("https://dev.docs.claw.so");
const $$PageSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${Astro2.locals.starlightRoute.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-53awbycl" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-53awbycl">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { "class": "astro-53awbycl" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-53awbycl"><div class="sl-container astro-53awbycl">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "class": "astro-53awbycl" })}</div></div>` })}`}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);

const $$Astro$a = createAstro("https://dev.docs.claw.so");
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PageTitle;
  const {
    entry: {
      data: { title, description }
    }
  } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 id="_top" class="astro-oyy5uekj">${title}</h1>${description && renderTemplate`<p class="page-description astro-oyy5uekj">${description}</p>`}` })}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/toolbeam-docs-theme@0.4.8_@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_ro_30fbc049bc9d4aaa6d3a5d5461639f6a/node_modules/toolbeam-docs-theme/src/overrides/PageTitle.astro", void 0);

const $$Astro$9 = createAstro("https://dev.docs.claw.so");
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-4jhv7hph"> <span class="sr-only astro-4jhv7hph">${Astro2.props.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-4jhv7hph" })} <select${addAttribute(Astro2.props.value, "value")} autocomplete="off" class="astro-4jhv7hph"> ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-4jhv7hph">${unescapeHTML(label)}</option>`)} </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-4jhv7hph" })} </label> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Select.astro", void 0);

const $$Astro$8 = createAstro("https://dev.docs.claw.so");
const $$LanguageSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  return renderTemplate`${starlightConfig.isMultilingual}${renderScript($$result, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const links = starlightConfig.social || [];
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-x25xufdm" }, { "default": ($$result2) => renderTemplate`${links.map(({ label, href, icon }) => renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} rel="me" class="sl-flex astro-x25xufdm"><span class="sr-only astro-x25xufdm">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "astro-x25xufdm" })}</a>`)}` })}`}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro("https://dev.docs.claw.so");
const $$ThemeSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n	StarlightThemeProvider.updatePickers();\n<\/script> ", ""])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`  ${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": Astro2.locals.t("themeSelect.accessibleLabel"), "value": "auto", "options": [
    { label: Astro2.locals.t("themeSelect.dark"), selected: false, value: "dark" },
    { label: Astro2.locals.t("themeSelect.light"), selected: false, value: "light" },
    { label: Astro2.locals.t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })} ` }), renderScript($$result, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);

const $$MobileMenuFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-ifjpdwhn"> <div class="social-icons astro-ifjpdwhn"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-ifjpdwhn" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-ifjpdwhn" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-ifjpdwhn" })} </div> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);

const base = stripTrailingSlash("/docs/");
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}

const defaultFormatStrategy = {
  addBase: pathWithBase,
  handleExtension: (href) => stripHtmlExtension(href)
};
const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: defaultFormatStrategy,
  preserve: defaultFormatStrategy
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.handleExtension(href);
  href = formatStrategy.addBase(href);
  if (format === "file") return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}

const formatPath = createPathFormatter({
  format: project.build.format,
  trailingSlash: project.trailingSlash
});

function slugToLocale$1(slug, config) {
  const localesConfig = config.locales ?? {};
  const baseSegment = slug?.split("/")[0];
  if (baseSegment && localesConfig[baseSegment]) return baseSegment;
  if (!localesConfig.root) return config.defaultLocale.locale;
  return void 0;
}

function slugToLocale(slug) {
  return slugToLocale$1(slug, starlightConfig);
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function localeToDir(locale) {
  const dir = locale ? starlightConfig.locales?.[locale]?.dir : starlightConfig.locales?.root?.dir;
  return dir || starlightConfig.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" ? void 0 : slug.endsWith("/index") ? slug.slice(0, -6) : slug;
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}
function urlToSlug(url) {
  let pathname = url.pathname;
  const base = stripTrailingSlash("/docs/");
  if (pathname.startsWith(base)) pathname = pathname.replace(base, "");
  const segments = pathname.split("/");
  const htmlExt = ".html";
  if (segments.at(-1) === "index.html") {
    segments.pop();
  } else if (segments.at(-1)?.endsWith(htmlExt)) {
    const last = segments.pop();
    if (last) segments.push(last.slice(0, -1 * htmlExt.length));
  }
  return segments.filter(Boolean).join("/");
}

function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err) throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
function normalizeCollectionEntry(entry) {
  const slug = normalizeIndexSlug(entry.slug ?? entry.id);
  return {
    ...entry,
    // In a collection with a loader, the `id` is a slug and should be normalized.
    id: entry.slug ? entry.id : slug,
    // In a legacy collection, the `filePath` property doesn't exist.
    filePath: entry.filePath ?? `${getCollectionPathFromRoot("docs", project)}/${entry.id}`,
    // In a collection with a loader, the `slug` property is replaced by the `id`.
    slug: normalizeIndexSlug(entry.slug ?? entry.id)
  };
}
const docs = (await getCollection("docs", ({ data }) => {
  return data.draft === false;
}) ?? []).map(normalizeCollectionEntry);
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  return routes2;
}
const routes = getRoutes();
function getParamRouteMapping() {
  const map = /* @__PURE__ */ new Map();
  for (const route of routes) {
    map.set(slugToParam(route.slug), route);
  }
  return map;
}
const routesBySlugParam = getParamRouteMapping();
function getRouteBySlugParam(slugParam) {
  return routesBySlugParam.get(slugParam?.replace(/\/$/, "") || void 0);
}
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
const neverPathFormatter = createPathFormatter({ trailingSlash: "never" });
const docsCollectionPathFromRoot = getCollectionPathFromRoot("docs", project);
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromSidebarLinkItem(item, locale);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else if ("slug" in item) {
    return linkFromInternalSidebarLinkItem(item, locale);
  } else {
    const label = pickLang(item.translations, localeToLang(locale)) || item.label;
    return {
      type: "group",
      label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes2)),
      collapsed: item.collapsed,
      badge: getSidebarBadge(item.badge, locale, label)
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter((doc) => {
    const filePathFromContentDir = getRoutePathRelativeToCollectionRoot(doc, locale);
    return (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(filePathFromContentDir) === localeDir || // Match against `foo/anything/else.md`.
      filePathFromContentDir.startsWith(localeDir + "/")
    );
  });
  const tree = treeify(dirDocs, locale, localeDir);
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return {
    type: "group",
    label,
    entries: sidebarFromDir(tree, currentPathname, locale, subgroupCollapsed ?? item.collapsed),
    collapsed: item.collapsed,
    badge: getSidebarBadge(item.badge, locale, label)
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromSidebarLinkItem(item, locale) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale) href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeSidebarLink(href, label, getSidebarBadge(item.badge, locale, label), item.attrs);
}
function linkFromInternalSidebarLinkItem(item, locale) {
  const slug = item.slug === "index" ? "" : item.slug;
  const localizedSlug = locale ? slug ? locale + "/" + slug : locale : slug;
  const route = routes.find((entry) => localizedSlug === entry.slug);
  if (!route) {
    const hasExternalSlashes = item.slug.at(0) === "/" || item.slug.at(-1) === "/";
    if (hasExternalSlashes) {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config must not start or end with a slash.`,
        `Please try updating \`"${item.slug}"\` to \`"${stripLeadingAndTrailingSlashes(item.slug)}"\`.`
      );
    } else {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config does not exist.`,
        "Update the Starlight config to reference a valid entry slug in the docs content collection.\nLearn more about Astro content collection slugs at https://docs.astro.build/en/reference/modules/astro-content/#getentry"
      );
    }
  }
  const frontmatter = route.entry.data;
  const label = pickLang(item.translations, localeToLang(locale)) || item.label || frontmatter.sidebar?.label || frontmatter.title;
  const badge = item.badge ?? frontmatter.sidebar?.badge;
  const attrs = { ...frontmatter.sidebar?.attrs, ...item.attrs };
  return makeSidebarLink(
    slugToPathname(route.slug),
    label,
    getSidebarBadge(badge, locale, label),
    attrs
  );
}
function makeSidebarLink(href, label, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  return makeLink({ label, href, badge, attrs });
}
function makeLink({
  attrs = {},
  badge = void 0,
  ...opts
}) {
  return { type: "link", ...opts, badge, isCurrent: false, attrs };
}
function pathsMatch(pathA, pathB) {
  return neverPathFormatter(pathA) === neverPathFormatter(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir) return [];
  baseDir = ensureTrailingSlash(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function getRoutePathRelativeToCollectionRoot(route, locale) {
  return (        localizedId(route.entry.filePath.replace(`${docsCollectionPathFromRoot}/`, ""), locale)
  );
}
function treeify(routes2, locale, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes2.filter((doc) => !doc.entry.data.sidebar.hidden).map((doc) => [getRoutePathRelativeToCollectionRoot(doc, locale), doc]).sort(([a], [b]) => b.split("/").length - a.split("/").length).forEach(([filePathFromContentDir, doc]) => {
    const parts = getBreadcrumbs(filePathFromContentDir, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && currentNode.hasOwnProperty(part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route) {
  return makeSidebarLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    route.entry.data.sidebar.badge,
    route.entry.data.sidebar.attrs
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) : linkFromRoute(dirOrRoute);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed)
  );
}
const intermediateSidebars = /* @__PURE__ */ new Map();
function getSidebar(pathname, locale) {
  let intermediateSidebar = intermediateSidebars.get(locale);
  if (!intermediateSidebar) {
    intermediateSidebar = getIntermediateSidebarFromConfig(starlightConfig.sidebar, pathname, locale);
    intermediateSidebars.set(locale, intermediateSidebar);
  }
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getSidebarFromConfig(sidebarConfig, pathname, locale) {
  const intermediateSidebar = getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale);
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (sidebarConfig) {
    return sidebarConfig.map((group) => configItemToEntry(group, pathname, locale, routes2));
  } else {
    const tree = treeify(routes2, locale, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function getSidebarFromIntermediateSidebar(intermediateSidebar, pathname) {
  const sidebar = structuredClone(intermediateSidebar);
  setIntermediateSidebarCurrentEntry(sidebar, pathname);
  return sidebar;
}
function setIntermediateSidebarCurrentEntry(intermediateSidebar, pathname) {
  for (const entry of intermediateSidebar) {
    if (entry.type === "link" && pathsMatch(encodeURI(entry.href), pathname)) {
      entry.isCurrent = true;
      return true;
    }
    if (entry.type === "group" && setIntermediateSidebarCurrentEntry(entry.entries, pathname)) {
      return true;
    }
  }
  return false;
}
function getSidebarHash(sidebar) {
  let hash = 0;
  const sidebarIdentity = recursivelyBuildSidebarIdentity(sidebar);
  for (let i = 0; i < sidebarIdentity.length; i++) {
    const char = sidebarIdentity.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return (hash >>> 0).toString(36).padStart(7, "0");
}
function recursivelyBuildSidebarIdentity(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? entry.label + recursivelyBuildSidebarIdentity(entry.entries) : entry.label + entry.href
  ).join("");
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false) return void 0;
  else if (config2 === true) return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink({ href: config2.link, label: config2.label });
    }
  }
  return paginationEnabled ? link : void 0;
}
function getSidebarBadge(config2, locale, itemLabel) {
  if (!config2) return;
  if (typeof config2 === "string") {
    return { variant: "default", text: config2 };
  }
  return { ...config2, text: getSidebarBadgeText(config2.text, locale, itemLabel) };
}
function getSidebarBadgeText(text, locale, itemLabel) {
  if (typeof text === "string") return text;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const defaultText = text[defaultLang];
  if (!defaultText) {
    throw new AstroUserError(
      `The badge text for "${itemLabel}" must have a key for the default language "${defaultLang}".`,
      "Update the Starlight config to include a badge text for the default language.\nLearn more about sidebar badges internationalization at https://starlight.astro.build/guides/sidebar/#internationalization-with-badges"
    );
  }
  return pickLang(text, localeToLang(locale)) || defaultText;
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://dev.docs.claw.so");
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const hash = getSidebarHash(Astro2.locals.starlightRoute.sidebar);
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "class": "astro-kzvnk666" }, { "default": () => renderTemplate(_a$1 || (_a$1 = __template$1([` <script aria-hidden="true">
		(() => {
			try {
				if (!matchMedia('(min-width: 50em)').matches) return;
				/** @type {HTMLElement | null} */
				const target = document.querySelector('sl-sidebar-state-persist');
				const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
				if (!target || !state || target.dataset.hash !== state.hash) return;
				window._starlightScrollRestore = state.scroll;
				customElements.define(
					'sl-sidebar-restore',
					class SidebarRestore extends HTMLElement {
						connectedCallback() {
							try {
								const idx = parseInt(this.dataset.index || '');
								const details = this.closest('details');
								if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
							} catch {}
						}
					}
				);
			} catch {}
		})();
	<\/script> `, ` <script aria-hidden="true">
		(() => {
			const scroller = document.getElementById('starlight__sidebar');
			if (!window._starlightScrollRestore || !scroller) return;
			scroller.scrollTop = window._starlightScrollRestore;
			delete window._starlightScrollRestore;
		})();
	<\/script> `])), renderSlot($$result, $$slots["default"])) })} `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/SidebarPersister.astro", void 0);

const $$Astro$5 = createAstro("https://dev.docs.claw.so");
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("starlight-sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals[currentGroupIndexSymbol] || 0;
  locals[currentGroupIndexSymbol] = index + 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": index })}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/SidebarRestorePoint.astro", void 0);

const $$Astro$4 = createAstro("https://dev.docs.claw.so");
const $$SidebarSublist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-wr6iyl3w"], "class:list")}> ${sublist.map((entry) => renderTemplate`<li class="astro-wr6iyl3w"> ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-wr6iyl3w"], "class:list")}${spreadAttributes(entry.attrs)}> <span class="astro-wr6iyl3w">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-wr6iyl3w", "text": entry.badge.text })}`} </a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-wr6iyl3w"> ${renderComponent($$result, "SidebarRestorePoint", $$SidebarRestorePoint, { "class": "astro-wr6iyl3w" })} <summary class="astro-wr6iyl3w"> <div class="group-label astro-wr6iyl3w"> <span class="large astro-wr6iyl3w">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-wr6iyl3w", "text": entry.badge.text })}`} </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-wr6iyl3w", "size": "1.25rem" })} </summary> ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-wr6iyl3w" })} </details>`} </li>`)} </ul> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const $$Astro$3 = createAstro("https://dev.docs.claw.so");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "SidebarPersister", $$SidebarPersister, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })} ` })} ${maybeRenderHead()}<div class="md:sl-hidden"> ${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, {})} </div>`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);

const $$Astro$2 = createAstro("https://dev.docs.claw.so");
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-zwr2ippn">${Astro2.locals.t("skipLink.label")}</a> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const $$Astro$1 = createAstro("https://dev.docs.claw.so");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-5aikevhg"> ${Astro2.locals.starlightRoute.toc && renderTemplate`<aside class="right-sidebar-container print:hidden astro-5aikevhg"> <div class="right-sidebar astro-5aikevhg"> ${renderSlot($$result, $$slots["right-sidebar"])} </div> </aside>`} <div class="main-pane astro-5aikevhg">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro = createAstro("https://dev.docs.claw.so");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Page;
  const { starlightRoute } = Astro2.locals;
  const pagefindEnabled = starlightRoute.entry.slug !== "404" && !starlightRoute.entry.slug.endsWith("/404") && starlightRoute.entry.data.pagefind !== false;
  const htmlDataAttributes = { "data-theme": "dark" };
  if (Boolean(starlightRoute.toc)) htmlDataAttributes["data-has-toc"] = "";
  if (starlightRoute.hasSidebar) htmlDataAttributes["data-has-sidebar"] = "";
  if (Boolean(starlightRoute.entry.data.hero)) htmlDataAttributes["data-has-hero"] = "";
  const mainDataAttributes = {};
  if (pagefindEnabled) mainDataAttributes["data-pagefind-body"] = "";
  return renderTemplate`<html${addAttribute(starlightRoute.lang, "lang")}${addAttribute(starlightRoute.dir, "dir")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-4oxwlk7h" })}> <head>${renderComponent($$result, "Head", $$Head, { "class": "astro-4oxwlk7h" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-4oxwlk7h" })}<link rel="stylesheet"${addAttribute(printHref, "href")} media="print">${renderHead()}</head> <body class="astro-4oxwlk7h"> ${renderComponent($$result, "SkipLink", $$SkipLink, { "class": "astro-4oxwlk7h" })} ${renderComponent($$result, "PageFrame", $$PageFrame, { "class": "astro-4oxwlk7h" }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { "class": "astro-4oxwlk7h" }, { "default": ($$result3) => renderTemplate`  <main${spreadAttributes(mainDataAttributes, void 0, { "class": "astro-4oxwlk7h" })}${addAttribute(starlightRoute.entryMeta.lang, "lang")}${addAttribute(starlightRoute.entryMeta.dir, "dir")}>  ${renderComponent($$result3, "Banner", $$Banner, { "class": "astro-4oxwlk7h" })} ${starlightRoute.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-4oxwlk7h" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Hero, { "class": "astro-4oxwlk7h" })} ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { "class": "astro-4oxwlk7h" }, { "default": ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ${renderComponent($$result4, "Footer", $$Footer, { "class": "astro-4oxwlk7h" })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-4oxwlk7h" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-4oxwlk7h" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PageTitle", $$PageTitle, { "class": "astro-4oxwlk7h" })} ${starlightRoute.entry.data.draft && renderTemplate`${renderComponent($$result5, "DraftContentNotice", $$DraftContentNotice, { "class": "astro-4oxwlk7h" })}`}${starlightRoute.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { "class": "astro-4oxwlk7h" })}`}` })} ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-4oxwlk7h" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { "class": "astro-4oxwlk7h" }, { "default": ($$result6) => renderTemplate` ${renderSlot($$result6, $$slots["default"])} ` })} ${renderComponent($$result5, "Footer", $$Footer, { "class": "astro-4oxwlk7h" })} ` })} ` })}`} </main> `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", "class": "astro-4oxwlk7h" })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "class": "astro-4oxwlk7h" })}`, "sidebar": ($$result2) => renderTemplate`${starlightRoute.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", "class": "astro-4oxwlk7h" })}`}` })} </body></html>`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/components/Page.astro", void 0);

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings) injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

const makeAPI = (data) => {
  const trackedDocsFiles = new Map(data);
  return {
    getNewestCommitDate: (file) => {
      const timestamp = trackedDocsFiles.get(file);
      if (!timestamp) throw new Error(`Failed to retrieve the git history for file "${file}"`);
      return new Date(timestamp);
    }
  };
};

const api = makeAPI([["src/content/docs/approvals.mdx",1769925368000],["src/content/docs/artifacts.mdx",1769925368000],["src/content/docs/connection.mdx",1769925368000],["src/content/docs/deployment.mdx",1769925368000],["src/content/docs/index.mdx",1769925368000],["src/content/docs/offline.mdx",1769925368000],["src/content/docs/openclaw-setup.mdx",1769925368000],["src/content/docs/runs.mdx",1769925368000],["src/content/docs/slack-integration.mdx",1769925368000],["src/content/docs/sync.mdx",1769925368000],["src/content/docs/1-0.mdx",1769923853000],["src/content/docs/acp.mdx",1769923853000],["src/content/docs/agents.mdx",1769923853000],["src/content/docs/cli.mdx",1769923853000],["src/content/docs/commands.mdx",1769923853000],["src/content/docs/config.mdx",1769923853000],["src/content/docs/custom-tools.mdx",1769923853000],["src/content/docs/ecosystem.mdx",1769923853000],["src/content/docs/enterprise.mdx",1769923853000],["src/content/docs/formatters.mdx",1769923853000],["src/content/docs/github.mdx",1769923853000],["src/content/docs/gitlab.mdx",1769923853000],["src/content/docs/ide.mdx",1769923853000],["src/content/docs/keybinds.mdx",1769923853000],["src/content/docs/lsp.mdx",1769923853000],["src/content/docs/mcp-servers.mdx",1769923853000],["src/content/docs/models.mdx",1769923853000],["src/content/docs/modes.mdx",1769923853000],["src/content/docs/network.mdx",1769923853000],["src/content/docs/permissions.mdx",1769923853000],["src/content/docs/pixelml.mdx",1769923853000],["src/content/docs/plugins.mdx",1769923853000],["src/content/docs/providers.mdx",1769923853000],["src/content/docs/rules.mdx",1769923853000],["src/content/docs/sdk.mdx",1769923853000],["src/content/docs/server.mdx",1769923853000],["src/content/docs/share.mdx",1769923853000],["src/content/docs/skills.mdx",1769923853000],["src/content/docs/themes.mdx",1769923853000],["src/content/docs/tools.mdx",1769923853000],["src/content/docs/troubleshooting.mdx",1769923853000],["src/content/docs/trust-safety/ghost-files.mdx",1769923853000],["src/content/docs/trust-safety/undo-history.mdx",1769923853000],["src/content/docs/tui.mdx",1769923853000],["src/content/docs/use-cases/extract-pdf-data.mdx",1769923853000],["src/content/docs/use-cases/organize-downloads.mdx",1769923853000],["src/content/docs/use-cases/rename-files.mdx",1769923853000]]);const getNewestCommitDate = api.getNewestCommitDate;

const version = "0.34.3";

const HeadConfigSchema = () => arrayType(
  objectType({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: enumType(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: recordType(unionType([stringType(), booleanType(), undefinedType()])).optional(),
    /** Content to place inside the tag (optional). */
    content: stringType().optional()
  })
).default([]);

const canonicalTrailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: ensureTrailingSlash
};
function formatCanonical(href, opts) {
  return canonicalTrailingSlashStrategies[opts.trailingSlash](href);
}

const HeadSchema = HeadConfigSchema();
function getHead({ entry, lang }, context, siteTitle) {
  const { data } = entry;
  const canonical = context.site ? new URL(context.url.pathname, context.site) : void 0;
  const canonicalHref = canonical?.href ? formatCanonical(canonical.href, {
    trailingSlash: project.trailingSlash
  }) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${siteTitle}` },
    { tag: "link", attrs: { rel: "canonical", href: canonicalHref } },
    { tag: "meta", attrs: { name: "generator", content: context.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonicalHref } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: siteTitle } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (context.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  const twitterLink = starlightConfig.social?.find(({ icon }) => icon === "twitter" || icon === "x.com");
  if (twitterLink) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(twitterLink.href).pathname.replace("/", "@")
      }
    });
  }
  return createHead(headDefaults, starlightConfig.head, data.head);
}
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    case "link":
      return head.some(
        ({ attrs }) => entry.attrs?.rel === "canonical" && attrs?.rel === "canonical"
      );
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr) return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs?.[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs?.[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && entry.attrs && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title") return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && entry.attrs && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

async function getRoute(context) {
  return "slug" in context.params && getRouteBySlugParam(context.params.slug) || await get404Route(context.locals);
}
async function useRouteData(context, route, { Content, headings }) {
  const routeData = generateRouteData({ props: { ...route, headings }, context });
  return { ...routeData, Content };
}
function generateRouteData({
  props,
  context
}) {
  const { entry, locale, lang } = props;
  const sidebar = getSidebar(context.url.pathname, locale);
  const siteTitle = getSiteTitle(lang);
  return {
    ...props,
    siteTitle,
    siteTitleHref: getSiteTitleHref(locale),
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props),
    head: getHead(props, context, siteTitle)
  };
}
function getToC({ entry, lang, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig) return;
  const t = useTranslations(lang);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(entry.filePath);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry }) {
  const { editUrl } = entry.data;
  if (editUrl === false) return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else if (starlightConfig.editLink.baseUrl) {
    url = ensureTrailingSlash(starlightConfig.editLink.baseUrl) + entry.filePath;
  }
  return url ? new URL(url) : void 0;
}
function getSiteTitle(lang) {
  const defaultLang = starlightConfig.defaultLocale.lang;
  if (lang && starlightConfig.title[lang]) {
    return starlightConfig.title[lang];
  }
  return starlightConfig.title[defaultLang];
}
function getSiteTitleHref(locale) {
  return formatPath(locale || "/");
}
async function get404Route(locals) {
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = void 0;
  const entryMeta = { dir, lang, locale };
  const fallbackEntry = {
    slug: "404",
    id: "404",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: locals.t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    filePath: `${getCollectionPathFromRoot("docs", project)}/404.md`
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry ? normalizeCollectionEntry(userEntry) : fallbackEntry;
  return { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	return x;
}

const routeMiddleware = [
];

async function attachRouteDataAndRunMiddleware(context, routeData) {
  context.locals.starlightRoute = klona(routeData);
  const runner = new MiddlewareRunner(context, routeMiddleware);
  await runner.run();
}
class MiddlewareRunnerStep {
  #callback;
  constructor(callback) {
    this.#callback = callback;
  }
  async run(context, next) {
    if (this.#callback) {
      await this.#callback(context, next);
      this.#callback = null;
    }
  }
}
class MiddlewareRunner {
  #context;
  #steps;
  constructor(context, stack = []) {
    this.#context = context;
    this.#steps = stack.map((callback) => new MiddlewareRunnerStep(callback));
  }
  async #stepThrough(steps) {
    let currentStep;
    while (steps.length > 0) {
      [currentStep, ...steps] = steps;
      await currentStep.run(this.#context, async () => this.#stepThrough(steps));
    }
  }
  async run() {
    await this.#stepThrough(this.#steps);
  }
}

export { $$Page as $, HeadConfigSchema as H, getSidebar as a, getSiteTitle as b, getToC as c, getSiteTitleHref as d, getPrevNextLinks as e, getHead as f, getSidebarFromConfig as g, attachRouteDataAndRunMiddleware as h, getRoute as i, useRouteData as j, slugToLocale$1 as k, paths as p, slugToLocaleData as s, urlToSlug as u };
