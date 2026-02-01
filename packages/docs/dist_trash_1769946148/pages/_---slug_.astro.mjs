import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_vJilpAfn.mjs';
import { p as paths } from '../chunks/middleware_ChTolDA6.mjs';
import { $ as $$Common } from '../chunks/common_BcI_RPnM.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, {})}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/routes/static/index.astro", void 0);

const $$file = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/routes/static/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
