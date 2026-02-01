const stage = process.env.SST_STAGE || process.env.VERCEL_ENV || "dev"

export default {
  url: stage === "production" ? "https://docs.claw.so" : `https://${stage}.docs.claw.so`,
  console: stage === "production" ? "https://claw.so" : `https://${stage}.claw.so`,
  email: "hello@claw.so",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/ClawHQ/claw-desktop",
  discord: "https://discord.gg/claw",
  headerLinks: [
    { name: "Home", url: "https://claw.so" },
    { name: "Docs", url: "/" },
  ],
}
