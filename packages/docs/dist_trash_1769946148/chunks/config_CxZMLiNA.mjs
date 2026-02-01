const stage = process.env.SST_STAGE || process.env.VERCEL_ENV || "dev";

const config = {
  url: stage === "production" ? "https://docs.claw.so" : `https://${stage}.docs.claw.so`,
  console: stage === "production" ? "https://claw.so" : `https://${stage}.claw.so`,
  email: "hello@claw.so",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/ClawHQ/claw-desktop",
  headerLinks: [
    { name: "Home", url: "https://claw.so" },
    { name: "Docs", url: "/" },
  ],
};

export { config as c };
