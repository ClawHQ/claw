const astroConfig = {"base":"/docs/","root":"file:///Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/","srcDir":"file:///Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {"themes":["github-light","github-dark"]};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
