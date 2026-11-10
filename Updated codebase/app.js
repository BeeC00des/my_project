import("./.output/server/index.mjs").catch((error) => {
  console.error("MyCareEnvoy startup failed:", error);
  process.exit(1);
});
