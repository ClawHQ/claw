import { d as createAstro, c as createComponent, r as renderComponent, b as renderTemplate } from './astro/server_vJilpAfn.mjs';
import { r as renderEntry } from './_astro_content_B-blkXYm.mjs';
import { i as getRoute, h as attachRouteDataAndRunMiddleware, j as useRouteData, $ as $$Page } from './middleware_ChTolDA6.mjs';

const $$Astro = createAstro("https://dev.docs.claw.so");
const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Common;
  const route = await getRoute(Astro2);
  const renderResult = await renderEntry(route.entry);
  await attachRouteDataAndRunMiddleware(Astro2, await useRouteData(Astro2, route, renderResult));
  const { Content, entry } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": entry.data })}`}` })}`;
}, "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/node_modules/.pnpm/@astrojs+starlight@0.34.3_astro@5.7.13_@types+node@22.19.7_rollup@4.57.1_typescript@5.9.3_/node_modules/@astrojs/starlight/routes/common.astro", void 0);

export { $$Common as $ };
