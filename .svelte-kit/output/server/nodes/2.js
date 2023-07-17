

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.67118f67.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js","_app/immutable/chunks/paths.f3f859f8.js"];
export const stylesheets = ["_app/immutable/assets/2.6f86312f.css"];
export const fonts = [];
