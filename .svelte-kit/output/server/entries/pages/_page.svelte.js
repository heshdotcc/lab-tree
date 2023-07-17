import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-183c8ud{font-family:"Parametric Glitch"\n  }',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-183c8ud" data-svelte-h="svelte-1bj4n12">sveltekit-gh-pages</h1> <p data-svelte-h="svelte-lmr5fu">Deployed to GitHub Pages</p> <p data-svelte-h="svelte-1vc1ga9">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <a href="${escape(base, true) + "/about"}">About</a>`;
});
export {
  Page as default
};
