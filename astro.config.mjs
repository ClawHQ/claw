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
  base: "/", // Must be root for Vercel SSR - assets served at /_astro/*
  trailingSlash: "always",
  output: isDev && !isVercelBuild ? "static" : "server",
  adapter:
    isDev && !isVercelBuild
      ? undefined
      : vercel({
        imageService: true,
        webAnalytics: {
          enabled: true,
        },
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
          label: "Use Cases",
          items: ["use-cases/organize-downloads", "use-cases/extract-pdf-data", "use-cases/rename-files"],
        },
        {
          label: "Trust & Safety",
          items: ["trust-safety/ghost-files", "trust-safety/undo-history", "permissions"],
        },
        {
          label: "Capabilities",
          items: ["tools", "skills", "mcp-servers"],
        },
        {
          label: "Connect",
          items: ["providers", "pixelml", "network"],
        },
        {
          label: "Customize",
          items: [
            "config",
            "rules",
            "agents",
            "models",
            "themes",
            "keybinds",
            "commands",
            "formatters",
            "custom-tools",
          ],
        },
        {
          label: "Interfaces",
          items: ["tui", "cli", "ide", "github", "gitlab"],
        },
        {
          label: "Advanced",
          items: ["sdk", "server", "plugins", "ecosystem", "enterprise", "acp", "lsp"],
        },
        "troubleshooting",
        // "share", - disabled, requires API config
        // "1-0", - removed, not applicable
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
