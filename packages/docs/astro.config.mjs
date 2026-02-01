// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import solidJs from "@astrojs/solid-js"
import vercel from "@astrojs/vercel"
import theme from "toolbeam-docs-theme"
import config from "./config.mjs"
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { spawnSync } from "child_process"

// Use static mode for dev to avoid segfault, server mode for production
const isDev = process.env.NODE_ENV !== "production"
const isVercelBuild = process.env.VERCEL === "1" || process.env.CI === "true"

// https://astro.build/config
export default defineConfig({
  site: config.url,
  base: "/", // Serve at root - docs.claw.so/
  trailingSlash: "always",
  output: "server", // Vercel SSR
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true },
  }),
  devToolbar: {
    enabled: false,
  },
  server: {
    host: "0.0.0.0",
  },
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  build: {},
  integrations: [
    // configSchema(), // Disabled for Vercel deploy - requires workspace dependency
    solidJs(),
    starlight({
      title: "Claw",
      lastUpdated: true,
      expressiveCode: { themes: ["github-light", "github-dark"] },
      social: [
        { icon: "github", label: "GitHub", href: config.github },
        { icon: "discord", label: "Discord", href: config.discord },
      ],
      // editLink disabled - private repo
      markdown: {
        headingLinks: false,
      },
      customCss: ["./src/styles/custom.css"],
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      sidebar: [
        "",
        {
          label: "Getting Started",
          items: ["connection", "runs", "approvals"],
        },
        {
          label: "Features",
          items: ["sync", "artifacts", "offline"],
        },
        {
          label: "OpenClaw",
          items: ["openclaw-setup", "slack-integration", "deployment"],
        },
        "troubleshooting",
      ],
      components: {
        Hero: "./src/components/Hero.astro",
        Head: "./src/components/Head.astro",
        Header: "./src/components/Header.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        Footer: "./src/components/Footer.astro",
      },
      plugins: [
        theme({
          headerLinks: config.headerLinks,
        }),
      ],
    }),
  ],
})

function configSchema() {
  return {
    name: "configSchema",
    hooks: {
      "astro:build:done": async () => {
        console.log("generating config schema")
        spawnSync("../claw/script/schema.ts", ["./dist/config.json"])
      },
    },
  }
}
